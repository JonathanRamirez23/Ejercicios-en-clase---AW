const express = require('express')  //usar EXPRESS -- COMMONJS

const app = express()   //inicializar EXPRESS

//a nivel de bakend '/', '/franquias', '/simple' : son RUTAS
// la url es : http://localhost:3000/
// recurso: (resq,res) => {res}
//informacion: ("Hola")
//en frontend : la ruta es el endpoin

//---------------- EL ORDEN SI IMPORTA ------------------------------

// RUTA /
app.get('/', (resq,res) => {res.send("Hola")})

// RUTA /franquicias
app.get('/franquias', (resq,res) => {res.send("Informacion de franquicias :v")})

// RUTA /simple
app.get('/simple', (resq,res) => {res.send("Hamburguesa Simple :)")})

app.use((req,res) => {res.send("<center><h1 style='color:red'> Page not found - 404 </h1></center>")})

app.listen(3000)

console.log("SEVER - OK");
