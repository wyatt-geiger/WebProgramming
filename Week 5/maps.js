let metroAreaCenterCoordinates = [44.96, -93.2] // Array of latitude and longitude
let zoomLevel = 9 // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoibWFuZGlibGVjbGF3IiwiYSI6ImNrNmxpbHJ0MzBma2wzbm5xYmR5amttcjQifQ.fkE0EqkkT3k6ICevKiol5w'
}).addTo(map)


//Add some markers
let mctcCoordinates = [44.9724, -93.2844]
let mctcMarker = L.marker(mctcCoordinates)
.bindPopup("Minneapolis College<br><a href='https://mineapolis.edu'>Website</a>")
.addTo(map)

let stPaulCoordinates = [44.94839, -93.1099]
let stpMarker = L.marker(stPaulCoordinates)
.bindPopup("Saint Paul College<br><a href='https://saintpaul.edu'>Website</a>")
.addTo(map)

campuses = [
    {'name': 'Minneapolis College', 'website': 'https://minneapolis.edu', 'coordinates': [44.9724, -93.2844] },
    {'name': 'Saint Paul College', 'website': 'https://saintpaul.edu', 'coordinates': [44.94839, -93.1099] },
    {'name': 'Normandale Community College', 'website':'https://normandale.edu', 'coordinates': [44.8297, -93.3312] },
    {'name': 'North Hennepin Community College', 'website':'https://nhcc.edu', 'coordinates': [45.1054232, -93.3767558] },
    {'name': 'Century College', 'website':'https://century.edu', 'coordinates': [45.0438494, -92.9862026] },
]

campuses.forEach(function(campuses) {
    let popup = `<a href=${campuses.website} target="_blank">Website</a>` // target="_blank" opens the link in a new tab
    let campusMarker = L.marker(campuses.coordinates)
    .addTo(map)
    .bindPopup(`${campuses.name}<br>${popup}`)
})