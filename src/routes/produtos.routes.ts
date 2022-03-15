import { Router } from 'express';
import ProdutoRepository from '../repositories/ProdutoRepository';
import ProdutoService from '../services/ProdutoService';


const produtoRepository = new ProdutoRepository();

const produtosRouter = Router();

produtosRouter.post('/produtos/registrar', async (req, res) => {

    const { nome, preco, descricao, quantidade } = req.body;
    
    const produtoService = new ProdutoService(produtoRepository);

    const produto = await produtoRepository.salvar({ nome, preco, descricao, quantidade });

        return res.status(201).json({
            message: 'O produto foi cadastrado.',
            produto: produto
        });
});


produtosRouter.get('/produtos', async (req, res) => {

    const produtoService = new ProdutoService(produtoRepository);

    const produtos = await produtoRepository.obterTodos();

    return res.status(200).json(produtos);

});

produtosRouter.get('/produtos/pesquisar', async (req, res) => {

    const { id } = req.query;

    const produtoService = new ProdutoService(produtoRepository);

    const produto = await produtoRepository.obterPorId(id as string);

    if(!produto)
        return res.status(400).json({
            message: 'Usuário não existe.', 
        });

    return res.status(201).json(produto);

});

produtosRouter.delete('/produtos/excluir', async (req, res) => {
    
    const { id } = req.query;

    const produtoService = new ProdutoService(produtoRepository);

    if(!await produtoRepository.deletar(id as string))
        return res.status(400).json({
            message: 'Usuário não existe.', 
        });

    return res.status(200).json({
        message: 'Usuário deletado com sucesso.', 
    });

});


produtosRouter.put('/produtos/atualizar', async (req, res) => {
    
    const {  id, nome, preco, descricao, quantidade } = req.body;

    const produtoService = new ProdutoService(produtoRepository);

    const produtoAtualizado = await produtoRepository.alterar( id, nome, preco, descricao, quantidade );

    return res.status(200).json({
        message: 'Usuário atualizado com sucesso.',
        produto: produtoAtualizado
    });

});

export { produtosRouter };