import { Header, Footer, PageTitle, Card, CardHeader, Input, InputLabel, Button, Select, Option } from "../../../components";

function CadProdPage(){

    return (
        <div className="flex flex-col min-h-screen">
            <Header></Header>

            <PageTitle text="Cadastro de Produtos"></PageTitle>

            <main className="m-4 flex justify-center items-center">
                <Card className="w-full sm:3/4 md:w-1/2 lg:w-1/3">
                    <CardHeader text="Cadastrar Produto"></CardHeader>

                    <form>
                        <InputLabel for="pName" text="Nome do Produto"></InputLabel>
                        <Input id="pName" type="text" placeholder="Digite o nome do produto..."></Input>
                        <br />
                        <InputLabel for="pPrice" text="Preço Unitário"></InputLabel>
                        <Input type="number" id="pNumber" minValue={0.00}></Input>
                        <br />
                        <InputLabel for="pCat" text="Categoria"></InputLabel>
                        <Select id="pCat" defaultValue="select">
                            <Option value="select">Selecione uma categoria...</Option>
                            <Option value="automovel">Automóvel</Option>
                            <Option value="animal">Animal</Option>
                            <Option value="comida">Comida</Option>
                            <Option value="limpeza">Limpeza</Option>
                            <Option value="humano">Uso humano</Option>
                        </Select>
                        <br />
                        <Button text="Cadastrar"></Button>
                        
                    </form> 
                    
                </Card>
                
            </main>

            <Footer></Footer>
        </div>
    )

}

export default CadProdPage