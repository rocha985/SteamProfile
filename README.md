# Perfil Steam Viewer

## Descrição

O **Perfil Steam Viewer** é uma aplicação web simples que permite visualizar o perfil de um usuário na plataforma Steam. Através dessa aplicação, o usuário pode fornecer o **Steam ID** ou o **nome de usuário (Vanity URL)** e a aplicação exibe as informações detalhadas sobre o perfil, como nome, status e imagem de avatar.

## Tecnologias Utilizadas

- **Node.js**: Plataforma JavaScript do lado do servidor.
- **Express**: Framework minimalista para Node.js, utilizado para criar o servidor web.
- **Axios**: Cliente HTTP baseado em Promises, utilizado para fazer requisições à API do Steam.
- **EJS**: Motor de template que permite gerar HTML dinâmico no servidor.
- **Dotenv**: Módulo para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **CSS**: Folhas de estilo para a interface do usuário.

## Funcionalidade

1. O usuário acessa a página inicial, onde é solicitado a informar o **Steam ID** ou o **nome de usuário (Vanity URL)**.
2. Ao enviar o formulário, a aplicação tenta buscar os dados do perfil através da API do Steam.
3. Se o **Steam ID** for fornecido diretamente, a aplicação busca o perfil.
4. Caso seja fornecido um **nome de usuário**, a aplicação converte o nome para o **Steam ID** utilizando a API do Steam.
5. Se o usuário for encontrado, as informações do perfil, como nome, status online e imagem de avatar, são exibidas.
6. Se o usuário não for encontrado ou se ocorrer algum erro, uma mensagem de erro é exibida.

## Acessando a Aplicação

Como o projeto está hospedado na [Vercel](https://vercel.com/), você pode acessar a aplicação diretamente pelo seguinte link:

[**Perfil Steam Viewer**](https://steam-profile-five.vercel.app)

### Como Usar

1. Acesse a aplicação pelo link acima.
2. Na página inicial, informe o **Steam ID** ou o **nome de usuário** (Vanity URL) do usuário que deseja visualizar.
3. Clique em **"Ver Perfil"** para carregar as informações do perfil do Steam.

## Como Instalar e Usar Localmente

### Pré-requisitos

- **Node.js** (v12 ou superior) e **npm** instalados.
- **Chave de API do Steam**: Crie sua chave no [Steam Dev](https://steamcommunity.com/dev/apikey).

1. Clone o repositório:
   ```bash
   git clone https://github.com/rocha985/SteamProfile.git
   cd <diretório-do-repositório>
   
2. Instale as dependências:
   ```bash
   npm install

3. Adicione a chave da API no arquivo .env:

   - STEAM_API_KEY=sua-chave-de-api-aqui

4. Inicie o servidor:
   ```bash
   npm start

5. Acesse a aplicação no navegador em http://localhost:3000.
