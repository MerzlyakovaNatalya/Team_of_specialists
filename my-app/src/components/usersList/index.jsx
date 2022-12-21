import React from 'react'
import { useEffect, useState } from 'react'
import style from './UserList.module.scss'
import axios from 'axios'
import { Loader } from '../loader'
import { Error } from '../error'

export const UserList = () => {

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getUser() {
    
    setLoading(true);
    setError(false);

    try {
      const response = await axios.get('https://reqres.in/api/users?page=2');
      console.log(response);
      setLoading(false);
    } catch (error) {
        setError(true);
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <div>
      {error && <Error />}
      {loading && <Loader />}
      <h1>UserList</h1>
    </div>
  )
}
