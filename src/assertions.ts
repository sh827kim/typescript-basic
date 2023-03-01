// 타입 단언
// 단언 키워드 as
// Non-null 단언 연산자 - !

// 1)
const el = document.querySelector('body') as HTMLBodyElement
el.textContent = 'Hello world?!'

const el2 = document.querySelector('body')
el2!.textContent = 'Hello world?!'

// type guard preview
if(el) {
    el.textContent = 'Hello world'
}


// 2) 잘못된 타입 단언. 에러발생할 수 있음.
function getNumber(x : number | null | undefined) {
    return Number((x as number).toFixed(2))
}
function getNumber2(x : number | null | undefined) {
    return Number(x!.toFixed(2))
}

function getNumber3(x : number | null | undefined) {
    if(x) {
        return Number(x.toFixed(2))
    }
}

// 3)
function getValue(x : string | number, isNumber: boolean) {
    if(isNumber) {
        return Number((x as number).toFixed(2))
    }
    return (x as string).toUpperCase()
}

// 할당 단언

let variable!: number
console.log(variable)