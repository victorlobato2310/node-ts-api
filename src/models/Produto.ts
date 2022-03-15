import mongoose, { Document , Model, Schema } from 'mongoose';

export type ProdutoAtributos = {
    nome: string,
    descricao: string,
    preco: number,
    quantidade: number,
    created_at: Date,
    updated_at: Date | undefined
}

export type ProdutoDocument = Document & ProdutoAtributos;

type ProdutoModel = Model<ProdutoDocument>;

const ProdutoSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    preco: {
        type: String,
        required: true,
    },
    quantidade: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        required: true,
    },
    updated_at: {
        type: Date,
        required: false,
    }
});

export default mongoose.model<ProdutoDocument, ProdutoModel>('Produto', ProdutoSchema);
