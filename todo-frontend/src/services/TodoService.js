import axios from "axios"

const TASK_URL = "http://localhost:8080/api/tasks"

export const getAllTasks = async () => {
    const data = await axios.get(TASK_URL)
    console.log(data)
    return data.data
} 

export const createNewTask = async (task) => {
    const data = await axios.post(`${TASK_URL}/add`, task)
    console.log(data)
}

export const updateTask = async (task) => {
    const data = await axios.put(`${TASK_URL}/${task.id}`, task)
    console.log(data)
}

export const deleteTask = async (id) => {
    const data = await axios.delete(`${TASK_URL}/${id}`)
    console.log(data)
}