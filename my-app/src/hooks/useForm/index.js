import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRegisteredUser, setIsAuth } from '../../store/users/actions'
import { getIsAuth } from '../../store/users/selectors'

export const useForm = () => {

  const isAuth = useSelector(getIsAuth);
  const [valueName, setValueName] = useState("");
  const [valueMail, setValueMail] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const dispatch = useDispatch();

  const onChangeName = (event) => {
    event.preventDefault();
    setValueName(event.target.value);
  }

  const onChangeMail = (event) => {
    event.preventDefault();
    setValueMail(event.target.value);
  }

  const onChangePassword = (event) => {
    event.preventDefault();
    setValuePassword(event.target.value);
  }

  const onSend = (event) => {
    event.preventDefault();
    dispatch(getRegisteredUser(valueMail, valuePassword));
    dispatch(setIsAuth(true));
  }
    
  return [
    valueName,
    valueMail,
    valuePassword,
    onChangeName,
    onChangeMail, 
    onChangePassword,
    onSend
  ]
}
