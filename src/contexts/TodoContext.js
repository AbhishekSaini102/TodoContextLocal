import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo 1",
            completed: false,
        },
        
    ],
    addTodo:(todo) => {},
    deleteTodo:(id) => {},
    updateTodo:(id, todo) => {},
    toggleComplete:(id) => {},

    
    // toggleTodo:(id) => {},
    // editTodo:(id, title) => {},
    deleteAllTodo:(id) => {},
    toggleAllTodo:(id) => {},
    // clearCompletedTodo:() => {},
    // setTodos:(todos) => {},
    // filter: "all",
    // setFilter:(filter) => {},
    // filteredTodos: [],
    // setFilteredTodos:(filteredTodos) => {},
    // search: "",
    // setSearch:(search) => {},
    // filteredSearchTodos: [],
    // setFilteredSearchTodos:(filteredSearchTodos) => {},
    // isDarkMode: false,
    // setIsDarkMode:(isDarkMode) => {},
    // isShowModal: false,
    // setIsShowModal:(isShowModal) => {},
    // isShowModalEdit: false,
    // setIsShowModalEdit:(isShowModalEdit) => {},
    // isShowModalDelete: false,
    // setIsShowModalDelete:(isShowModalDelete) => {},
    // isShowModalDeleteAll: false,
    // setIsShowModalDeleteAll:(isShowModalDeleteAll) => {},
    // isShowModalToggleAll: false,
    // setIsShowModalToggleAll:(isShowModalToggleAll) => {},
    // isShowModalClearCompleted: false,
    // setIsShowModalClearCompleted:(isShowModalClearCompleted) => {},
    // isShowModalFilter: false,
    // setIsShowModalFilter:(isShowModalFilter) => {},
    // isShowModalSearch: false,
    // setIsShowModalSearch:(isShowModalSearch) => {},
    // isShowModalDarkMode: false,
    // setIsShowModalDarkMode:(isShowModalDarkMode) => {},
    // isShowModalAbout: false,
    // setIsShowModalAbout:(isShowModalAbout) => {},
    // isShowModalHelp: false,
    // setIsShowModalHelp:(isShowModalHelp) => {},
    // isShowModalContact: false,
    // setIsShowModalContact:(isShowModalContact) => {},
    // isShowModalPrivacy: false,
    // setIsShowModalPrivacy:(isShowModalPrivacy) => {},
    // isShowModalTerms: false,
    // setIsShowModalTerms:(isShowModalTerms) => {},
    // isShowModalTodo: false,
    // setIsShowModalTodo:(isShowModalTodo) => {},
    // isShowModalTodoEdit: false,
    // setIsShowModalTodoEdit:(isShowModalTodoEdit) => {},
    // isShowModalTodoDelete: false,
    // setIsShowModalTodoDelete:(isShowModalTodoDelete) => {},
    // isShowModalTodoToggle: false,
    // setIsShowModalTodoToggle:(isShowModalTodoToggle) => {},
    // isShowModalTodoClearCompleted: false,
    // setIsShowModalTodoClearCompleted:(isShowModalTodoClearCompleted) => {},
    // isShowModalTodoFilter: false,
    // setIsShowModalTodoFilter:(isShowModalTodoFilter) => {},
    // isShowModalTodoSearch: false,
    // setIsShowModalTodoSearch:(isShowModalTodoSearch) => {},
    // isShowModalTodoDarkMode: false,
    // setIsShowModalTodoDarkMode:(isShowModalTodoDarkMode) => {},
    // isShowModalTodoAbout: false,
    // setIsShowModalTodoAbout:(isShowModalTodoAbout) => {},
    // isShowModalTodoHelp: false,
    // setIsShowModalTodoHelp:(isShowModalTodoHelp) => {},
    // isShowModalTodoContact: false,
    // setIsShowModalTodoContact:(isShowModalTodoContact) => {},
    // isShowModalTodoPrivacy: false,
    // setIsShowModalTodoPrivacy:(isShowModalTodoPrivacy) => {},
    // isShowModalTodoTerms: false,
    // setIsShowModalTodoTerms:(isShowModalTodoTerms) => {},
    // isShowModalTodoTodo: false,
    // setIsShowModalTodoTodo:(isShowModalTodoTodo) => {},
    // isShowModalTodoTodoEdit: false,
    // setIsShowModalTodoTodoEdit:(isShowModalTodoTodoEdit) => {},
    // isShowModalTodoTodoDelete: false,
    // setIsShowModalTodoTodoDelete:(isShowModalTodoTodoDelete) => {},
    // isShowModalTodoTodoToggle: false,
    // setIsShowModalTodoTodoToggle:(isShowModalTodoTodoToggle) => {},
    // isShowModalTodoTodoClearCompleted: false,
    // setIsShowModalTodoTodoClearCompleted:(isShowModalTodoTodoClearCompleted) => {},
    // isShowModalTodoTodoFilter: false,
    // setIsShowModalTodoTodoFilter:(isShowModalTodoTodoFilter) => {},
    // isShowModalTodoTodoSearch: false,
    // setIsShowModalTodoTodoSearch:(isShowModalTodoTodoSearch) => {},
    // isShowModalTodoTodoDarkMode: false,
    // setIsShowModalTodoTodoDarkMode:(isShowModalTodoTodoDarkMode) => {},
    // isShowModalTodoTodoAbout: false,
    // setIsShowModalTodoTodoAbout:(isShowModalTodoTodoAbout) => {},
    // isShowModalTodoTodoHelp: false,
    // setIsShowModalTodoTodoHelp:(isShowModalTodoTodoHelp) => {},
    // isShowModalTodoTodoContact: false,
    // setIsShowModalTodoTodoContact:(isShowModalTodoTodoContact) => {},
    // isShowModalTodoTodoPrivacy: false,
    // setIsShowModalTodoTodoPrivacy:(isShowModalTodoTodoPrivacy) => {},
    // isShowModalTodoTodoTerms: false,
    // setIsShowModalTodoTodoTerms:(isShowModalTodoTodoTerms) => {},
    // isShowModalTodoTodoTodo: false,
    // setIsShowModalTodoTodoTodo:(isShowModalTodoTodoTodo) => {},
    // isShowModalTodoTodoTodoEdit: false,
    // setIsShowModalTodoTodoTodoEdit:(isShowModalTodoTodoTodoEdit) => {},
    // isShowModalTodoTodoTodoDelete: false,
    // setIsShowModalTodoTodoTodoDelete:(isShowModalTodoTodoTodoDelete) => {},
    // isShowModalTodoTodoTodoToggle: false,
    // setIsShowModalTodoTodoTodoToggle:(isShowModalTodoTodoTodoToggle) => {},
    // isShowModalTodoTodoTodoClearCompleted: false,
    // setIsShowModalTodoTodoTodoClearCompleted:(isShowModalTodoTodoTodoClearCompleted) => {},
    // isShowModalTodoTodoTodoFilter: false,
    // setIsShowModalTodoTodoTodoFilter:(isShowModalTodoTodoTodoFilter) => {},
    // isShowModalTodoTodoTodoSearch: false,
    // setIsShowModalTodoTodoTodoSearch:(isShowModalTodoTodoTodoSearch) => {},
    // isShowModalTodoTodoTodoDarkMode: false,
    // setIsShowModalTodoTodoTodoDarkMode:(isShowModalTodoTodoTodoDarkMode) => {},
    // isShowModalTodoTodoTodoAbout: false,
    // setIsShowModalTodoTodoTodoAbout:(isShowModalTodoTodoTodoAbout) => {},
    // isShowModalTodoTodoTodoHelp: false,
    // setIsShowModalTodoTodoTodoHelp:(isShowModalTodoTodoTodoHelp) => {},
    // isShowModalTodoTodoTodoContact: false,
});

export const useTodoContext = () => useContext(TodoContext);


export const TodoProvider = TodoContext.Provider;
