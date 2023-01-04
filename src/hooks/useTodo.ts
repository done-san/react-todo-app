import { useState, useEffect } from "react";
import { ulid } from "ulid";
import * as todoData from "../apis/todos";
import { Todo } from "../types/Todo";

// function component (todos)
export const useTodo = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    // when rendering a page, get and reverse, put todo list's items to a state variable
    useEffect(() => {
        todoData.getAllTodoItems().then((todo) => {
            console.log(...todo);
            setTodoList([...todo].reverse());
        });
    }, []);

    // toggle todo's done variable
    const toggleTodoListItemStatus = (id: string, done: boolean) => {
        const todoItem = todoList.find((item: Todo) => item.id === id);
        const newTodoItem: Todo = { ...todoItem!, done: !done };
        todoData.updateTodoItem(id, newTodoItem).then((updatedTodo: Todo) => {
            const newTodoList = todoList.map((item) => (item.id !== updatedTodo.id ? item : updatedTodo));
            setTodoList(newTodoList);
        });
    };

    // add a item to state variab;e
    const addTodoListItem = (todoContent: string) => {
        const newTodoItem = { id: ulid(), content: todoContent, done: false };
        todoData.addTodoItem(newTodoItem).then((addTodo: Todo) => {
            setTodoList([addTodo, ...todoList]);
        });
    };

    // delete a item from state variable
    const deleteTodoListItem = (id: string) => {
        todoData.deleteTodoItem(id).then((deletedId) => {
            const newTodoList = todoList.filter((item) => item.id !== deletedId);
            setTodoList(newTodoList);
        });
    };

    return { todoList, toggleTodoListItemStatus, addTodoListItem, deleteTodoListItem };
};