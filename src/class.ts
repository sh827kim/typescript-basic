//Access Modifiers
// 초기화 값 넣어줄 수 있음.

class UserZ {
    public first: string
    protected last: string
    private age: number = 0
    constructor(first: string, last: string, age: number) {
        this.first = first
        this.last = last
        this.age = age
    }
    getFullSentence() {
        return `${this.first} ${this.last} is ${this.age}`
    }
}

class ZGenenration extends UserZ {
}

class UserY {
    constructor(
        public first: string = '',
        public last: string = '',
        public age: number = 0
    ) {

    }
    protected getAge() {
        return `${this.first} ${this.last} is ${this.age}`
    }
}