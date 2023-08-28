import Contacts from './UI/contacts/contacts'
import Chat from './UI/chat/chat'
import Authorisation from './UI/authorisation/authorisation'
import { useState } from 'react'
// import Setting from './UI/setting/setting'

const connectAcc = async () => {
    const AccessToken = document.cookie.split("; ")[0].split("=")[1]

    const responsData = await fetch(`http://localhost:5051/${dataAuth.id < 2 ? 'registration' : 'login'}`, {
			credentials: 'include',
			method: "POST",
			headers: {
				"Access-Control-Allow-Methods": "POST",
				"Access-Control-Request-Headers": "Content-Type",
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json;charset=utf-8",
                "authorization": window.Cookies
			}
		})
}


const content = () => {
    const [isLog, setIsLog] = useState(false)
    console.log(window.Cookies);


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