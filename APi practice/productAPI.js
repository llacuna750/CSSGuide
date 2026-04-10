// import dotenv from 'dotenv';
// dotenv.config();

/* ================================================================================================== */
/*                           Practice with Products API   Links: Below!                               */
/* ================================================================================================== */

const baseUrl = "https://ddsgateway-production-1ccb.up.railway.app/";

// fetch(baseUrl).then(res => {
//   if (!res.ok) {
//     throw new Error('The Products cannot access!')
//   }

//   return res.json()
// }).then(data => console.log(data)).catch(err => console.log(err))




// HTTP GET method - retrieves data from the server
// const o

setInterval(() => {
    const timeUpdate = new Date()
    const timeCombined = timeUpdate.toDateString() + ', ' + timeUpdate.toLocaleTimeString()
    document.getElementById('time').textContent = timeCombined;
}, 1000)

const list = document.getElementById('displayData');

// Function to validate JWT format
function isValidJWT(token) {
    const parts = token.split('.');
    return parts.length === 3 && parts.every(part => part.length > 0);
}

// Function to show messages
function showMessage(message, type) {
    let messageDiv = document.getElementById('message');
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.id = 'message';
        document.body.insertBefore(messageDiv, document.getElementById('api-form').nextSibling);
    }
    messageDiv.textContent = message;
    messageDiv.style.color = type === 'error' ? 'red' : 'green';
    messageDiv.style.fontWeight = 'bold';
}

// Default fields for POST/PUT requests
const defaultFields = ['name', 'description', 'price', 'stock'];
let currentMethod = '';
let currentToken = '';

// Create default fields in the form
function createDefaultFields() {
    const container = document.getElementById('fields-container');
    container.innerHTML = '';

    // Add Product ID field for PUT requests
    if (currentMethod === 'put') {
        const idFieldDiv = document.createElement('div');
        idFieldDiv.style.marginBottom = '10px';
        idFieldDiv.className = 'form-field';
        idFieldDiv.innerHTML = `
            <label for="product-id">Product ID:</label>
            <input type="number" id="product-id" name="product-id" placeholder="Enter Product ID" style="width: 80%; padding: 8px; margin-left: 10px;" required>
            <span style="margin-left: 10px; color: #ff6b6b; font-weight: bold;">*Required</span>
        `;
        container.appendChild(idFieldDiv);
    }

    defaultFields.forEach((field, index) => {
        const fieldDiv = document.createElement('div');
        fieldDiv.style.marginBottom = '10px';
        fieldDiv.className = 'form-field';
        fieldDiv.innerHTML = `
            <label for="field-${index}">${field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input type="text" id="field-${index}" name="${field}" placeholder="Enter ${field}" style="width: 80%; padding: 8px; margin-left: 10px;">
            <button type="button" class="remove-field-btn" onclick="this.parentElement.remove()" style="margin-left: 10px; padding: 5px 10px; background-color: #ff6b6b; color: white; border: none; border-radius: 3px; cursor: pointer;">Remove</button>
        `;
        container.appendChild(fieldDiv);
    });
}

// Add a new input field
document.getElementById('add-field-btn').addEventListener('click', function () {
    const container = document.getElementById('fields-container');
    const fieldCount = container.children.length;
    const fieldName = prompt('Enter field name:');

    if (fieldName) {
        const fieldDiv = document.createElement('div');
        fieldDiv.style.marginBottom = '10px';
        fieldDiv.className = 'form-field';
        fieldDiv.innerHTML = `
            <label for="field-${fieldCount}">${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}:</label>
            <input type="text" id="field-${fieldCount}" name="${fieldName}" placeholder="Enter ${fieldName}" style="width: 80%; padding: 8px; margin-left: 10px;">
            <button type="button" class="remove-field-btn" onclick="this.parentElement.remove()" style="margin-left: 10px; padding: 5px 10px; background-color: #ff6b6b; color: white; border: none; border-radius: 3px; cursor: pointer;">Remove</button>
        `;
        container.appendChild(fieldDiv);
    }
});

// Collect all field values from the form
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
                // Try to convert to number if possible
                data[fieldName] = isNaN(fieldValue) ? fieldValue : Number(fieldValue);
            }
        }
    });

    return { data, productId };
}

// Send collected data
document.getElementById('send-data-btn').addEventListener('click', function () {
    const { data, productId } = collectFormData();

    if (Object.keys(data).length === 0) {
        showMessage('Please fill at least one field!', 'error');
        return;
    }

    if (currentMethod === 'post') {
        productApiPost(baseUrl, data, currentToken);
    } else if (currentMethod === 'put') {
        if (!productId) {
            showMessage('Please enter a Product ID!', 'error');
            return;
        }
        // Generate fresh timestamp for the update
        const freshTimeUpdate = new Date();
        const freshTimeCombined = freshTimeUpdate.toDateString() + ', ' + freshTimeUpdate.toLocaleTimeString();

        // Always add custom_updated_at timestamp when updating, even for single field changes
        data['custom_updated_at'] = freshTimeCombined;
        productApiPut(baseUrl, productId, data, currentToken);
    }

    document.getElementById('data-form-container').style.display = 'none';
});

// Cancel button
document.getElementById('cancel-data-btn').addEventListener('click', function () {
    document.getElementById('data-form-container').style.display = 'none';
});

// Delete product handler
document.getElementById('api-form').addEventListener('change', function (e) {
    if (e.target.id === 'cars' && e.target.value === 'del') {
        // Show delete form
        const deleteId = prompt('Enter Product ID to delete:');
        if (deleteId && deleteId.trim()) {
            const productId = parseInt(deleteId);
            if (!isNaN(productId)) {
                currentToken = document.getElementById('token').value.trim();

                if (!currentToken) {
                    showMessage('Please enter an access token.', 'error');
                    document.getElementById('cars').value = 'get';
                    return;
                }
                if (!isValidJWT(currentToken)) {
                    showMessage('Invalid access token format. Please enter a valid JWT token.', 'error');
                    document.getElementById('cars').value = 'get';
                    return;
                }

                // Confirm deletion
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

    // Validate token
    if (!token) {
        showMessage('Please enter an access token.', 'error');
        return;
    }
    if (!isValidJWT(token)) {
        showMessage('Invalid access token format. Please enter a valid JWT token.', 'error');
        return;
    }

    showMessage('', ''); // Clear any previous messages
    currentToken = token;
    currentMethod = method;

    if (method === 'get') {
        productApi(baseUrl, token);
    } else if (method === 'post') {
        createDefaultFields();
        document.getElementById('data-form-container').style.display = 'block';
    } else if (method === 'put') {
        createDefaultFields();
        document.getElementById('data-form-container').style.display = 'block';
    } else if (method === 'del') {
        // Delete handled by change event
    } else {
        console.log('Invalid method selected');
        list.innerHTML = '';
    }
});


// GET request - retrieves data from the server
async function productApi(api, token) {
    try {

        const res = await fetch(`${api}/products`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!res.ok) {
            throw new Error("Not Accessible");
        }

        document.getElementById("displayData").style.display = "block";
        const data = await res.json();

        list.innerHTML = '';
        list.innerHTML += `
        <tr>
            <th colspan="5" style="border-right: none;">Product API</th>
            <th style="border-left: none; cursor:pointer; text-align:right;" onclick="closeTable()">❌</th>
        </tr>

        <tr>
            <td>no</td>
            <td>name</td>
            <td>description</td>
            <td>price</td>
            <td>stock</td>
            <td>updated_at</td>
        </tr>
        `

        data.forEach((dt, index) => {

            let li = `
                <tr>
                    <td class="number-cell">
                        ${index + 1}
                        <span class="id-tooltip">ID: ${dt.id ?? 'N/A'}</span>
                    </td>

                    <td>${dt.name}</td>
                    <td>${dt.description}</td>
                    <td>${dt.price}</td>
                    <td>${dt.stock}</td>
                    <td>${dt.custom_updated_at ? dt.custom_updated_at : 'N/A'}</td>
                </tr>
            `;

            list.innerHTML += li;
        });



        console.log(data);

    } catch (error) {
        console.log(error.message);
        showMessage('Error: ' + error.message, 'error');
    }
}




// POST request - creates new data on the server
async function productApiPost(api, productData, token) {
    try {
        const res = await fetch(`${api}/products`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

        if (!res.ok) throw new Error("Failed to create product");
        const result = await res.json();
        console.log(result);
        showMessage('Product created successfully!', 'success');
    } catch (error) {
        console.log('Error Message:', error.message);
        showMessage('Error: ' + error.message, 'error');
    }
}


// PUT request - updates entire resource on the server
async function productApiPut(api, productId, productData, token) {
    try {
        const res = await fetch(`${api}/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });




        if (!res.ok) throw new Error("Failed to update product")
        const result = await res.json();
        console.log(result);
        showMessage('Product updated successfully!', 'success');

    } catch (error) {
        console.log('Error Message:', error.message);
        showMessage('Error: ' + error.message, 'error');
    }
}


// DELETE request - removes data from the server
async function productApiDelete(api, productId, token) {
    try {
        const res = await fetch(`${api}/products/${productId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!res.ok) throw new Error("Failed to delete product");
        const result = await res.json();
        console.log(result);
        showMessage('Product deleted successfully!', 'success');
    } catch (error) {
        console.log('Error Message:', error.message);
        showMessage('Error: ' + error.message, 'error');
    }
}




// function makeUpdate(token) {
//     productApiPut(baseUrl, 5, {
//         name: 'Mrbagvs',
//         description: 'drugpusher',
//         price: 1570,
//         stock: 88,
//         updated_at: timeCombined
//         // updated_at: new Date().toISOString()
//     }, token)
// }

// function makePost(token) {
//     productApiPost(baseUrl, {
//         name: 'GabVS',
//         description: 'Gwapo dabz',
//         price: 2004,
//         stock: 22,
//         updated_at: timeCombined
//     }, token)
// }


function closeTable() {
    document.getElementById("displayData").style.display = "none";
}

// makePost()