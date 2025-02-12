// Importar o Express
const express = require('express');
const path = require('path');

// Criar uma instância do Express
const app = express();

// Configurar o middleware para servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static('public'));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota para a página de busca
app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'search.html'));
});

// Rota para o cadastro de usuários (exemplo futuro)
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// Rota para o cadastro de donos de quadras (exemplo futuro)
app.get('/register-owner', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register-owner.html'));
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());