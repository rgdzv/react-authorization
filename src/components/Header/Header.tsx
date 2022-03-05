import useAuth from 'hooks/useAuth'
import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header: FC = () => {

  const data = useAuth()

  const logOut = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <div className={styles.header}>
      {data?.data?.currentUser ? (
        <>
          <div className={styles.user}>
            {data?.data?.currentUser.firstName} {data?.data?.currentUser.secondName}
          </div>
          <button className={styles.button} onClick={logOut}>LOG OUT</button>
        </>
      ) : (
        <div className={styles.links}>
          <NavLink to='/signup'>SIGN UP</NavLink>
          <NavLink to='/signin'>SIGN IN</NavLink>
        </div>
      )}
    </div>
  )
}

export default Header
