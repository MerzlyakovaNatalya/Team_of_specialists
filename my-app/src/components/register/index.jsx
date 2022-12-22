import React from 'react'
import style from './Register.module.scss'
import look from '../../image/look.png'
import { useForm } from '../../hooks/useForm'

export const Register = () => {

  const [
    valueName,
    valueMail,
    valuePassword,
    onChangeName,
    onChangeMail, 
    onChangePassword,
    onSend
  ] = useForm();

    return (
        <div className={style.wrap}>
            <div className={style.content}>
                <h2 className={style.title}>Регистрация</h2>
                <form 
                  className={style.form} 
                  onSubmit={(event) => onSend(event)}>
                <p className={style.text}>Имя</p>
                <input 
                  type="text" 
                  className={style.input}
                  value={valueName}
                  onChange={onChangeName}/>
                <p className={style.text}>Электронная почта</p>
                <input 
                  type="text" 
                  className={style.input}
                  value={valueMail}
                  onChange={onChangeMail}/>
                <p className={style.text}>Пароль</p>
                <div className={style.wrap_input_password}>
                   <input 
                     type="text" 
                     className={style.input}
                     placeholder="******"
                     onChange={onChangePassword}
                     value={valuePassword}/>
                   <button className={style.button_password}>
                     <img src={look} alt=''/>
                   </button>
                </div>
                <p className={style.text}>Подтвердите пароль</p>
                <div className={style.wrap_input_password}>
                   <input 
                     type="text" 
                     className={style.input}
                     placeholder="******"
                     />
                   <button className={style.button_password}>
                     <img src={look} alt=''/>
                   </button>
                </div>
                <button className={style.button} type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    )
}
