import { IProduto } from '../../models/Produto';
import json from '../../data/DadosProdutos.json';

const Produto = ({ description, name, price, reference, urlImagem }: IProduto) => {
    return (
            <button >
                <div className="border-4 border-solid border-amber-400 bg-black rounded-lg w-80">
                    <div className="flex border-b-5 border-solid border-amber-400 border justify-center p-3">
                        <img src={urlImagem} alt="Imagem Do Produto" width={250} />
                    </div>
                    <div className="py-3 px-5 text-left normal-case">
                        <h3 className="text-2xl">{name}</h3>
                        <h3 className="text-orange-600">{description}</h3>
                        <h3 className="text-right text-2xl text-red-500 font-semibold">{price}</h3>
                    </div>
                </div>
            </button>
    )
}

const Produtos = () => {
    const list: IProduto[] = json.produtos;
    return (
        <div className='flex justify-around m-8'>
            {
                list.map((p, k) => {
                    return (
                        <Produto description={p.description} name={p.name} price={p.price} reference={p.reference} urlImagem={p.urlImagem} key={k} />
                    )
                })
            }
        </div>
    )
}

export default Produtos;