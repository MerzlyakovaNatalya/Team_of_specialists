import React from 'react'
import { useEffect, useState } from 'react'
import style from './UserList.module.scss'
import { Loader } from '../loader'
import { Error } from '../error'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/users/actions'
import { getUsersData, getError, getLoading } from '../../store/users/selectors'
import { UserCard } from '../userСard'
import { Modal } from '../modal'
import { Register } from '../register'

export const UserList = () => {

  const users = useSelector(getUsersData);
  const error = useSelector(getError);
  const loading = useSelector(getLoading);
  const [isAuth, setIsAuth] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers)
  }, [])

  return (
    <div className={style.wrap}>
      <div className={style.header}>
       <button className={style.button}>Выход</button>
       <h1 className={style.title}>Наша команда</h1>
       <p className={style.text}>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p>
      </div>
      {error && <Error />}
      {loading && <Loader />}
      <h1>UserList</h1>
      {users.map((item) => (
        <UserCard key={item.id} {...item}/>
      ))}
      {isAuth && <Modal>
          <Register/>
        </Modal>}
    </div>
  )
}
