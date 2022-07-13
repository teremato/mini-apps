import classes from './Header.module.css'

export const Header = () => {
    return(
        <header className={classes.header}>
            <div className={classes.name}>ToDo</div>
        </header>
    )
}