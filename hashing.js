const crypto = require('crypto');

//Função de simulação de cadastro
function cadastrarUsuario(senha) {
    //Salt criptográfico randômico
    const salt = crypto.randomBytes(16).toString('hex');
    
    //Algoritmo de hash (SHA-256)
    const hash = crypto.createHash('sha256').update(senha + salt).digest('hex');
    
    return {
        salt: salt,
        hash: hash
    };
}

//Gravação simulada no banco de dados
const bancoDeDadosSimulado = [];

const novoUsuario = cadastrarUsuario("SenhaSecreta123");
bancoDeDadosSimulado.push(novoUsuario);

console.log("=== MÓDULO 1: HASHING E AUTENTICAÇÃO ===");
console.log("Registro persistido no banco simulado:");
console.log(bancoDeDadosSimulado);
