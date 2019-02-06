document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

const coffeeShop = {
  lat: 40.416775,
  lng: -3.70379
};
const map = new google.maps.Map(document.getElementById("myMap"), {
  zoom: 12,
  center: coffeeShop
});

function placeMymark() {
  const myMarker = new google.maps.Marker({
    position: coffeeShop,
    map: map,
    title: "My coffee-Shop"
  });

  let coffeeCoords = [
    { lat: 40.466775, lng: -3.71379 },
    { lat: 40.406775, lng: -3.75379 },
    ];

    coffeeCoords.forEach(coord => {
      new google.maps.Marker({
          map: map,
          position: coord
      })
  })
}
// function showMarkers() {
//   axios.get(`${server}/airports/300`).then((airports) => {
//       airports.data.forEach((airport) => {
//           if (airport.coords === undefined || airport.coords.coordinates === undefined) return
//           if (typeof airport.coords.coordinates[0] === "number" && typeof airport.coords.coordinates[1] === "number") {
//               new google.maps.Marker({
//                   map: theMap,
//                   position: {
//                       lat: airport.coords.coordinates[1],
//                       lng: airport.coords.coordinates[0]
//                   },
//                   title: airport.name
//               })
//           }
//       })
//   })
// }
//placeMymark();

document.getElementById("b1").onclick = function () {
  placeMymark();
}
//40.416775, -3.703790.
