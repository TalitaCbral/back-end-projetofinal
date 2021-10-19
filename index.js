// imports
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');

const VagasRoutes = require('./routes/vagas.routes');
const Conn = require('./conn/conn');

const app = express();
app.use(express.json());
app.use(cors());


const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

console.log(process.env);

Conn(db_url, db_user, db_pass, db_data);

// falo pro express ultilizar as minhas rotas no endpoint /vagas
app.use('/vagas', VagasRoutes);

const port = 3001;
app.listen(process.env.PORT || port, () => console.log(`App rodando em htttp://localhost:${port}/`));

// MVC 
// MODEL = é responsavel pelos dados e funcoes do banco de dados
// VIEW = a visao do cliente ou seja html(react, angular, vue, html)
// CONTROLLER = é o responsavel por gerenciar os fluxos, define as regras
// Rotas = sao os responsaveis pelos metodos da API.
// servicos = responsaveis por se conectar com os nossos model (chamas as funcoes do banco de dados atraves do model)