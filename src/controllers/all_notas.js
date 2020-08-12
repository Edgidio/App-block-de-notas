const { render } = require("ejs");

const all_notas = (req, res)=>{

    res.render('index');
    
};

module.exports = all_notas;