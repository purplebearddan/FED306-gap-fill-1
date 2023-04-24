// Objects

const obj = {
    name: 'Link',
    hearts: 3,
    inventory: [
        {
            itemName: 'Kokori Sword',
            damage: 25,
        },

        {
            itemName: 'Kokori Shield',
            damage: 10,
        },
    ],
    age: 'Child',
    sayHello: function () {
        console.log(`Hi, I'm ${this.name}`)
    },
    sayGoodbye: () => {
        console.log(`Hi, I'm ${this.name}`)
    },
}
obj.sayHello()
obj.sayGoodbye()

// for (const key in obj) {
//     const value = obj[key]
//     console.log(key, value)
// }

// const colors = ['red', 'green', 'blue']
// const [one, two, three] = colors

// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[2])
// console.log(one)
// console.log(two)
// console.log(three)

// console.log(obj.name)
// console.log(obj.hearts)
// console.log(obj.age)

// const { name, age, hearts } = obj

// console.log(name)
// console.log(hearts)
// console.log(age)

// const destructuringFunction = ({ name, hearts, age }) => {
//     console.log(name)
//     console.log(hearts)
//     console.log(age)
// }
