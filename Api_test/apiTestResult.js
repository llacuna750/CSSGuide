await fetch("https://randomuser.me/api/?results-1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok: " + response.statusText);
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    // console.log(data.results);
    console.log(data.results[0]);
    // console.log(data.results[0].picture.large);
  });
