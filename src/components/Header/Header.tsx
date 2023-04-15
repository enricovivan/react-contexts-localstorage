import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../contexts/auth"

import { LiHeader } from "./LiHeader"

export const Header = () => {

    const {usuario, autenticado, logout} = useContext(AuthContext)

    const navigator = useNavigate()

    return <>
    
        <header className="bg-gray-600 p-5 text-white overflow-x-scroll sm:overflow-x-clip">
            <nav className="flex">
                <p>Bem vindo(a) {`${localStorage.getItem('username')}`}!!!</p>
                <div className="border-[1px] border-gray-800 ms-4"></div>
                <ul className="flex gap-x-10 ms-4">
                    <LiHeader text="Home" hoverColor="text-black" onClick={()=>{navigator('/home')}}></LiHeader>
                    <LiHeader text="Cad. Usuário" hoverColor="text-black" onClick={()=>{navigator('/cad/user')}}></LiHeader>
                    <LiHeader text="Cad. Categoria" hoverColor="text-black" onClick={()=>{navigator('/cad/cat')}}></LiHeader>
                    <LiHeader text="Cad. Produto" hoverColor="text-black" onClick={()=>{navigator('/cad/prod')}}></LiHeader>
                    <LiHeader text="Sair" hoverColor="text-red-600" className="hover:text-red-500 hover:font-bold" onClick={logout}></LiHeader>
                </ul>
            </nav>
        </header>
    
    </>

}