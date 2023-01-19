fetch(kaggleurl)
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then(data => {
    // Sort data by visitors(2021) in descending order
    data.sort((a, b) => b["Recreation visitors (2021)[11]"] - a["Recreation visitors (2021)[11]"]);

    // Get the top 5 most visited sites
    const topFive = data.slice(0, 5);

    // Extract the names and visitor counts of the top five sites
    const siteNames = topFive.map(site => site.Name);
    const siteVisitors = topFive.map(site => site["Recreation visitors (2021)[11]"]);

    // Use Plotly.js to create the bar chart
    const plotDiv = document.getElementById("plot");
    Plotly.newPlot(plotDiv, [{
      x: siteNames,
      y: siteVisitors,
      type: "bar"
    }]);
  })
  .catch(error => {
    console.log(error);
  });


