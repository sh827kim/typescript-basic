// 타입 추론 (Inference)
// 1) 초기화된 변수
// 2) 기본값이 설정된 매개 변수
// 3) 반환값이 있는 함수


let numInf = 12

// 매개변수 & Return 값 타입 추론
function supply(a: number, b = 2) {
    return a * b
}