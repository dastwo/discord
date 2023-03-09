import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Tooltip} from '@mui/material'
import CustomPrimaryButton from '../../components/CustomPrimaryButton'
import RedirectInfo from '../../components/RedirectInfo'

const LoginPageFooter = ({handleLogin, isFromValid}) => {
    const navigate = useNavigate()

    const getFromNotValidMessage = ()=>{
      return 'Enter correct e-mail address and password should contains between 6 an 20 characters '
    }

    const getFromValidMessage = ()=>{
      return 'Press to log in!'
    }

    const handlePushToRegisterPage = ()=>{
        navigate('/register')
    }

  return (
    <>
    <Tooltip title={!isFromValid ? getFromNotValidMessage() : getFromValidMessage()}>
    <div>
        <CustomPrimaryButton 
        label='Log in' additionalStyles={{marginTop:'30px'}} 
        disabled={!isFromValid}
        onClick={handleLogin}
        />
        <RedirectInfo text='Need an account?  ' redirectText=' Create an account' redirectHandle={handlePushToRegisterPage} additionalStyles={{marginTop:'5px'}}/>
    </div>
    </Tooltip>
    </>
  )
}

export default LoginPageFooter