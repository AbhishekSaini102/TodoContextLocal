import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "todo 1",
            completed: false,
        },
        {
            id: 2,
            title: "todo 2",
            completed: false,
        },{}
    ],
});

export const useTodoContext = () => useContext(TodoContext);


export const TodoProvider = TodoContext.Provider;
