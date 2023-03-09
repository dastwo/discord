import {useState, useEffect} from 'react'
import AuthBox from '../../components/AuthBox'
import LoginPageFooter from './LoginPageFooter'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInput from './LoginPageInput'
import {validateLoginFrom} from '../../utils/Validators'
const LoginPage = () => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [isFromValid, setIsFromValid] = useState(false)

  useEffect(()=>{
  setIsFromValid(validateLoginFrom({mail, password}))
  },[mail, password, setIsFromValid])

  const handleLogin = ()=>{
    console.log(mail);
    console.log(password);
  }


  return (
    <AuthBox>
      <LoginPageHeader/>
      <LoginPageInput mail={mail} setMail={setMail} password={password} setPassword={setPassword}/>
      <LoginPageFooter isFromValid={isFromValid} handleLogin={handleLogin}/>
    </AuthBox>
  )
}

export default LoginPage