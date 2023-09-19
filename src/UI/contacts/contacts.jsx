import { useEffect, useState } from 'react'
import style from './contacts.module.scss'
import User from './User/user'
import axios from 'axios'
import { headerSetting } from '../../settings/headerSetting'
const Contacts = () => {
    const [active, setActive] = useState(false)
    const [users, setUsers] = useState([])
    const [IsLoding, setIsLoding] = useState(true)
    const openClose = () => {
        setActive(current => !current);
    }

    useEffect(() => {
        const AccessToken = document.cookie.split("; ")[0].split("=")[1]
    
        const serchUser = async () => {
            const users = await axios.get('http://localhost:5051/getAllUserForChat', {headers:headerSetting})
            return setUsers(users.data)
        }
        serchUser()
    }, [])

    useEffect(() => {
        setIsLoding(false)
    }, [])

    
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
                {
                    IsLoding ? <></> :
                    users.map(user => <User key={user.id} dataUser={user}/>)
                }
            </div>
        </div>
    )
}

export default Contacts