const express = require('express') //importamos express
const cors = require('cors');
const {dbConnection} = require('../database/config')

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Conectar con Base de datos
        this.conectarDB();

        //middlewares
        this.middlewares();

        // función para las rutas
        this.routes();
    }

    async conectarDB () {
        await dbConnection()
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
        this.app.listen(this.port, () => {
            console.log('Server online por: ', this.port);
            //console.log(process.env)
        })
    }
}

module.exports = Server;