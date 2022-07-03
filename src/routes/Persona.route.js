const {Router} = require('express')
const router = Router()
const  PersonaCtrl = require('../controller/Persona.controller')
const Auth = require('../helper/Auth')

router.post('/crear',Auth.verificarToken,PersonaCtrl.crear)
router.get('/listarPersonas',Auth.verificarToken,PersonaCtrl.listar)
router.get('/listar/:id',Auth.verificarToken,PersonaCtrl.listarid)
router.get('/listarCriterio/:criterio',Auth.verificarToken,PersonaCtrl.buscarPersonaCriterio)
router.delete('/eliminar/:id',Auth.verificarToken,PersonaCtrl.eliminar)
router.put('/actualizar/:id',Auth.verificarToken,PersonaCtrl.actualizar)
router.get('/listarPersonasCiudad/:id',Auth.verificarToken,PersonaCtrl.personaDeUnaCiudad)
//--------------------
router.get('/listarPersonas2',Auth.verificarToken,PersonaCtrl.listar2)
router.get('/listar2/:id',Auth.verificarToken,PersonaCtrl.listarid2)
router.delete('/eliminar2/:id',Auth.verificarToken,PersonaCtrl.eliminar2)
router.put('/actualizar2/:id',Auth.verificarToken,PersonaCtrl.actualizar2)
router.get('/listarPersonasCiudad2/:id',Auth.verificarToken,PersonaCtrl.personaDeUnaCiudad2)




module.exports = router