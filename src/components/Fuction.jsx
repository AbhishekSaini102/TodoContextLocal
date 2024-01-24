// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";
import ConfirmationPopup from "./ConfirmationPopup"; // adjust the path as needed

function TodoForm() {
  const { todos, deleteAllTodos, toggleAllTodo } = useTodoContext();
  const [allCompleted, setAllCompleted] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  const handleToggleAll = () => {
    toggleAllTodo(!allCompleted);
    setAllCompleted(!allCompleted);
  };
  
  const handleConfirmDelete = () => {
    deleteAllTodos([]);
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
          className=" w-full rounded item-center px-3 py-1 bg-green-600 text-white mb-14
             hover:bg-white hover:text-black transition duration-150 font-semibold 
             hover:shadow-md hover:ring-1 hover:ring-[#4d7c0f] inline-block"
          onClick={handleToggleAll}
        >
          {allCompleted ? "Unmark All" : "Mark All Completed"}
        </button>
      )}
    </div>
  );
}

export default TodoForm;
