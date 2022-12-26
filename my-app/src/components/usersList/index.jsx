import React from 'react'
import { Link } from 'react-router-dom'
import style from './UserList.module.scss'
import { Loader } from '../loader'
import { Error } from '../error'
import { UsersCard } from '../usersСard'
import { Modal } from '../modal'
import { Register } from '../register'
import { useUsersList } from '../../hooks/useUsersList'

export const UserList = () => {
  const [loading, error, users, isAuth, getExit] = useUsersList()
  return (
    <div className={style.wrap}>
      <div className={style.header}>
        <button className={style.button} onClick={getExit}>
          Выход
        </button>
        <h1 className={style.title}>Наша команда</h1>
        <p className={style.text}>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.{' '}
        </p>
      </div>
      {error && <Error />}
      {loading && <Loader />}
      <div className={style.content}>
        {users.map((item) => (
          <Link to={`/${item.id}`} className={style.link} key={item.id}>
            <UsersCard {...item} />
          </Link>
        ))}
      </div>
      {isAuth && (
        <Modal>
          <Register />
        </Modal>
      )}
    </div>
  )
}
