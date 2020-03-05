let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')

// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array of country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files as one big file, o
// organized in the order of the script tags so the countriesAndCodes array is available to this script.

console.log(countriesAndCodes)  // You don't need to log countriesAndCodes - just proving it is available 


// TODO when the page loads, select an element at random from the countriesAndCodes array

let randCountry = countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)]; // Select a random element from the array

// TODO display the country's name in the randomCountryElement 

randomCountryElement.innerHTML = randCountry["name"] // Grab the name from the randomized element and update the Country Placeholder with the name

let cCode = randCountry["alpha-2"]

console.log(`Country code is: ${cCode}`)

// TODO add a click event handler to the submitButton.  When the user clicks the button,
//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the two-letter country code (from countriesAndCodes, example 'CN' or 'AF')
//  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
//  * If the API call was successful, extract the capital city from the World Bank API response.
//  * Compare it to the user's answer. 
//      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data - make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"

// let cCode = randCountry["alpha-2"]

submitButton.addEventListener('click', function(){

    let answer = userAnswerElement.value
    
    fetch(`https://api.worldbank.org/v2/country/${randCountry["alpha-2"]}?format=json`)
        .then( res => res.json() )
        .then( data => {

            console.log(data)

            let capital = data["capitalCity"]

            if (answer == capital) {
                resultTextElement.innerHTML = `Your answer is correct. ${answer} is the capital of ${randCountry["name"]}.`
            } else {
                resultTextElement.innerHTML = `Sorry! Your answer is incorrect. ${answer} is not the capital of ${randCountry["name"]}.`
            }

        })
        .catch(err => {
            console.log(err)
        })

    
    
})


// TODO finally, connect the play again button. Clear the user's answer, select a new random country, 
// display the country's name, handle the user's guess. If you didn't use functions in the code you've 
// already written, you should refactor your code to use functions to avoid writing very similar code twice. 
