/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { useTodoContext } from "../contexts/TodoContext";
import ConfirmationPopup from './ConfirmationPopup'; // adjust the path as needed


function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const { updateTodo, deleteTodo, toggleComplete} = useTodoContext();

  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  const handleDelete = () => {
    setShowConfirmationPopup(true);
  };

  const handleConfirmDelete = () => {
    deleteTodo(todo.id);
    setShowConfirmationPopup(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmationPopup(false);
  };

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  // const handleDelete = () => {
  //   deleteTodo(todo.id);
  //   setShowMenu(false);
  // };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  // Close the dropdown menu if the user clicks outside of it
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showMenu && menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showMenu]);

  return (
    <div
      className={`relative flex border border-black/10 rounded px-3 py-2 gap-x-2 shadow-sm shadow-white/50 duration-300 text-black font-semibold ${
        todo.completed ? "bg-green-200 " : "text-black"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer rounded-lg bg-white"
        // eslint-disable-next-line react/prop-types
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border-1 outline-none w-full bg-transparent rounded  ${
          isTodoEditable
            ? "border-green-400  bg-white rounded py-0 px-2 shadow-lg"
            : "border-transparent"
        } ${todo.completed ? "line-through" : "text-red-500"}
        `}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {isTodoEditable && (
        <button
          className="border-1 text-red-500 border-green-400 ring-neutral-50 bg-white rounded py-1 px-2 shadow-lg"
          onClick={editTodo}
        >
          Save
        </button>
      )}

      <button
        className="bg-white rounded-3xl px-4 py-1.5 hover:bg-[#efefef]"
        onClick={() => setShowMenu(!showMenu)}
      >
        ⋮
      </button>

      {/* Dropdown Menu */}
      {showMenu && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-42 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-10"
        >
          <button
            className={`w-full px-4 py-2 text-left hover:bg-gray-200 text:black font-semibold items-center text- ${
              isTodoEditable ? " text-black bg-gray-300 py-5" : " text-black "
            }`}
            onClick={() => {
              setIsTodoEditable(true);
              setShowMenu(false);
            }}
          >
            {isTodoEditable ? "" : "Edit Todo"}
          </button>

          <button
            className="w-full px-4 py-2 text-left bg-white text-black rounded-b-md
       hover:bg-red-500 hover:text-white text:black font-semibold"
            onClick={() => {
              handleDelete();
              setShowMenu(false);
            }}
          >
            Delete
          </button>
        </div>
      )}

      {showConfirmationPopup && (
        <ConfirmationPopup
          message="Are you sure you want to delete this todo?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
}

export default TodoItem;
