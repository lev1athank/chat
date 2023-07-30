import { useEffect, useRef } from 'react'
import style from './contacts.module.scss'

const Contacts = () => {
    const input = useRef()
    useEffect(() => {
        console.log(input);
    }, [])
    return (
        <div className={style.contacts}>
            <header>
                <span>контакты</span> <div className={style.search}><img src="./search.svg" alt="" /><input type="text" ref={input}/></div>
            </header>
        </div>
    )
}

export default Contacts