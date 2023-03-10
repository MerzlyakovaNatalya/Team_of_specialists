import React from 'react'
import style from './UserList.module.scss'
import { Link } from 'react-router-dom'
import { Loader } from '../loader'
import { Error } from '../error'
import { UsersCard } from '../usersСard'
import { Modal } from '../modal'
import { Register } from '../register'
import { useUsersList } from '../../hooks/useUsersList'

export const UserList = () => {
  const [
    loading,
    error,
    users,
    isAuth,
    isModel,
    isAllUsers,
    getCountUsers,
    getLoginOrExit,
  ] = useUsersList()

  return (
    <div className={style.wrap}>
      <div className={style.header}>
        <button className={style.button} onClick={getLoginOrExit}>
          {isAuth ? 'Выход' : 'Вход'}
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
        {isAuth ? (
          <>
            {users
              .filter((i, index) => index < 8)
              .map((item) => (
                <Link to={`/${item.id}`} className={style.link} key={item.id}>
                  <UsersCard {...item} />
                </Link>
              ))}
            {isAllUsers &&
              users
                .filter((i, index) => index > 8)
                .map((item) => (
                  <Link to={`/${item.id}`} className={style.link} key={item.id}>
                    <UsersCard {...item} />
                  </Link>
                ))}
            <div className={style.wrapButton}>
              <button className={style.addUsers} onClick={getCountUsers}>
                Показать еще
              </button>
            </div>
          </>
        ) : (
          <p className={style.text} style={{ color: "#44014C"}}>
            Список пользователей доступен только для зарегистрированных
            пользователей.
          </p>
        )}
      </div>
      {isModel && (
        <Modal>
          <Register />
        </Modal>
      )}
    </div>
  )
}
