import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../action";

const initTodo = {
    todos: []
}

export const todoApp = (state = initTodo, action) => {
    switch(action.type){
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.todo]}
        case TOGGLE_TODO:
            return {...state, todos: state.todos.map((todo) => {
                return (todo.id === action.id) ? Object.assign({}, todo, {complate: !todo.complate}) : todo
            })}
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter((todo) => todo.id !== action.id)}
        default:
            return state;
    }
}