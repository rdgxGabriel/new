
// Aqui a gente traz o Express e o CORS pra fazer as coisas do servidor
import express from 'express';
import cors from 'cors';

// E essa é a gangue das nossas rotas que a gente definiu em outro arquivo
import routes from './routes.js';

// Vamo criar o nosso próprio servidor, é tipo o dono da parada toda
const server = express();

// O CORS é tipo o cara que deixa as pessoas diferentes chegarem na nossa API, suave
server.use(cors());

// Esse aqui devia ser ligado com o Express pra gente entender os dados dos formulários, mas tá faltando essa parte, vamo ligar isso aqui pro Express entender, sabe?
express.urlencoded({extended:true});

// Essa linha manda as requisições que chegarem na área '/api' pra nossa gangue das rotas lidar com elas
server.use('/api', routes);

// Agora a gente liga o servidor na porta 3000 e joga uma mensagem maneirosa no console, tipo "e aí, o servidor tá pronto pra bombar!"
server.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
})
