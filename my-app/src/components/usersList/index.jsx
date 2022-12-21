import React from 'react'
import { useEffect, useState } from 'react'
import style from './UserList.module.scss'
import axios from 'axios'
import { Loader } from '../loader'
import { Error } from '../error'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/users/actions'
import { getUsersData, getError, getLoading } from '../../store/users/selectors'
import { UserCard } from '../userСard'

export const UserList = () => {

  const users = useSelector(getUsersData);
  const error = useSelector(getError);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers)
  }, [])

  return (
    <div>
      {error && <Error />}
      {loading && <Loader />}
      <h1>UserList</h1>
      {users.map((item) => (
        <UserCard key={item.id} {...item}/>
      ))}
    </div>
  )
}
