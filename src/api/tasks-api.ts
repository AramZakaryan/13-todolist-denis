import {instance} from "./instance";
import {TaskApiTypes, TaskResponseUniversalType} from "./tasks-types";




export const taskstAPI = {
    getTasks(todolistId: string) {
        return instance.get<TaskApiTypes[]>(`${todolistId}/tasks`)
    },
    createTasks(todolistId: string, newTaskTitle: string,) {
        return instance.post<TaskResponseUniversalType<TaskApiTypes>>(`${todolistId}/tasks`, {title: newTaskTitle})
    },
    deleteTasks(todolistId: string, taskId: string,) {
        return instance.delete<TaskResponseUniversalType>(`${todolistId}/tasks/${taskId}`)
    },
    updateTasks(todolistId: string, taskId: string, newTaskTitle:string) {
        return instance.put<TaskResponseUniversalType>(`${todolistId}/tasks/${taskId}`,{
            title: newTaskTitle,
            description: null,
            status: 0,
            priority: 1,
            startDate: null,
            deadline: null,
        } )
    },
}

/*{
    "data": {
    "item": {
        "id": "93e4b145-15aa-4fc8-8ba9-8678ff929925",
            "title": "Nuevo Task",
            "description": null,
            "todoListId": "c120798c-3062-4b8a-a1c9-0de81f13d59b",
            "order": -8,
            "status": 0,
            "priority": 1,
            "startDate": null,
            "deadline": null,
            "addedDate": "2024-01-31T14:03:11.6807124Z"
    }
},
    "messages": [],
    "fieldsErrors": [],
    "resultCode": 0
}*/