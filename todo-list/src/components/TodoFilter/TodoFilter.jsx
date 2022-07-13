import { useDispatch } from 'react-redux'
import { visionAll, visionComplate, visionNotComlate } from '../../redux/action';
import classes from './TodoFilter.module.css'

export const TodoFilter = () => {
    const dispatch = useDispatch();


    return (
        <div className={classes.wrapper}>
            <button onClick={() => dispatch(visionAll())} 
            className={classes.btn + " " + classes.up_btn}>all
            </button>
            <button onClick={() => dispatch(visionComplate())} 
            className={classes.btn}>ready - made
            </button>
            <button onClick={() => dispatch(visionNotComlate())} 
            className={classes.btn + " " + classes.down_btn}>not ready
            </button>
        </div>
    )
}