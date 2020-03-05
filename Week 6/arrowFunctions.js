let animals = ['Bird', 'Whale', 'Zebra']

/* Function callbacks vs. arrow functions
These two pieces of code are identical */

// Using a callback function
animals.forEach(function(animal) {
    console.log(animal)
})

// Using a callback function, written in arrow notation
// This is equivalent to the code above, but is more concise
animals.forEach(animal => console.log(animal))