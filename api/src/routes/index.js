const { Router } = require('express');

// const { get_info_api } = require('../servers/Video_Games');
const { get_info_api } = require('../servers/All_Games');

const { get_BY_id, delete_game, update } = require('../servers/Game_id');

const { post_character } = require('../servers/Create_Game');

const { generos_api } = require('../servers/Genero');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// router.get('/videogames', get_info_api); //* http://localhost:3001/videogames
router.get('/videogames', get_info_api); //* http://localhost:3001/videogames

router.get('/videogames/:id', get_BY_id); //* http://localhost:3001/videogames/:id

router.delete('/videogames/:id', delete_game); //* http://localhost:3001/videogames/:id

router.put('/videogames/:id', update); //* http://localhost:3001/videogames/:id

router.post('/videogames', post_character); //* http://localhost:3001/videogames

router.get('/genres', generos_api); //* http://localhost:3001/genres

module.exports = router;
