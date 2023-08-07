import React, { useRef, useState } from 'react'
import style from './authorisation.module.scss'



const Authorisation = (prop) => {
	const [paramRequest, setParamRequest] = useState({"id":0})
	
	const form = useRef()
	
	const nameParam = {
		0: ['first_name', 'last_name', 'password'],
		1: ['image', 'nikName'],
		2: ['nikName', 'password']
	}

	const setParam = (index, el) => {
		setParamRequest({
			"id": index + 1,
			...el
		})
	}

	const getParam = (index) => {
		let a = {}
		nameParam[index].forEach(el => {
			console.log(el.current.type);
			if (el.current.type == 'file')
				a[el] = form.current[el].files[0]
			else 
				a[el] = form.current[el].value
		});



		setParam(index, a)
	}

	console.log(paramRequest);

	return (
		<div className={style.conteiner}>
			<form method='post' ref={form}>
				{
					paramRequest.id == 0 ? <AuthorisationLVL0 btnState={getParam} refForm={form} /> : paramRequest.id == 1 ? <AuthorisationLVL1 btnState={getParam} entry={prop.isLogFun} /> : <Entry entry={prop.isLogFun} />
				}
			</form>
		</div>
	)
}


const AuthorisationLVL0 = (prop) => {



	return (
		<>
			<span className={style.title}>Регистрация</span>
			<input type="text" placeholder='Имя' name='first_name' required/>
			<input type="text" placeholder='Фамилия (необязательно)' name='last_name' />
			<input type="password" placeholder='Пароль' name='password' required/>
			<button onClick={() => prop.btnState(0)} className={style.createBtn}>Создать</button>
			<div className={style.navigator}>
				<span className={style.entry}>если есть аккаунт <span onClick={() => prop.btnState(2)} >войти</span> </span>
			</div>
		</>
	)
}

function getMeta(imgDrop){
	let url = window.URL.createObjectURL(imgDrop.target.files[0])
	let img = document.createElement('img')
	img.src = url
	console.log(img);
	console.log(img.naturalWidth);
   }

const AuthorisationLVL1 = (prop) => {


	return (
		<>
			<span className={style.title}>Создания профиля</span>
			<div className={style.imgLoad}>
				<span className={style.imgLoadTitle}>Фото профиля <span>(необезательно)</span></span>
				<div className={style.imgLoadZone}>
					<input className={style.inputImg} onChange={(val) => getMeta(val)} name="image" type="file" accept="image/*" />
				</div>
			</div>
			<input className={style.nameProf} type="text" placeholder='Имя профиля' name='nikName' required/>
			<button className={style.createBtn} onClick={() => prop.btnState(1)} >Продолжить</button>
		</>
	)
}


const Entry = (prop) => {
	return (
		<>
			<span className={style.title}>Вход</span>
			<input className={style.nameProf} type="text" placeholder='Имя профиля' name='nikName' required/>
			<input type="password" placeholder='Пароль' name='password'/>
			<button className={style.createBtn} onClick={() => prop.btnState(2)} >Войти</button>
		</>
	)
}



export default Authorisation