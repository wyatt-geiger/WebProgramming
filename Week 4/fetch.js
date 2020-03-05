let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let map = L.map('iss-map').setView[0, 0]

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoibWFuZGlibGVjbGF3IiwiYSI6ImNrNmxpbHJ0MzBma2wzbm5xYmR5amttcjQifQ.fkE0EqkkT3k6ICevKiol5w'
}).addTo(map)

// find elements  on page to update with data from API
let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')

// Make request to API which returns a Promise
fetch(url).then( (response) => {
    return response.json() // decode binary response into JS object
})


.then( (issData) => {
        // we now have data
        console.log(issData)
        issLat.innerHTML = issData.latitude // use data in page
        issLong.innerHTML = issData.longitude
    })

    .catch(err => {
        console.log(err) // todo deal with errors
    })