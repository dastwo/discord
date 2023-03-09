import React, {useState, useEffect} from 'react'
import { Typography} from '@mui/material'
import AuthBox from '../../components/AuthBox'
import RegisterPageInput from './RegisterPageInput'
import RegisterPageFooter from './RegisterPageFooter'
import { validateRegisterFrom } from '../../utils/Validators'

const RegisterPage = () => {
  const [mail, setMail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isFromValid, setIsFromValid] = useState(false)

  const handleRegister = async ()=>{

  }

  useEffect(()=>{
    setIsFromValid(validateRegisterFrom({mail, username, password}))
  },[mail, username, password, setIsFromValid])
  return (
    <AuthBox>
      <Typography variant='h5' sx={{color: 'white'}}>
        Create an account
      </Typography>
      <RegisterPageInput
      mail={mail}
      setMail={setMail}
      password={password}
      setPassword={setPassword}
      username={username}
      setUsername={setUsername}
      />
      <RegisterPageFooter 
      handleRegister={handleRegister}
      isFromValid={isFromValid}
      /> 
    </AuthBox>
  )
}

export default RegisterPage