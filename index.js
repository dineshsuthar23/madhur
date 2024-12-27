// destructing in string
const str = "String"
const [first, second, third] = str

// destructing in array
let arr = ['Array', 11, 22, 33, 44, 55]

// normal access
const ar1 = arr[0] // Array
const ar2 = arr[1] // 11
const ar3 = arr[2] // 22
const ar4 = arr[2] // 33

// using destructing
// Array, 11,  22
const [ar5, ar6, ar7] = arr


// destructing in object
const user = {
    name: 'John',
    age: 25,
    address: {
        city: 'Ahmedabad',
        state: 'Gujarat'
    }
}
const obj = user.name
const { name: username, age, address: { city } } = user
console.log(obj)



// spread operator (indicated by 3 dots(...))

function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

const str1 = [11, 22, 33, 44]
const str2 = "hyy"
// console.log(sum(...numbers,));
console.log([...str1, ...str2])