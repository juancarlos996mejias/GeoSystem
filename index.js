const express = require('express');
const app = express();
const path = require('path'); 
const port = 3000;

app.use(express.static('public'));

// Ruta principal
//app.get('/', (req, res) => {
 // res.send('¡Hola Mundo desde Node.js y Express!');
//});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
  });

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
