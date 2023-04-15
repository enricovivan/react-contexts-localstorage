import { Header, Footer, PageTitle, Card, CardHeader, Input, InputLabel, Button } from "../../../components";

import {useContext, useState} from 'react'
import { UserCatProdContext } from "../../../contexts/usercatprod";

function CadUserPage(){

    const {salvaUser} = useContext(UserCatProdContext)

    const [formstate, setFormstate] = useState({
        username: '',
        password: '',
        email: ''
    })

    function handleForm(e:any){
        setFormstate({
            ...formstate,
            [e.target.name]: e.target.value
        })
    }

    function mostraDados(){
        console.log(formstate.username);
        console.log(formstate.email)
        console.log(formstate.password);
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header></Header>

            <PageTitle text="Cadastro de Usuário"></PageTitle>

            <main className="m-4 flex justify-center items-center">
                <Card className="w-full sm:3/4 md:w-1/2 lg:w-1/3">
                    <CardHeader text="Cadastrar Usuário"></CardHeader>

                    <form>
                        <InputLabel for="username" text="Nome de Usuário"></InputLabel>
                        <Input id="username" type="text" placeholder="Digite o nome de usuário..." onChange={handleForm} name="username" value={formstate.username}></Input>
                        <br />
                        <InputLabel for="email" text="Email"></InputLabel>
                        <Input id="email" type="email" placeholder="Ex.: abacate_voador@email.com" onChange={handleForm} name="email" value={formstate.email}></Input>
                        <br />
                        <InputLabel for="password" text="Senha"></InputLabel>
                        <Input id="password" type="password" placeholder="Ex.: ***********" eyeVisible name="password" onChange={handleForm} value={formstate.password}></Input>
                        <br />
                        <InputLabel for="cpassword" text="Confirmar Senha"></InputLabel>
                        <Input id="cpassword" type="password" placeholder="Ex.: ***********" eyeVisible></Input>
                        <br />
                        <Button text="Cadastrar" onClick={()=>{salvaUser(formstate.username, formstate.password, formstate.email)}}></Button>
                    </form>
                    
                </Card>
            </main>

            <Footer></Footer>
        </div>
    )

}

export default CadUserPage