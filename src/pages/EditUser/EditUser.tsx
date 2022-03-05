import { useMutation } from '@apollo/client'
import Button from '@components/Button/Button'
import Error from '@components/Error/Error'
import Input from '@components/Input/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import useAuth from 'hooks/useAuth'
import React, { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Inputs } from 'utils/interfaces'
import { EDIT_CURRENT_USER } from 'utils/mutations'
import { schemaForEditUser } from 'utils/validatiors'
import styles from './EditUser.module.scss'

const EditUser: FC = () => {

  const user = useAuth()
  const [updateMessage, setUpdateMessage] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
    mode: 'onTouched',
    resolver: yupResolver(schemaForEditUser),
    defaultValues: {
      firstName: user?.data?.currentUser.firstName,
      secondName: user?.data?.currentUser.secondName,
      email: user?.data?.currentUser.email
    }
  })

  const [editUser, { loading, error }] = useMutation(EDIT_CURRENT_USER, {
    onCompleted: (data) => {
      if(data?.editUser) {
        setUpdateMessage('User information updated!')
        setTimeout(() => {
          setUpdateMessage('')
        }, 4000)
      }
    },
  })

  const onSubmit: SubmitHandler<Inputs> = data => {
    editUser({
      variables: {
        id: user?.data?.currentUser.id,
        firstName: data.firstName,
        secondName: data.secondName,
        email: data.email,
        password: data.password,
      }
    })
  }

  useEffect(()=> {
    reset({
      firstName: user?.data?.currentUser.firstName,
      secondName: user?.data?.currentUser.secondName,
      email: user?.data?.currentUser.email 
    })
  }, [user.data?.currentUser])

  if (loading) return <div>Loading...</div>

  return (
    <>
      <div className={styles.edituser}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Input
            register={register}
            type="text"
            placeholder="firstName"
            name="firstName"
            error={errors.firstName}
          />
          <Input
            register={register}
            type="text"
            placeholder="secondName"
            name="secondName"
            error={errors.secondName}
          />
          <Input
            register={register}
            type="email"
            placeholder="Email"
            name="email"
            error={errors.email}
          />
          <Input
            register={register}
            type="password"
            placeholder="Password"
            name="password"
            error={errors.password}
          />
          <Button
            text="EDIT USER"
          />
        </form>
      </div>
      {error && <Error errorMessage={error.message}/>}
      {updateMessage && <div>{updateMessage}</div>}
    </>
  )
}

export default EditUser