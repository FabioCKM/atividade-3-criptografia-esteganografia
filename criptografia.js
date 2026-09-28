const crypto = require('crypto');

class CriptografiaDados {
    constructor() {
        // Cifra simétrica AES em modo ECB 
        this.algoritmo = 'aes-256-ecb';
        // Chave simétrica randômica de 256 bits (32 bytes)
        this.chave = crypto.randomBytes(32);
    }

    cifrar(textoOriginal) {
        const cipher = crypto.createCipheriv(this.algoritmo, this.chave, null);
        let cifrado = cipher.update(textoOriginal, 'utf8', 'hex');
        cifrado += cipher.final('hex');
        return cifrado;
    }

    decifrar(textoCifrado) {
        const decipher = crypto.createDecipheriv(this.algoritmo, this.chave, null);
        let decifrado = decipher.update(textoCifrado, 'hex', 'utf8');
        decifrado += decipher.final('utf8');
        return decifrado;
    }
}

// Demonstração da comunicação local e comprovação da reversão
console.log("=== MÓDULO 2: CIFRA DE DADOS FINANCEIROS ===");
const sistema = new CriptografiaDados();
const dadosFinanceiros = JSON.stringify({ conta: "12345-6", saldo: 1500000.00 });

// 1. Cifragem
const textoCifrado = sistema.cifrar(dadosFinanceiros);
console.log("Dado financeiro cifrado:", textoCifrado);

// 2. Decifragem com a chave correta
const textoDecifrado = sistema.decifrar(textoCifrado);
console.log("Dado original recuperado:", textoDecifrado);
