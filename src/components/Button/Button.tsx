import React, { FC } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  text: string
}

const Button: FC<ButtonProps> = ({ text }) => {

  return (
    <button 
      type="submit"
      className={styles.button}
    >
      {text}
    </button>
  )
}

export default Button