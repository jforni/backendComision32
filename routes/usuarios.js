const {Router}=require('express');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');
const {usuariosGet, usuariosPost, usuarioPut, usuarioDelete} = require('../controllers/usuarios');
const {esRolValido, emailExiste, usuarioExiste} = require('../helpers/db-validators');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esAdminRole } = require('../middlewares/validar-roles');
const router = Router();

router.get('/', usuariosGet)

router.post('/', 
   [
        check('nombre', "El nombre es obligatorio").notEmpty(),
        check('password', 'La contraseña debe tener un mínimo de 6 caracteres').isLength({min:6}),
        check('correo').custom(emailExiste),
        check('rol').custom(esRolValido),
        validarCampos
   ],
   usuariosPost
)

router.put('/:id',
    [
        validarJWT,
        check("id", "No es un ID válido").isMongoId(),
        check("id").custom(usuarioExiste),
        check("rol").custom(esRolValido),
        validarCampos
    ], 
    usuarioPut)

router.delete('/:id', 
    [
        validarJWT,
        esAdminRole,
        check("id", "No es un ID válido").isMongoId(),
        check("id").custom(usuarioExiste),
        validarCampos
    ],
    usuarioDelete
)

module.exports = router;