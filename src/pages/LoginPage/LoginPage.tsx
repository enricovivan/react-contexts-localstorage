import React from 'react'

import { AuthContext } from '../../contexts/auth'

import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input, Button, Checkbox } from '../../components'

function LoginPage(){

    useEffect(()=>{
        if (localStorage.getItem('username')){
            navigator('/home');
        }
    })

    const navigator = useNavigate();

    const {autenticado, login} = useContext(AuthContext) 

    const [formState, setFormState] = useState({
        user: '',
        pass: '',
    })

    function handleForm (e:any){
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    function enterWebsite(){
        login(formState.user, formState.pass);
        console.log('Entrou!!')
    }

    return <>
        <div className='flex w-screen h-screen justify-center items-center'>
            <section className='border-2 rounded-3xl p-14 sm:p-20 shadow-md'>
                <h1 className='text-center font-bold text-4xl mb-5'>Login</h1>
                <hr className='mb-5'/>

                <div className='block'>
                    <label htmlFor="username">Nome de Usuário:</label>
                    <br />
                    <Input type='text' placeholder='Digite seu usuário' id='username' name='user' onChange={handleForm} value={formState.user}></Input>

                    <br />

                    <label htmlFor="pass">Senha:</label>
                    <Input type='password' id='pass' placeholder='Ex.: *******' eyeVisible name='pass' onChange={handleForm} value={formState.pass}></Input>
                </div>

                <br />

                <Button text='Entrar' onClick={()=>{enterWebsite()}}></Button>
                <hr className='my-2'/>
                <a href="#" className='text-blue-600 hover:font-bold'>Esqueci minha senha</a>
                <Checkbox name='remember_pass' label='Lembrar senha?'></Checkbox>
                
            </section>
        </div>
    </>

}

export default LoginPage