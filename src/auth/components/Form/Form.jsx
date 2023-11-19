import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../Button/Button'
import './Form.css'

export function Form () {
  const navigate = useNavigate()

  const { login, users } = useAuth()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('Intended data:', formData)

    const user = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    )

    if (user) {
      console.log('Credenciales correctas')
      login(user.username)
      navigate('/dashboard')
    } else {
      console.log('Credenciales incorrectas')
    }
  }

  const handleInputChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <div className='groupForm'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='e.g. Karol'
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className='groupForm'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder="Shh, it's a secret!"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Button labelText='Log in' type='submit' />
        </div>
      </form>
    </div>
  )
}
