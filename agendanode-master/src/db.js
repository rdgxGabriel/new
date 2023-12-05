// Importa a biblioteca mysql2 para poder usar com o MySQL
import mysql from 'mysql2';

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    // Aqui a gente pode configurar o endereço do banco, o usuário, a senha e o nome do banco
    // Na vida real, normalmente a gente usaria variáveis de ambiente para esconder essas informações
    // Mas por enquanto, estamos colocando tudo aqui direto
    host: 'localhost', // O banco tá na mesma máquina que a gente (localhost)
    user: 'root', // Usuário do banco, que é o root
    password: 'Admin@123', // A senha do banco, nesse caso é 'Admin@123'
    database: 'lojadb' // O nome do banco de dados que a gente quer acessar, que é 'lojadb'
});

// Tentativa de conectar ao banco de dados
connection.connect((error) => {
    // Se tiver algum erro na conexão, a gente mostra ele aqui
    if(error) throw error;
    // Se não tiver erro, a gente mostra uma mensagem de sucesso no console
    console.log(`Conectado ao banco de dados: lojadb`);
});

// Exporta essa conexão para que a gente possa usar em outras partes do código
export default connection;
