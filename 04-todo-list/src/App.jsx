import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import {useState} from "react"

function App() {
    
     const [todos, setTodos] = useState([
      'Go to the gym',
      'eat more fruits and vege',
      'pick up the kids from school'
     ])

    function handleAddTodos(newTodo){
      const newTodoList = [...todos, newTodo]
      setTodos(newTodoList)
    }


  return (
    <>
        <TodoInput />
        <TodoList todos={todos} />
    </>
  )
}

export default App
