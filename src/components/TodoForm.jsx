// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import { useTodoContext } from '../contexts/TodoContext'




function TodoForm() {
    
  const [todo, setTodo] = useState("")
  const {addTodo} = useTodoContext()

  const add = (e) => {
    e.preventDefault()

    if (!todo) return 

    addTodo({
      
      todo,
      completed: false,
    })
    setTodo("")   

  }

  

    return (
      <form onSubmit={add} className="flex">
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l  mb-10 px-3 h-3rem outline-none duration-150 bg-white/20 py-1.5  bg-green-600  hover:text-black transition  font-semibold hover:shadow-md  inline-block  "
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r h-3rem px-3 py-1 bg-green-600 text-white  hover:bg-white hover:text-black transition duration-150 font-semibold hover:shadow-md hover:ring-1 hover:ring-[#4d7c0f] inline-block"
        >
          Add
        </button>
      </form>
    );
}

export default TodoForm;

