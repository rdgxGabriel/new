// Aqui a gente tá importando os dados dos serviços pra lidar com clientes
import { 
    buscarTodos as _buscarTodos, 
    buscarUm as _buscarUm, 
    inserir as _inserir, 
    alterar as _alterar, 
    excluir as _excluir 
} from '../services/ClienteService.js';

// Cada função abaixo é tipo uma função específica que faz um role com clientes, saca?

// Essa aqui busca todo mundo, aí pega cada um, arruma as paradas e manda de volta
export async function buscarTodos(req, res) {
    const json = { error: '', result: [] }; // Vamo começar um objeto JSON

    // Pega todos os clientes usando a função do serviço
    const clientes = await _buscarTodos();

    // Formata os clientes pro jeito que a gente quer, com uns detalhes específicos
    for (let i in clientes) {
        json.result.push({
            codigo: clientes[i].Id_Cliente,
            nome: clientes[i].Nome_Cliente,
            cidade: clientes[i].Cidade,
            estado: clientes[i].Estado,
            pais: clientes[i].Pais
        });
    }

    // Manda os clientes de volta no formato JSON
    res.json(json);
}

// Essa função aqui pega só um cliente, baseado no ID que a gente passa
export async function buscarUm(req, res) {
    let json = { error: '', result: {} }; // Começa com um objeto JSON vazio

    // Pega o ID do cliente da requisição
    let id_cliente = req.params.Id_Cliente;

    // Aí busca o cliente usando o ID que a gente passou
    let cliente = await _buscarUm(id_cliente);

    // Se achar o cliente, atualiza o objeto JSON com ele
    if (cliente) {
        json.result = cliente;
    }

    // Devolve o cliente de volta pro cliente (confuso, né?) no formato JSON
    res.json(json);
}

// Essa função adiciona um novo cliente na parada
export async function inserir(req, res) {
    let json = { error: '', result: {} }; // Começa com um objeto JSON vazio

    // Pega informações do corpo da requisição pra criar um cliente novo
    let codigo = req.body.Id_Cliente;
    let nome = req.body.Nome_Cliente;
    // ...outras informações

    // Vê se tem todas as informações que a gente precisa pra criar o cliente
    if (codigo && nome /* && outras informações */) {
        // Cria um novo cliente com as informações que a gente passou
        let cliente = await _inserir(codigo, nome /* outras informações */);
        
        // Atualiza o objeto JSON com os detalhes do cliente novo
        json.result = {
            cliente: codigo,
            nome,
            // outras informações
        };
    } else {
        // Se faltar informação, bota um erro no objeto JSON
        json.error = 'Erro no envio dos dados';
    }

    // Manda o objeto JSON de volta pro cliente (de novo) no formato JSON
    res.json(json);
}

// Essa função atualiza as informações de um cliente já existente
export async function alterar(req, res) {
    let json = { error: '', result: {} }; // Começa com um objeto JSON vazio

    // Pega o ID do cliente da requisição e as informações do corpo
    let codigo = req.params.Id_Cliente;
    let nome = req.body.Nome_Cliente;
    // ...outras informações

    // Vê se tem todas as informações pra atualizar o cliente
    if (codigo && nome /* && outras informações */) {
        // Atualiza as informações do cliente usando os novos dados que a gente passou
        await _alterar(codigo, nome /* outras informações */);
        
        // Atualiza o objeto JSON com os detalhes do cliente que a gente mudou
        json.result = {
            codigo,
            nome,
            // outras informações
        };
    } else {
        // Se faltar informação, bota um erro no objeto JSON
        json.error = 'Erro no envio dos dados';
    }

    // Manda o objeto JSON de volta pro cliente (de novo) no formato JSON
    res.json(json);
}

// Essa função exclui um cliente que já tá na área
export async function excluir(req, res) {
    let json = { error: '', result: {} }; // Começa com um objeto JSON vazio

    // Pega o ID do cliente que a gente quer excluir
    let id_cliente = req.params.Id_Cliente;

    // Aí exclui o cliente usando o ID que a gente passou
    let cliente = await _excluir(id_cliente);

    // Se conseguir excluir o cliente, atualiza o objeto JSON com ele
    if (cliente) {
        json.result = cliente;
    }

    // Devolve o cliente de volta pro cliente (de novo) no formato JSON
    res.json(json);
}
