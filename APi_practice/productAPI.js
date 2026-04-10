/* ── Clock ── */
setInterval(() => {
    const t = new Date();
    document.getElementById('time').textContent =
        t.toDateString() + ', ' + t.toLocaleTimeString();
}, 1000);

/* ── Globals ── */
const baseUrl = "https://ddsgateway-production-1ccb.up.railway.app/";
const list = document.getElementById('displayData');
let currentMethod = '';
let currentToken = '';

function isValidJWT(token) {
    const parts = token.split('.');
    return parts.length === 3 && parts.every(p => p.length > 0);
}

function showMessage(message, type) {
    const el = document.getElementById('message');
    el.textContent = message;
    el.className = message ? `visible ${type}` : '';
}

/* ── Default fields ── */
const defaultFields = ['name', 'description', 'price', 'stock'];

function createDefaultFields() {
    const container = document.getElementById('fields-container');
    container.innerHTML = '';

    if (currentMethod === 'put') {
        const d = document.createElement('div');
        d.className = 'field-row form-field';
        d.innerHTML = `
          <label for="product-id">Product ID</label>
          <input type="number" id="product-id" name="product-id" placeholder="Enter product ID" required>
          <span class="required-badge">Required</span>`;
        container.appendChild(d);
    }

    defaultFields.forEach((field, i) => {
        const d = document.createElement('div');
        d.className = 'field-row form-field';
        d.innerHTML = `
          <label for="field-${i}">${field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input type="text" id="field-${i}" name="${field}" placeholder="Enter ${field}">
          <button type="button" class="btn btn-danger remove-field-btn" style="padding:6px 10px; font-size:12px;" onclick="this.closest('.form-field').remove()">✕</button>`;
        container.appendChild(d);
    });
}

document.getElementById('add-field-btn').addEventListener('click', function () {
    const container = document.getElementById('fields-container');
    const fieldName = prompt('Enter field name:');
    if (fieldName) {
        const i = container.children.length;
        const d = document.createElement('div');
        d.className = 'field-row form-field';
        d.innerHTML = `
          <label for="field-${i}">${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</label>
          <input type="text" id="field-${i}" name="${fieldName}" placeholder="Enter ${fieldName}">
          <button type="button" class="btn btn-danger remove-field-btn" style="padding:6px 10px; font-size:12px;" onclick="this.closest('.form-field').remove()">✕</button>`;
        container.appendChild(d);
    }
});

function collectFormData() {
    const container = document.getElementById('fields-container');
    const data = {};
    let productId = null;
    container.querySelectorAll('.form-field').forEach(field => {
        const input = field.querySelector('input[type="text"], input[type="number"]');
        if (input) {
            const fieldName = input.name;
            const fieldValue = input.value.trim();
            if (fieldName === 'product-id') {
                productId = parseInt(fieldValue);
            } else if (fieldValue) {
                data[fieldName] = isNaN(fieldValue) ? fieldValue : Number(fieldValue);
            }
        }
    });
    return { data, productId };
}

document.getElementById('send-data-btn').addEventListener('click', function () {
    const { data, productId } = collectFormData();
    if (Object.keys(data).length === 0) { showMessage('Please fill at least one field!', 'error'); return; }
    if (currentMethod === 'post') {
        productApiPost(baseUrl, data, currentToken);
    } else if (currentMethod === 'put') {
        if (!productId) { showMessage('Please enter a Product ID!', 'error'); return; }
        const t = new Date();
        data['custom_updated_at'] = t.toDateString() + ', ' + t.toLocaleTimeString();
        productApiPut(baseUrl, productId, data, currentToken);
    }
    document.getElementById('data-form-container').style.display = 'none';
});

document.getElementById('cancel-data-btn').addEventListener('click', function () {
    document.getElementById('data-form-container').style.display = 'none';
});

document.getElementById('api-form').addEventListener('change', function (e) {
    if (e.target.id === 'cars' && e.target.value === 'del') {
        const deleteId = prompt('Enter Product ID to delete:');
        if (deleteId && deleteId.trim()) {
            const productId = parseInt(deleteId);
            if (!isNaN(productId)) {
                currentToken = document.getElementById('token').value.trim();
                if (!currentToken) { showMessage('Please enter an access token.', 'error'); document.getElementById('cars').value = 'get'; return; }
                if (!isValidJWT(currentToken)) { showMessage('Invalid access token format. Please enter a valid JWT token.', 'error'); document.getElementById('cars').value = 'get'; return; }
                if (confirm(`Are you sure you want to delete product ID ${productId}?`)) {
                    productApiDelete(baseUrl, productId, currentToken);
                }
            } else {
                showMessage('Invalid Product ID. Please enter a number.', 'error');
            }
        }
        document.getElementById('cars').value = 'get';
    }
});

document.getElementById('api-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const token = document.getElementById('token').value.trim();
    const method = document.getElementById('cars').value;
    if (!token) { showMessage('Please enter an access token.', 'error'); return; }
    if (!isValidJWT(token)) { showMessage('Invalid access token format. Please enter a valid JWT token.', 'error'); return; }
    showMessage('', '');
    currentToken = token;
    currentMethod = method;
    if (method === 'get') {
        productApi(baseUrl, token);
    } else if (method === 'post' || method === 'put') {
        createDefaultFields();
        document.getElementById('data-form-title').textContent = method === 'post' ? 'New product data' : 'Update product data';
        document.getElementById('data-form-container').style.display = 'block';
    }
});

/* ── API Functions ── */
async function productApi(api, token) {
    try {
        const res = await fetch(`${api}/products`, { headers: { 'Authorization': `Bearer ${token}` } });
        if (!res.ok) throw new Error("Not Accessible");
        const data = await res.json();

        list.innerHTML = `
          <thead>
            <tr>
              <th style="width:50px;">No</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Updated at</th>
            </tr>
          </thead>
          <tbody id="table-body"></tbody>`;

        const tbody = document.getElementById('table-body');
        data.forEach((dt, index) => {
            tbody.innerHTML += `
            <tr>
              <td class="number-cell num-col">
                ${index + 1}
                <span class="id-tooltip">ID: ${dt.id ?? 'N/A'}</span>
              </td>
              <td>${dt.name}</td>
              <td>${dt.description}</td>
              <td class="price-col">${dt.price}</td>
              <td class="stock-col">${dt.stock}</td>
              <td class="updated-col">${dt.custom_updated_at ? dt.custom_updated_at : '—'}</td>
            </tr>`;
        });

        document.getElementById('record-count').textContent = data.length;
        document.getElementById('data-table-section').style.display = 'block';
        console.log(data);
    } catch (error) {
        console.log(error.message);
        showMessage('Error: ' + error.message, 'error');
    }
}

async function productApiPost(api, productData, token) {
    try {
        const res = await fetch(`${api}/products`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        });
        if (!res.ok) throw new Error("Failed to create product");
        const result = await res.json();
        console.log(result);
        showMessage('Product created successfully!', 'success');
    } catch (error) {
        console.log('Error:', error.message);
        showMessage('Error: ' + error.message, 'error');
    }
}

async function productApiPut(api, productId, productData, token) {
    try {
        const res = await fetch(`${api}/products/${productId}`, {
            method: 'PUT',
            headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        });
        if (!res.ok) throw new Error("Failed to update product");
        const result = await res.json();
        console.log(result);
        showMessage('Product updated successfully!', 'success');
    } catch (error) {
        console.log('Error:', error.message);
        showMessage('Error: ' + error.message, 'error');
    }
}

async function productApiDelete(api, productId, token) {
    try {
        const res = await fetch(`${api}/products/${productId}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!res.ok) throw new Error("Failed to delete product");
        const result = await res.json();
        console.log(result);
        showMessage('Product deleted successfully!', 'success');
    } catch (error) {
        console.log('Error:', error.message);
        showMessage('Error: ' + error.message, 'error');
    }
}

function closeTable() {
    document.getElementById('data-table-section').style.display = 'none';
}