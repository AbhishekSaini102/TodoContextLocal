/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { useTodoContext } from "../contexts/TodoContext";
import ConfirmationPopup from './ConfirmationPopup'; // adjust the path as needed
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../customDatePickerStyles.css"; 



function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // const [startDate, setStartDate] = useState(new Date());
  // const [startDate, setStartDate] = useState(
  //    new Date(todo.date || Date.now())
  //  );

  // const [startDate, setStartDate] = useState(null);

  const [startDate, setStartDate] = useState(() => {
    const savedDate = localStorage.getItem(`date-${todo.id}`);
    return savedDate ? new Date(savedDate) : null;
  });
  
  const [isOpen, setIsOpen] = useState(false); // Add this line

  const { search } = useTodoContext();

  const { updateTodo, deleteTodo, toggleComplete } = useTodoContext();

  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  const handleDelete = () => {
    setShowConfirmationPopup(true);
  };

  // const handleConfirmDelete = () => {
  //   deleteTodo(todo.id);
  //   setShowConfirmationPopup(false);
  // };

  const handleConfirmDelete = () => {
    // Construct the key
    const key = `date-${todo.id}`;

    // Remove the date from local storage
    localStorage.removeItem(key);

    // Delete the todo
    // console.log("deleteTodo",(todo.todo)); 
    deleteTodo(todo.id);

    // Hide the confirmation popup
    setShowConfirmationPopup(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmationPopup(false);
  };

  // const editTodo = () => {
  //   const todo = { ...todo, todo: todoMsg, date: startDate };
  //   todo(todo.id, todo);
  //   setIsTodoEditable(false);
  // };

  
  const editTodo = () => {
  const updatedTodo = { ...todo, todo: todoMsg, date: startDate };
  updateTodo(todo.id, updatedTodo);
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

  // useEffect(() => {
  //   localStorage.setItem(todo.id, startDate.toString());
  // }, [startDate, todo.id]);

  // Format the date
  const date = new Date(startDate);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const isTomorrow =
    date.getDate() === tomorrow.getDate() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getFullYear() === tomorrow.getFullYear();

  let formattedDate;
  if (isToday) {
    formattedDate = "Today";
  } else if (isTomorrow) {
    formattedDate = "Tomorrow";
  } else {
    formattedDate = date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  }

// const date = new Date(startDate);
//   const today = new Date();
//   const tomorrow = new Date(today);
//   tomorrow.setDate(tomorrow.getDate() + 1);

//   const isToday =
//     date.getDate() === today.getDate() &&
//     date.getMonth() === today.getMonth() &&
//     date.getFullYear() === today.getFullYear();

//   const isTomorrow =
//     date.getDate() === tomorrow.getDate() &&
//     date.getMonth() === tomorrow.getMonth() &&
//     date.getFullYear() === tomorrow.getFullYear();

//   let formattedDate;
//   if (isToday) {
//     formattedDate = "Today";
//   } else if (isTomorrow) {
//     formattedDate = "Tomorrow";
//   } else {
//     formattedDate = `${date.getDate()}/${
//       date.getMonth() + 1
//     }/${date.getFullYear()}`;
//   }
  
    return (
      <div
        className={`relative flex border border-black/10 rounded px-3 py-2 gap-x-4 mb-8 shadow-sm shadow-white/50 duration-300 text-black font-semibold ${
          todo.completed ? "bg-green-200 " : "text-black"
        } ${search && todo.todo.includes(search) ? "bg-yellow-200" : ""}`}
      >
        <input
          type="checkbox"
          className="cursor-pointer rounded-lg bg-white ml-2"
          // eslint-disable-next-line react/prop-types
          checked={todo.completed}
          onChange={toggleCompleted}
        />

        <div className="w-full flex-row items-center justify-center ">
          <input
            type="text"
            className={`border-1 outline-none w-full items-center h-3/4 bg-transparent rounded font-semibold text-base mt-2 ${
              isTodoEditable
                ? "border-green-400  bg-white rounded py-0 px-2 shadow-lg"
                : "border-transparent"
            } ${todo.completed ? "line-through text-red-600" : "text-black"}
          ${search && todo.todo.includes(search) ? "text-black " : ""}
          `}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
          />

          {startDate && (
            <p className="font-normal text-xs text-gray-400 h-1/4 mt-101 ml-">
              Tasks • {formattedDate}
            </p>
          )}
        </div>

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
            className="absolute right-0 mt-42 w-62   bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-10"
          >
            <button
              className={`w-full px-4 py-2 text-left hover:bg-gray-200 text:black 
              font-semibold items-center text-base  ${
                isTodoEditable ? " text-black bg-gray-300 py-5" : " text-black "
              }`}
              onClick={() => {
                setIsTodoEditable(true);
                setShowMenu(false);
              }}
            >
              {isTodoEditable ? "" : "Edit Todo"}
            </button>

            {/* <DatePicker
              // selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="datePicker"
            ></DatePicker> */}

            <button
              className="w-full text-base px-4 py-2 text-left hover:bg-gray-200 text:black font-semibold items-center"
              // onClick={() => setIsOpen(true)}
              onClick={() => setIsOpen(!isOpen)}
            >
              Pick a date 🗓️
            </button>
            {isOpen && (
              <DatePicker
                className="custom-date-picker"
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  const updatedTodo = { ...todo, todo: todoMsg, date: date };
                  updateTodo(todo.id, updatedTodo);
                  setIsOpen(false);
                  localStorage.setItem(`date-${todo.id}`, date.toString());
                }}
                minDate={new Date()}
                inline
              />
            )}

            <button
              className="w-full px-4 py-2 text-left bg-white text-black rounded-b-md
        hover:bg-red-500 hover:text-white text:black font-semibold text-base"
              onClick={() => {
                handleDelete();
                setShowMenu(false);
              }}
            >
              Delete
            </button>
          </div>
        )}
        {/* <p>{startDate.toString()}</p> */}

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
