// Getting a reference to the button on the page with the id property set to `east1`
var button = d3.select("#central3");

button.on("click", function() {
    // d3.select(".east1-img").html("<img src='{{url_for('static', filename='images/East_Region/east1_Great_smoky_mountains.JPG')}}' alt='Great Smoky Mountains'>");
    d3.select(".central-img").html('')
    d3.select(".central-img").html("<img src='../static/images/Central/central_cuyahogavalley_four.jpg' alt='Cuyahoga Valley'>");     
  });

  // clear html for next button click