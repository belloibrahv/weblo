import React from 'react'
import { useForm } from '../../hooks/useForm' 
import './index.css'

const initialFormData = {
  email: '',
  password: ''
}

const Login = () =>  {

  const [formData, resetForm, handleFormData] = useForm(initialFormData)

  const submitForm = (e) => {
    e.preventDefault()
    console.log(formData)
    resetForm(initialFormData)    
  }

  return (
    <div className='form__page'>
      <form onSubmit={submitForm} className='form__container'>
        <div className='form__header'>login</div>
        <input name="email" placeholder='email' value={formData.email} onChange={handleFormData} />
        <input type="password" name="password" placeholder='password' value={formData.password} onChange={handleFormData} />
        <button type='submit'>log in</button>
      </form>
    </div>
  )
}

export default Login