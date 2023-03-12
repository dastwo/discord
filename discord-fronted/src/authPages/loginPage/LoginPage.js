import {useState, useEffect} from 'react'
import AuthBox from '../../components/AuthBox'
import LoginPageFooter from './LoginPageFooter'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInput from './LoginPageInput'
import {validateLoginFrom} from '../../utils/Validators'
import {connect} from 'react-redux'
import { getActions} from  '../../store/action/authAction'
import { useNavigate } from 'react-router-dom'
const LoginPage = ({ login }) => {
  const navigate = useNavigate()
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [isFromValid, setIsFromValid] = useState(false)

  useEffect(()=>{
  setIsFromValid(validateLoginFrom({mail, password}))
  },[mail, password, setIsFromValid])

  const handleLogin = ()=>{
    const userDetails = {
      mail,
      password
    }
   login(userDetails, navigate)
  
  }


  return (
    <AuthBox>
      <LoginPageHeader/>
      <LoginPageInput mail={mail} setMail={setMail} password={password} setPassword={setPassword}/>
      <LoginPageFooter isFromValid={isFromValid} handleLogin={handleLogin}/>
    </AuthBox>
  )
}

const mapActionsToProps = (dispatch)=>{
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(LoginPage)