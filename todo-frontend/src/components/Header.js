import { Link } from "react-router-dom";
import './TodoList.css'

function Header() {
  return(
    <>
    <nav class="navbar navbar-expand navbar-dark">
        <a className="navbar-brand">
              ToDo
        </a>
        <ul class="nav navbar-nav">
            <li class="nav-item active">
                <Link class="nav-link" to={{pathname: "/"}}>All tasks<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to={{pathname: "/task/create"}}>Add Task</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Header;