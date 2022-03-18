import { useState } from "react";
import { ICategorias, ICategoria, IProduto } from "../../models/Interfaces";
import Produtos from "../produto/Produtos";


const Categorias = ({ categorias }: ICategorias) => {

    const [categoriaSelecionado, setCategoriaSelecionado] = useState<ICategoria>(categorias[0]);

    return (
        <main className="p-5 bg-amber-400">
            <div className="flex justify-between">
                {
                    categorias.map((e, k) => {
                        return (
                            <button onClick={() => setCategoriaSelecionado(categorias[k])}
                                className="inline-flex items-center justify-center px-5 py-1 border-4 border-black text-base font-medium rounded-md text-white bg-blue-700 hover:bg-indigo-700">
                                {e.label.trim().toUpperCase()}
                            </button>
                        )
                    })
                }
            </div>
            <Produtos produtos={categoriaSelecionado.produtos} />
        </main>
    )
}

export default Categorias;