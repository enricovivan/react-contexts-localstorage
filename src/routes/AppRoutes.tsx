import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider, AuthContext } from "../contexts/auth";
import { UserCatProdProvider, UserCatProdContext } from "../contexts/usercatprod";

import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import CadUserPage from "../pages/CadPages/CadUser/CadUserPage";
import CadProdPage from "../pages/CadPages/CadProd/CadProdPage";
import CadCatPage from "../pages/CadPages/CadCat/CadCatPage";

import {useContext} from 'react'

function AppRoutes(){

    const Private = ({children}:any) => {

        const {autenticado, login} = useContext(AuthContext);

        if (localStorage.getItem('username')){
            return children;
        }
        else {
            // console.log(localStorage.getItem('username'))
            return <Navigate to='/'></Navigate>
        }

        // if (autenticado){
        //     console.log('Entrando...');
        //     console.log(autenticado)
        //     return children
        // }
        // else {
        //     return <Navigate to='/'></Navigate>
        // }

    }

    return (

        <BrowserRouter>
            <AuthProvider>
                <UserCatProdProvider>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>

                        <Route path="/home" element={<Private><HomePage/></Private>}/>

                        <Route path="/cad/user" element={<Private><CadUserPage /></Private>}></Route>
                        <Route path="/cad/cat" element={<Private><CadCatPage /></Private>}></Route>
                        <Route path="/cad/prod" element={<Private><CadProdPage /></Private>}></Route>
                    </Routes>
                </UserCatProdProvider>
            </AuthProvider>     
        </BrowserRouter>

    )

}

export default AppRoutes