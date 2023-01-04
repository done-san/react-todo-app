import { useRef } from "react";
import { useTodo } from "../hooks/useTodo";
import { Todo } from "../types/Todo"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";

function App() {
    const { todoList, toggleTodoListItemStatus, addTodoListItem, deleteTodoListItem } = useTodo();
    const inputEl = useRef<HTMLTextAreaElement>(null);
    const handleAddTodoListItem = () => {
        if (inputEl.current?.value === "") {
            return;
        }
        addTodoListItem(inputEl.current!.value);
        inputEl.current!.value = "";
    };
    const notDoneList = todoList.filter((todo: Todo) => !todo.done);
    const doneList = todoList.filter((todo: Todo) => todo.done);

    return (
        <>
            <TodoTitle title="TODOリスト" as="h1" />
            <TodoAdd buttonText="追加" inputEl={ inputEl } handleAddTodoListItem={ handleAddTodoListItem } />
            <TodoList todoList={ notDoneList } toggleTodoListItemStatus={ toggleTodoListItemStatus } deleteTodoListItem={ deleteTodoListItem } title="未完了リスト" as="h2" />
            <TodoList todoList={ doneList } toggleTodoListItemStatus={ toggleTodoListItemStatus } deleteTodoListItem={ deleteTodoListItem } title="完了リスト" as="h2" />
        </>
    );
}

export default App;