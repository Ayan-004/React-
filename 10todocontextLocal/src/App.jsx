import { useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([]);

  // const addtodo = (todo) => {
  //   setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  // }

const addtodo = (newTodo) => {
  setTodos((prevTodos) => [...prevTodos, newTodo]);
};


  const updatetodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deletetodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem("todos");
      const todos = storedTodos ? JSON.parse(storedTodos) : []; // Fallback to an empty array
  
      if (Array.isArray(todos) && todos.length > 0) {
        setTodos(todos);
      }
    } catch (error) {
      console.error("Error reading todos from localStorage:", error);
    }
  }, []);
  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addtodo, updatetodo, deletetodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => {
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo}/>
                          </div>
                        })}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
