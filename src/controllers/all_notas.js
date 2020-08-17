const {notas} = require('../controllers/POST_add_nueva_nota');

const all_notas = (req, res)=>{

    let info = req.flash('info')[0]

    console.log(info)

    res.render('all-notas',{
        notas,
        info
    });
    
};

module.exports = all_notas;