const router = require('express').Router()
const { home, datosEjemplo, formularioNuevo, crearNuevo} = require('../controllers/indexController')


module.exports = () => {

    router.get('/', home)
    //router.get('/ejemplo', datosEjemplo)
    router.get('/nuevo', formularioNuevo)
    router.post('/nuevo-movimiento', crearNuevo)
    

    return router
}
