import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm' 

const initialFormData = {
  username: '',
  email: '',
  password: ''
}

const Register = () =>  {

  const [formData, resetForm, handleFormData] = useForm(initialFormData)

  const submitForm = (e) => {
    e.preventDefault()
    console.log(formData)
    resetForm(initialFormData) 
  }

  return (
    <div className='form__page'>
      <form onSubmit={submitForm} className='form__container'>
         <div className='form__header'>register account</div>
        <input name="email" placeholder='email' value={formData.email} onChange={handleFormData} />
        <input name="username" placeholder='username' value={formData.username} onChange={handleFormData} />
        <input type="password" name="password" placeholder='password' value={formData.password} onChange={handleFormData} />
        <button type='submit'>submit</button>
        <Link to="/login" style={{
          textDecoration: 'none',
          textAlign: 'center',
          color: '#000',
        }}>log in</Link>
      </form>
    </div>
  )
}

export default Register