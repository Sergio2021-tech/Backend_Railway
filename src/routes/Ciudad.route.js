const {Router} = require('express')
const router = Router()
const  ciudadCtrl = require('../controller/Ciudad.controller')
const Auth = require('../helper/Auth')

router.post('/crear',ciudadCtrl.crearCiudad)
router.post('/login',ciudadCtrl.login)

//router.get('/listar',ciudadCtrl.listarid  )
//router.get('/listarPersonasCiudads/:id',ciudadCtrl.personaDeUnaCiudad)
//router.get('/listarCiudad',ciudadCtrl.listar)



module.exports = router