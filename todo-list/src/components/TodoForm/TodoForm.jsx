import React from "react";
import { useState } from "react";
import { TodoFooter } from "../TodoFooter/TodoFooter";
import { TodoItem } from "../TodoItem/TodoItem";

import classes from "./TodoForm.module.css"

export const TodoForm = () => {

    const [todos, setTodos] = useState([])
    const [inputUser, setInputUser] = useState('')

    const AddTask = (e) => {
        e.preventDefault();

        const newTodo = {
            id: todos.length + 1,
            task: inputUser,
            complate: false
        }

        setTodos([...todos, newTodo])
        setInputUser("")

        console.log(todos)
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const isComplate = (id) => {
        setTodos([
            ...todos.map(todo =>
                todo.id === id ? {...todo, complate: !todo.complate} : {...todo}
            )
        ])
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.name}>TODO</div>
            <form className={classes.form} onSubmit={AddTask}>
                <div className={classes.container}>
                    <input onChange={(e) => setInputUser(e.currentTarget.value)} value={inputUser}/>
                    <button>ADD</button>
                </div>
            </form>
            <div className={classes.tasks}>Tasks: {todos.length}</div>
            <div className={classes.list}>
            {
                todos.map((item) => {
                    return <TodoItem
                    key={item.id}
                    todo={item}
                    isComplate={isComplate}
                    removeTask={removeTask}
                    />
                })
            }
            </div>
            <TodoFooter/>
        </div>
    )
}