import React from 'react'
import { useForm } from '../../hooks/useForm' 
import './index.css'

const initialFormData = {
  username: '',
  password: ''
}

const Login = ({ loginHandler  }) =>  {

  const [formData, resetForm, handleFormData] = useForm(initialFormData)

  const submitForm = (e) => {
    e.preventDefault()

    const resObj = {
      username: formData.username
    }

    fetch('http://localhost:4000/login', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(resObj)
    })
    .then(response => {
      if (response.status === 401) {
        throw new Error('Authentication failed')
      }
      const token = response.json()
      return token
    })
    .then(response => {
      loginHandler(true, response.token)
    })
    .catch(err => {
      alert(err)
      loginHandler(false)      
    })
    
    // console.log(formData)
    resetForm(initialFormData)    
  }

  return (
    <div className='form__page'>
      <form onSubmit={submitForm} className='form__container'>
        <div className='form__header'>login</div>
        <input name="username" placeholder='username' value={formData.username} onChange={handleFormData} />
        <input type="password" name="password" placeholder='password' value={formData.password} onChange={handleFormData} />
        <button type='submit'>log in</button>
      </form>
    </div>
  )
}

export default Login