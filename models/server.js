const express = require('express') //importamos express
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.usuariosPath = '/api/usuarios';

        //middlewares
        this.middlewares();

        // función para las rutas
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Leer lo que envía el usuario por el cuerpo de la petición
        this.app.use(express.json());

        //Definir la carpeta pública
        this.app.use(express.static('public'))
    }

    routes(){
        //this.app.get('/api/usuarios', (req, res) => {
            /* res.send('Servidor funcionando!') */
          //  res.json({mensaje: 'Soy una api de usuarios'})
          //})

        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(3000, () => {
            console.log('Server online por 3000');
            //console.log(process.env)
        })
    }
}

module.exports = Server;