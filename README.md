<div align="center">
  <a href="#english">English</a> • <a href="#portugues">Português</a>
</div>

---
<a name="english"></a>

# 🧩 CLI Tool — Node.js + TypeScript

A versatile, cross-platform command-line interface (CLI) tool developed with Node.js and TypeScript.

📌 **Short Description**
This CLI tool offers a range of utilities, including:
*   Currency conversion using public APIs.
*   CEP (Brazilian Postal Code) lookup via public APIs.
*   Parsing of CSV files with an option for JSON export.

It features rich visual feedback in the terminal using [Chalk](https://github.com/chalk/chalk) for colors and [Ora](https://github.com/sindresorhus/ora) for spinners/loaders, and supports nested commands and flags.

## ✅ Features

*   **Currency Conversion**: Convert values between different currencies.
*   **CEP Lookup**: Fetch address details for Brazilian postal codes.
*   **CSV Parsing**: Read data from CSV files and display it as a table or export to JSON.
*   **User-Friendly Feedback**: Colored output and spinners for better user experience.
*   **Cross-Platform**: Packaged to run on Linux, macOS, and Windows.

## ⚙️ Technologies

*   [Node.js](https://nodejs.org/) + [TypeScript](https://www.typescriptlang.org/)
*   [Commander.js](https://github.com/tj/commander.js/): For parsing command-line arguments.
*   [Chalk](https://github.com/chalk/chalk): For terminal string styling (colors).
*   [Ora](https://github.com/sindresorhus/ora): For elegant terminal spinners and loading indicators.
*   [Axios](https://github.com/axios/axios): For making HTTP requests to external APIs.
*   [csv-parser](https://github.com/mafintosh/csv-parser): For efficient CSV file parsing.
*   [pkg](https://github.com/vercel/pkg): For packaging the Node.js project into standalone executables.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
*   Node.js (v18 or higher is recommended)
*   npm (Node Package Manager) or yarn

## 🚀 How to Use

1.  **Clone the Repository** (if you haven't already):
    ```bash
    git clone <repository-url> # Replace <repository-url> with the actual URL
    cd cli-tool
    ```

2.  **Install Dependencies**:
    This will install all the necessary packages defined in `package.json`.
    ```bash
    npm install
    ```

3.  **Run in Development Mode**:
    To execute commands directly using `ts-node` with live reloading (via `nodemon`):
    ```bash
    npm run dev -- <command> [options]
    ```
    For example: `npm run dev -- cep 01311000`

4.  **Build the TypeScript Code**:
    This compiles the TypeScript source code into JavaScript, placing the output in the `dist/` directory.
    ```bash
    npm run build
    ```

5.  **Package into Standalone Executables**:
    This command first builds the project, then packages it into executables for Linux, macOS, and Windows.
    ```bash
    npm run package
    ```
    The executables will be located in the `release/` folder.

## 🛠 Commands

Here are some examples of how to use the available commands (when in development mode):

*   **Convert Currency**:
    Specify source currency, target currency, and amount.
    ```bash
    # Example: Convert 100 USD to BRL
    npm run dev -- convert --from USD --to BRL --amount 100
    ```

*   **Lookup CEP (Brazilian Postal Code)**:
    Provide the CEP number (digits only or with hyphen).
    ```bash
    # Example: Lookup CEP for a central São Paulo address
    npm run dev -- cep 01311000
    ```

*   **Parse CSV File**:
    Provide the path to your `.csv` file.
    ```bash
    # Example: Parse file.csv and display as a table
    npm run dev -- csv ./file.csv
    ```
    To export the CSV data as JSON:
    ```bash
    # Example: Parse file.csv and output as JSON
    npm run dev -- csv ./file.csv --output=json
    ```

## 📦 Packaging

This CLI tool can be bundled into standalone executables using `pkg`. The `npm run package` script handles this:

```bash
npm run package
```

This process generates the following binaries inside the `release/` folder:
*   Linux: `cli-tool-linux`
*   macOS: `cli-tool-macos`
*   Windows: `cli-tool-win.exe`

## 📂 Project Structure
```
cli-tool/
├── bin/
│   └── index.ts         # Main entry point for the CLI, parses commands
├── src/
│   ├── commands/        # Contains the logic for each specific command
│   │   ├── convert.ts   # Currency conversion command
│   │   ├── cep.ts       # CEP lookup command
│   │   └── csv.ts       # CSV parsing command
│   └── utils/           # Utility functions, e.g., custom logger
│       └── logger.ts    # Logger utility with colored output
├── dist/                  # Output directory for compiled JavaScript files (after `npm run build`)
├── release/               # Output directory for packaged executables (after `npm run package`)
├── node_modules/          # Directory where npm installs project dependencies
├── .gitignore             # Specifies intentionally untracked files that Git should ignore
├── package.json           # Project metadata, dependencies, and npm scripts
├── tsconfig.json          # TypeScript compiler configuration options
└── README.md              # This file: project documentation
```

---
<a name="portugues"></a>

# 🧩 CLI Tool — Node.js + TypeScript

Uma ferramenta de linha de comando (CLI) versátil e multiplataforma, desenvolvida com Node.js e TypeScript.

📌 **Descrição Breve**
Esta ferramenta CLI oferece uma variedade de utilidades, incluindo:
*   Conversão de moedas utilizando APIs públicas.
*   Busca de CEP (Código de Endereçamento Postal) no Brasil via APIs públicas.
*   Leitura de arquivos CSV com opção de exportação para JSON.

Possui feedback visual rico no terminal utilizando [Chalk](https://github.com/chalk/chalk) para cores e [Ora](https://github.com/sindresorhus/ora) para spinners/loaders, e suporta comandos aninhados e flags.

## ✅ Funcionalidades

*   **Conversão de Moedas**: Converta valores entre diferentes moedas.
*   **Busca de CEP**: Obtenha detalhes de endereço para códigos postais brasileiros.
*   **Leitura de CSV**: Leia dados de arquivos CSV e exiba como tabela ou exporte para JSON.
*   **Feedback Amigável**: Saída colorida e spinners para melhor experiência do usuário.
*   **Multiplataforma**: Empacotado para rodar em Linux, macOS e Windows.

## ⚙️ Tecnologias

*   [Node.js](https://nodejs.org/) + [TypeScript](https://www.typescriptlang.org/)
*   [Commander.js](https://github.com/tj/commander.js/): Para interpretar argumentos de linha de comando.
*   [Chalk](https://github.com/chalk/chalk): Para estilização de strings no terminal (cores).
*   [Ora](https://github.com/sindresorhus/ora): Para spinners e indicadores de carregamento elegantes no terminal.
*   [Axios](https://github.com/axios/axios): Para realizar requisições HTTP a APIs externas.
*   [csv-parser](https://github.com/mafintosh/csv-parser): Para leitura eficiente de arquivos CSV.
*   [pkg](https://github.com/vercel/pkg): Para empacotar o projeto Node.js em executáveis independentes.

## 📋 Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte instalado:
*   Node.js (v18 ou superior é recomendado)
*   npm (Node Package Manager) ou yarn

## 🚀 Como Usar

1.  **Clone o Repositório** (se ainda não o fez):
    ```bash
    git clone <repository-url> # Substitua <repository-url> pela URL real
    cd cli-tool
    ```

2.  **Instalar Dependências**:
    Isso instalará todos os pacotes necessários definidos no `package.json`.
    ```bash
    npm install
    ```

3.  **Executar em Modo de Desenvolvimento**:
    Para executar comandos diretamente com `ts-node` e recarregamento automático (via `nodemon`):
    ```bash
    npm run dev -- <comando> [opções]
    ```
    Por exemplo: `npm run dev -- cep 01311000`

4.  **Gerar o Build do Código TypeScript**:
    Isso compila o código TypeScript para JavaScript, colocando o resultado no diretório `dist/`.
    ```bash
    npm run build
    ```

5.  **Empacotar como Executáveis Independentes**:
    Este comando primeiro gera o build do projeto e, em seguida, o empacota em executáveis para Linux, macOS e Windows.
    ```bash
    npm run package
    ```
    Os executáveis estarão localizados na pasta `release/`.

## 🛠 Comandos

Aqui estão alguns exemplos de como usar os comandos disponíveis (em modo de desenvolvimento):

*   **Conversão de Moeda**:
    Especifique a moeda de origem, moeda de destino e o valor.
    ```bash
    # Exemplo: Converter 100 USD para BRL
    npm run dev -- convert --from USD --to BRL --amount 100
    ```

*   **Busca de CEP (Código de Endereçamento Postal)**:
    Forneça o número do CEP (apenas dígitos ou com hífen).
    ```bash
    # Exemplo: Buscar CEP para um endereço central de São Paulo
    npm run dev -- cep 01311000
    ```

*   **Ler Arquivo CSV**:
    Forneça o caminho para o seu arquivo `.csv`.
    ```bash
    # Exemplo: Ler arquivo.csv e exibir como tabela
    npm run dev -- csv ./arquivo.csv
    ```
    Para exportar os dados do CSV como JSON:
    ```bash
    # Exemplo: Ler arquivo.csv e gerar saída como JSON
    npm run dev -- csv ./arquivo.csv --output=json
    ```

## 📦 Empacotamento

Esta ferramenta CLI pode ser empacotada como executáveis independentes usando `pkg`. O script `npm run package` cuida disso:

```bash
npm run package
```

Este processo gera os seguintes binários dentro da pasta `release/`:
*   Linux: `cli-tool-linux`
*   macOS: `cli-tool-macos`
*   Windows: `cli-tool-win.exe`

## 📂 Estrutura do Projeto
```
cli-tool/
├── bin/
│   └── index.ts         # Ponto de entrada principal da CLI, interpreta os comandos
├── src/
│   ├── commands/        # Contém a lógica para cada comando específico
│   │   ├── convert.ts   # Comando de conversão de moeda
│   │   ├── cep.ts       # Comando de busca de CEP
│   │   └── csv.ts       # Comando de leitura de CSV
│   └── utils/           # Funções utilitárias, ex: logger customizado
│       └── logger.ts    # Utilitário de log com saída colorida
├── dist/                  # Diretório de saída para arquivos JavaScript compilados (após `npm run build`)
├── release/               # Diretório de saída para executáveis empacotados (após `npm run package`)
├── node_modules/          # Diretório onde o npm instala as dependências do projeto
├── .gitignore             # Especifica arquivos não rastreados intencionalmente que o Git deve ignorar
├── package.json           # Metadados do projeto, dependências e scripts npm
├── tsconfig.json          # Opções de configuração do compilador TypeScript
└── README.md              # Este arquivo: documentação do projeto
``` 