// Aqui a gente tá trazendo o 'db' que conecta com o banco de dados, lembrando que isso vem de um arquivo separado
import db from '../db.js';

// Cada função abaixo é tipo uma tarefa específica que a gente pede pro banco de dados fazer

// Essa função busca todo mundo lá do banco de dados
export function buscarTodos() {
    return new Promise((aceito, rejeitado) => {
        // Faz um pedido pro banco pra pegar todos os clientes
        db.query('SELECT * FROM clientes', (error, results) => {
            if (error) { rejeitado(error); return; }
            // Se conseguir, devolve os clientes
            aceito(results);
        });
    });
}

// Essa função pega um cliente específico do banco, tipo pelo ID dele
export function buscarUm(Id_Cliente) {
    return new Promise((aceito, rejeitado) => {
        // Faz um pedido pro banco pra pegar um cliente específico pelo ID
        db.query('SELECT * FROM clientes WHERE Id_Cliente = ?', [Id_Cliente], (error, results) => {
            if (error) { rejeitado(error); return; }
            // Se achar o cliente, devolve ele
            if (results.length > 0) {
                aceito(results[0]);
            } else {
                aceito(false); // Senão, devolve falso
            }
        });
    });
}

// Essa função adiciona um cliente novo lá no banco de dados
export function inserir(Id_Cliente, Nome_Cliente, Segmento, Cidade,
    Estado, Pais, Mercado, Regiao) {
    return new Promise((aceito, rejeitado) => {
        // Faz um pedido pro banco pra adicionar um cliente novo com as informações que a gente passou
        db.query('INSERT INTO clientes (Id_Cliente, Nome_Cliente, Segmento, Cidade, Estado, Pais, Mercado, Regiao) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [Id_Cliente, Nome_Cliente, Segmento, Cidade, Estado, Pais, Mercado, Regiao],
            (error, results) => {
                if (error) { rejeitado(error); return; }
                // Se conseguir adicionar, devolve o ID do cliente que foi adicionado
                aceito(results.insertId_Cliente);
            }
        );
    });
}

// Essa função atualiza as informações de um cliente já existente no banco
export function alterar(Id_Cliente, Nome_Cliente, Segmento, Cidade,
    Estado, Pais, Mercado, Regiao) {
    return new Promise((aceito, rejeitado) => {
        // Faz um pedido pro banco pra atualizar as informações do cliente que a gente passou
        db.query('UPDATE clientes SET Nome_Cliente= ?, Segmento = ?, Cidade = ?, Estado = ?, Pais = ?, Mercado = ?, Regiao = ? Where Id_Cliente = ? ',
            [Id_Cliente, Nome_Cliente, Segmento, Cidade, Estado, Pais, Mercado, Regiao],
            (error, results) => {
                if (error) { rejeitado(error); return; }
                // Se conseguir atualizar, devolve os resultados
                aceito(results);
            }
        );
    });
}

// Essa função exclui um cliente específico do banco
export function excluir(Id_Cliente) {
    return new Promise((aceito, rejeitado) => {
        // Faz um pedido pro banco pra excluir um cliente pelo ID que a gente passou
        db.query('DELETE FROM clientes WHERE Id_Cliente = ?', [Id_Cliente], (error, results) => {
            if (error) { rejeitado(error); return; }
            // Se conseguir excluir, devolve os resultados
            aceito(results);
        });
    });
}
