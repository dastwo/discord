import React from 'react'
import InputWithLabel from '../../components/InputWithLabel'
const RegisterPageInput = ({mail, setMail, password, setPassword, username, setUsername}) => {
  return (
    <>
    <InputWithLabel
    value={mail}
    setValue={setMail}
    label='E-mail address'
    type='email'
    placeholder='Enter e-mail address'
    />
    <InputWithLabel
    value={username}
    setValue={setUsername}
    label='User name'
    type='text'
    placeholder='Enter a user name'
    />
    <InputWithLabel
    value={password}
    setValue={setPassword}
    label='Password'
    type='password'
    placeholder='Enter password'
    />
    </>
  )
}

export default RegisterPageInput