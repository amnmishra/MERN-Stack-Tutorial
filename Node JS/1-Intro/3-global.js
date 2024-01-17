// Module - Encapsulated code(Only share minimum)
// CommonJS - Every file is module (By Default)

const secret = 'SUPER SECRET'
const john = 'john'
const peter = 'peter'

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

sayHi('Hi')
sayHi(john)
sayHi(peter)