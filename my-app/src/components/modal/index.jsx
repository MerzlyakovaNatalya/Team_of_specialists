import React from 'react'
import style from './Modal.module.scss'

export const Modal = ({children}) => {
    return (
        <div className={style.modal}>
            <div className={style.modal_content}>
                {children}
            </div>
        </div>
    )
}
