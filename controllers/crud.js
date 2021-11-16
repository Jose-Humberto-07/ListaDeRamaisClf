
const connection = require('../database/db');
// save
exports.save = (request, response) => {
    const ramal = request.body.ramal;
    const setor = request.body.setor;
    const funcionario = request.body.funcionario;
    const empresa = request.body.empresa;
    

    connection.query('INSERT INTO tcadastro SET ?', {ramal: ramal, setor:setor, funcionario:funcionario, empresa:empresa}, (error, results) => {
        if (error) {
            console.log(error);
        }else{
            response.redirect('/');
        }
    })
}

// update
exports.update = (request, response) => {
    const id = request.body.id;
    const ramal = request.body.ramal;
    const setor = request.body.setor;
    const funcionario = request.body.funcionario;
    const empresa = request.body.empresa;

    connection.query('UPDATE tcadastro SET ? WHERE id = ?', [{ramal: ramal, setor:setor, funcionario:funcionario, empresa:empresa}, id], (error, results) => {
        if (error) {
            console.log(error);
        }else{
            response.redirect('/');
        }
    })
}

// consulta
exports.read = (request, response) => {
    const { id, ramal, setor, funcionario, empresa } = request.body;
    
    connection.query('SELECT * FROM tcadastro WHERE empresa = ? and setor = ?', [empresa, setor],  (error, result) => {
        if (error) {
            throw error;
        }else{
            response.render('preview', { result });
        }
    })
}

exports.deleteById = (request, response) => {
    const id = request.params.id;
    connection.query('DELETE FROM tcadastro WHERE id = ?', [id], (error, result) => {
        if (error) {
            throw error;
        } else {
            response.redirect('/');
        }
    })
}

exports.editById = (request, response) => {
    const id = request.params.id;
    connection.query('SELECT * from tcadastro WHERE id=?', [id], (error, result) => {
        if (error) {
            throw error;
        } else {
            response.render('edit', { ramal: result[0]});
        }
    })
}





