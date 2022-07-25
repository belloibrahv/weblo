import React from 'react'
import { useForm } from '../../hooks/useForm' 

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
    <div className='container'>
      <form onSubmit={submitForm}>
        <input name="email" placeholder='email' value={formData.email} onChange={handleFormData} />
        <input type="password" name="password" placeholder='password' value={formData.password} onChange={handleFormData} />
        <button type='submit'>log in</button>
      </form>
    </div>
  )
}

export default Login