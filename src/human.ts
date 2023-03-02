export interface Human {
    firstName: string
    lastName : string
    age: number
    isValid: boolean
}

export function getFullName(human: Human) {
    return `${human.firstName} ${human.lastName}`
}