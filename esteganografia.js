const fs = require('fs');
const { PNG } = require('pngjs');

class EsteganografiaLSB {
    // Converte o texto para um vetor de bits
    static textoParaBits(texto) {
        let bits = [];
        for (let i = 0; i < texto.length; i++) {
            const binario = texto.charCodeAt(i).toString(2).padStart(8, '0');
            for (let bit of binario) {
                bits.push(parseInt(bit));
            }
        }
        return bits;
    }

    // Injeta os bits da mensagem nos bits menos significativos (LSB) dos bytes da imagem
    static ocultar(caminhoOrigem, caminhoDestino, mensagem) {
        const buffer = fs.readFileSync(caminhoOrigem);
        const png = PNG.sync.read(buffer);
        const bits = this.textoParaBits(mensagem);

        for (let i = 0; i < bits.length; i++) {
            // Limpa o último bit com AND 254 (11111110) e injeta o novo bit com OR
            png.data[i] = (png.data[i] & 254) | bits[i];
        }

        const novoBuffer = PNG.sync.write(png);
        fs.writeFileSync(caminhoDestino, novoBuffer);
    }

    // Extrai os bits menos significativos da imagem para recuperar o texto
    static extrair(caminhoImagem, tamanhoMensagem) {
        const buffer = fs.readFileSync(caminhoImagem);
        const png = PNG.sync.read(buffer);
        
        const totalBits = tamanhoMensagem * 8;
        let bits = [];

        for (let i = 0; i < totalBits; i++) {
            bits.push(png.data[i] & 1);
        }

        let texto = '';
        for (let i = 0; i < bits.length; i += 8) {
            const byte = bits.slice(i, i + 8).join('');
            texto += String.fromCharCode(parseInt(byte, 2));
        }

        return texto;
    }
}

console.log("=== MÓDULO 3: ESTEGANOGRAFIA LSB ===");
const mensagemSecreta = "DadosConfidenciais123";

// Ocultar dados
EsteganografiaLSB.ocultar('input.png', 'output.png', mensagemSecreta);
console.log("Mensagem inserida com sucesso no ficheiro 'output.png'.");

// Extrair dados
const mensagemRecuperada = EsteganografiaLSB.extrair('output.png', mensagemSecreta.length);
console.log("Mensagem extraída da imagem:", mensagemRecuperada);
