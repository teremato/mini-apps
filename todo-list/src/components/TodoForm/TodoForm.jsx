import { useState } from "react"
import { useDispatch} from "react-redux"
import { addTodo, removeTodo, toggleTodo } from "../../redux/action"
import { TodoFilter } from "../TodoFilter/TodoFilter"
import { TodoInput } from "../TodoInput/TodoInput"
import { TodoList } from "../TodoList/TodoList"

import classes from './TodoForm.module.css'

export const TodoForm = () => {

    const dispatch = useDispatch();
    const [inputUser, SetUserInput] = useState();

    const addTask = (e) => {
        e.preventDefault();
        const newTodo = {
            text: inputUser,
            id: Date.now(),
            complate: false
        }
        dispatch(addTodo(newTodo))
    }
    const ToggleTodo = (id) => {dispatch(toggleTodo(id))}
    const RemoveTodo = (id) => {dispatch(removeTodo(id))}

    return(
        <div className={classes.wrapper_pos}>
            <div className={classes.wrapper}>
                <TodoInput
                    addTask={addTask}
                    SetUserInput={SetUserInput}/>
                <TodoFilter/>
            </div>
            <TodoList ToggleTodo={ToggleTodo} RemoveTodo={RemoveTodo}/>
        </div>
    )
}