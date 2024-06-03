import ToDoList from "./todolist.js";
import ToDoItem from "./todoitem.js";

const toDoList = new ToDoList();

// Launch app
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") { // this means if the DOM is ready to interact with
        initApp();
    }
});

const initApp = () => {
    // add event listeners

    // procedural - when app loads
    // load list object
    refreshPage();
}

const refreshPage = () => {
    clearListDisplay();
    // renderList();
    // clearItemEntryField();
}