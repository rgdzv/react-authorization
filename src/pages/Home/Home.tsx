import React, { FC } from 'react'
import styles from './Home.module.scss'

const Home: FC = () => {
  return (
    <div className={styles.home}>Welcome! It&apos;s React authorization app. Please, sign in or sign up!</div>
  )
}

export default Home