const { request, response, application } = require('express');
const express = require('express');
const router = express.Router();
const connection = require('./database/db');
const bodyParer = require('body-parser');


// rota para a tela de cadastro 
router.get('/admin', (request, response) => {
    
    connection.query('SELECT * FROM tcadastro', (error, result) => {
        if (error) {
            throw error;
        } else {
            response.render('admin', { result: result });
        }
    })
    
});

//  preview 
/**
 * router.get('/preview', (request, response) => {
    
    const empresa = request.body.empresa;
    const sql = `SELECT * FROM tcadastro WHERE empresa = ${empresa}`;

    connection.query(sql, empresa, (error, result) => {
        if (error) {
            throw error;
        } else {
            response.render('preview', { result: result });
        }
    })
});
 */


// rota da tela de  criar registro
router.get('/create', (request, response) => {
    response.render('create');
});

// tela de login
router.get('/login', (request, response) => {
    response.render('login');
});

// rota da tela de consultar registro
router.get('/', (request, response) => {
    response.render('index');
});

// rota da tela preview
/**
 * router.get('/preview', (request, response) => {
    response.render('preview');
});
 */


const crud = require('./controllers/crud');
// rota para editar registros
router.get('/edit/:id', crud.editById);

//rota para apagar registros
router.get('/delete/:id', crud.deleteById);

//rota para salvar registros 
router.post('/save', crud.save);

router.post('/update', crud.update);

//rota para renderizar registros filtrados
router.post('/read', crud.read);

// rota login
router.post('/validation', crud.validation);

module.exports = router;