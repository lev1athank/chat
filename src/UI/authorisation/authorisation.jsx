import React, { useRef, useState } from 'react'


import style from './authorisation.module.scss'



const Authorisation = (prop) => {
	const [dataAuth, setDataAuth] = useState({
		id: 0, data: {
			'first_name': '',
			'last_name': '',
			'password': '',
			'image': '',
			'imageChar': '',
			'nikName': ''
		}
	})
	const form = useRef()

	const sendDataUser = async () => {

		const responsData = await fetch(`http://localhost:5051/${dataAuth.id < 2 ? 'registration' : 'login'}`, {
			credentials: 'include',
			method: "POST",
			headers: {
				"Access-Control-Allow-Methods": "POST",
				"Access-Control-Request-Headers": "Content-Type",
				"Access-Control-Allow-Origin": "*",
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(dataAuth.data)
		})
		const varifyEntry = await responsData.json()
		if(varifyEntry) prop.isLogFun(true)

	}

	const getParam = () => {
		let state = true
		let data = dataAuth.data
		form.current.querySelectorAll('input').forEach(input => {
			if (input.value) {
				if (input.name == 'image') data[input.name] = input.files[0]
				else {
					data[input.name] = input.value
				}
			}
			else if (input.name == 'last_name' || input.name == 'image') input.name == 'last_name' ? data[input.name] = '' : ''
			else state = false

		})

		if (dataAuth.id == 0) {
			data.imageChar = data["first_name"].charAt() + data["last_name"].charAt()
		}

		if (dataAuth.id + 1 >= 2) sendDataUser()
		else if (state) setDataAuth(prev => {
			return {
				...prev,
				id: prev.id + 1,
				data: {
					...data
				}
			}
		})
		else state = true



	}


	return (
		<div className={style.conteiner}>
			<div className={style.authorisationConteiner}>
				<form method='post' ref={form}>
					{
						dataAuth.id == 0 ? <AuthorisationLVL0 /> : dataAuth.id == 1 ? <AuthorisationLVL1 logoChar={dataAuth.data.imageChar} /> : <Entry />
					}
				</form>
				<button onClick={getParam} className={style.createBtn}>{dataAuth.id == 0 ? "Создать" : dataAuth.id == 1 ? "Продолжить" : "Войти"}</button>
				<div className={style.navigator}>
					<span className={style.entry}>{dataAuth.id < 2 ? "если есть аккаунт" : "если нет аккаунта"} <span onClick={() => setDataAuth(prev => { return { ...prev, id: prev.id < 2 ? 2 : 0 } })} >{dataAuth.id < 2 ? "войти" : "создать"}</span> </span>
				</div>
			</div>
		</div>
	)
}


const AuthorisationLVL0 = () => {
	return (
		<>
			<span className={style.title}>Регистрация</span>
			<input type="text" placeholder='Имя' name='first_name' />
			<input type="text" placeholder='Фамилия (необязательно)' name='last_name' />
			<input type="password" placeholder='Пароль' name='password' />
		</>
	)
}


const AuthorisationLVL1 = ({ logoChar }) => {
	const ImgRef = useRef()
	const getMeta = (val) => {
		const url = window.URL
		ImgRef.current.src = url.createObjectURL(val.target.files[0])

	}


	return (
		<>
			<span className={style.title}>Создания профиля</span>
			<div className={style.imgLoad}>
				<span className={style.imgLoadTitle}>Фото профиля <span>(необезательно)</span></span>
				<div className={style.imgLoadZone}>
					<div className={style.imgZone}>
						<input className={style.inputImg} onChange={(val) => getMeta(val)} type="file" name="image" accept="image/*" />
					</div>
					<img src="" alt="ssdfdf" ref={ImgRef} />
					<span className={style.logoChar}>{logoChar.toUpperCase()}</span>

				</div>
			</div>
			<input className={style.nameProf} type="text" placeholder='Имя профиля' name='nikName' required />
		</>
	)
}


const Entry = () => {
	return (
		<>
			<span className={style.title}>Вход</span>
			<input className={style.nameProf} type="text" placeholder='Имя профиля' name='nikName' />
			<input type="password" placeholder='Пароль' name='password' />
		</>
	)
}



export default Authorisation