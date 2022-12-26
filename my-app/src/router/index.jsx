import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserList } from '../components/usersList'
import { UserCard } from '../components/userCard'

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/:userId" element={<UserCard />} />
      </Routes>
    </>
  )
}
