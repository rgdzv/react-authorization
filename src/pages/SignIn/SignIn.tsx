import React, { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaForSignIn } from 'utils/validatiors'
import { Inputs } from 'utils/interfaces'
import Input from '@components/Input/Input'
import styles from './SignIn.module.scss'
import Button from '@components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { SIGN_IN } from 'utils/mutations'
import Error from '@components/Error/Error'

const SignIn: FC = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }} = useForm<Inputs>({
    mode: 'onTouched',
    resolver: yupResolver(schemaForSignIn)
  })
  
  const [signIn, { loading, error, client }] = useMutation(SIGN_IN, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.login.token)
      client.resetStore()
      navigate('/profile')
    },
  })

  const onSubmit: SubmitHandler<Inputs> = data => {
    signIn({
      variables: {
        email: data.email,
        password: data.password,
      }
    })
  }

  if (loading) return <div>Loading...</div>

  return (
    <>
      <div className={styles.signin}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
            text="SIGN IN"
          />
        </form>
      </div>
      {error && <Error errorMessage={error.message}/>}
    </>
  )
}

export default SignIn