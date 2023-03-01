// 함수 - 명시적 this

interface Cat {
    name: string
    color: string
    age : number
}

const cat : Cat = {
    name: 'choco',
    age: 3,
    color: 'black'
}

function helloCat(this: Cat, message: string) {
    console.log(`Oh My God! ${this.name}, ${message}`)
}
helloCat.call(cat, 'You are Soooooooo pretty!!')