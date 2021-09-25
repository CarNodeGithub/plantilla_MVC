const router = require('express').Router()
const indexController = require('../controllers/indexController')


module.exports = () => {

    router.get('/', indexController.home)
    

    return router
}
