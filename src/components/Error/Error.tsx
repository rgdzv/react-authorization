import React, { FC } from 'react'
import styles from './Error.module.scss'

interface ErrorProps {
  errorMessage: string
}

const Error: FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <div className={styles.error}>{errorMessage}</div>
  )
}

export default Error