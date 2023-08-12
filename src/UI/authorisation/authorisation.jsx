import React, { useRef, useState } from 'react'


import style from './authorisation.module.scss'



const Authorisation = (prop) => {
	const [paramRequest, setParamRequest] = useState({ 
		"id": 0,
		'first_name': '',
		'last_name': '',
		'password': '',
		'image': '',
		'nikName': ''
	 })

	const form = useRef()

	// const nameParam = {
	// 	0: ['first_name', 'last_name', 'password'],
	// 	1: ['nikName', 'image'],
	// 	2: ['nikName', 'password']
	// }



	const getParam = (index) => {
		let a = {}
		let state = true
		form.current.querySelectorAll('input').forEach(input => {
			if (input.value) {
				if (input.name == 'image') a[input.name] = input.files[0]
				else a[input.name] = input.value
			}
			else if (input.name == 'last_name' || input.name == 'image') input.name == 'last_name' ? a[input.name] = '' : ''
			else state = false

		})

		if (state) a['id'] = paramRequest.id + 1
		else state = true

		console.log({
			...paramRequest,
			...a
		});

		setParamRequest({
			...paramRequest,
			...a
		})

		fetch('http://localhost:5173/test').then(el=>console.log(el.text()))
		if (index + 1 >= 2) prop.isLogFun(true)
	}


	return (
		<div className={style.conteiner}>
			<div className={style.authorisationConteiner}>
				<form method='post' ref={form}>
					{
						paramRequest.id == 0 ? <AuthorisationLVL0 /> : paramRequest.id == 1 ? <AuthorisationLVL1 logoChar={paramRequest.first_name.charAt() + paramRequest.last_name.charAt()} /> : <Entry />
					}
				</form>
				<button onClick={() => getParam(paramRequest.id)} className={style.createBtn}>{paramRequest.id == 0 ? "Создать" : paramRequest.id == 1 ? "Продолжить" : "Войти"}</button>
				<div className={style.navigator}>
					<span className={style.entry}>{paramRequest.id < 2 ? "если есть аккаунт" : "если нет аккаунта"} <span onClick={() => setParamRequest({ "id": paramRequest.id < 2 ? 2 : 0 })} >{paramRequest.id < 2 ? "войти" : "создать"}</span> </span>
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