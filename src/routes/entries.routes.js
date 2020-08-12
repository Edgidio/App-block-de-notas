const { Router } = require('express');
const Routes = Router();

/* IMPORT CONTROLLERS
-------------------------------------------------- */
const index = require('../controllers/index');
const add_nueva_nota = require('../controllers/add_nueva_nota');
const POST_add_nueva_nota = require('../controllers/POST_add_nueva_nota');
const all_notas = require('../controllers/add_nueva_nota');

/* ROUTES
-------------------------------------------------- */
Routes.get('/', index );

Routes.get('/add-nueva-nota', add_nueva_nota);

Routes.post('/add-nueva-nota', POST_add_nueva_nota);

Routes.get('/all-notas', all_notas);



module.exports = Routes;