// const squer = function (x) {
//     return x * x
// }

// const square = x => x*x
//
// console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Janusz', 'Iwona', 'Marta', 'Ola'],
    printGuestList() {
        console.log('guest list for ', this.name)
        console.log(this)
        // this.guestList.forEach(function () {
        //   console.log(this)
        // })
        this.guestList.forEach((guest) => {
            console.log(`${guest} is attending ${this.name}`)
        })
    },
    test: () => {
        console.log(this)
    }
}

event.test()