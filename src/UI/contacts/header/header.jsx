import style from './header.module.scss'

const Header = ({isClose, eventCloseOpen}) => {
    return (
        <header className={style.header}>
            <div className={style.search}><img src="./search.svg" alt="" /><input type="text" /></div>
            <svg className={style.close} onClick={eventCloseOpen} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
        </header>
    )
}

export default Header