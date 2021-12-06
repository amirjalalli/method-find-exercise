var users = [
    {id: 1, name: 'ali', age: 22},
    {id: 2, name: 'amin', age: 19},
    {id: 3, name: 'amir', age: 25},
    {id: 4, name: 'babak', age: 27},
]

var mainUserData = users.find(function(user) {
    return user.name === 'amir'
})

console.log(mainUserData)