const CiudadesCtrl = {}
const Ciudad = require('../models/Ciudad.models')
const bcrypt = require('bcryptjs')
const jwt= require('jsonwebtoken')


 CiudadesCtrl.crearCiudad = async(req, res)=>{
    
     const{nombre,correo,contrasena} = req.body //capturar info
     const NuevaCiudad = new Ciudad({
        nombre,
        correo,
        contrasena
     })
     const correoCiudad = await Ciudad.findOne({correo:correo})
     if(correoCiudad)
     {
         res.json({
             mensaje: 'EL correo ya existe'
         })
     }
      else
      {
        NuevaCiudad.contrasena = await bcrypt.hash(contrasena,10)
        const token = jwt.sign({_id:NuevaCiudad._id},"Secreto")
        await NuevaCiudad.save()

        res.json({
            mensaje: 'Bienvenido',
            id:NuevaCiudad._id,
            nombre:NuevaCiudad.nombre,
            token
        })
      }
 }

 CiudadesCtrl.login = async(req, res)=>{
     
    const {correo,contrasena} = req.body //capturar info
    const ciudad = await Ciudad.findOne({correo:correo})
       if(!ciudad){
       return res.json({
           mensaje: "Correo Incorrecto"
    })
   }
      const match = await bcrypt.compare(contrasena,ciudad.contrasena)
      if(match){

          const token = jwt.sign({_id: ciudad._id}, 'Secreta')
          res.json({
              mensaje: 'Bienvenido',
              id:ciudad.id,
              nombre: ciudad.nombre,
              token
        } )
    }
    else{
        res.json({
          
          mensaje: 'Contraseña Incorrecta'
        })
    }
}
module.exports = CiudadesCtrl
/*
//------------------------------------
CiudadesCtrl.listar = async(req, res)=>{
    const respuesta = await Ciudad.find()
    res.json(respuesta)

}

CiudadesCtrl.listarid = async(req, res)=>{
    const id = req.params.id
    const respuesta = await Ciudad.findById({_id: id})
    res.json(respuesta)
}

CiudadesCtrl.personaDeUnaCiudad = async(req, res)=>{
    const id = req.params.id
    //const respuesta = await Ciudad.find({_id:id})
    //const respuesta = await Ciudad.find({ciudads:id})
    const respuesta = await Ciudad.find({_id:id})

    res.json(respuesta)
}

//-------------------------
 */

