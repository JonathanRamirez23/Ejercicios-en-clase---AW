// JS - Lado del cliente
// NODE + V8 - JS Lado del servidor

// Variables
// contenedor de informacion

//Tipos simples

let data = 12            //entero
let data1 = 23.6         //float
let data2 = "Hola"       //string
let data3 = '@'          //char
let data4 = false        //boolean 
let data5 = undefined    //undefined


// Tipos compuestos

let data6 = ['hola',54,false]  //array

let user = {               //objeto
    name: "Jonathan",
    activo:true
}

// no usar var - hoisting
// let y const : si se recomienda utilizar

//-----------------------------------------------------------------------------------

// Strings - cadena de caracteres
let password = " 12345jonathanRAMIREZ"

// propiedades 
console.log(password.length);

// metodos
console.log(password.trim());  //quita espacios al inicio y el final
console.log(password.includes('5'));  //verifica si el numero existe en el password
console.log(password.toUpperCase());   //para convertir el texto en mayusculas
console.log(password.toLocaleLowerCase());  //para convertir en minusculas


//node --watch -- ejecuta automaticamente los cambios realizados en la terminal

//ECMASCRIPT
// ES6 - nuevas caracteristicas 
// Template strings  -- me permite concatenar, mezclar texto con variables 

console.log(`El password de juan es: ${password}`); 

//-------------------------------------------------------------------------------------

let gamPrice1 = "500.35"
let gamPrice2 = 500.35

// Casting - ES6

console.log(+gamPrice1 + gamPrice2);    //+string(se puede sumar con un numero) + number

//Orden de ejecucion de los operadores  ( * / + - **)

//------------------------------------------------------------------------------------------------------------------------------------

let userCardBalance = 500
let cardBalance = 1000

// ES6 Operador ternario

let result = cardBalance <= userCardBalance ? "Pay" : "Consuming"  //un if else mas abreviado

//Valores verdaderos (truthy) -- valores no vacios

//Valores falsos (falsy)  -- valores vacios

let email = ""
!email ? console.log("Provie an email") : console.log("Registre")   //si no existe un email imprimir ese texto

// Comparacion estricta
let userID = 123
userID === "123" ? console.log("User found") : console.log("User doesn't exit");  // === se compara el tipo de dato y el valor


//-------------------------------------------------------------------------------------------------------------------------------------

//callback

//Loops
const goals = ['Learn JS', "Play Soccer", "Watching Netflix","Enjoy the holiday"]

goals.forEach((goal) =>{console.log(goal)})  //for each va a recibir otra funcion


const newGoals = goals.map((goal) =>goal.toUpperCase())  //el map crea un nuveo array sin modificar el array original

// Summary
console.log(goals);
console.log(newGoals);



//------------------------------------------------------------------------------------------------------------------------

//FUNCION ANONIMA Y AUTOEJECUTADA -- 
(function(){
    console.log("Ejecución de una función")
})()

//FUNCION DECLARADA

function getAvatar(){
    console.log('/photo/user.png');
}

getAvatar()

//FUNCION EXPRESADA -- se almacena la informacion en una variable llamada conecctionBBD
const conecctionBDD = function(){
    console.log("Conexión exitosa");
}

// ARGUMENTOS 

const validarEmailAndToken = function(email,token){
    console.log(`El token es ${token} y su email es ${email}`);

}
validarEmailAndToken('jonathan@gmail.com','555')



//ARGUMENTOS OPCIONALES

const validarEmailAndToken2 = function(email, token="555"){
    console.log(`El token es ${token} y su email es ${email}`);

}
validarEmailAndToken2('jonathan@gmail.com')

//RETORNO

function tiposRetorno(){
    //logica
    //return "Usuarios premium"
    //return 89
    //return true
    //return 88.4
    //return ['user1','user2']
    //return{
    //    name:"juan",
    //    id: 864
    //}
}
tiposRetorno()

// ES6
//ARROW FUNCTION

const conecctionBDDMongo = () =>{
    console.log("Conexión exitosa ES6");
}
conecctionBDDMongo()


//const registerUser = (email) => {
//    console.log("User registred");    //mas larga la funcion 
//}

const registerUser = email => console.log("User registred")  //mas corta la funcion
registerUser('pancho@gmail.com')


// nfn -- AUTOMATICAMENTE SE CREA UNA FUNCION CON FLECHA
//const name = (params) => {
//}


//------------------------------------------------------------------------------------------------------------------------

// OBJETOS

const datosBanaderitoGood = {
    name: "Bananerito",
    age:1,
    address:{
        city:"Machala",
        telephone:123
    },
    friends:['Ccodrigo','Torero'],
    status:true
}


console.log(datosBanaderitoGood.name);
console.log(datosBanaderitoGood.friends);
console.log(datosBanaderitoGood.status);

const nameB = datosBanaderitoGood.name

const friendsB = datosBanaderitoGood.friends

//ES6
//DESECTRUTURACION

const {name,age,address,friends,status:estado} = datosBanaderitoGood  //puedo renombrar a una variable usando el status:estado

console.log(friends)

//PROPIEDADES

datosBanaderitoGood.photo = 'bananerito.png'   //se puede añadir una nueva variable
console.log(datosBanaderitoGood)
delete datosBanaderitoGood.age                 //asi se elimina algo especifico de un objeto
console.log(datosBanaderitoGood)


Object.values(datosBanaderitoGood).includes("") ? console.log("Error") : console.log("Ok")

//ejemplo de objeto
const lunch = {
    nameL:"Pollo Broaster",
    price:5
}

const drink = {
    nameD:"Jugo de coco",
    sweet:false
}

const orderUser = {...lunch,...drink}  //operador ......SPREAD
console.log(orderUser)


// ES6
// Nombres abreviados de propiedades

const nameVideogame = "MarioKart"
const priceVideogame = 89

const videoGame = {
    nameVideogame,
    priceVideogame 
}

console.log(videoGame);


//INTERNET
//TCP-IP
//ISP = IP - Dispositivo (modem) y (router)
//WEB
//CLIENTE - SERVIDOR (ARQUITECTURA WEB)
//HTTP (SEGURA Y NO SEGURA)
//Dominio y subdominio
//Hosting : albergar - Dominio:como voy a a nombrar

//JS - Multiplataforma
//JS - Lado del cliente + V8
//ECMA Internacional === W3C
//ECMA Script
//NODE + V8 = JS lado del servidor

//Variables
//contenedor de informacion
//Tipos simples - compuestos

//Strings
//Numbers
//Conditionals
//Functions
//Objects




//------------------------------------------------------------------------------------------------------------------------
console.log("-----------------------------------------------------------");

//Lunes 14 de octubre del 2024

//ARRAYS
const boys = ["Peter","Juan","Luisa","Anahi","Mateus"]

const customers  = [
    {
        name: "Luis",
        order: 45,
        place: "Floresta"
    },
    {
        name: "Janneth",
        order: 4,
        place: "Villaflora"
    }
]
 //callback: funcion que se ejecuta dentro de otra funcion
 //forEach no quiero modificar el areglo original
boys.forEach((b,i)=>{console.log(`${i+1} - ${b}`)})

customers.forEach((c,i) =>console.log(`${i+1} ${c.order} ${c.name}`))

const services = [
    {
        name:"Basic",
        mount:5,
        image:"photo/service1.png",
        details: ["Atencion familiar","Grupo Social"]
    },
    {
        name:"Plus",
        mount:25,
        image:"photo/service2.png",
        details: ["Atencion diaria","Seguro Médico"]
    }
]

//map: (transforma) moldea la informacion que requiera
//retornar un nuevo arreglo con los datos moldeados(modificados)

const newServices = services.map((s) => {
    return{
        name:s.name,
        image:s.image
    }
})
console.log("Ejemplo del map1");
console.log(newServices);

//se puede obtimizar de la siguiente manera
const newServices1 = services.map((s) => (
    {
        name:s.name,
        image:s.image
    }
))
console.log("Ejemplo optimizado del map2");
console.log(newServices1);

//------------------------------------------------------------------------------------------------------------------------

//EJEMPLO DE POWER MEDICAL
const equipments = ["Tubo de Oxigeno","Camilla","Termometros","Medidor de P."]

// ES6
// Desestructuración --a nivel de arreglos
// asignar los valores de un arreglo en variables por separado

// Forma 1
const [equipment1,equipment2,equipment3,equipment4] = equipments
// Forma 2
const [,,,equipment5] = equipments

console.log(equipment1);
console.log(equipment5);

//------------------------------------------------------------------------------------------------------------------------

//EJEMPLO DE UNA TIENDA PARA ANIMALES

const categorias = ["Camas","Balanceados","Juguetes","Accesorios","Ropa"] 

categorias.length <= 5 ? console.log("Registrar categoria") : console.log("No se puede registrar")

//push: agrega un nuevo elemento al final de un arreglo
categorias.push("Medicamentos") 
//unshift : agrega al inicio del arreglo
categorias.unshift("Adopciones") 
//pop: elimina el ultimo elemento del arreglo  -- funciona en conjunto con el shift()
categorias.pop()
//shift(): elimina el primer elemento del arreglo
categorias.shift()

console.log(categorias)

//cuando se usa el find tiene que retornarse algo (return)
//para optimizarlo se puede quitar el return y en vez de las llaves se deja entre parentesis
let resultCategoria = categorias.find((c) => {return c === "Camas"}) 

resultCategoria ? console.log("Mostrar subcategoria") : console.log("No existe esa categoria");

//Filter : filtra los elementos que tengan una coincidencia
let resultCategoriaFilter = categorias.filter((c) => (c.startsWith('C')))
console.log(resultCategoriaFilter)


//ES6
//Ejemplo de alquiler de maquinaria pesada
const servicesCharge = ["Grúa","Material","Herramientas"]

const serviceMachines = ["Volquetas","Trailers","Tractores","Excavadoras"]

//REST (AGRUPAR) : agrupa los ultimos valores del array para no tener que repetir machine1, machine2 ...
//Permite agrupar muchos elementos en una variable
console.log("-----------------------------------------------------------");

const [machine1,machine2,...machines] = serviceMachines
console.log(machines);



//SPREAD (EXPANDIR!) : Une los dos arreglos en uno solo

let allServices = []  //let: se puede volver a reasignar las variables

allServices = [...servicesCharge,...serviceMachines]
console.log(allServices)


//------------------------------------------------------------------------------------------------------------------------
//INTERMEDIOO

//MANIPULACI+ON DEL DOM
//DOM - API PARA MANIPULAR LOS ELEMENTOS DE UN HTML


// PROGRAMACIÓN IMPERATIVA: mas detallada
// JS PURO - VANILLA-JS


// PROGRAMACION DECLARATIVO: mas corta
// REACT 


//------------------------------------------------------------------------------------------------------------------------------

//Juevves 17 de octubre del 2024

// PROGRAMACIÓN ASINCRONA

// CALLBACK: Funcion que se ejecuta dentro de otra funcion

const getUserBDD = () =>{console.log({id:123, name:"Pancho",rol:"Admi"})}

setTimeout(getUserBDD,5000) //se eejcuta en tantos segundos -- eso es un callback -- el setTime recibe como argumento el getUserBDD

// CALBACK - HELL

// PROMESAS

const conexionBDDExterna = (dataConecction) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
        dataConecction ? resolve("Conecction-OK") : reject("Connection bad")
    }, 3000);
  })
}

// Then y Catch

conexionBDDExterna(false)
    .then((response) =>{console.log(response)})
    .catch((error) =>{console.log(error)})


//Async - await

const verifyConnection = async () =>{
    try {
        console.log(await conexionBDDExterna(true));
    } catch (error) {
        console.log(error);
        
    }
}
verifyConnection()


fetch("https://dog.ceo/api/breeds/image/random")

    .then((requests) => {return requests.json()})  
    .then((data) =>{console.log(data)})  //se usa otro .then porque tenemos otra promesa de la funcion json()
    .catch((error) => {console.log(error)})  //no es necesario usar otro cacth porque ya verifica todo si es un error o no


const getDog = async () => {
    
    try {
        let request = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await request.json()
        console.log(data);
    } catch (error) {
        console.log(error);   
    }
}
getDog()

// TAREA DESAFIO

const TOEKNG = "lerx9FDWD5PH78M207Cj95ac4KTt8G3v"
const URLG = "http://api.giphy.com/v1/stickers/trending"


fetch(`${URLG} ? api_key = ${TOEKNG}`)
    .then((requests) => (requests.json()))  
    .then((data) =>{console.log(data)}) 
    .catch((error) => {console.log(error)})  
        

// texto añadido
// LOCAL STORAGE: Datos que se guardan automaticamente (en secreto?) en el navegador
// SESSION STORAGE (ALMACENAMIENTO TEMPORAL) - COOKIES: -- DIFERENTES MECANSMMOS DE ALMACENAMIENTO PARA GUARDAR INFORMACION 

// LOCAL STORAGE

// MODULOS
// COMMONJS = require
// ESMODULES = import o from

//------------------------------------------------------------------------------------------------------------------------------

// BACKEND DEVELOPERS

// STAGE 1 = FUNDAMENTOS AGNOSTICOS

    // NODE RAW: PASO A PASO EN LA PROGRAMACION
    // LIBRARY: Solventa un problema en particular -- la libreria se adapta al codigo
    // FRAMEWORK : Solventa varias problematicas en el programa -- Ayuda a resolver un problema mas complejo
    // Nuestro codigo se adapta al framewnpork

    // npm: repositorio donde se guardan todos los paquetes de info
    // npm init -y
    // --y : acepta toas las preguntas que se atraviesen
    // se instala express : npm install express --save
    // se instala : npm i morgan

    // node-log-package :mantener la version del node, con tan solo pner npm install se tiene la misma version de paquetes
    // agnostico capacidad de trabajar con cualquier tecnologia|
    //  no opinado: el desarrollo tiene la libertad de realizar la estructura del proyecto como desee


    //mas conceptos..............
    // ruta: lo que quiere el clente. Lo qu el usuiro va a obtener cuando se lo pida al servidor (backend)dandole asi un recurso
    // -body, params, query params: seria como las ordenes en como le pedimos que realiza una accion al backend


    // STAGE 2 = PROYECTO 100% BACKEND
// STAGE 3 = PROYECTO FULLSTACK

// 10 SEMANAS

