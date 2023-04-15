import React, {createContext} from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
        
export const AuthContext = createContext<any>({});

export const AuthProvider = ({children}:any) => {

    const [user, setUser] = useState<any>(null);

    const navigator = useNavigate();

    const login = (user:string, pass:string) => {
        console.log('Login realizado.\nRedirecionando...');
        setUser({usuario: user});
        navigator('/home');
        localStorage.setItem('username', user);
        localStorage.setItem('password', pass);
    }

    const logout = () => {
        setUser({usuario:null});
        navigator('/');
        localStorage.clear();
    }

    return (
        <AuthContext.Provider value={
            {
                autenticado: !!user,
                usuario: user,
                login,
                logout
            }
        }>

        {children}

        </AuthContext.Provider>
    )

}
        