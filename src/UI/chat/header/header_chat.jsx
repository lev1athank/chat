import React from 'react'
import style from './header_chat.module.scss'
import { useSelector } from 'react-redux'

const Header = () => {
	const { user } = useSelector(state => state.dataUser)
	return (
		<div className={style.header}>
			<div className={style.infa}>
				{
					Object.values(user).length ?
						<> <img src="/user_logo/leviathan.png" alt="icon" /> {user.first_name + " " + user.last_name} </> :
						<></>
				}
			</div>
		</div>
	)
}

export default Header