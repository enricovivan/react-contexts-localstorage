import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserCatProdContext = createContext<any>({});

export const UserCatProdProvider = ({children}:any) => {

    const users = new Array()

    const salvaUser = (username:string, password:string, email:string) => {

        users.push({username, password, email})

        localStorage.setItem('users', JSON.stringify(users));
        console.log('usuário salvo');

    }

    const getUsers = () => {
        // return users
        let usuarios:any = localStorage.getItem('users');
        return JSON.parse(usuarios);

    }

    return (
        <UserCatProdContext.Provider value={
            {
                salvaUser,
                getUsers
            }
        }>
            {children}
        </UserCatProdContext.Provider>
    )

}