/* 타입 종류 */

// 문자열
let color : string
let red : string = "Red"
let green : string = 'Green'
let myColor : string  = `My color is ${red}`

// 숫자
let num : number
let integer : number = 6
let float : number = 3.14
let infinity : number = Infinity
let nan : number = NaN

// Boolean
let isBoolean : boolean
let isDone : boolean = false

// Null / undefined
let nul : null
let und : undefined
nul = null
console.log(nul)
console.log(und)

// 배열
const fruits : string[] = ['Apple', 'Banana', 'Cherry']
const numbers : number[] = [1, 2, 3, 4, 5]
const union : (string | number)[] = ['Apple', 1, 2, 'Banana', 3]

// 객체
const obj : object = {}
const arr : object = []
const func : object = function () {}

const userA : {
    name: string
    age : number
    isValid : boolean
} = {
    name : 'Spark',
    age: 30,
    isValid : true
}

const userB : {
    name : string
    age : number
    isValid : boolean
} = {
    name : 'Neo',
    age : 22,
    isValid : false
}

interface User {
    name : string
    age : number
    isValid : boolean
}

const userC : User = {
    name : 'Kim',
    age : 85,
    isValid : true
}


// 함수
const add: (x : number, y : number) => number = function (x, y) {
  return x + y
}
const a: number = add(1, 2)
const helloWorld: () => void = function () {
    console.log('Hello world')
}
const h : void = helloWorld()

const sub = function (x : number, y: number): number {
    return x - y
}

// Any
let hello: any = 'Hello world'
hello = 123
hello = false
hello = null
hello = {}
hello = []
hello = function () {}
// Unknown
const alpha : any = 123
const beta : unknown = 123
// any는 어디나 할당이 가능하지만 unknown은 any를 제외하고는 할당이 불가능하다
const any : any = alpha
const boo : boolean = alpha
const numb : number = alpha
const arr2 : string[] = alpha
const any2 : any = beta

// Tuple
const tuple : [string, number, boolean] = ['a', 1, false]
const userTuple : [number, string, boolean][]
= [[1, 'Kim', true], [2, 'Lee', true], [3, 'Park', false]]

// Void
function hola(msg : string) : void {
    console.log(`Hello ${msg}`)
}

const hi : void = hola('world')

// Never : 절대 발생할 수 없는 타입이라는 의미
const nev : [] = []


// Union : 여러가지 타입으로 지정 가능하게 하는 타입
let unionTest : string | number
unionTest = 'Hello type!'
unionTest = 123

// Intersection : 타입 동시 지정
interface Member {
    name : string,
    age : number
}
interface Validation {
    isValid : boolean
}
const spark : User & Validation = {
    name : 'Spark',
    age : 30,
    isValid : true
}