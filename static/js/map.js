// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
var myMap = L.map("map", {
    center: [35.52, -95.67],
    zoom: 5
  });
  
// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Get data
fetch(dataworldurl)
.then(function(response){return response.json()})
.then(function(data){
  // console.log(data);
  render_parks(data)
})

// Adding marker and popup text
function render_parks(park_data){
  // for(const park of park_data){
  //   const coordinates = JSON.parse(park.coordinates.replace(/\'/g, '\"'));
  //   console.log(park.coordinates);
  //   const marker = L.marker([coordinates.latitude,coordinates.longitude]).addTo(myMap)
  //   marker.bindPopup(`
  //   <h1>${park.title}</h1>
  //   <div>
  //     <span>Coordinates: </span>
  //     <span>${coordinates.latitude},${coordinates.longitude} </span>
  //   </div>
  //   <div>
  //   <span>State: </span>
  //   <span>${park.states[0].title} </span>
  //  </div>
  //   <div>
  //     <span>Number of visitors: </span>
  //     <span>${park.visitors} </span>
  //   </div>
  //   `)
  // } 
// }
      for(const park of park_data){
        const coordinates = park.coordinates;
        const marker = L.marker([coordinates.latitude,coordinates.longitude]).addTo(myMap)
        marker.bindPopup(`
        <h1>${park.title}</h1>
        <div>
          <span>Coordinates: </span>
          <span>${coordinates.latitude},${coordinates.longitude} </span>
        </div>
        <div>
        <span>State: </span>
        <span>${park.states[0].title} </span>
      </div>
        <div>
          <span>Number of visitors: </span>
          <span>${park.visitors} </span>
        </div>
        `)
      }
      }

