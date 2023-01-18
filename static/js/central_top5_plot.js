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
fetch("/api/kaggle.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then(data => {
    // Filter data by region "Central"
    const centralParks = data.filter(park => park.Region === "Central");

    // Sort filtered data by visitors(2021) in descending order
    centralParks.sort((a, b) => b["Recreation visitors (2021)[11]"] - a["Recreation visitors (2021)[11]"]);

    // Get the top 5 most visited parks in Central region
    const topFiveCentralParks = centralParks.slice(0, 5);

    // Extract the names and visitor counts of the top five Central parks
    const parkNames = topFiveCentralParks.map(park => park.Name);
    const parkVisitors = topFiveCentralParks.map(park => park["Recreation visitors (2021)[11]"]);

    // Use Plotly.js to create the bar chart
    const plotDiv = document.getElementById("central");
    Plotly.newPlot(plotDiv, [{
      x: parkNames,
      y: parkVisitors,
      type: "bar"
    }]);
  })
  .catch(error => {
    console.log(error);
  });
