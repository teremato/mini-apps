import classes from './TodoItem.module.css'

export const TodoItem = ({todo, toggleTodo, removeTodo}) => {
    return (
        <div className={classes.wrapper}>
            <div>{todo.text}</div>
            <div className={classes.btn_container}>
                <div onClick={() => toggleTodo(todo.id)} className={classes.icon_ready}>
                    {
                        (todo.complate === true) ? 
                        <ion-icon name="checkmark-done-outline"></ion-icon> : <ion-icon name="checkmark-outline"></ion-icon>
                    }
                </div>
                <div onClick={() => removeTodo(todo.id)} className={classes.icon_remove}>
                    <ion-icon name="close-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}