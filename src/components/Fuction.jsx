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


  const [filterImportant, setFilterImportant] = useState(false);

  // useEffect(() => {
  //   setFilteredSearchTodos(
  //     todos.filter((todo) =>
  //       todo.todo.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  // }, [todos, search, setFilteredSearchTodos]);

  useEffect(() => {
    setFilteredSearchTodos(
      todos.filter((todo) =>
        filterImportant
          ? todo.important
          : todo.todo.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [todos, search, filterImportant, setFilteredSearchTodos]);





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

      {todos.length > 1 && (
        <div className="flex items-center py-1 px-2 rounded-lg bg-white  gap-x-1 
        border h-23 border-green-600 ">
          <input
            type="checkbox"
            checked={filterImportant}
            onChange={(event) => setFilterImportant(event.target.checked)}
            className="form-checkbox bg-green-600 mt-3 "
          />
          <label className=" text-green-700 font-medium bg-green-600rounded-lg ">Important</label>
        </div>
      )}
    </div>
  );
}

export default TodoForm;
  