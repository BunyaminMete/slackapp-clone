import InputComponent from '../input/input'
import './loginComp.css'

const LoginContainer = () => {
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
    </>
  )
}

export default LoginContainer
