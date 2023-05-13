import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TodoList } from './components/TodoList';
import { Layout } from './components/Layout';
import { AddTaskForm } from './components/AddTaskForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<TodoList />} />
          <Route exact path="/task/create" element={<AddTaskForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
