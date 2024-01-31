import {instance} from "./instance";
import {TodolistResponseUniversalType, TodolistType} from "./todolists-types";


export const todolistAPI = {
    getTodolists() {
        return instance.get<TodolistType[]>("")
    },
    createTodolist(newTodolistTitle: string) {
        return instance.post<TodolistResponseUniversalType<{ item: TodolistType }>>("", {title: newTodolistTitle})
    },
    deleteTodolist(todoistId: string) {
        return instance.delete<TodolistResponseUniversalType>(`${todoistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<TodolistResponseUniversalType>(`${todolistId}`, {title: title});
    }
}
