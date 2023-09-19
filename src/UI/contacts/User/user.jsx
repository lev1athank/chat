import { useEffect, useState } from 'react'
import style from './user.module.scss'
import axios from 'axios'
import { headerSetting } from '../../../settings/headerSetting'
import { useDispatch } from 'react-redux'
import { actions } from './../../../store/messageUser/messageUser'

const User = ({ dataUser }) => {
    const [messages, setMessages] = useState([])
    const dispatch = useDispatch()

    const getMessage = () => {
        const getMessages = async () => {
            const {messages} = (await axios.post('http://localhost:5051/getMessages', { id: dataUser.id }, {headers: headerSetting})).data
            dispatch(actions.setUserData({dataUser, messages}))

        }

        getMessages()
    }

    return (
        <div className={style.user_plate} onClick={getMessage}>
            <img src="/user_logo/leviathan.png" alt="" />
            <span className={style.count_sms}>99+</span>
            <div className={style.user_infa}>
                <span className={style.user_name}>{`${dataUser.first_name} ${dataUser.last_name}`}</span>
                <span className={style.last_message}>как дела? asdasdasdasdasdasdadasd</span>
            </div>
        </div>
    )
}

export default User