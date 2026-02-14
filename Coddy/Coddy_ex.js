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

    return data.map( (v, idx) => {
      const username = v.username;

      return Object.keys(v)[0] +': ' + v.id +' '+ username
        .replace(username[0], username[0].toUpperCase())
        .split("")

        .filter(val => {
          return !reg.test(val);
        })
        .join(``);
        
    })
  } catch (error) {
    console.log("\n⚠️  error message:", error.message);
  }
}

const resSepName = await filterOutNumber(api3);
console.log(resSepName);
