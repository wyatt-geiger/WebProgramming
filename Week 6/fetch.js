let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let map = L.map('iss-map').setView([0, 0], 1)

var icon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [50,50],
    iconAnchor: [25,25]
})

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoibWFuZGlibGVjbGF3IiwiYSI6ImNrNmxpbHJ0MzBma2wzbm5xYmR5amttcjQifQ.fkE0EqkkT3k6ICevKiol5w'
}).addTo(map)

// find elements  on page to update with data from API
let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')

var issMarker // leaflet marker
var update = 10000 // 10 seconds

iss() // initial call to function
setInterval(iss, update)


function iss() {

// Make request to API which returns a Promise
fetch(url)
    .then( res => res.json()) 
    .then( (issData) => {
        // we now have data
        console.log(issData)
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat // use data in page
        issLong.innerHTML = long

        if (!issMarker) {
            issMarker = L.marker([lat,long], {icon: icon}).addTo(map) // Create the marker
        } else {
            issMarker.setLatLng([lat,long]) // Already exists - move to new location
        }
    })

    .catch(err => {
        console.log(err) // todo deal with errors
    })
}