const Movimientos = require('../models/Movimientos.js')

exports.home = async ( req, res)=>{

    const movimientos = await Movimientos.findAll()

    res.render('index', {
        titulo: 'Movimientos | Home',
        movimientos
    })
}

exports.datosEjemplo = async ( req, res )=>{
    await Movimientos.bulkCreate([
        {
            concepto: 'IPL',
            importe: 100,
            fecha: Date.now()

        },

        {
            concepto: 'Radiofrecuencia',
            importe: 90,
            fecha: Date.now()

        },
    ])
    res.redirect('/')
}