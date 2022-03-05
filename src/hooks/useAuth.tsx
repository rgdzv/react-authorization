import React from 'react'
import { useQuery } from '@apollo/client'
import { CURRENT_USER } from 'utils/mutations'

interface CurrentUserType {
  currentUser: {
    id: string
    firstName: string
    secondName: string
    email: string
  }
}

const useAuth = () => {
  const { data, loading, error, client } = useQuery<CurrentUserType>(CURRENT_USER)

  return { data, loading, error, client }
}

export default useAuth
