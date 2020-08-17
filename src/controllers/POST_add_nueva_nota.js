let notas = [];

const POST_add_nueva_nota = (req, res)=>{

    let body = req.body

    let nuevaNota = {
        Titulo: body.Titulo,
        Descripcion: body.Descripcion
    };

    notas.push(nuevaNota);

    req.flash('info', ' Nota agregada satisfactoriamente')

    res.redirect('/all-notas');
};

module.exports = {
    notas,
    POST_add_nueva_nota
}


