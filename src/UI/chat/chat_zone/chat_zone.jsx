import React from 'react'
import style from './chat_zone.module.scss'
import Message from './message/message'
import { useSelector } from 'react-redux'

const Chat_Zone = () => {
	const {messages, user} = useSelector(state => state.dataUser)
	return (
		<div className={style.chat_Zone}>
			{ messages.map(messageData => <Message data={messageData} senderId={user.id} key={messageData.message_id}/>) }
		</div>
	)
}

export default Chat_Zone