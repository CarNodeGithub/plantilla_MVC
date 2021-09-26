
// Variables de entorno
require('dotenv').config()


const express = require('express')
//const app = express()
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const indexRouter = require('../routes/rutas')

// helpers
//const helpers = require('./helpers')
//console.log(proyectosRoutes);

class Server {

  constructor() {
    
    this.app = express();
    this.conexion()
    this.config()
    this.middlewares();
    this.routes();
    this.port = process.env.SERVER_PORT || 3000

  }

  async conexion(){
    // Crear conexion a la db e importar modelo
    //require('../models/Proyectos')
    const { db } = require('../database/db')
    try {
      await db.sync( )
       console.log(`Conectado a la base de datos: ${process.env.DB_NAME}`)
    } 
    catch (error) {
      console.log(error)
    }
  }  

  middlewares() {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(cors())

    //Pasar vardump a la app
    this.app.use( ( req, res, next )=>{
      //Crear variables
      const fecha = new Date()
      res.locals.year = fecha.getFullYear()
      //res.locals.vardump = helpers.vardump
      next()
    })
  }

  routes() {
    this.app.use('/', indexRouter())
  }

  config(){
    // Habilitar pug
    this.app.set('view engine', 'pug')

    // Carpeta archivos estaticos
    this.app.use( express.static( 'public' ) )

    // Carpeta para las vista
    this.app.set('views', path.join(__dirname, '../views'))
  }

  iniciar() {
    this.app.listen(this.port, () => {
        console.log(`Servidor corriendo en 127.0.0.1:${this.port}`);
    })
  }
}

module.exports =  {
  Server
}