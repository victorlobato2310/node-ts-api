import { ProdutoDocument } from "../models/Produto";
import ProdutoRepository from "../repositories/ProdutoRepository";

interface IRequest {
    id?: string;
    nome: string,
    descricao: string,
    preco: number,
    quantidade: number,
}

class ProdutoService {
    constructor(private produtoRepository: ProdutoRepository){}

    async salvar({ nome, descricao, preco, quantidade }: IRequest): Promise<ProdutoDocument> {
    
        return await this.produtoRepository.salvar({ nome, descricao, preco, quantidade });
    }

    async obterTodos(): Promise<ProdutoDocument[]> {

        return await this.produtoRepository.obterTodos();
    }

    async obterPorId(id: string): Promise<ProdutoDocument> {

        return await this.produtoRepository.obterPorId(id);
    }

    async deletar(id: string): Promise<ProdutoDocument> {

        return await this.produtoRepository.deletar(id);
    }

    async alterar({ id, nome, preco, descricao, quantidade } : IRequest): Promise<ProdutoDocument> {
        return await this.produtoRepository.alterar( id, nome, preco, descricao, quantidade );
    }
}

export default ProdutoService;