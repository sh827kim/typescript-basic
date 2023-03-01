// function - overloading
function add1(a:string, b:string) {
    return a + b
}

function add2(a: number, b: number) {
    return a + b
}

add1('hello ', 'world')
add2(1, 2)

function plus(a:string, b:string):string // 타입선언
function plus(a:number, b:number):number // 타입선언
function plus(a: any, b: any) { // 함수구현
    return a + b
}
plus('hello ', 'world')
plus(1, 2)