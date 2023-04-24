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
const shopping = ['milk', 'eggs', 'bread', 'cheese', 'jam']
const dataTypeExample = ['String']

// creates a new array with a callback function
// to help standardise the list items
const largeShopping = shopping.map(function (shoppingItem) {
    return shoppingItem.toUpperCase()
})

// destructured arrays as a function parameter
const someFunction = (...someArr) => {
    // effectively someArr: any[]
    someArr.forEach(function (i) {
        console.log(i)
    })
}

// destructured arrays as a function parameter
someFunction('red', 'green', 'blue')

const filteredColorsCondition = (color) => {
    return !(color[0].toLowerCase() === 'b')
}

const filteredColors = colors.filter(filteredColorsCondition)

console.log(filteredColors)

const chessBoard = [
    //0    1    2    3    4    5    6    7
    ['R', 'K', 'B', 'Q', 'K', 'B', 'K', 'R'], // 0
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['Blank', 'Blank', 'Blank', 'Blank', 'Blank', 'Blank', 'Blank', 'Blank'],
    ['Blank', 'Blank', 'Blank', 'Blank', 'Blank', 'Blank', 'Blank', 'Blank'],
    ['Blank', 'Blank', 'Blank', 'Blank', 'Blank', 'Blank', 'Blank', 'Blank'],
    ['Blank', 'Blank', 'Blank', 'Blank', 'Blank', 'Blank', 'Blank', 'Blank'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'K', 'B', 'Q', 'K', 'B', 'K', 'R'], // 7
]

//                   rows
console.log(chessBoard[0][5])
//                      cols
