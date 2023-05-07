import axios from 'axios'

export default class Api{
    constructor(){
        this.axios = axios.create({
            baseURL: 'https://anotadin-api.herokuapp.com'
        })
    }

    async login(dados){
        const {data} = await this.axios.post('/login', dados)

        if (data) {
            localStorage.setItem('nome', data.user.nome)
            localStorage.setItem('email', data.user.email)
            localStorage.setItem('token', data.user.token)

            return true
        }

        return
    }

    usuarioAutenticado () {
        return localStorage.getItem("token") !== null ? true : false        
    }

    permissao(){
        return localStorage.getItem("permissao").includes('negociacao') ? true : false        
    }

    async logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        localStorage.removeItem('nome')

    }
}