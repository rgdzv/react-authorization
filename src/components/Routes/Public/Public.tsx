import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { RouteProps } from 'utils/interfaces'

const Public: FC<RouteProps> = ({ children }) => {
  const token = localStorage.getItem('token')

  return token ? <Navigate to="/profile" /> : children
}

export default Public
