const mongoose = require('mongoose');

// Creamos el esquema del usuario
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

// Exportamos el modelo de datos de un usuario
module.exports = mongoose.model('User', userSchema)