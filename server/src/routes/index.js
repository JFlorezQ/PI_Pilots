

// Importar todos los routers
const { Router } = require('express');
const router = Router();
const {getpokemon} = require('../controllers/getpokemon')
const {getpokemonbyid} = require('../controllers/getpokemonbyid')
const {getpokemonbyname} = require ('../controllers/getpokemonbyname')
const {getpokemonbytype} = require ('../controllers/getpokemonbytype')
const {postpokemon} = require('../controllers/postpokemon')

// Estos son handlers

// GET | /drivers

router.get("/drivers", (req,res) =>{getdrivers(req, res)})

//GET | /pokemons/: idPokemon 

router.get("/pokemons/:idPokemon",(req,res) =>{getpokemonbyid(req, res)})

// GET | /pokemons/name ?= "..."

router.get("/pokemons/name?=''",(req,res) =>{getpokemonbyname(req, res)})

// GET | /types

router.get("/types",(req,res) =>{getpokemonbytype(req, res)})

// POST | /pokemons

router.post("/pokemons", (req,res) =>{postpokemon(req, res)})

module.exports = router;
