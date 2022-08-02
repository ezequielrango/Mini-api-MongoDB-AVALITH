const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const alumnoSchema = mongoose.Schema({
    name : String,
    age: Number,
    band: String
},{versionKey:false})

// const AlumnoModel = mongoose.model('alumnos', alumnoSchema); // Accede a la coleccion alumnos, y aplica alumnoSchema


alumnoSchema.plugin(mongooseDelete, {overrideMethods : 'all'}); 

const Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = Alumno;