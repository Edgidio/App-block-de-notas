const express = require('express');
const app = express();

//NODE:JS
const path = require('path'); 

/* MODULOS NPM
------------------------------------------------- */
const morgan = require('morgan');

/* CONFIGURACIONES
------------------------------------------------- */
app.set('puerto', process.env.PORT || 3000 );
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* ROUTES
------------------------------------------------- */
app.use(require('./routes/entries.routes'))

/* MIDDLEWARE
------------------------------------------------- */
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


app.use( (req, res)=>{
    res.render('URL-no-valida')
});

/* RUN SERVER
----------------------------------------------- */
app.listen(app.get('puerto'), ()=>{

    console.log('Server run on port', app.get('puerto'));

});