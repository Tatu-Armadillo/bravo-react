export interface IProduto   {
    reference: string;
    name: string;
    price: number;
    description: string;
    urlImagem: string;
}

export interface IProdutos {
    produtos: IProduto[];
}

export interface ICategoria {
    label: string;
    produtos: IProduto[];
}

export interface ICategorias {
    categorias: ICategoria[];
}