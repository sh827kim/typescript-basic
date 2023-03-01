// 선택적 속성 : ?
// 읽기 전용 속성 : readonly

interface Owner {
    name : string
    readonly age : number
    email?: string
    isValid : boolean
}

const lee : Owner = {
    name : 'Lee',
    age : 32,
    isValid : false
}

lee.name = 'Spark'

// 함수 타입 - 호출 시그니처 (Call Signature)

interface GetQuantity {
    (message: string) : number
}
interface Game {
    title : string
    price : number
    quantity: number
    getQuantity : GetQuantity,
    getTitle : (message: string) => string
}

const bioshock : Game = {
    title : 'Bio-Shock',
    price: 30000,
    quantity : 200,
    getQuantity(message: string) {
        console.log(message)
        return this.quantity
    },
    getTitle (message: string) {
        console.log(message)
        return this.title
    }
}

bioshock.getQuantity('Spark')


// 인덱스 가능 타입 - 인덱스 시그니처 (Index Signature)
interface Meats {
    [item: number]: string
}
const meats: Meats = ['Pork', 'Chicken', 'Lamb']
console.log(meats[1])
interface Restaurant {
    [key: string] : unknown // 인덱스는 string 형태이고, 실제 값은 뭐가 올지 모른다는 의미
    name: string
    stars: number
}

const bbq : Restaurant = {
    name: 'BBQ',
    stars: 3
}
bbq['isValid'] = true
bbq['emails'] = ['bbq@bbq.com']
console.log(bbq)

interface Payload {
    [key: string] : unknown
}

function logValues(payload : Payload) {
    for(const key in payload) {
        console.log((payload[key]))
    }
}

logValues(bbq)

// 확장 - 상속
interface UserA {
    name: string
    age: number
}
interface UserB extends UserA {
    isValid: boolean
}

const sparkKim : UserA = {
    name: 'KIM',
    age : 30
}

const hong : UserB = {
    name: 'KIM',
    age : 30,
    isValid: true
}

interface FullName {
    firstName: string
    lastName: string
}
interface FullName {
    middleName: string
    lastName: string
}

const fullName : FullName = {
    firstName: 'Gildong',
    middleName: 'donggil',
    lastName: 'Hong'
}