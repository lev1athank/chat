import React from 'react'
import style from './header_chat.module.scss'

const Header = () => {
	return (
		<div className={style.header}>
			<div className={style.infa}>
				<img src="/user_logo/leviathan.png" alt="icon" /> Пархоменко Никита
			</div>
		</div>
	)
}

export default Header