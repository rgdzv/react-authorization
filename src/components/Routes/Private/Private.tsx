import React, { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { RouteProps } from 'utils/interfaces'

const Private: FC<RouteProps> = ({ children }) => {
  const location = useLocation()
  const token = localStorage.getItem('token')

  return token ? children : <Navigate to='/signin' state={{ from: location }} replace/>
}

export default Private
