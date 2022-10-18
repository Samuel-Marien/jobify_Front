import React, { useEffect, useState } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

// global context and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
}
// if possible prefer local state
// global state

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)

  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext()

  const handleChange = (e) => {
    // console.log(e.target)
    setValues({ ...values, [e.target.name]: e.target.value })
    // console.log(values)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values

    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }

    const currentUser = { name, email, password }
    if (isMember) {
      loginUser(currentUser)
    } else {
      registerUser(currentUser)
    }

    console.log(values)
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        )}

        <FormRow
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          labelText="Email"
          defaultValue="email"
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          labelText="Password"
          defaultValue="Password"
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register
