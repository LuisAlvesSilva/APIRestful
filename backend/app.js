import conn from './config/database/Conn.js';

async function startServer() {
    try {
        await conn; // Aguarda a conexão ser estabelecida
        console.log("Servidor iniciado após a conexão com o banco!");
        
        // Aqui você pode iniciar o seu servidor, por exemplo, com Express
        // app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
    } catch (err) {
        console.error("Erro ao iniciar o servidor:", err);
    } finally {
        process.exit(0);
    }
}

startServer();
