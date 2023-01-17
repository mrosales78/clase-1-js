//array
//metodo utilizado para reccorer un array es el for



//let arraydos=[56,`hola mundo`,3.06,`t`,true,[`hola`,100]]

//recorrer array

/* for(let y of arraydos){
    console.log(y)
} */

/* for(let i=0;i<=5;i++){
console.log(`recorrido con un for`,arraydos[i])
} */

/* let x=0

while(x<=5){
    console.log(`recorrido con un while`,arraydos[x])
    //x=x+1
    x++

} */

//metodos array
//metodo
//.push()
//numeros.push()

/* let numeros=[25,96,1,35,9]

//push Añade uno o más elementos al final de un array y devuelve el nuevo valor de su propiedad

numeros.push(0,6,23)
console.log(numeros)

//unas propiedades
//console.log(numeros.length)
// let resultado=numeros.pop() quita de array ultimo elemento, no lo elimina
// console.log(resultado)
// console.log(numeros)
numeros.unshift(15) //Añada uno o más elementos al inicio de un array y devuelve el nuevo valor de length para el array resultante.
console.log(numeros) */


//Array.prototype.splice() Añade, borra o modifica elementos de un array.

/* let nombres = ["juan", "maria", "julieta"]
let indiceAEliminar = nombres.indexOf("maria")
console.log( indiceAEliminar )
nombres.splice(indiceAEliminar, 1 , 'pepe')
//desde donde quiero eliminar, cuantos quiero eliminar, a quien quiero agregar

console.log(nombres) */
let contenedor=document.getElementById("contenedor") //document object model DOM, manejo de dom
console.log(contenedor)
contenedor.innerHTML = "<h1> Hola Mundo </h1>"

/* contenedor.innerHTML = `<button class="btn" >hola mundo</button>` *//* contenedor.innerHTML = `<div class="carta"><h2>titulo</h2><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quidem quis in debitis reprehenderit aliquam obcaecati placeat? Nesciunt quae aliquid dolorem, atque, culpa tenetur, aperiam itaque architecto reprehenderit doloribus quas!</p><p>Autor</p></div>` */
let mensaje = document.querySelector("#mensaje")

mensaje.innerText += " mundo" //Document Object Model : DOM, manejo de dom


