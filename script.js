for (let i = 0; i <11; i++) {
    if (i%2 ==0) {
        console.log(i)
    }
}
for (let i = 55; i >19; i--) {
        console.log(i)
}
const numbers = [3, 5, 11, 2, 8, 1, 6];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
let numbers_squared = Array()
for (let i = 0; i < numbers.length; i++) {
    numbers_squared.push(numbers[i])
}
console.log(numbers_squared)
let last_element = numbers[numbers.length-1]
console.log(last_element)

const user = {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    salary: 500
    }
console.log("user's Name is " + user.first_name + " " + user.last_name + ". He is " + user.age + " years old")