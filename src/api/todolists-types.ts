export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
export type TodolistResponseUniversalType<D = {}> = {
    data: D
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}