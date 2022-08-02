const express = require('express');
const app = express();
const env = require('dotenv').config();
const dbConnect = require('./database/dbConnect');
const morganBody = require('morgan-body');
dbConnect();


app.listen(3000, () => console.log('Server listening 3000'))
app.use(express.json());



morganBody(app);



app.use('/api',require("./v1/routes"));

// // Crear alumnos

// async function createAlumnos(name, band, age){

//     const alumno = new AlumnoModel({
//         name,
//         age,
//         band
//     })
//     await alumno.save()
// }

// // createAlumnos('Mila','Eminem', 20);

// // Actualizar alumno

// const updateAlumno = async (id,newAlumno) => {
//     await AlumnoModel.updateOne({_id:id},{
//         $set: {
//             name: "Vanina",
//             age: "20" ,
//             band: "Super Junior"
//         }
//     })
// }
// updateAlumno('62e8118f69d7e86b59593416');


// async function deleteAlumno(id) {
//     await AlumnoModel.deleteOne({_id: id})
// }
// deleteAlumno('62e8118f69d7e86b59593416');

module.exports = app;