import React from 'react'
import styles from './button.module.css'

const Button = ({ eventInc, name }) => {


    return (
        <button onClick={eventInc} className={styles.btn}>{name}</button>
    )
}

export default Button