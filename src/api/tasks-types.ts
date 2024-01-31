export type TaskApiTypes = {
    id: string
    title: string
    description: null | string
    todoListId: string
    order: number
    status: number
    priority: number
    startDate: null | string
    deadline: null | string
    addedDate: null | string
}

export type TaskResponseUniversalType<D = {}> = {
    data: D
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}