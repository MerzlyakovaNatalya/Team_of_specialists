import React from 'react'
import style from './UserCard.module.scss'
import { useParams } from 'react-router-dom'
import phone from '../../image/phone.png'
import email from '../../image/email.png'
import { useUserCard } from '../../hooks/useUserCard'

export const UserCard = () => {
  const { userId } = useParams()
  const [userFromStorage, harkBack, getExit] = useUserCard(userId)

  return (
    <div className={style.wrap}>
      <div className={style.header}>
        <div className={style.wrap_all_button}>
          <button className={style.button} onClick={harkBack}>
            Назад
          </button>
          <button className={style.button_exit} onClick={getExit}>
            Выход
          </button>
        </div>
        <div className={style.wrap_user}>
          <img
            src={userFromStorage.avatar}
            alt="avatar"
            className={style.img_avatar}
          ></img>
          <div className={style.wrap_name}>
            <h1 className={style.title}>
              {userFromStorage.first_name} {userFromStorage.last_name}
            </h1>
            <p className={style.text}>Партнер</p>
          </div>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.wrap_text}>
          <p className={style.text_content}>
            Клиенты видят в нем эксперта по вопросам разработки комплексных
            решений финансовых продуктов, включая такие аспекты, как
            организационная структура, процессы, аналитика и ИТ-компоненты. Он
            помогает клиентам лучше понимать структуру рисков их бизнеса,
            улучшать процессы за счет применения новейших технологий и
            увеличивать продажи, используя самые современные аналитические
            инструменты.
          </p>
          <p className={style.text_content}>
            В работе с клиентами недостаточно просто решить конкретную проблему
            или помочь справиться с трудностями. Не менее важно уделять внимание
            обмену знаниями: "Один из самых позитивных моментов — это осознание
            того, что ты помог клиенту перейти на совершенно новый уровень
            компетентности, уверенность в том, что после окончания проекта у
            клиента есть все необходимое, чтобы дальше развиваться
            самостоятельно".
          </p>
          <p className={style.text_content}>
            Помимо разнообразных проектов для клиентов финансового сектора,
            Сорин ведет активную предпринимательскую деятельность. Он является
            совладельцем сети клиник эстетической медицины в Швейцарии,
            предлагающей инновационный подход к красоте, а также инвестором
            других бизнес-проектов.
          </p>
        </div>
        <div className={style.contacts}>
          <p>
            <img src={phone} alt="phone" className={style.img_contacts}></img>
            <strong>+7 (954) 333-44-55</strong>
          </p>
          <p>
            <img src={email} alt="email" className={style.img_contacts}></img>
            <strong>{userFromStorage.email}</strong>
          </p>
        </div>
  </div>
    </div>
  )
}
