import { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { UserContext } from '../context/UserContext'
import { userType } from '../context/userTypes'

export const Login = () => {


  const { stateDispatch } = useContext(UserContext)

  const [form, setForm] = useState({
    correo: '',
    password: ''
  })

  const handleChange = (event)=> {

    const { target } = event;
    const { value, name } = target;

    setForm({
      ...form,
      [name]: value
    })
  }

  const login = async ()=>{
    const peticion = await fetch('http://localhost:3000/api/login',{
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-type': 'application/json'
      }
    })

    const response = await peticion.json()

    stateDispatch({
      type: userType.login,
      token: response.token,
      nombre: response.nombre
    })
  }

 

  return (
    <div className='container'>
      <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
        <Form>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email:</Form.Label>
            <Form.Control type='text' name='correo' onChange={handleChange}  value={form.email}/>
          </Form.Group>

          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password:</Form.Label>
            <Form.Control type='password' name='password' onChange={handleChange} value={form.password}/>
          </Form.Group>

          <Button type='button' onClick={()=>login()}>Iniciar sesión</Button>
        </Form>
      </div>
    </div>
  )
}

          