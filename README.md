<h1 align="center">apiLibrary</h1>
<p align="center">
  <img src="https://img.shields.io/github/license/DavCarvalho/apiLibrary" alt="License">
  <img src="https://img.shields.io/github/package-json/v/DavCarvalho/apiLibrary" alt="Version">
  <img src="https://img.shields.io/github/last-commit/DavCarvalho/apiLibrary" alt="Last commit">
</p>
<h2>Descrição</h2>
<p>apiLibrary é uma API de livraria construída com Node.js e MongoDB.</p>
<h2>Instalação</h2>
<ol>
  <li>Clone este repositório: <code>git clone https://github.com/DavCarvalho/apiLibrary.git</code></li>
  <li>Instale as dependências: <code>npm install</code></li>
  <li>Crie um arquivo <code>.env</code> na raiz do projeto e defina as variáveis de ambiente apropriadas, conforme o arquivo <code>.env.example</code>.</li>
  <li>Inicie o servidor: <code>npm start</code></li>
</ol>

<h2>Rotas da API</h2>
<table>
  <thead>
    <tr>
      <th>Método HTTP</th>
      <th>Rota</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/books</td>
      <td>Retorna todos os livros</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/books/:id</td>
      <td>Retorna um livro por ID</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/books</td>
      <td>Adiciona um novo livro</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/books/:id</td>
      <td>Atualiza um livro por ID</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/books/:id</td>
      <td>Remove um livro por ID</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/authors</td>
      <td>Retorna todos os autores</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/authors/:id</td>
      <td>Retorna um autor por ID</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/authors</td>
      <td>Adiciona um novo autor</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/authors/:id</td>
      <td>Atualiza um autor por ID</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/authors/:id</td>
      <td>Remove um autor por ID</td>
    </tr>
  </tbody>
</table>


Rota POST /livros - Adiciona um novo livro:
![image](https://user-images.githubusercontent.com/86022099/231646129-fb9dc2af-cb2d-4e85-bff1-91631f732d4a.png)

Rota GET /livros - Lista todos os livros
![image](https://user-images.githubusercontent.com/86022099/231646332-569fbdf8-e00c-4501-84c6-12893e215415.png)


