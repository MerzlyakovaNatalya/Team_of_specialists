import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserList } from '../components/usersList'
import { UserCard } from '../components/userСard'

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='user' element={<UserCard/>}/>
      </Routes>
    </>
  )
}
