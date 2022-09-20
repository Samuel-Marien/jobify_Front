import React, { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'

// global context and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}
// if possible prefer local state
// global state

const Register = () => {
  const [values, setValues] = useState(initialState)

  // global context and useNavigate later
  const { isLoading, showAlert, displayAlert } = useAppContext()

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
    console.log(values)
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
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
        <button type="submit" className="btn btn-block">
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