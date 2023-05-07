import React, { useState } from 'react'
import { Container, Form } from './styles'
import { InputCustomizado } from '../../components/Inputs/styles'
import Botao from '../../components/Botao'
import { validarEmail, validarSenha } from '../../Utils/validadores'
import Api from '../../Services/api'
import { NavLink, useNavigate } from 'react-router-dom'


const userService = new Api()

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    navigate('/home')

    try {
      setLoading(true)

      const response  = await userService.login(form)
      if(response === true){
        alert('Usuario logado com sucesso')
        //navegar para home
        navigate('/teste')

      }

      setLoading(false)


    }
    catch (error) {
      alert('Erro no login', error)

    }
  }

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.password)
  }

  return (
    <Container>
      <Form>
        <h1>Login</h1>
        <InputCustomizado
          name='email'
          placeholder='Digite o seu email'
          onChange={handleChange}
          type='email'
        />

        <InputCustomizado
          name='password'
          placeholder='Digite sua senha'
          onChange={handleChange}
          type='password'
        />

        <Botao
          type='submit'
          text='Entrar'
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        //disabled={!validandInput}
        />

      </Form>
    </Container>
  )
}

export default Login