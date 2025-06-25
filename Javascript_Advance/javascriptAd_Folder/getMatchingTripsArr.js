const spaceMe = "-".repeat(30);
console.log("\n", spaceMe, "7. Import and Export - ", spaceMe, "\nGo to importing.js file");

// export default
function getMatchingTripsArr(arr, keyword) {
  return arr.filter(function (trip) {
    return trip.description.toLowerCase().includes(keyword);
  });
}
export default getMatchingTripsArr;
