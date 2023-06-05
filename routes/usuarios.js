const {Router}=require('express');
const router = Router();
const {usuariosGet, usuariosPost, usuarioPut, usuarioDelete} = require('../controllers/usuarios');

router.get('/', usuariosGet)

router.post('/', usuariosPost /* (req, res) => { */
    /* res.send('Servidor funcionando!') */
    /* const body = req.body
    res.json({
        mensaje: 'Post usuarios', 
        body
    }) */
//}
)

router.put('/:id', usuarioPut /* (req, res) => {
    //res.send('Servidor funcionando!')
    res.json({
        mensaje: 'Put usuario'
    })
} */
)

router.delete('/:id', usuarioDelete /* (req, res) => {
    res.json({mensaje: 'Delete usuario'})
} */
)

module.exports = router;