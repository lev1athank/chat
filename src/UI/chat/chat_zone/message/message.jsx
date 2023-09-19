import React from 'react'
import style from './message.module.scss'

const Message = ({data, senderId}) => {
    console.log(data.sender != senderId);
    return (
        <div className={style.messZone + (data.sender != senderId ? " " + style.myMess : "")}>
            <div className={style.message}>
                <div className={style.imgBox}><img src="/user_logo/leviathan.png" alt="" /></div>
                <div className={style.conteiner}>
                    {/* <div className={style.infa}>Пархоменко Никита</div> */}
                    <div className={style.text}>{data.message}</div>
                </div>
            </div>
        </div>
    )
}

export default Message