import React from 'react'
import style from './UserCard.module.scss'

export const UserCard = (props) => {
    const {avatar} = props
    console.log(avatar)
    return (
        <div>
            <img src={avatar} alt="photo" />
        </div>
    )
}
