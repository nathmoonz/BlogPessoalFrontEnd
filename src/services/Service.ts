import axios from "axios";

const api = axios.create({
  baseURL: 'https://blogpessoal-5m1d.onrender.com',
});


//promessa - assincrona para o cadastro do usuario
export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }

//promessa - assincrona para o login do usuario
export const login = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }
