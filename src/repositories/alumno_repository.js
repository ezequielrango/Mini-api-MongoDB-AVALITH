const Alumno = require('../models/Alumno');

module.exports = {
    
    getAll : async() => {
        try {
            const getAllAlumnos = await Alumno.find();
            return getAllAlumnos
        } catch (er) {
            console.log(err);
        }
    }
}
