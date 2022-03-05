import React, { FC } from 'react'
import styles from './NotFound.module.scss'

const NotFound: FC = () => {
  return (
    <div className={styles.notfound}>Page is not found! (404)</div>
  )
}

export default NotFound