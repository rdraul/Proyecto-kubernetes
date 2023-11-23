const express = require('express') // IMPORTTO EL MODULO DE EXPRESS //
const app = express() // INSTANCIO EL MODULO DE EXPRESS A UNA VARIABLE APP //
const path = require('path') // PARA USAR LA CARPETA PUBLIC //
app.use(express.static(path.join(__dirname, 'public'))) // MUESTRO EL CONTENIDO DE LA CARPETA PUBLIC //
app.set('port', 3000) // VOY A UTILIZAR EL PUERTO 3000 //

// RUTA RAIZ //
app.get('/', (req, res) => {})

// PUERTO EN EL QUE CORRE LA APP //
app.listen(app.get('port'), () => {
    console.log(`\nApp corriendo en el puerto ${app.get('port')}`) // MENSAJE POR CONSOLA PARA CUANDO CORRE LA APP //
})