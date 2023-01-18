// fetch("/api/kaggle")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("HTTP error " + response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     const centralParks = data.filter(park => park.Region === "Central");
// centralParks.sort((a, b) => b["visitors(2021)"] - a["visitors(2021)"]);
// const topFiveCentralParks = centralParks.slice(0, 5);
// const parkNames = topFiveCentralParks.map(park => park.Name);
// const parkVisitors = topFiveCentralParks.map(park => park["visitors(2021)"]);
//     Plotly.newPlot(plotDiv, [{
//       x: parkNames,
//       y: parkVisitors,
//       type: "bar"
//     }]);
//   })
//   .catch(error => {
//     console.log(error);
//   });
fetch("/api/kaggle")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then(data => {
    // Filter data by region "West"
    const westParks = data.filter(park => park.Region === "West");

    // Sort filtered data by visitors(2021) in descending order
    westParks.sort((a, b) => b["Recreation visitors (2021)[11]"] - a["Recreation visitors (2021)[11]"]);

// Get the top 5 most visited parks in West region
const topFiveWestParks = westParks.slice(0, 5);

// Extract the names and visitor counts of the top five West parks
const parkNames = topFiveWestParks.map(park => park.Name);
const parkVisitors = topFiveWestParks.map(park => park["Recreation visitors (2021)[11]"]);

// Use Plotly.js to create the bar chart
const plotDiv = document.getElementById("plot");
Plotly.newPlot(plotDiv, [{
  x: parkNames,
  y: parkVisitors,
  type: "bar"
}]);
})
  .catch(error => {
    console.log(error);
  });

