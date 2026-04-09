import 'dotenv/config';
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

async function productApi(api) {
    try {
        const res = await fetch(`${api}/products`, {

            headers: {
                'Authorization': `Bearer ${oauth2Token}`
            }
        });

        // console.log('Response status:', res.status);
        // console.log('Response headers:', Object.fromEntries(res.headers.entries()));

        if (!res.ok) {
            const errorText = await res.text();
            console.log('Error response body:', errorText);
            throw new Error("Not Accessible");
        }

        const data = await res.json();
        console.log(data)

    } catch (error) {
        console.log('Error Message:', error.message)
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

        if (!res.ok) throw new Error("Failed to update product");
        console.log(await res.json());
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

productApi(baseUrl)
productApiDelete(baseUrl,3)
productApi(baseUrl)


