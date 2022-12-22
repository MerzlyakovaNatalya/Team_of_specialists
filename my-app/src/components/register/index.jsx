import React from 'react'
import style from './Register.module.scss'
import look from '../../image/look.png'

export const Register = () => {
    return (
        <div className={style.wrap}>
            <div className={style.content}>
                <h2 className={style.title}>Регистрация</h2>
                <form className={style.form}>
                <p className={style.text}>Имя</p>
                <input type="text" className={style.input}/>
                <p className={style.text}>Электронная почта</p>
                <input type="text" className={style.input}/>
                <p className={style.text}>Пароль</p>
                <div className={style.wrap_input_password}>
                   <input 
                     type="text" 
                     className={style.input}
                     placeholder="******"/>
                   <button className={style.button_password}>
                     <img src={look} alt=''/>
                   </button>
                </div>
                <p className={style.text}>Подтвердите пароль</p>
                <div className={style.wrap_input_password}>
                   <input 
                     type="text" 
                     className={style.input}
                     placeholder="******"/>
                   <button className={style.button_password}>
                     <img src={look} alt=''/>
                   </button>
                </div>
                <button className={style.button}>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    )
}
