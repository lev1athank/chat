import style from './user.module.scss'
const User = () => {
    return (
        <div className={style.user_plate}>
            <img src="/user_logo/leviathan.png" alt="" />
            <span className={style.count_sms}>99+</span>
            <div className={style.user_infa}>
                <span className={style.user_name}>Пархоменко Никита</span>
                <span className={style.last_message}>как дела? asdasdasdasdasdasdadasd</span>
            </div>
        </div>
    )
}

export default User