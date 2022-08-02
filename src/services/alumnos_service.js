const alumnoRepository = require('../repositories/alumno_repository');

const getAll = (req,res) => {
    try {
        const getAlumnos = alumnoRepository.getAll();
        return getAlumnos;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAll
}