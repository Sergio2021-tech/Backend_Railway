const PersonaCtrl = {}
const Persona = require('../models/Persona.models')
const Ciudad = require('../models/Ciudad.models')


PersonaCtrl.crear = async(req, res)=>{
    
      const {nombres,apellido,identidad,telefono,colonia,ciudadNombre} = req.body //capturar info
      const NuevaPersona = new Persona({
        nombres,
        apellido,
        identidad,
        telefono,
        colonia,
        ciudadNombre
     })
     const respuesta = await NuevaPersona.save()
         res.json({
             mensaje: 'Persona Creada',
             respuesta
         })
}

PersonaCtrl.listar = async(req, res)=>{
    const respuesta = await Persona.find()
    res.json(respuesta)

}

PersonaCtrl.listarid = async(req, res)=>{
    const id = req.params.id
    const respuesta = await Persona.findById({_id: id})
    res.json(respuesta)
}


PersonaCtrl.personaDeUnaCiudad = async(req, res)=>{
    const id = req.params.id
    const respuesta = await Persona.find({persona:id})
    res.json(respuesta)
}


PersonaCtrl.eliminar = async(req, res)=>{
    const id = req.params.id
     await Persona.findByIdAndRemove({_id:id})
     res.json({
        mensaje: 'Persona Eliminada'
        
    })    
}

PersonaCtrl.actualizar = async(req, res)=>{
    const id = req.params.id
     await Persona.findByIdAndUpdate({_id:id},req.body)
     res.json({
        mensaje: 'Persona actualizada'
        
    })    
}

PersonaCtrl.buscarPersonaCriterio = async(req, res)=>{
    const colonia = req.params.buscarPersonaCriterio
     try{
          const respuesta = await Persona.find({colonia:colonia})
          res.json(respuesta)
         }catch(error){

         return res.status(400).json({
             mensaje:'Ocurio un Problema',
              error
            })
    }    
}
///--------------------------------------
PersonaCtrl.listar2 = async(req, res)=>{
    const respuesta = await Ciudad.find()
    res.json(respuesta)
}

PersonaCtrl.listarid2 = async(req, res)=>{
    const id = req.params.id
    const respuesta = await Ciudad.findById({_id: id})
    res.json(respuesta)
}

PersonaCtrl.personaDeUnaCiudad2 = async(req, res)=>{
    const id = req.params.id
    const respuesta = await Ciudad.find({ciudad:id})
    res.json(respuesta)
}

PersonaCtrl.eliminar2 = async(req, res)=>{
    const id = req.params.id
     await Ciudad.findByIdAndRemove({_id:id})
     res.json({
        mensaje: 'Persona Eliminada'
        
    })    
}

PersonaCtrl.actualizar2 = async(req, res)=>{
    const id = req.params.id
     await Ciudad.findByIdAndUpdate({_id:id},req.body)
     res.json({
        mensaje: 'Persona actualizada'
        
    })    
}
 module.exports = PersonaCtrl 

