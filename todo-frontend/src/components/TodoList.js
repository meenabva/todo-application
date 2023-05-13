import { useEffect, useState } from "react"
import { getAllTasks } from "../services/TodoService"
import { TaskBox } from "./TaskCard"
import { Form } from "react-bootstrap"
import './TodoList.css'

export const TodoList = () => {

    const [tasks, setTasks] = useState([])
    const [switchCompleted, setSwitch] = useState(true);

    useEffect(() => {
        getTaskList()
    }, [])

    const sortTasks = () => {
        let taskList = tasks
        taskList.sort((task1, task2) => {
            return Math.abs(Date.parse(task1.deadline) - Date.parse(task2.deadline))
        })
        setTasks(taskList)
    }

    const getTaskList = async () => {
        let data = await getAllTasks()
        setTasks(data)
    //    sortTasks()
    }

    const filterTasks = (e) => {
        console.log(e.target)
        if(e.target.name === 'completed') {
            setSwitch(!switchCompleted)
            if(switchCompleted === false) {
                let filteredTasks = []
                tasks.map((task) => {
                    if(task.completed === false) {
                        filteredTasks.push(task)
                    }
                })
                setTasks(filteredTasks)
        //        sortTasks()
            } else {
                getTaskList()
            }
        }
    }

    return (
        <div className="mt-5 mx-5">
            <div class="row filter-bar">
            <Form>
                <Form.Switch // prettier-ignore
                    type="switch"
                    name="completed"
                    label="Show Completed Tasks"
                    value={switchCompleted}
                    onChange={filterTasks}
                />
            </Form>
            </div>
            <div class="row">
                {
                    tasks.map(task =>
                        <TaskBox task={task} key={task.id} />
                    )
                }
            </div>
        </div>
    )
}