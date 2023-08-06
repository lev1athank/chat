import React from 'react'
import style from './message.module.scss'

const Message = () => {
    return (
        <div className={style.messZone + " " + style.myMess}>
            <div className={style.message}>

                <div className={style.imgBox}><img src="/user_logo/leviathan.png" alt="" /></div>
                <div className={style.conteiner}>
                    <div className={style.infa}>Пархоменко Никита</div>
                    <div className={style.text}>много текста много текстамного текстамного текстамного текстамного текстамного текстамного текстамного текстамного текста</div>
                </div>
            </div>
        </div>
    )
}

export default Message