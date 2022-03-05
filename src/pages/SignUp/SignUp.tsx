import React, {FC} from 'react'
import styles from './SignUp.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaForSignUp } from 'utils/validatiors'
import Input from '@components/Input/Input'
import { Inputs } from 'utils/interfaces'
import Button from '@components/Button/Button'
import { useMutation } from '@apollo/client';
import { SIGN_UP } from 'utils/mutations'
import { useNavigate } from 'react-router-dom'
import Error from '@components/Error/Error'

const SignUp: FC = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }} = useForm<Inputs>({
    mode: 'onTouched',
    resolver: yupResolver(schemaForSignUp)
  })

  const [signUp, { loading, error, client }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signup)
      client.resetStore()
      navigate('/profile')
    }
  })
  
  const onSubmit: SubmitHandler<Inputs> = data => {
    signUp({
      variables: {
        firstName: data.firstName,
        secondName: data.secondName,
        email: data.email,
        password: data.password,
        repeatPassword: data.repeatPassword
      }
    })
  }

  if (loading) return <div>Loading...</div>

  return (
    <>
      <div className={styles.signup}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Input
            register={register}
            type="text"
            placeholder="First name"
            name="firstName"
            error={errors.firstName}
          />
          <Input
            register={register}
            type="text"
            placeholder="Second name"
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
          <Input
            register={register}
            type="password"
            placeholder="Repeat password"
            name="repeatPassword"
            error={errors.repeatPassword}
          />
          <Button
            text="SIGN UP"
          />
        </form>
      </div>
      {error && <Error errorMessage={error.message}/>}
    </>
  ) 
}

export default SignUp
