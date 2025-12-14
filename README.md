# 🗂️ Repository GitHub

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![API](https://img.shields.io/badge/API-GitHub-black)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

Projeto desenvolvido para **consumo da API pública do GitHub**, com foco em **listagem, busca e manipulação de repositórios**.

O objetivo é **estudar integração com APIs REST**, organização de código frontend/backend e servir como **projeto de portfólio**.


# 📌 Visão Geral

Funcionalidades principais:

- 🔍 Buscar usuários no GitHub
- 📦 Listar repositórios públicos
- ⭐ Exibir estrelas, forks e linguagem
- 🗃️ Detalhar informações de um repositório
- 🌐 Consumo de API REST do GitHub
- 🧠 Organização de código por responsabilidade


# 🏗️ Arquitetura da Aplicação

Fluxo simplificado da aplicação:

```

Interface (UI)
↓
Services (Integração com API GitHub)
↓
HTTP Client (Axios / Fetch)
↓
GitHub API

```

Essa separação facilita testes, manutenção e evolução do projeto.


# 📂 Estrutura de Diretórios

```

repository-github/
├── src/
│   ├── api/                    # Configuração de acesso à API do GitHub
│   │   └── github.js
│   │
│   ├── services/               # Regras de negócio
│   │   └── repositoriesService.js
│   │
│   ├── components/             # Componentes da interface
│   │   ├── RepositoryList.js
│   │   ├── RepositoryItem.js
│   │   └── SearchBar.js
│   │
│   ├── pages/                  # Páginas / telas
│   │   ├── Home.js
│   │   └── RepositoryDetails.js
│   │
│   ├── styles/                 # Estilos
│   │   └── main.css
│   │
│   ├── App.js                  # Componente raiz
│   └── index.js                # Entry point
│
├── public/                     # Arquivos públicos
│
├── package.json                # Dependências e scripts
└── README.md                   # Documentação

````

> Estrutura simples, clara e facilmente escalável.


# 🔌 Integração com a API do GitHub

# Endpoint utilizado (exemplo)
```http
GET https://api.github.com/users/{username}/repos
````

# Exemplo de resposta

```json
[
  {
    "name": "meu-repositorio",
    "language": "JavaScript",
    "stargazers_count": 10,
    "forks_count": 2
  }
]
```


 ⚙️ Tecnologias Utilizadas

* **JavaScript (ES6+)**
* **Axios** – requisições HTTP
* **API REST do GitHub**
* **HTML / CSS**
* **Node.js / npm**


 🚀 Como Executar o Projeto

# Pré-requisitos

* Node.js **16+**
* npm ou yarn

# Instalação

```bash
npm install
# ou
yarn install
```

# Executar em desenvolvimento

```bash
npm start
# ou
yarn start
```

A aplicação estará disponível em:

```
http://localhost:3000
```

# Pacotes:

- npm i react-router-dom

- npm i styled-components

- npm i react-icons

- npm i axios

# Tela Inicial

![Tela Inicial](https://github.com/davidbehling/repository-github/blob/main/public/images/01_Tela_Inicial.png)

# Tela Inicial com 1 item cadastrado e 1 item no input

![Tela com lista](https://github.com/davidbehling/repository-github/blob/main/public/images/02_Lista_Repositorios.png)

# Tela do perfil do usuário após clicar nos três riscos ao lado do repositório.

![Tela de perfil](https://github.com/davidbehling/repository-github/blob/main/public/images/03_Tela_apos_clicar_no_icone_tres_riscos.png)
