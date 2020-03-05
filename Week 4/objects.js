let webClass = { name: 'Web client server', code: 2560, room: 'T.3050'}

let className = webClass.name
let classNameAgain = webClass['name']

webClass.room = 'T.3080'

console.log(webClass)

webClass.studentsEnrolled = 27

console.log(webClass)

// Create a user object
// it has the attribute name with the value 'clara'
// also has an attribute password with value 'qwerty'
let user = { username: 'clara', password: 'qwerty'}
console.log(user.username)
// TODO can you print your fake password?
console.log(user.password)

// TODO add your email to your user object

user.email = 'wyatt51200@gmail.com'

console.log(user.email)