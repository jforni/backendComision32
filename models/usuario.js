// Modelo de datos de usuario
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre:{type: String, required: [true, "El nombre es obligatorio"]},
    correo:{type: String, required: [true, 'El correo es obligatorio'], unique: true},
    password:{type: String, required: [true, 'La contraseña es obligatoria']},
    img:{type: String},
    rol: {
        type: String, 
        required: true, 
        //enum:["USER_ROLE", "ADMIN_ROLE"]
    },
    estado: {type: Boolean, default: true}

});

//Quitar datos extras en la respuesta JSON
UsuarioSchema.methods.toJSON = function(){
    const {__v, password, _id, ...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
}

module.exports = model("Usuario", UsuarioSchema);