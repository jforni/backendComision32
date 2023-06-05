const {response, request} = require('express');



const usuariosGet=(req=request, res=response) => {
    const datos = req.query;
    //const {apiKey, limit} = req.query;
    /* res.send('Servidor funcionando!') */
    res.json({
        mensaje: 'Get usuarios',
        datos,
        //apiKey,
        //limit
    })
}

const usuariosPost = (req=request, res=response) => {
    //const body = req.body
    const {nombre, correo} = req.body;
    res.json({
        mensaje: 'Post usuarios', 
        //body
        nombre,
        correo
    })
}

const usuarioPut = (req=request, res=response) => {
    res.json({
        mensaje: 'Put usuario'
    })
}

const usuarioDelete = (req=request, res=response) => {
    res.json({
        mensaje: 'Delete usuario'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuarioPut,
    usuarioDelete
};