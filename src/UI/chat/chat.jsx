import style from './chat.module.scss'
import Header from './header/header_chat'
import Chat_Zone from './chat_zone/chat_zone'
import Input_Zone from './Input_zone/input_zone'

const Chat = () => {
	return (
		<div className={style.chat_zone}>
			<div className={style.chat}>
				<Header />
				<Chat_Zone />
				<Input_Zone />
			</div>
		</div>
	)
}

export default Chat
