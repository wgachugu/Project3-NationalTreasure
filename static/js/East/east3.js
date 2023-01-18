// Getting a reference to the button on the page with the id property set to `east1`
var button = d3.select("#east3");

button.on("click", function() {
    // d3.select(".east1-img").html("<img src='{{url_for('static', filename='images/East_Region/east1_Great_smoky_mountains.JPG')}}' alt='Great Smoky Mountains'>");
    d3.select(".east-img").html('')
    d3.select(".east-img").html("<img src='../static/images/East_Region/east3_New_River_Gorge.jpg' alt='New River Gorge'>");     
  });

  // clear html for next button click