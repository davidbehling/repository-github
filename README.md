# 🗂️ Repository GitHub

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![API](https://img.shields.io/badge/API-GitHub-black)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

Projeto desenvolvido para **consumo da API pública do GitHub**, com foco em **listagem, busca e manipulação de repositórios**.

O objetivo é **estudar integração com APIs REST**, organização de código frontend/backend e servir como **projeto de portfólio**.


## 📌 Visão Geral

Funcionalidades principais:

```
🔍 Buscar repositórios no GitHub
📦 Listar repositórios públicos
⭐ Exibir estrelas, forks e linguagem
🗃️ Detalhar informações de um repositório
🌐 Consumo de API REST do GitHub
🧠 Organização de código por responsabilidade
📋 Listar issues de um repositório com filtro por status
📄 Paginação de issues
💾 Persistência de repositórios favoritados
```

## 🏗️ Arquitetura da Aplicação

Diagrama melhorado da arquitetura
```
┌─────────────────────────────────────────────────────────┐
│                   APLICAÇÃO REACT                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────────┐         ┌──────────────────┐      │
│  │   Main Page      │         │ Repository Page  │      │
│  │  - Busca repos   │   ←→    │  - Detalhes      │      │
│  │  - Lista favs    │         │  - Issues        │      │
│  └────────┬─────────┘         └────────┬─────────┘      │
│           │                            │                │
│           └────────────┬───────────────┘                │
│                        │                                │
│                   Routes (React Router)                 │
│                        │                                │
│                        ↓                                │
│              ┌──────────────────┐                       │
│              │  Services/API    │                       │
│              │  (api.js)        │                       │
│              │ - searchRepos()  │                       │
│              │ - getIssues()    │                       │
│              └────────┬─────────┘                       │
│                       │                                 │
│                       ↓                                 │
│              ┌──────────────────┐                       │
│              │  Axios HTTP      │                       │
│              │  Client          │                       │
│              └────────┬─────────┘                       │
│                       │                                 │
└───────────────────────┼─────────────────────────────────┘
                        │
                        ↓
            ┌─────────────────────────┐
            │   GitHub API REST       │
            │  api.github.com         │
            │  - /search/repositories │
            │  - /repos/{owner}/{repo}│
            │  - /repos/{owner}/{repo}│
            │    /issues              │
            └─────────────────────────┘
```
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


## 📂 Estrutura de Diretórios

```
repository-github/
├── public/
│   ├── favicon.ico                          Ícone da aplicação exibido na aba do navegador
│   ├── images/
│   │   ├── 01_Tela_Inicial.png              Screenshot da tela inicial da aplicação
│   │   ├── 02_Lista_Repositorios.png        Screenshot da lista de repositórios salvos
│   │   └── 03_Tela_apos_clica..             Screenshot das issues do repositório
│   ├── logo192.png                          Logo da aplicação em 192x192px
│   ├── logo512.png                          Logo da aplicação em 512x512px
│   ├── manifest.json                        Manifesto PWA com metadados da aplicação
│   ├── index.html                           Arquivo HTML principal que monta a aplicação React
│   └── robots.txt                           Arquivo para controlar acesso de crawlers
│
├── src/
│   ├── App.js                               Componente raiz que configura GlobalStyle, BrowserRouter e rotas
│   ├── index.js                             Ponto de entrada que renderiza a aplicação no DOM
│   ├── routes.js                            Define as rotas da aplicação (/ e /repository/:repositoryName)
│   ├── pages/
│   │   ├── Main/
│   │   │   ├── index.js                     Página principal com formulário de busca e lista de repositórios salvos
│   │   │   └── styles.js                    Estilos da página Main usando styled-components
│   │   └── Repository/
│   │       ├── index.js                     Página de detalhes do repositório com issues, filtros e paginação
│   │       └── styles.js                    Estilos da página Repository usando styled-components
│   ├── services/
│   │   └── api.js                           Configuração do Axios para requisições à API GitHub
│   └── styles/
│       └── global.js                        Estilos globais da aplicação usando createGlobalStyle
│
├── docker-compose.dev.yml                   Configuração do Docker Compose para desenvolvimento
├── Dockerfile                               Imagem Docker baseada em Node 18-Alpine
├── Makefile                                 Scripts de automação para Docker (docker, build, bash, stop)
├── package.json                             Dependências do projeto e scripts de execução
├── package-lock.json                        Versões exatas das dependências instaladas (npm)
├── yarn.lock                                Versões exatas das dependências instaladas (yarn)
├── README.md                                Documentação e instruções do projeto
├── readme.txt                               Informações adicionais e lista de dependências
└── .gitignore/.dockerignore                 Arquivos e diretórios ignorados pelo Git e Docker

````

> Estrutura simples, clara e facilmente escalável.


## 🔌 Integração com a API do GitHub

## Endpoint utilizado (exemplo)
```http
GET https://api.github.com/users/{username}/repos
````

## Exemplo de resposta

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

## ⚙️ Tecnologias Utilizadas

* **JavaScript (ES6+)**
* **Axios** – requisições HTTP
* **API REST do GitHub**
* **HTML / CSS**
* **Node.js / npm / yarn**
* **React**
* **Docker & Docker Compose**


## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js **16+**
- npm ou yarn
- Docker e Docker Compose

### Instalação
```bash
npm install
# ou
yarn install
````

### Executar em ambiente de desenvolvimento

```bash
make docker
```

### A aplicação estará disponível em:

```
http://localhost:3000
```

## 📦 Package / Pacotes

- npm i react-router-dom

- npm i styled-components

- npm i react-icons

- npm i axios

## 🖥️ Tela Inicial

![Tela Inicial](https://github.com/davidbehling/repository-github/blob/main/public/images/01_Tela_Inicial.png)

## 🖥️ Tela Inicial com 1 item cadastrado e 1 item no input

![Tela com lista](https://github.com/davidbehling/repository-github/blob/main/public/images/02_Lista_Repositorios.png)

## 🖥️ Tela do perfil do usuário após clicar nos três riscos ao lado do repositório.

![Tela de perfil](https://github.com/davidbehling/repository-github/blob/main/public/images/03_Tela_apos_clicar_no_icone_tres_riscos.png)
