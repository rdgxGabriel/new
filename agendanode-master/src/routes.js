// Traz a galera do Express pra criar as paradas das nossas rotas
import express from 'express';

// Aqui a gente cria umas paradas pra rotas usando o Express
const router = express.Router();

// Importa as funções do pessoal que controla os clientes
import { buscarTodos, buscarUm, inserir, alterar, excluir } from './controllers/ClienteController.js';

// Tipo, aqui a gente define os roles das rotas e conecta cada uma com a função certa dos caras que cuidam dos clientes

// Essa é tipo pra pegar todos os clientes, saca?
router.get('/clientes', buscarTodos);

// Agora essa aqui é pra pegar um cliente específico, tipo pelo ID dele, manja?
router.get('/cliente/:Id_Cliente', buscarUm);

// Essa é louca, é pra mandar um cliente novo pra parada
router.post('/cliente', inserir);

// Aqui é pra dar um update nos detalhes de um cliente que já tá na área
router.put('/cliente/:Id_Cliente', alterar);

// E essa é pra excluir um cliente, tipo dar um tchauzinho pra ele
router.delete('/cliente/:Id_Cliente', excluir);

// A gente exporta essas rotas pra que o resto do bonde possa usar, sacou?
export { router as default };
