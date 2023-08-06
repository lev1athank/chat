import React from 'react'
import style from './chat_zone.module.scss'
import Message from './message/message'

const Chat_Zone = () => {
  return (
    <div className={style.chat_Zone}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Chat_Zone