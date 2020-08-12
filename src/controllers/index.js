const { notas } = require('../controllers/POST_add_nueva_nota');

const index = (req, res)=>{
    console.log('NOTAS', notas.length)
    res.render('index.ejs', {notas});
    
};

module.exports = index;