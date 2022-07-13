import classes from './TodoList.module.css'
import { useSelector } from 'react-redux/'
import { TodoItem } from '../TodoItem/TodoItem'

export const TodoList = ({ToggleTodo, RemoveTodo}) => {
    const todos = useSelector(state => state.todos.todos)
    const visisonMode = useSelector(state => state.vision.vision)

    const TitleMode = () => {
        if (visisonMode === 'VISION_COMPLATE') return "Complate todos"
        else if(visisonMode === 'VISION_NOT_COMPLATE') return "Not complate todos"
        else return "All todos"
    }

    return (
        <div>
            <div className={classes.title}>{TitleMode()}</div>
            <div className={classes.list}>
                {
                    todos.map((todo) => {
                        if (visisonMode === 'VISION_COMPLATE'){
                            if(todo.complate === true){
                                return <TodoItem todo={todo}
                                toggleTodo={ToggleTodo}
                                removeTodo={RemoveTodo}/>
                            }
                        }
                        else if (visisonMode === 'VISION_NOT_COMPLATE'){
                            if(todo.complate === false){
                                return <TodoItem todo={todo}
                                toggleTodo={ToggleTodo}
                                removeTodo={RemoveTodo}/>
                            }
                        }
                        else{
                            return <TodoItem todo={todo}
                            toggleTodo={ToggleTodo}
                            removeTodo={RemoveTodo}/>
                        }
                    })
                }
            </div>
        </div>
    )
}