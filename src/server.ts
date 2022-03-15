import express from 'express';
import * as database from './database';
import { produtosRouter } from './routes/produtos.routes';

const app = express();
database.connect();

app.use(express.json());

app.use(produtosRouter);

app.listen(3000, () => {
    console.log('Está rodando');
});