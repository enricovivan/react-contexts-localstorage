import React from "react"

import { useEffect, useContext, useState } from "react"

import { Header, Footer, Card, CardHeader, PageTitle, Button } from "../../components"

import { UserCatProdContext } from "../../contexts/usercatprod"

import {Chart, initTE} from 'tw-elements'

function HomePage(){

    const [array, setArray] = useState<any>([])

    useEffect(()=>{
        initTE({Chart}, []);    
    })

    const {getUsers} = useContext(UserCatProdContext);
    
    return <>

        <div className="flex flex-col h-screen">
            <Header></Header>

            <PageTitle text="DASHBOARD"></PageTitle>

            <div className="grid grid-cols-3 gap-4 m-4">

                <div className="col-span-3">
                    <Card>
                        <CardHeader text="Dados Gerais" />

                        <div className="flex justify-center">
                            <div className="flex justify-center items-center w-1/3">
                                <canvas
                                    id="0"
                                    data-te-chart='doughnut'
                                    data-te-dataset-label="Traffic"
                                    data-te-labels="['Usuários', 'Categorias', 'Produtos']"
                                    data-te-dataset-data="[3, 5, 7]"
                                    data-te-dataset-background-color="['rgba(63, 81, 181, 0.5)', 'rgba(77, 182, 172, 0.5)', 'rgba(66, 133, 244, 0.5)']"
                                ></canvas>
                            </div>
                        </div>
                        <p className="text-red"></p>
                        
                        

                    </Card>

                    <section className="my-10">
                        <article className="grid grid-cols-12 gap-4">
                            <section className="col-span-full md:col-span-6 2xl:col-span-4">
                                <Card className="h-full">
                                    <CardHeader text="Tabela de Usuários"></CardHeader>

                                    <table className="w-full text-center">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Usuário</th>
                                                <th>E-mail</th>
                                                <th>Editar</th>
                                                <th>Excluir</th>
                                            </tr>
                                        </thead>
                                        <tbody id="bodyTable">
                                            <tr>
                                                <td>0</td>
                                                <td>sapolio_pereira</td>
                                                <td>sapo_sapão_sapo@gmail.com</td>
                                                <td><Button text="Editar"></Button></td>
                                                <td><Button text="Excluir"></Button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>omo_perigoso</td>
                                                <td>ameaça@bol.com.br</td>
                                                <td><Button text="Editar"></Button></td>
                                                <td><Button text="Excluir"></Button></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>panzer</td>
                                                <td>go.tank.kaboom@hotmail.com</td>
                                                <td><Button text="Editar"></Button></td>
                                                <td><Button text="Excluir"></Button></td>
                                            </tr>

                                            {<tr>
                                                <td>{}</td>
                                            </tr>}

                                        </tbody>
                                    </table>
                                </Card>
                            </section>
                            <section className="col-span-full md:col-span-6 2xl:col-span-4">
                                <Card className="h-full">
                                    <CardHeader text="Tabela de Produtos"></CardHeader>

                                    <table className="w-full text-center">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Nome</th>
                                                <th>Preço (R$)</th>
                                                <th>Categoria</th>
                                                <th>Editar</th>
                                                <th>Excluir</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>0</td>
                                                <td>Cereal Vespertino</td>
                                                <td>10,56</td>
                                                <td>Comida</td>
                                                <td><Button text="Editar"></Button></td>
                                                <td><Button text="Excluir"></Button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Lontra</td>
                                                <td>0,00</td>
                                                <td>Animal</td>
                                                <td><Button text="Editar"></Button></td>
                                                <td><Button text="Excluir"></Button></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Sabão</td>
                                                <td>599,99</td>
                                                <td>Limpeza</td>
                                                <td><Button text="Editar"></Button></td>
                                                <td><Button text="Excluir"></Button></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Carro</td>
                                                <td>1,99</td>
                                                <td>Automóvel</td>
                                                <td><Button text="Editar"></Button></td>
                                                <td><Button text="Excluir"></Button></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Lanchonete</td>
                                                <td>65.500,00</td>
                                                <td>Uso humano</td>
                                                <td><Button text="Editar"></Button></td>
                                                <td><Button text="Excluir"></Button></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Aspirador de Água</td>
                                                <td>419,99</td>
                                                <td>Limpeza</td>
                                                <td><Button text="Editar"></Button></td>
                                                <td><Button text="Excluir"></Button></td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Boeing AH-64 Apache</td>
                                                <td>2.500.000,00</td>
                                                <td>Automóvel</td>
                                                <td><Button text="Editar"></Button></td>
                                                <td><Button text="Excluir"></Button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Card>
                            </section>
                            <section className='col-span-full md:col-span-6 2xl:col-span-4 md:col-start-4'>
                                <Card className="h-full">
                                    <CardHeader text="Tabela de Categorias"></CardHeader>

                                    <table className="w-full text-center">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Nome</th>
                                                <th>Editar</th>
                                                <th>Excluir</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>0</td>
                                                <td>Automóvel</td>
                                                <td><Button text="Editar"></Button></td>
                                                <td><Button text="Excluir"></Button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Animal</td>
                                                <td><Button text="Editar"></Button></td>
                                                <td><Button text="Excluir"></Button></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Comida</td>
                                                <td><Button text="Editar"></Button></td>
                                                <td><Button text="Excluir"></Button></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Limpeza</td>
                                                <td><Button text="Editar"></Button></td>
                                                <td><Button text="Excluir"></Button></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Uso Humano</td>
                                                <td><Button text="Editar"></Button></td>
                                                <td><Button text="Excluir"></Button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Card>
                            </section>
                            
                        </article>
                    </section>
                    
                </div>
                {/* <div className="col-auto">
                    <Card>
                        <P text="Categorias Cadastradas" className="text-center font-semibold"></P>
                        <hr className="mb-4 mt-2"/>
                    </Card>
                </div>
                <div className="col-auto">
                    <Card>
                        <P text="Produtos Cadastrados" className="text-center font-semibold"></P>
                        <hr className="mb-4 mt-2"/>
                    </Card>
                </div> */}

            </div>
            

            <Footer></Footer>
        </div>
    
        
        

    </>

}

export default HomePage