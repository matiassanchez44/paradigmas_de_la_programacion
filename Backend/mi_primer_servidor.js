const express =require('express');
const app = express();

app.get('/', (req, res) => {
    res.send( ' ¡Hola mundo!');
});

app.get('/json', (reg, res) =>{
    res.json({ mensaje: 'Hola, mundo en formato JSON!'});
});

app.listen(3000, () => { 
    console.log('servidor escuchando en el puerto 3000');
});