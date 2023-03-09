import React from 'react'
import InputWithLabel from '../../components/InputWithLabel'

const LoginPageInput = ({mail, setMail, password, setPassword}) => {
  return (
    <>
    <InputWithLabel 
    value={mail}
    setValue={setMail}
    type='email'
    label='E-mail'
    placeholder='Enter e-mail address'
    />
    <InputWithLabel 
    value={password}
    setValue={setPassword}
    type='password'
    label='Password'
    placeholder='Enter Password'
    />
    </>
  )
}

export default LoginPageInput