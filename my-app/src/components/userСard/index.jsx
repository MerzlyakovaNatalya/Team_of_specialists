import React from 'react'
import style from './UserCard.module.scss'

export const UserCard = (props) => {
    const {avatar} = props
    return (
        <div>
            <img src={avatar} alt="photo" />
        </div>
    )
}
