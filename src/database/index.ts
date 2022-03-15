import mongoose, { Mongoose } from 'mongoose';

const DB_CONN = 'mongodb://localhost/db_produtos';
//'mongodb+srv://admin:PmBKoX3gPMVHgXlR@cluster0.pboh7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


// Exportando a função que faz a conexão com o banco de dados
export const connect = async () : Promise<Mongoose> => await mongoose.connect(DB_CONN, {
    autoIndex: true,
    autoCreate: true,
});