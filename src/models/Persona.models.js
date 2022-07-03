const mongoose = require('mongoose')
const {Schema} = mongoose

const EmpleadosSchema = new Schema({
  nombres:{type:String, required:[true, 'Nombre Obligatorio']},
  apellido:String,
  identidad:String,
  telefono:String,
  ciudad:String,
  DosisAplicadas:String,
  ciudadNombre:String,
  perteneceCorreo:String,
  date:{type:Date,default:Date.now}

}) 

module.exports = mongoose.model('persona',EmpleadosSchema)
