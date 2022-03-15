import Produto, { ProdutoAtributos, ProdutoDocument } from '../models/Produto';
import { IProdutoRepository, ISalvarProdutoDTO } from './IProdutoRepository';

class ProdutoRepository implements IProdutoRepository {
    
    constructor(){}
    
    async salvar({ nome, descricao, preco, quantidade }: ISalvarProdutoDTO): Promise<ProdutoDocument> {

        const produto: ProdutoAtributos = {
            created_at: new Date(),
            nome: nome,
            descricao: descricao,
            preco: preco,
            quantidade: quantidade,
            updated_at: undefined
        }
        return await Produto.create(produto);
    }

    async obterTodos(): Promise<ProdutoDocument[]>{

        return await Produto.find({});
    }
    
    async obterPorId(id: string): Promise<ProdutoDocument> {
        return await Produto.findById(id);
    }

    async deletar(id: string): Promise<ProdutoDocument> {

        return await Produto.findByIdAndRemove(id);
    }

    async alterar( id: string, nome: string, preco: number, descricao: string, quantidade: number ): Promise<ProdutoDocument> {
        return await Produto.findByIdAndUpdate(
            { "_id" : id },
            {
                nome: nome,
                preco: preco,
                descricao: descricao,
                quantidade: quantidade,
                update_at: new Date(),
            },
            { new: true }
        );
    }
}

export default ProdutoRepository;