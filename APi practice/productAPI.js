import dotenv from 'dotenv';
dotenv.config();

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
const oauth2Token = process.env.OAUTH2_TOKEN || '';

document.getElementById("api-trigger").addEventListener("click", () => {
    productApi(baseUrl);
});



async function productApi(api) {
    try {

        const res = await fetch(`${api}/products`, {
            headers: {
                'Authorization': `Bearer ${oauth2Token}`
            }
        });

        if (!res.ok) {
            throw new Error("Not Accessible");
        }

        const data = await res.json();

        const list = document.getElementById('displayName');
        list.innerHTML = '';

        data.forEach(dt => {
            const li = document.createElement('li');
            li.textContent = dt.name;
            list.appendChild(li);
        });

        console.log(data);

    } catch (error) {
        console.log(error.message);
    }
}

// POST request - creates new data on the server
async function productApiPost(api, productData) {
    try {
        const res = await fetch(`${api}/products`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${oauth2Token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

        if (!res.ok) throw new Error("Failed to create product");
        console.log(await res.json());
    } catch (error) {
        console.log('Error Message:', error.message)
    }
}

// PUT request - updates entire resource on the server
async function productApiPut(api, productId, productData) {
    try {
        const res = await fetch(`${api}/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${oauth2Token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });




        if (!res.ok) throw new Error("Failed to update product")
        console.log(await res.json())

    } catch (error) {
        console.log('Error Message:', error.message)
    }
}

// DELETE request - removes data from the server
async function productApiDelete(api, productId) {
    try {
        const res = await fetch(`${api}/products/${productId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${oauth2Token}`
            }
        });

        if (!res.ok) throw new Error("Failed to delete product");
        console.log(await res.json());
    } catch (error) {
        console.log('Error Message:', error.message)
    }
}

const timeUpdate = new Date()
const timeCombined = timeUpdate.toDateString() + ', ' + timeUpdate.toLocaleTimeString()


function makeUpdate() {
    productApiPut(baseUrl, 5, {
        name: 'Mrbagvs',
        description: 'drugpusher',
        price: 1570,
        stock: 88,
        updated_at: timeCombined
        // updated_at: new Date().toISOString()
    })
}

// console.log(new Date().toISOString())
console.log(timeCombined)

// productApi(baseUrl)
// makeUpdate() 

function makePost() {
    productApiPost(baseUrl, {
        name: 'GabVS',
        description: 'Gwapo dabz',
        price: 2004,
        stock: 22,
        updated_at: timeCombined
    })
}

// makePost()