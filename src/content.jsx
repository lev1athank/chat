import Contacts from './UI/contacts/contacts'
import Chat from './UI/chat/chat'
import Authorisation from './UI/authorisation/authorisation'
import { useState } from 'react'
// import Setting from './UI/setting/setting'

const content = () => {
    const [isLog, setIsLog] = useState(false)

    return (
        <>
            {
                isLog ?
                    <>
                        <Contacts />
                        <Chat />
                    </>
                    :
                    <Authorisation isLogFun={setIsLog}/>
            }

        </>
    )
}

export default content