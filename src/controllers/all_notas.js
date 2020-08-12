const {notas} = require('../controllers/POST_add_nueva_nota');

const all_notas = (req, res)=>{

    res.render('all-notas', {notas});
    
};

module.exports = all_notas;