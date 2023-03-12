import React, {useState, useEffect} from 'react'
import { Typography} from '@mui/material'
import AuthBox from '../../components/AuthBox'
import RegisterPageInput from './RegisterPageInput'
import RegisterPageFooter from './RegisterPageFooter'
import { validateRegisterFrom } from '../../utils/Validators'
import {connect} from 'react-redux'
import { getActions} from  '../../store/action/authAction'
import { useNavigate } from 'react-router-dom'

const RegisterPage = ({register}) => {
  const [mail, setMail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isFromValid, setIsFromValid] = useState(false)

  const navigate = useNavigate()

  const handleRegister = async ()=>{
    const userDetails = {
      mail,
      username,
      password
    }
    register(userDetails, navigate)
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

const mapActionsToProps = (dispatch)=>{
  return {
    ...getActions(dispatch)
  }
}

export default  connect(null, mapActionsToProps)( RegisterPage)