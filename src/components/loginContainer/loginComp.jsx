import React from 'react'
import InputComponent from '../input/input'
import './loginComp.css'

const LoginContainer = () => {




  const [user, setUser] = React.useState('')
  const [password, setPassword] = React.useState('051996Aa')
  const [email, setEmail] = React.useState('example@email.com')


  const emailValidation = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email)
  }

  const passwordValidation = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password)
  }

  
  return (
    <>
      <div className="main-container">
        <div className="form-container">
          <div className="first-part"></div>
          <div className="second-part">
            <InputComponent
              type="email"
              placeholder="admin@gmail.com"
              inputLabel="Email"
            />
            <br />
            <br />
    
            <InputComponent
              type="email"
              placeholder="admin@gmail.com"
              inputLabel="Şifre"
            />
          </div>
        </div>
      </div>
      {console.log(emailValidation(email))}
      {console.log(emailValidation(password))}

    </>
  )
}

export default LoginContainer
