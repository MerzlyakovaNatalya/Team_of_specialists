import React from 'react'
import style from './UsersCard.module.scss'
import likeImg from '../../image/like.png'
import noLikeImg from '../../image/noLike.png'
import { useUsersCard } from '../../hooks/useUsersCard'

export const UsersCard = (props) => {
  const { id, avatar, first_name, last_name, like } = props
  const [getLike] = useUsersCard(id, like)

  return (
    <div className={style.wrap}>
      <div style={{ width: "124px", height: "124px"}}>
      <img src={avatar} alt="photo" className={style.img_avatar}/>
      </div>
      <p className={style.text}>
        {first_name} {last_name}{' '}
      </p>
      <button className={style.button} onClick={(event) => getLike(event)}>
        {like ? (
          <img src={likeImg} alt="like" className={style.img_like} />
        ) : (
          <img src={noLikeImg} alt="like" className={style.img_like} />
        )}
      </button>
    </div>
  )
}
