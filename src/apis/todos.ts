import axios from "axios";
import { Todo } from "../types/Todo";

const todoListUrl: string = "http://localhost:3100/todos";

// get all todoList items
export const getAllTodoItems = async () => {
    const response = await axios.get(todoListUrl);
    return response.data;
}

// post a todo item
export const addTodoItem = async (todo: Todo) => {
    const response = await axios.post(todoListUrl, todo);
    return response.data;
}

// delete a todo item
export const deleteTodoItem = async (id: string) => {
    await axios.delete(`${todoListUrl}/${id}`);
    return id;
}

// update a todo item
export const updateTodoItem = async (id: string, todo: Todo) => {
    const response = await axios.put(`${todoListUrl}/${id}`, todo);
    return response.data;
}