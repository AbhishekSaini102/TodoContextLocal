import React, { useState, useEffect } from "react";
import { useTodoContext } from "../contexts/TodoContext";
import ConfirmationPopup from "./ConfirmationPopup"; // adjust the path as needed

function TodoForm() {
  const {
    todos,
    deleteAllTodos,
    toggleAllTodo,
    setFilteredTodos,
    search,
    setSearch,
    setFilteredSearchTodos,
  } = useTodoContext();
  const [allCompleted, setAllCompleted] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  useEffect(() => {
    setFilteredSearchTodos(
      todos.filter((todo) =>
        todo.todo.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [todos, search, setFilteredSearchTodos]);

  const handleToggleAll = () => {
    toggleAllTodo(!allCompleted);
    setAllCompleted(!allCompleted);
  };

  // const handleConfirmDelete = () => {
  //   deleteAllTodos([]);
  //   setShowConfirmationPopup(false);
  // };

  const handleConfirmDelete = () => {
    // Loop over all todos
    todos.forEach((todo) => {
      // Construct the key
      const key = `date-${todo.id}`;

      // Remove the date from local storage
      localStorage.removeItem(key);
    });

    // Delete all todos
    deleteAllTodos([]);

    // Hide the confirmation popup
    setShowConfirmationPopup(false);
  };


  const handleCancelDelete = () => {
    setShowConfirmationPopup(false);
  };
  const handleDelete = () => {
    setShowConfirmationPopup(true);
  };

  return (
    <div className="flex gap-x-2">
      {todos.length > 1 && (
        <button
          type="button"
          className=" w-full rounded item-center px-3 py-1 bg-green-600 text-white mb-14
             hover:bg-white hover:text-black transition duration-150 font-semibold 
             hover:shadow-md hover:ring-1 hover:ring-[#4d7c0f] inline-block"
          onClick={handleDelete}
        >
          Delete All
        </button>
      )}
      {showConfirmationPopup && (
        <ConfirmationPopup
          message="Are you sure you want to delete All todos?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}

      {todos.length > 1 && (
        <button
          type="button"
          className=" w-full rounded item-center px-3 py-1   bg-green-600 text-white mb-14
             hover:bg-white hover:text-black transition duration-150 font-semibold 
             hover:shadow-md hover:ring-1 hover:ring-[#4d7c0f] inline-block"
          onClick={handleToggleAll}
        >
          {allCompleted ? "Unmark All" : "Mark All Completed"}
        </button>
      )}

      {todos.length > 1 && (
        <div className="flex w-full h-22 rounded-lg border-gray-300 ">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full px-3 py-1 h-2rem rounded-lg bg-green-600 text-white
          hover:bg-white hover:text-black transition duration-150 font-semibold 
          hover:shadow-md hover:ring-1 hover:ring-[#4d7c0f] inline-block
           focus:border-[#4d7c0f] focus:outline-none focus:ring-[#4d7c0f]
            placeholder-white hover:placeholder-[#6b6b6b]"
          />
        </div>
      )}
    </div>
  );
}

export default TodoForm;
  