import { useEffect, useRef, useState } from 'react'
import style from './contacts.module.scss'
import User from './User/user'
const Contacts = () => {
    const [active, setActive] = useState(false)
    const openClose = () => {
        setActive(current => !current);
    }

    return (
        <div className={style.contacts + (active ? " " + style.close : "")}>
            <header className={style.header}>
                <div className={style.setting}><img src="./setting.svg" alt="" /></div>
                <div className={style.search}>
                    <img src="./search.svg" alt="" />
                    <input type="text" />
                </div>
                <svg className={style.closeBTN} onClick={openClose} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg>
            </header>
            <div className={style.users_list}>
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
        </div>
    )
}

export default Contacts