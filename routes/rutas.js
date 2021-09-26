const router = require('express').Router()
const { home, datosEjemplo } = require('../controllers/indexController')


module.exports = () => {

    router.get('/', home)
    router.get('/ejemplo', datosEjemplo)
    

    return router
}
