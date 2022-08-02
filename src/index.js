const mongoose = require('mongoose');

const url = "mongodb://localhost/skill_factory";

mongoose.connect(url,{ // Retorna una promesa
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => console.log("Database MongoDB connected"))
.catch(err => console.log(err));


const alumnoSchema = mongoose.Schema({
    name : String,
    age: Number,
    band: String
},{versionKey:false})

const AlumnoModel = mongoose.model('alumnos', alumnoSchema); // Accede a la coleccion alumnos, y aplica alumnoSchema

// Todos los alumnos
async function getAllAlumnos(){
    const alumnos = await AlumnoModel.find()
    console.log(alumnos);
}
getAllAlumnos();

// Crear alumnos

async function createAlumnos(name, band, age){

    const alumno = new AlumnoModel({
        name,
        age,
        band
    })
    await alumno.save()
}

// createAlumnos('Mila','Eminem', 20);

// Actualizar alumno

const updateAlumno = async (id,newAlumno) => {
    await AlumnoModel.updateOne({_id:id},{
        $set: {
            name: "Vanina",
            age: "20" ,
            band: "Super Junior"
        }
    })
}
updateAlumno('62e8118f69d7e86b59593416');


async function deleteAlumno(id) {
    await AlumnoModel.deleteOne({_id: id})
}
deleteAlumno('62e8118f69d7e86b59593416');