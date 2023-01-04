import { RefObject } from "react";

// the component that add a todo item
export const TodoAdd = (
    { buttonText, inputEl, handleAddTodoListItem }: 
    { 
        buttonText: string; 
        inputEl: RefObject<HTMLTextAreaElement>;
        handleAddTodoListItem: () => void;
    }) => {
        return (
            <>
                <textarea ref={ inputEl } />
                <button onClick={ handleAddTodoListItem }>{ buttonText }</button>
            </>
        );
};