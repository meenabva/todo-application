import { useState } from "react"
import { createNewTask } from "../services/TodoService"
import "./AddTaskForm.css"
import { useNavigate } from "react-router-dom"

export const AddTaskForm = () => {

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        completed: false,
        deadline: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setNewTask({...newTask, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createNewTask(newTask)
        navigate("/")
    }

    return(
        <div>
            <div class="jumbotron">
                <h1 class="display-3">Add Task Form</h1>
            </div>
            <form onSubmit={handleSubmit} className='form-container'>
                <div class="form-group">
                    <label for="title">Task Title</label>
                    <input 
                    type="text" 
                    name="title" 
                    value={newTask.title}
                    onChange={handleChange}
                    class="form-control" 
                    />
                </div>
                <div class="form-group">
                    <label for="description">Task Description</label>
                    <textarea 
                    name="description" 
                    value={newTask.description}
                    onChange={handleChange}
                    class="form-control" 
                    />
                </div>
                <div class="form-group">
                    <label for="deadline">Deadline</label>
                    <input 
                    type="date" 
                    name="deadline" 
                    value={newTask.deadline}
                    onChange={handleChange}
                    class="form-control" 
                    />
                </div>
                <button 
                type="submit" 
                class="btn submit-btn btn-block my-5"
                >Submit</button>
            </form>
        </div>
    )
}