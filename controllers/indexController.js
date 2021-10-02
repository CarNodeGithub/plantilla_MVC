const Movimientos = require('../models/Movimientos.js')

exports.home = async ( req, res)=>{

    const movimientos = await Movimientos.findAll()

    res.render('index', {
        titulo: 'Movimientos | Home',
        movimientos
    })
}

exports.formularioNuevo = ( req, res )=>{
    res.render('nuevo', {
        titulo: 'Nuevo Movimiento'
    })
}

exports.crearNuevo = async ( req, res )=>{

    

    const movimiento = await Movimientos.create(
         {
             tipo: req.body['tipo'],
             concepto: req.body.concepto,
             importe: req.body.importe,
             fecha: req.body.fecha
         }
     )

    console.log(movimiento)
    //res.redirect('/')

}

exports.datosEjemplo = async ( req, res )=>{
    await Movimientos.bulkCreate([
        {
            concepto: 'IPL',
            tipo: 'Ingreso',
            importe: 100,
            fecha: Date.now()

        },

        {
            concepto: 'Radiofrecuencia',
            tipo: 'Gasto',
            importe: 90,
            fecha: Date.now()

        },
    ])
    //res.redirect('/')
}
