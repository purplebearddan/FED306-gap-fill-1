// for

// for (initiliser;  condition; action)

const students = ['John', 'Barry', 'Sioned', 'Ellyw']
const colors = [
    'red',
    'green',
    'blue',
    'burgandy',
    'yellow',
    'cyan',
    'black',
    'brown',
    'periwinkle',
    'white',
    'pink',
]
students.forEach((_, index, students) => {
    console.log(students[index].toUpperCase())
})

// for (let index = 0; index < students.length; index++) {
//     console.log(students[index].toUpperCase())
// }

// for - of
let upperColors = []

for (const color of colors) {
    upperColors = [color.toUpperCase(), ...upperColors]
}
console.log(upperColors)

const upperColorsMap = colors.map((color) => {
    return color.toUpperCase()
})
console.log(upperColorsMap)

for (let index = 0; index < students.length; index++) {
    console.log(students[index].toUpperCase())
}
// for - in
// while
function count(startCount = 1, target = 15, callback = console.log) {
    let count = startCount

    while (count <= target) {
        callback(count)
        count++
    }
}

const customCallback = (output) => {
    console.log('This is a callback:', output)
}

count(3, 20)
count(5, 10, customCallback)
// count(2, 5)
// count()

// while(condition){}
// if(condition){}

// do while
