// // IIFE
// (function () {
//    var a = 'ssss'
// })()
//
// const a = function () {
//    console.log('a',this)
//     const b = function () {
//      console.log('b',this)
//         const c = {
//          name: 'janusz',
//          hi: function () {
//            console.log('c',this)
//          }
//         }
//         c.hi()
//     }
//     b()
// }
// a.apply()
//
// // call() apply()
//
// const wizard = {
//     name: 'Merlin',
//     health: 100,
//     heal(num1, num2) {
//         this.health += num1 + num2
//     }
// }
//
// const archer = {
//     name: 'Robin hood',
//     health: 30
// }
//
// console.log(archer.health)
//
// wizard.heal.call(archer, 30, 50) // borrow function from wizard !!!!
//
// console.log(archer.health)
//
// // bind()
// const healArcher = wizard.heal.bind(archer, 30, 100)
//
// healArcher()
//
// console.log(archer.health)
//
// const multiply = (a,b) => a*b
//
// let multiplyByTwo = multiply.bind(this,2)
//
// console.log(multiplyByTwo(4))

// const character = {
//     name: 'Simon',
//     getCharacter() {
//         return this.name;
//     }
// };
// const giveMeTheCharacterNOW = character.getCharacter.bind(character)
//
// //How Would you fix this?
// console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't
//
// console.log(typeof null)

// let obj = {
//     a: 'a',
//     b: 'b',
//     c: {
//         deep: 'it need deep cloning'
//     }
// }
//
// let clone_shallow = {...obj}
// let cloning_deep = JSON.parse(JSON.stringify(obj))
//
// obj.c.deep = 'only for shallow cloning'
//
// console.log(obj)
// console.log(clone_shallow)
// console.log(cloning_deep)
//
// // compare object
// const eq = JSON.stringify(obj) === JSON.stringify(clone_shallow)
// console.log(eq)
//
// console.log(0 == null)
//
// console.log(JSON.parse.name)
//

// HOF pattern
//
// const authentication = (veryfay) => {
//     const array = []
//     for(let i = 0; i < veryfay; i++){
//         array.push(i)
//     }
//     return true
// }
//
// const giveAccesTo = (person) => `Acces Granted to ${person}`
//
//
// const letPerson = (person, fn) => {
//     if(person.level === 'admin'){
//         fn(50000000)
//     }else if(person.level === 'user'){
//         fn(10000000)
//     }
//
//     return giveAccesTo(person.name)
// }
//
// const result = letPerson({level: 'user', name: 'Janusz'}, authentication)
//
// console.log(result)
//

// Closures

function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} ${father} ${son}`
        }
    }
}

console.log(a()()())

function boo(string) {
   return function (name) {
      return function (name2) {
         console.log(`${string} ${name} ${name2}`)
      }
   }
}

boo('He')('Olo')('bolo')

const boo_arrow = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`)

boo_arrow('Hello')('Jolo')('Bolo')







