// Class code examples

const student1 = {name: "Bob", age: 17}
const student2 = {name: "Susy", age: 18}
const student3 = {name: "Ted", age: 18}

const studentsList = [
    {name: "Bob", age: 17},
    {name: "Susy", age: 18},
    {name: "Ted", age: 18}
];

console.log(studentsList[1])
console.log(studentsList[1].age) // dot notation to access the age

const Bob = {name: "Bob", age: 17}
const Susy = {name: "Susy", age: 18}
const Ted = {name: "Ted", age: 18}

const studentDictionary = {
    "Bob": Bob,
    "Susy": Susy,
    Ted // This is equivalent "Ted": Ted
    }

console.log(studentDictionary.Susy.age)

for(const student in studentDictionary){ // for...in is sugar sintax for object 
    console.log(studentDictionary[student].age);
}

for (const student of studentsList){ // for...of is sugar sintax for arrays 
    console.log(studentsList.age)
}

const classroom = {
    marco: { name: "Marco", friends: [{name: "Paolo", age: 49}] },
    carlos: { name: "Carlos", friends: [ {name: "Gabriel", age: 45}] },
    carol: { name: "Carol", friends: [{name: "Bob", age: 17}, {name: "Susy", age: 18}, {name: "Ted", age: 18}] }
}

console.log(classroom.carlos.friends[0].age)
console.log(classroom.carlos.friends.length)

console.log(classroom.marco.friends.push(classroom.carol))

// Example 2

// Array of objects

    const drinks = [
        {
            name: 'Fanta',
            sugar: true,
            price: 1,
            weight: .56,
            ingredients: ['water', 'sugar', 'sweetener']
        },
        {
            name: 'Jagger',
            sugar: true,
            price: 3,
            weight: .96,
            ingredients: ['fantasía', 'alcohol', 'bad decisions']
        }
    ]

// Obtain ingredients of Fanta
for (ingredients of drinks[0].ingredients){
    console.log(`One ingredient is`, ingredients)
}

// short path
    console.log(drinks[0].ingredients)

for (const drink of drinks){
    for (const ingredient of drink.ingredients) {
      console.log(`One ingredient of ${drink}: `, ingredient);
    }
}

/*
    // Array of objects iteration
    for (let i = 0; i < drinks.length; i++) {

        console.log(`The drink ${drinks[i].name} weight ${drinks[i].weight}. The ingredientes are:`)

        for (let j = 0; j < drinks[i].ingredients.length; j++) {
            console.log('- ', drinks[i].ingredients[j])
        }
    }
*/