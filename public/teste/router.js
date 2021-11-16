const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const connection = require('./database/db');


// rota para a tela de cadastro (a root por enquanto)
router.get('/', (request, response) => {
    
    connection.query('SELECT * FROM tcadastro', (error, result) => {
        if (error) {
            throw error;
        } else {
            response.render('index', { result: result });
        }
    })
    
});

// teste preview
router.get('/preview', (request, response) => {
    
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

// rota para criar registro
router.get('/create', (request, response) => {
    response.render('create');
});

router.get('/query', (request, response) => {
    response.render('query');
});

// rota para a tela de consulta
router.get('/filter', (request, response) => {
    response.render('filter');
});

const crud = require('./controllers/crud');
// rota para editar registros
router.get('/edit/:id', crud.editById);

//rota para apagar registros
router.get('/delete/:id', crud.deleteById);

router.post('/save', crud.save);
router.post('/update', crud.update);
router.post('/read', crud.read);

module.exports = router;