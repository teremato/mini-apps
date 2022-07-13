import classes from './TodoInput.module.css'

export const TodoInput = ({addTask, SetUserInput}) => {

    return (
        <div className={classes.wrapper}>
            <form onSubmit={(e) => addTask(e)} className={classes.form}>
                <input onChange={(e) => SetUserInput(e.target.value)} placeholder="...add task"/>
                <button>ADD</button>
            </form>
        </div>
    )
}