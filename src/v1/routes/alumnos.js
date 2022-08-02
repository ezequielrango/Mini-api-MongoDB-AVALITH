const express = require('express');
const router = express.Router();
const alumnosController = require('../controllers/alumnos_controller');

/* GET alumnos listing. */

router.get('/', alumnosController.getAll);


module.exports = router;
