import { Header, Footer, PageTitle, Card, CardHeader, Input, InputLabel, Button, Select, Option } from "../../../components";

function CadCatPage(){

    return (
        <div className="flex flex-col min-h-screen">
            <Header></Header>

            <PageTitle text="Cadastro de Categoria"></PageTitle>

            <main className="m-4 flex justify-center items-center">
                <Card className="w-full sm:3/4 md:w-1/2 lg:w-1/3">
                    <CardHeader text="Cadastrar Categoria"></CardHeader>

                    <form>
                        <InputLabel for="cName" text="Nome da Categoria"></InputLabel>
                        <Input id="cName" type="text" placeholder="Digite o nome da categoria..."></Input>
                        <br />
                        <Button text="Cadastrar"></Button>
                        
                    </form> 
                    
                </Card>
            </main>

            <Footer></Footer>
        </div>
    )

}

export default CadCatPage