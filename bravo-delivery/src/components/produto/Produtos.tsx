import { IProduto, IProdutos } from '../../models/Produto';

const Produto = ({ description, name, price, reference, urlImagem }: IProduto) => {
    return (
        <button className='p-2'>
            <div className="border-4 border-solid border-amber-400 bg-black rounded-lg w-full h-full">
                <div className="flex border justify-center p-3">
                    <img src={urlImagem} alt="Imagem Do Produto" width={250} />
                </div>
                <div className="border-t-4 border-solid border-amber-400 text-left normal-case py-3 px-5">
                    <h3 className="text-2xl mb-2">{name}</h3>
                    <h3 className="text-lg text-orange-600">{description}</h3>
                    <h3 className="text-right text-2xl text-red-500 font-semibold mt-3">R$ {price}</h3>
                </div>
            </div>
        </button>
    )
}

const Produtos = ({ produtos }: IProdutos) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
                produtos.map((p, k) => {
                    return (
                        <Produto description={p.description} name={p.name} price={p.price} reference={p.reference} urlImagem={p.urlImagem} key={k} />
                    )
                })
            }
        </div>
    )
}

export default Produtos;