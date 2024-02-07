/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
// import './App.css' 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./customDatePickerStyles.css";

import { TodoProvider } from './contexts/TodoContext'
import { TodoForm, TodosItem, Fuction}  from './components'



<<<<<<< HEAD
=======

>>>>>>> b2fc030075729ce356feb44a37eb95d24226a4ef
function App() {
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState('')
  const [filteredSearchTodos, setFilteredSearchTodos] = useState([])
<<<<<<< HEAD
=======
  const [startDate, setStartDate] = useState(new Date()); 

  // const addTodo = (todo) => {
  //   setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  // }

  // const addTodo = (todo) => {
  //   setTodos((prev) => [{ id: Date.now(), date: startDate, ...todo }, ...prev]);
  // };
>>>>>>> b2fc030075729ce356feb44a37eb95d24226a4ef

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), date: startDate, ...todo }, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== id)
    );
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }


  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  }
  
    // const toggleAllTodo = () => {
    //   setTodos(
    //     todos.map((todo) => ({
    //       ...todo,
    //       completed: !todo.completed,
    //     }))
    //   );
    // };

    const toggleAllTodo = (completed) => {
      setTodos(
        todos.map((todo) => ({
          ...todo,
          completed: completed,
        }))
      );
    };

  const deleteAllTodos = () => {
    setTodos([])
  }

  const markImportant = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      );
    });
  };


 useEffect(() => {
   setFilteredSearchTodos(
     todos.filter((todo) =>
       todo.todo.toLowerCase().includes(search.toLowerCase())
     )
   );
 }, [search, todos]);



 useEffect(() => {
   setFilteredSearchTodos(
     todos.filter((todo) =>
       todo.todo.toLowerCase().includes(search.toLowerCase())
     )
   );
 }, [search, todos]);



  useEffect(() => {
    // localStorage.setItem('todos', JSON.stringify(todos))
    // localStorage.setItem('todos', JSON.stringify(todos))

    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }

    
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  , [todos])

  

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
        toggleComplete,
        deleteAllTodos,
        toggleAllTodo,
        search,
        setSearch,
        filteredSearchTodos,
        setFilteredSearchTodos,
<<<<<<< HEAD
=======
        markImportant,
>>>>>>> b2fc030075729ce356feb44a37eb95d24226a4ef
      }}
    >
      <div className="bg-[#15803d] min-h-screen z-20   ">
        {/* <div className="h-screen w-64 bg-green-700 border-r border-black flex flex-col justify-start p-5">
        <a href="#" className="text-white mb-2">Home</a>
        <a href="#" className="text-white mb-2">About</a>
        <a href="#" className="text-white mb-2">Contact</a>
      </div> */}

        <br />

<<<<<<< HEAD
        <div className="w-full overflow-y-scroll ...  h-screen max-w-2xl bg-[#f8fafc] mx-auto shadow-md rounded-lg px-4 py-3 text-black mt-4 mb-9">
          <h1 className="text-2xl font-bold text-center w-full px-4 py-2 rounded text-white mb-20 mt-2 bg-[#15803d] ">
            Manage Your Todos
          </h1>
          <div className="mb-0">
=======
        <div className="flex flex-col w-full overflow-y-scroll ...  h-screen max-w-3xl  bg-[#f8fafc] mx-auto shadow-md rounded-lg px-4  text-black  mb-9 ticky top-14 ">
          
          <div className="flex sticky top-0 bg-white z-10 ...">
            <h1 className="text-xl mt-12 font-bold text-center w-full px-4 py-2 rounded text-white mb-10  bg-[#15803d]  ">
              Manage Your Todos
            </h1>
          </div>
          <div className=" sticky top-[66px] bg-white z-10 ...">
>>>>>>> b2fc030075729ce356feb44a37eb95d24226a4ef
            <TodoForm />
          </div>

          <div className="sticky top-[125px] bg-white z-10 ...">
            <Fuction />
          </div>

<<<<<<< HEAD
          {(search ? filteredSearchTodos : todos).map((todo) => {
=======
          {(search.toLowerCase() === "important"
            ? todos.filter((todo) => todo.important)
            : filteredSearchTodos
          ).map((todo) => {
>>>>>>> b2fc030075729ce356feb44a37eb95d24226a4ef
            const escapedSearch = search.replace(/\\/g, "\\\\"); // Add this line
            const regex = new RegExp(`(${escapedSearch})`, "gi"); // Use escapedSearch here
            const parts = todo.todo.split(regex);

            return (
<<<<<<< HEAD
              <div key={todo.id} className="w-full gap">
=======
              <div key={todo.id} className="w-full mt-3 ">
>>>>>>> b2fc030075729ce356feb44a37eb95d24226a4ef
                <TodosItem todo={todo}>
                  {parts.map((part, index) =>
                    part.toLowerCase() === escapedSearch.toLowerCase() ? (
                      <span key={index} className="">
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </TodosItem>
              </div>
            );
          })}
<<<<<<< HEAD
=======

          {/* <div className="animate-pulse text-gray-300 text-4xl font-sans px-12 py-20 text-center bg-[#f8fafc]">
            Always go with the flow
          </div> */}
          <div className="text-green-400 text-xl font-sans px-12 py-20 text-center bg-[#f8fafc] border border-green-200 mt-12  mb-8">
            “Productivity is never an accident. It is always the result of a
            commitment to excellence, intelligent planning, and focused effort.”
            - Paul J. Meyer
          </div>

          <div className="text-green-400 text-xl font-sans px-12 py-20 text-center bg-[#f8fafc] border border-green-200">
            “You don’t have to see the whole staircase, just take the first
            step.” - Martin Luther King Jr.
          </div>

          <div className="mb-64"></div>
>>>>>>> b2fc030075729ce356feb44a37eb95d24226a4ef
        </div>

        {/* 
        this is another search fuction
        <div className="flex flex-wrap gap-y-3">
          {(search ? filteredSearchTodos : todos).map((todo) => (
            <div
              key={todo.id}
              className={`w-full ${
                todo.todo.includes(search) ? "bg-white" : ""
              }`}
            >
              <TodosItem todo={todo} />
            </div>
          ))}
        </div> */}

        <div className="h-40rem bg-[#000000] w-full ">
          <div className="h-22 bg-[#15803d] w-full mb-0"></div>
          <div className="h-21 bg-[#15803d] w-full mb-1"></div>
          <div className="h-20 bg-[#15803d] w-full mb-2"></div>
          <div className="h-19 bg-[#15803d] w-full mb-3"></div>
          <div className="h-18 bg-[#15803d] w-full mb-4"></div>
          <div className="h-17 bg-[#15803d] w-full mb-5"></div>
          <div className="h-16 bg-[#15803d] w-full mb-6"></div>
          <div className="h-15 bg-[#15803d] w-full mb-7"></div>
          <div className="h-14 bg-[#15803d] w-full mb-8"></div>
          <div className="h-13 bg-[#15803d] w-full mb-9"></div>
          <div className="h-12 bg-[#15803d] w-full mb-10"></div>
          <div className="h-11 bg-[#15803d] w-full mb-11"></div>
          <div className="h-10 bg-[#15803d] w-full mb-12"></div>
          <div className="h-9 bg-[#15803d] w-full mb-13"></div>
          <div className="h-8 bg-[#15803d] w-full mb-14"></div>
          <div className="h-7 bg-[#15803d] w-full mb-15"></div>
          <div className="h-6 bg-[#15803d] w-full mb-16"></div>
          <div className="h-5 bg-[#15803d] w-full mb-17"></div>
          <div className="h-4 bg-[#15803d] w-full mb-18"></div>
          <div className="h-3 bg-[#15803d] w-full mb-19"></div>
          <div className="h-2 bg-[#15803d] w-full mb-20"></div>
          <div className="h-1 bg-[#15803d] w-full mb-21"></div>
          <div className="h-0 bg-[#15803d] w-full mb-22"></div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App
  