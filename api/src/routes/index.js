const { Router } = require('express');

const { get_info_api } = require('../servers/All_Games');

const { get_BY_id, delete_game, update } = require('../servers/Game_id');

const { post_character } = require('../servers/Create_Game');

const { generos_api } = require('../servers/Genero');

const router = Router();

const GAMES = "videogames";
const GENRES = "genres"


// router.get('/videogames', get_info_api); //* http://localhost:3001/videogames
router.get(`/api/${GAMES}`, get_info_api); //* http://localhost:3001/${GAMES}

router.get(`/api/${GAMES}/:id`, get_BY_id); //* http://localhost:3001/${GAMES}/:id

router.delete(`/api/${GAMES}/:id`, delete_game); //* http://localhost:3001/${GAMES}/:id

router.put(`/api/${GAMES}/:id`, update); //* http://localhost:3001/${GAMES}/:id

router.post(`/api/${GAMES}`, post_character); //* http://localhost:3001/GAMES

router.get(`/api/${GENRES}`, generos_api); //* http://localhost:3001/genres

module.exports = router;
