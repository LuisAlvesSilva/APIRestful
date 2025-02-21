import mongoose from 'mongoose';

//Conexão com o MongoDB//
const conn = mongoose.connect(
    "mongodb+srv://luis:Nandim%40s2@ecommerce.scj3p.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce")
    .then( () => console.log("Banco de dados conectado"))
    .catch( () => console.log("Deu ruim"));

export default conn;