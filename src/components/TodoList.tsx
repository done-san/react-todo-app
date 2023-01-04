import { TodoTitle } from "./TodoTitle";
import { TodoItem } from "./TodoItem";
import { Todo } from "../types/Todo";

export const TodoList = (
    {
        todoList, 
        toggleTodoListItemStatus, 
        deleteTodoListItem, 
        title, 
        as,
    }:
    {
        todoList: Todo[];
        toggleTodoListItemStatus: (id: string, status: boolean) => void;
        deleteTodoListItem: (id: string) => void;
        title: string;
        as: string;
    }) => {
        return (
            <>
                { todoList.length !== 0 && (
                    <>
                        { todoList.length !== 0 && (
                            <>
                                <TodoTitle title={ title } as={ as } />
                                <ul>
                                    { todoList.map((todo) => (
                                        <li key={ todo.id }>
                                            <TodoItem 
                                                todo={ todo } 
                                                key={ todo.id } 
                                                toggleTodoListItemStatus={ toggleTodoListItemStatus } 
                                                deleteTodoListItem={ deleteTodoListItem } 
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </>
                )}
            </>
        );
};
