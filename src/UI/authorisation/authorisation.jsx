import React, { useRef, useState } from 'react'
import style from './authorisation.module.scss'



const Authorisation = (prop) => {
	const [paramRequest, setParamRequest] = useState({ "id": 0 })

	const form = useRef()

	const nameParam = {
		0: ['first_name', 'last_name', 'password'],
		1: ['nikName', 'image'],
		2: ['nikName', 'password']
	}


	const getParam = (index) => {
		let a = {}
		nameParam[index].forEach(el => {
			a[el] = form.current[el].value
			if (form.current[el].type == 'file')  a.logo =  form.current[el].files[0]
		});
		a.id = index + 1
		setParamRequest({
			...paramRequest,
			...a
		})
		if (index + 1 >= 2) prop.isLogFun(true)
	}
	console.log(paramRequest);


	return (
		<div className={style.conteiner}>
			<div className={style.authorisationConteiner}>
				<form method='post' ref={form}>
					{
						paramRequest.id == 0 ? <AuthorisationLVL0 /> : paramRequest.id == 1 ? <AuthorisationLVL1 logoChar={(paramRequest.first_name)[0].toUpperCase() + (paramRequest.last_name)[0].toUpperCase()} /> : <Entry />
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


const AuthorisationLVL1 = ({logoChar}) => {
	const ImgRef = useRef()
	console.log(logoChar);


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
						<input className={style.inputImg} onChange={(val) => getMeta(val)} type="file" name="image" accept="image/*"/>
					</div>
					<img src="" alt="ssdfdf" ref={ImgRef}  />
					<span className={style.logoChar}>{logoChar}</span>

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