import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

const config = {
    withCredentials: true
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists",
            config)
            .then(response => setState(response.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists",
            {title:"VabsheNor todilist"},
            config)
            .then(response => setState(response.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.delete("https://social-network.samuraijs.com/api/1.1/todo-lists/74cc1aa4-f66f-4fec-a3eb-fbc5da2d069e", config)
            .then(response=>setState(response.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.put("https://social-network.samuraijs.com/api/1.1/todo-lists/c120798c-3062-4b8a-a1c9-0de81f13d59b", {title: "Changed Title"},config)
            .then(response=>setState(response.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}