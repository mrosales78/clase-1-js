

//estructura condicional anidada

/* let nota1 = parseInt(prompt("ingrese primer nota"))
let nota2 = parseInt(prompt("ingrese segunda nota"))
let nota3 = parseInt(prompt("ingrese tercera nota"))

let resultado = (nota1+nota2+nota3)/3
if(resultado>=7) {
    console.log("aprobado")
} else{ 
    if(resultado>=4){
    console.log(regular)
}       else 
    console.log(desaprobado)

} */

//operadores logicos y &&
/* let nota1 = parseInt(prompt("ingrese primer nota"))
let nota2 = parseInt(prompt("ingrese segunda nota"))
let nota3 = parseInt(prompt("ingrese tercera nota"))

if(nota1>nota2 && nota1>nota3) {
    console.log("la nota 1 es la mayor")
} else{
    if(nota2>nota1 && nota2>nota3) {
        console.log("la nota 2 es la mayor")
    } else 
    console.log("la nota 3 es la mayor")
}
 */
//operador cortocircuito o circuito corto( un operador logico y un if simple y una condicion true o false)

//let avanzar = true

//avanzar && console.log(" puede avanzar")



//operador logico o ||

/* let dia= parseInt(prompt("ingrese dia"))
let mes = parseInt(prompt("ingrese mes"))
let anio= parseInt(prompt("ingrese anio"))
if (mes == 1 || mes == 2 || mes==3)
{console.log("corresponde al primer trimestre")}
else{
    console.log("no corresponde al primer trimestre")
}
 */

//Ejercicio 1
/*let nombre = prompt('Ingrese su nombre')
console.log(nombre)

//Ejercicio 2
let edad = parseInt(prompt('Ingrese su edad'))
console.log(`su edad es ${edad}`)

//Ejercicio 3
let tieneHijos = true

let respuesta = prompt("tiene hijos: (si/no)")
if(respuesta == "si"){
    console.log(tieneHijos)
}else{
        tieneHijos = false
        console.log(tieneHijos)
}

//Ejercicio 4

let salario = parseInt(prompt('Ingrese su salario'))
let salarioAnual = salario*12
console.log(salarioAnual)

//Ejercicio 5

if (edad >= 18) { console.log('Eres mayor de edad')
} else {
    console.log('Eres menor de edad')
}

//Ejercicio 6

if (tieneHijos == true) {
    console.log('Tiene hijos')
} else {
    console.log('No tienes hijos')
}

//Ejercicio 7

let genero = prompt('Ingrese genero: hombre/mujer')

if (genero == 'hombre') {
    console.log('Eres hombre')
} else {
    if (genero == 'mujer') {
        console.log('Eres mujer')
    } else {
        console.log('otro genero')
    }
}

//Ejercicio 8

let ladoCuadrado = parseInt(prompt('Ingresar medida de un lado'))
let perimetro = ladoCuadrado*4
console.log(perimetro)

//Ejercicio 9

let numero = parseInt(prompt('Ingresar primer numero'))
let numero2 = parseInt(prompt('Ingresar segundo numero'))
let numero3 = parseInt(prompt('Ingresar tercer numero'))
let numero4 = parseInt(prompt('Ingresar cuarto numero'))

let respuesta = numero+numero2
console.log(respuesta)
let respuesta2 = numero3*numero4
console.log(respuesta2)

//Ejercicio 10

let numero = parseInt(prompt('Ingresar numero: 1 a 99'))
if(numero > 9){
    console.log("tiene 2 digitos")
}else{
    console.log("tiene 1 digitos")
}

//Ejercicio 11

let valor = parseInt(prompt('Ingrese un numero entero'))
if (valor > 0) {
    console.log('positivo')
} else {
    if (valor == 0) {
        console.log('cero')
    } else {
    console.log('Negativo')
    }
}

//Ejercicio 12

let edad = parseInt(prompt('Ingrese edad'))
let tienePermiso = prompt('Puede conducir: si/no')
if (edad >= 18 && tienePermiso == 'si') {
    console.log('Puedes conducir')
} else {
    console.log('No puedes conducir')
}

//Ejercicio 13

let tieneDinero = false
let tieneTarjeta = false
if (tieneDinero || tieneTarjeta) {
    console.log('Puedes pagar')
} else {
    console.log('No tienes suficiente dinero')
}*/

//Ejercicio 15
let dia = prompt("dia")
let mes = prompt("mes")
let anio = prompt("año")

if (dia == 25 && mes == 12){
    console.log("es navidad")
}
else{
    console.log("no es navidad")
}




