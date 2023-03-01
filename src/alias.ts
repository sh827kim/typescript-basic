type TypeA = string
type TypeB = string | number | boolean

type GameUser = {
    name : string
    age: number
    isValid : boolean
} | [string, number, boolean]

const gamerA : GameUser = {
    name : 'James',
    age: 33,
    isValid : false
}
const gamerB : GameUser = ['Evan', 34, true]

function someFunc(param: TypeB) : TypeA {
    switch (typeof param) {
        case 'string':
            return param.toUpperCase()
        case 'number':
            return param.toFixed(2)
        default:
            return 'Boolean!'
    }
}

// Type Or Interface??
// Interface를 쓰나 Type을 쓰나 상관 없음. 다만 타입 별칭은 '별칭'의 특성이 더 강하다보니 객체 선언에는 인터페이스를 좀 더 권장.


type TypeUser = {
    name : string
    age: number
    isValid : boolean
}

interface InterfaceUser {
    name : string
    age: number
    isValid : boolean
}

const typeUser = {
    name : 'James',
    age: 33,
    isValid : false
}
const intfUser = {
    name : 'James',
    age: 33,
    isValid : false
}