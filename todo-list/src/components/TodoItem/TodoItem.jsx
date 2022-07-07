import React from "react"

import classes from "./TodoItem.module.css"


export const TodoItem = ({todo, isComplate, removeTask}) => {

    return (
        <div className={classes.item}>
            <div>{todo.task}</div>
            <div className={classes.controller}>
                <div className={classes.icon_ready} onClick={() => isComplate(todo.id)}>
                    {(todo.complate) ? <ion-icon style={{color: "gray"}} name="checkmark-done-outline"></ion-icon> : <ion-icon style={{color: "black"}} name="checkmark-outline"></ion-icon>}
                </div>
                <div className={classes.icon_remove} onClick={() => removeTask(todo.id)}>
                    <ion-icon name="close-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}