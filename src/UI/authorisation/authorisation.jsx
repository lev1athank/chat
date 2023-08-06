import React, { useState } from 'react'
import style from './authorisation.module.scss'



const Authorisation = (prop) => {
	const [state, setstate] = useState(0)

	return (
		<div className={style.conteiner}>
			<form action="">
				{
					state == 0 ? <AuthorisationLVL0 btnState={setstate} /> : state == 1 ? <AuthorisationLVL1 btnState={setstate} entry={prop.isLogFun} /> : <Entry entry={prop.isLogFun} /> 
				}
			</form>
		</div>
	)
}


const AuthorisationLVL0 = (prop) => {
	return (
		<>
			<span className={style.title}>Регистрация</span>
			<input className={style.first_name} type="text" placeholder='Имя' />
			<input className={style.last_name} type="text" placeholder='Фамилия' />
			<input className={style.last_name} type="password" placeholder='Пароль' />
			<button onClick={()=>prop.btnState(1)} className={style.createBtn}>Создать</button>
			<div className={style.navigator}>
				<span className={style.entry}>если есть аккаунт <span onClick={()=>prop.btnState(3)} >войти</span> </span>
			</div>
		</>
	)
}
const AuthorisationLVL1 = (prop) => {
	return (
		<>
			<span className={style.title}>Создания профиля</span>
			<div className={style.imgLoad}>
				<span className={style.imgLoadTitle}>Фото профиля <span>(необезательно)</span></span>
				<input className={style.inputImg} name="image_uploads" type="file" accept="image/*"  />
			</div>
			<input className={style.nameProf} type="text" placeholder='Имя профиля' />
			<button className={style.createBtn} onClick={()=>prop.entry(true)} >Продолжить</button>
		</>
	)
}


const Entry = (prop) => {
	return (
		<>
			<span className={style.title}>Вход</span>
			<input className={style.nameProf} type="text" placeholder='Имя профиля' />
			<input className={style.last_name} type="password" placeholder='Пароль' />
			<button className={style.createBtn} onClick={()=>prop.entry(true)} >Войти</button>
		</>
	)
}



export default Authorisation