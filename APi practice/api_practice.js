import 'dotenv/config';

const straightLine = "=".repeat(10);

/* ================================================================================================== */
/*                           Practice with Local Api   Links: Below!                                  */
/* ================================================================================================== */
const api3 = "http://localhost:8000/users";

async function filterOutNumber(params) {
  try {
    const response = await fetch(params);

    if (!response.ok) {
      throw new Error(
        "Your requesting to get the Data from the server is failed!",
      );
    }

    const data = await response.json();

    var reg = new RegExp("^[0-9]$");

    return data.map((v, idx) => {
      console.log(v);
      const username = v.username;

      return (
        Object.keys(v)[0] +
        ": " +
        v.id +
        " " +
        username
          .replace(username[0], username[0].toUpperCase())
          .split("")

          .filter((val) => {
            return !reg.test(val);
          })
          .join(``)
      );
    });
  } catch (error) {
    console.log("\n⚠️  error message:", error.message);
  }
}

const resSepName = await filterOutNumber(api3);
console.log(resSepName);

/* ================================================================================================== */
/*                           Practice with Cat Api   Links: Below!                                    */
/* ================================================================================================== */
const api = "https://api.thecatapi.com/v1/images/search"; // try to edit api endPoint

fetch(api)
  .then((response) => {
    // Check if the request was successful (status 200-299)
    if (!response.ok) {
      console.log("\nFetch error 1 __using then()");
      throw new Error("Network response was not ok: " + response.statusText);
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then((data) => {
    // Work with the parsed JSON data
    console.log("\nFetched data: using then():", data);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch operation
    console.error("Error fetching data:", error.message);
  });

const getMessage = async (api) => {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      console.log("\nFetch error 2 __using await");
      throw new Error(`Network response was not ok:  ${response.statusText}`);
    }
    const data = await response.json();
    console.log("\nFetched data: using await:", data);
  } catch (err) {
    console.log("Error an occur:", err.message);
  }
};

getMessage(api);

/* ================================================================================================== */
/*                           Practice with Local Api   Links: Below!                                  */
/* ================================================================================================== */
const api2 = "http://localhost:8000/users";

fetch(api2)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Api invalid!");
    }

    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) =>
    console.log(
      "\n!!!!!!!!!!!  Error an occur:",
      err.message,
      "!!!!!!!!!!!!!!!!",
    ),
  );

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

productApi(baseUrl)


