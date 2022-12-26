import React from 'react'
import style from './Register.module.scss'
import look from '../../image/look.png'
import { useFormValidation } from '../../hooks/useFormValidation'

export const Register = () => {
  const [
    valueName,
    valueMail,
    valuePassword,
    valueCopyPassword,
    onChangeName,
    onChangeMail,
    onChangePassword,
    onChangeCopyPassword,
    onSend,
    emailDirty,
    passwordDirty,
    copyPasswordDirty,
    emailError,
    passwordError,
    copyPasswordError,
    formValid,
    blurHandler,
  ] = useFormValidation()

  return (
    <div className={style.wrap}>
      <div className={style.content}>
        <h2 className={style.title}>Регистрация</h2>
        <form className={style.form} onSubmit={(event) => onSend(event)}>
          <p className={style.text}>Имя</p>
          <input
            type="text"
            className={style.input}
            value={valueName}
            onChange={onChangeName}
          />
          <p className={style.text}>Электронная почта</p>
          <input
            type="text"
            className={style.input}
            value={valueMail}
            onChange={onChangeMail}
            name="email"
            onBlur={(e) => blurHandler(e)}
          />
          {emailDirty && emailError && (
            <div style={{ color: 'red' }}>{emailError}</div>
          )}
          <p className={style.text}>Пароль</p>
          <div className={style.wrap_input_password}>
            <input
              type="text"
              className={style.input}
              placeholder="******"
              onChange={onChangePassword}
              value={valuePassword}
              name="password"
              onBlur={(e) => blurHandler(e)}
            />
            <button className={style.button_password}>
              <img src={look} alt="" />
            </button>
          </div>
          {passwordDirty && passwordError && (
            <div style={{ color: 'red' }}>{passwordError}</div>
          )}
          <p className={style.text}>Подтвердите пароль</p>
          <div className={style.wrap_input_password}>
            <input
              type="text"
              className={style.input}
              placeholder="******"
              value={valueCopyPassword}
              onChange={onChangeCopyPassword}
              name="copyPassword"
              onBlur={(e) => blurHandler(e)}
            />
            <button className={style.button_password}>
              <img src={look} alt="" />
            </button>
          </div>
          {copyPasswordDirty && copyPasswordError && (
            <div style={{ color: 'red' }}>{copyPasswordError}</div>
          )}
          <button
            className={formValid ? style.button : style.no_button}
            type="submit"
            disabled={!formValid}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  )
}
