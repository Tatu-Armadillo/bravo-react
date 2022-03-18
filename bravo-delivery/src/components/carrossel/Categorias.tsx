import { ICategoria, IProduto } from "../../models/Interfaces";
import Produtos from "../produto/Produtos";

const Categorias = ({label, produtos}: ICategoria) => {
    let listProduto: IProduto[] = produtos;
    
    return (
        <main className="bg-amber-400">
            <h3>{label}</h3>
            {
                listProduto.map((p, k) => {
                    return (
                        <Produtos key={k} produtos={p} />
                    )
                })
            }

        </main>
    )
}

export default Categorias;