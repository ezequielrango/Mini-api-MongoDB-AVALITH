const alumnosService = require('../services/alumnos_service');

const getAll = async(req,res) => {
    try {
        const getAlumnos = await alumnosService.getAll();
        if (getAlumnos.length === 0) {
            res.status(404).json('Not found')
        }else{
            res.status(200).json({data : getAlumnos});
        }     
    } catch (err) {
        res.status(500).json('Internal Server Error');
    }
}

module.exports = {
    getAll
}