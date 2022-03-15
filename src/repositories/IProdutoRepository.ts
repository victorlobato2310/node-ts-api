import { ProdutoDocument } from "../models/Produto";

interface ISalvarProdutoDTO {
    nome: string,
    descricao: string,
    preco: number,
    quantidade: number,
}

interface IProdutoRepository {

    salvar({ nome, descricao, preco, quantidade } : ISalvarProdutoDTO): Promise<ProdutoDocument>;

    obterTodos(): Promise<ProdutoDocument[]>; 

    obterPorId(id: string ): Promise<ProdutoDocument>;

    deletar(id: string ): Promise<ProdutoDocument>;

    alterar( id: string, nome: string, preco: number, descricao: string, quantidade: number ): Promise<ProdutoDocument>;
    
}

export { ISalvarProdutoDTO, IProdutoRepository };