const { DataTypes } = require('sequelize')
const { db  } = require('../database/db')

const Movimientos = db.define('movimientos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo:{
        type:DataTypes.STRING
    },
    concepto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    importe:{
        type: DataTypes.DOUBLE
    },
    fecha: {
        type: DataTypes.DATEONLY
    }

})

module.exports = Movimientos