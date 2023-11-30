import { useEffect, useState } from 'react';
import { deleteTask, updateTask } from '../services/TodoService';
import './TaskCard.css'
import Dropdown from 'react-bootstrap/Dropdown';

export function TaskBox(props){

    const [task, setTask] = useState(props.task)
    const [style, setStyle] = useState({
        borderTopColor: 'none',
        borderTopWidth: '0px'
    })

    useEffect(() => {
        if(task.completed){
            setStyle({
                borderTopColor: 'green',
                borderTopWidth: '10px'
            })
        }
    }, [task.completed])

    const updateTaskStatus = () => {
        setTask(
            {...task, completed : true}
        )
        updateTask({...task, completed : true})
        console.log("task", task)
    }

    const handleDelete = () => {
        setTask({
            title: '',
            description: '',
            completed: false
        })
        deleteTask(task.id) 
    }

    return(
        <>
        {task.title && 
            <div class="card mx-2 my-2 p-4" style={style}>
                    <span className='icons'>
                        <div class="btn btn-danger btn-sm float-left rounded-pill date-btn">{ new Date(task.deadline).toLocaleDateString() }</div>
                        <div class="dropdown float-right">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" variant='dark' size="sm" bsPrefix="p-0 b-0">
                                    <i class="bi bi-three-dots text-dark"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Edit Task</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={handleDelete}>Delete Task</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </span>
                <div class="border-0">
                    <h5 class="card-title">{ task.title }</h5>
                {/* </div>
                <div className='border-0 float-right m-0 px-0'> */}
                    {!task.completed && 
                        <button 
                        type="button" 
                        class="btn card-btn btn-success btn-sm float-right" 
                        onClick={updateTaskStatus}
                        ><i class="bi bi-check-circle pr-1"></i>Mark as Completed</button>
                    }
                    {task.completed && 
                        <button 
                        type="button" 
                        class="btn card-btn btn-success btn-sm mr-2 float-right"
                        disabled 
                        ><i class="bi bi-check2-all pr-1"></i>Completed</button>
                    }
                </div>
            </div>
        }
        </>
    )
}