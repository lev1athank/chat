import { useEffect, useRef, useState } from 'react'
import style from './contacts.module.scss'
import User from './User/user'
import Header from './header/header'
const Contacts = () => {
    const [active, setActive] = useState(false)
    const contactsClass = style.contacts + ( active ? " " + style.close : "")
    const openClose = () => {
        setActive(current => !current);
        console.log(contactsClass);
        
    }

    return (
        <div className={contactsClass}>
            <Header isClose={active} eventCloseOpen={openClose} />
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