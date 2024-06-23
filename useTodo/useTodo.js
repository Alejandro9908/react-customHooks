import {useEffect, useReducer} from "react";
import {todoReducer} from "./todoReducer.js";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer( todoReducer, [], init );

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos) || [] );
    }, [todos]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'ADD_TODO',
            payload: todo,
        }
        dispatch(action);
    }

    const handleRemoveTodo = (id) => {
        const action = {
            type: 'REMOVE_TODO',
            payload: id,
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: 'TOGGLE_TODO',
            payload: id,
        }
        dispatch(action);
    }

    return {
        todos,
        countTodos: todos.length,
        pendingTodos: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo
    };
}