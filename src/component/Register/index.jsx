import React from 'react'
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
        <input name="email" placeholder='email' value={formData.email} onChange={handleFormData} />
        <input name="username" placeholder='username' value={formData.username} onChange={handleFormData} />
        <input type="password" name="password" placeholder='password' value={formData.password} onChange={handleFormData} />
        <button type='submit'>log in</button>
      </form>
    </div>
  )
}

export default Register