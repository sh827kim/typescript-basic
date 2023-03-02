interface Obj {
    x: number
}

type Arr = [number, number]

function toArray<T>(a: T, b: T) {
    return [a, b]
}
console.log(
    toArray('wow', 'good'),
    toArray<number>(1, 2),
    toArray<Obj>({x:1}, {x:2})
)

class Generic<P> {
    constructor(public payload: P) {
    }
    getPayload() {
        return this.payload
    }
}

interface AType {
    name: string
    age: number
    isValid: boolean
}

interface BType {
    name: string
    age: number
    emails: string[]
}

const sparkling = new Generic<AType>({
    name: 'Spark',
    age: 32,
    isValid: true
})

interface MyData<T> {
    name: string
    value: T
}

const myData1: MyData<string> = {
    name: 'DataA',
    value: 'Hello world!'
}

const myData2: MyData<number> = {
    name: 'DataB',
    value: 1234
}

const dataC: MyData<boolean> = {
    name: 'DataC',
    value: false
}
const dataD: MyData<number[]> = {
    name: 'Data D',
    value: [1, 2, 3, 4]
}

interface ConstraintsIntf<T extends string | number> {
    name: string
    value: T
}
