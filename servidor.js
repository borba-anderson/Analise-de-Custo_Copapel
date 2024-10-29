require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
const authRoutes = require('./routes/auth');
const gastosRoutes = require('./routes/gastos');

app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET || 'minhaChaveSecreta',
    resave: false,
    saveUninitialized: true
}));

// Servindo arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, 'frontend')));

// Rotas
app.use('/auth', authRoutes);
app.use('/gastos', gastosRoutes);

// Página inicial (login)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

