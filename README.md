# Atividade 3: Laboratório Prático de Criptografia e Esteganografia

Este repositório contém a implementação prática de três técnicas de segurança da informação desenvolvidas em Node.js.

---

## Estrutura do Projeto

* `hashing.js`: Módulo 1 — Cadastro de usuário com Salt criptográfico randômico e hash SHA-256.
* `criptografia.js`: Módulo 2 — Cifra simétrica AES-256 (modo ECB) para proteção de dados financeiros em trânsito local.
* `esteganografia.js`: Módulo 3 — Ocultação e extração de mensagem confidencial via bits menos significativos (LSB) em imagem PNG.
* `input.png`: Imagem original usada pelo módulo de esteganografia.
* `package.json`: Configuração de dependências do Node.js (`pngjs`).

---

## Como Executar

### 1. Instalação de Dependências
Para baixar a biblioteca externa necessária (`pngjs`), execute:
\`\`\`bash
npm install
\`\`\`

---

### 2. Execução dos Módulos

* **Módulo 1 (Hashing e Autenticação):**
  \`\`\`bash
  node hashing.js
  \`\`\`

* **Módulo 2 (Cifra de Dados Financeiros):**
  \`\`\`bash
  node criptografia.js
  \`\`\`

* **Módulo 3 (Esteganografia LSB):**
  \`\`\`bash
  node esteganografia.js
  \`\`\`
 
