

// Importar todos los routers
const { Router } = require('express');
const router = Router();
const { getDrivers } = require('../controllers/getdrivers');
const { getDriverById } = require('../controllers/getdriversbyid');
const { getDriverByName } = require("../controllers/getdriversbyname")



// Estos son handlers

// GET | /drivers

router.get("/drivers", (req,res) =>{getDrivers(req, res)})

// GET | /drivers/:id

router.get("/drivers/:id", (req,res) =>{getDriverById(req, res)})

//GET | /drivers/name?="..."

router.get("/drivers/search/name", (req,res) =>{getDriverByName(req, res)})

module.exports = router;


