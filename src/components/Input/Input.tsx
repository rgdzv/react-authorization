import React, {FC, useState} from 'react'
import {UseFormRegister, Path, FieldError} from 'react-hook-form'
import {Inputs} from 'utils/interfaces'
import styles from './Input.module.scss'
import opened from '@images/opened.png'
import closed from '@images/closed.png'

interface Input {
  name: Path<Inputs>
  placeholder: string
  type: string
  register: UseFormRegister<Inputs>
  error: FieldError | undefined
}

const Input: FC<Input> = ({ type, placeholder, name, register, error }) => {

  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  const additionalInputStyle = {
    borderBottomColor: error ? '#ff0000' : '#ffffff',
    marginBottom: error && '0px'
  }

  return (
    <>
      {type === 'password' ? (
        <div className={styles.password}>
          <input
            {...register(name)}
            type={toggle ? 'text' : 'password'}
            placeholder={placeholder}
            autoComplete='off'
            className={styles.input}
            style={additionalInputStyle}
          />
          <img 
            src={toggle ? opened : closed} 
            alt={toggle ? 'opened' : 'closed'} 
            onClick={handleClick}
          />
        </div>
      ) : (
        <input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          autoComplete='off'
          className={styles.input}
          style={additionalInputStyle}
        />
      )}
      {error?.message && <p className={styles.error}>{error.message}</p>}
    </>
  )
}

export default Input
