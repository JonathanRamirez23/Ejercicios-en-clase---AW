const express = require('express')  //usar EXPRESS -- COMMONJS

const app = express()   //inicializar EXPRESS

//a nivel de bakend '/', '/franquias', '/simple' : son RUTAS
// la url es : http://localhost:3000/
// recurso: (resq,res) => {res}
//informacion: ("Hola")
//en frontend : la ruta es el endpoin

//---------------- EL ORDEN SI IMPORTA -------------------------------------------------------------------
/*
// RUTA /
app.get('/', (resq,res) => {res.send("Hola")})

// RUTA /franquicias
app.get('/franquias', (resq,res) => {res.send("Informacion de franquicias :v")})

// RUTA /simple
app.get('/simple', (resq,res) => {res.send("Hamburguesa Simple :)")})

app.use((req,res) => {res.send("<center><h1 style='color:red'> Page not found - 404 </h1></center>")})
*/


//-------------------------------------------------------------------------------------------------------
// Lunes 21 de octubre del 2024

/*

app.use(express.json()) //json

//RUTA //Register -- BODY
app.post('/register', (req,res)=>{

    const {email, password} = req.body

    email === "jonathan.ramirez.com" ? res.send("User register") : res.send("Bad credentials")
})


//RUTA /products/1  -- params

app.get('/products/:id', (req, res) => {

    //console.log(req.params)

    //desestructuracion

    const {id} = req.params

    const products = [   //arreglo de objetos
        {
            id: 56,
            Title: "Laptop",
            price: 500
        },
        {
            id: 77,
            Title: "Play 5",
            price: 800
        }
    ]
    //varibale, metodo find y la comparacion estricta
    const response = products.find((products) => products.id == +id)  //* + casting : se vuelve un valor string a entero

    //operador ternario
    response ? res.send(response) : res.send("Product not found")
})



// RUTA /search  -- QUERY PARAMS

app.get('/search', (req, res) => {
    //console.log(req.query)
    //desestructuracion : req.query es un objeto

    const {orden} = req.query

    const responses ={
        pollo:"Pollo del Hornero",
        milanesa: "Milanesa de pollo"
    } 

    const response = responses[orden] || "No existe"  //aceder a la propiedad del objeto

    res.send(response)
})

*/


// RESPONSEEE --------------------------------------------------------------------

/*
// RUTA / --- 1. forma mediante texto
app.get('/', (req, res) => {
    res.send("Landing Oage de bievenida")
})


//RUTA /dashboard ----- 2. forma mediante un archivo json

app.get('/dashboard', (req, res) =>{
    const user = {
        name : "jonathan",
        rol: "Admi"
    }
    res.json(user)
})


//RUTA /profile  ---- 3. forma mediante una imagen

app.get('/user/profile', (req, res) =>{

    // console.log(__dirname)  // me da el path completo
    res.sendFile('./car_web.png',{
        root: __dirname  
    })
})


// RUTA /   --- 4. Forma mediante un archivo

app.get('/archivo', (req, res) =>{

    res.sendFile('./Tarea.pdf',{
        root: __dirname  
    })
})


// RUTA /404

app.get('/mouse',(req,res) =>{
    res.send(`
        <h1>Page not found</h1>
        <button>Back to homepage</button>
        `)
})

*/

app.use(express.json())  //JSON         //REQUEST


//MIDDLEWARE : app.use

app.use((req, res, next) =>{
    const {token} = req.body
    const response = token === "123" ? true : false          //MIDDLEWARE
    response ? next() : res.status(401).json({msg:"Invalid token"})
})

//se edebe poner el next() para que pueda seguir con la ruta

// RUTAS                           //RESPONSE
app.get('/gitfs', (req,res) =>{
    res.send("Lista de gifts")
})


app.listen(3000)

console.log("SEVER - OK");

