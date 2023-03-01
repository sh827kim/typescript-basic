// 타입 가드

function logText(el : Element) {
    console.log(el.textContent)
}

const h1El = document.querySelector('h1')
if(h1El) {
    logText(h1El)
}

if(h1El instanceof HTMLHeadingElement) {
    logText(h1El)
}

function addValue(val : string | number | boolean) {
    let res = 'Result => '
    if(typeof val === 'number') {
        res += val.toFixed(2)
    }
    else if (typeof val === 'string') {
        res += val.toUpperCase()
    }
    console.log(res)
}

addValue(3.14)
addValue('hello world')