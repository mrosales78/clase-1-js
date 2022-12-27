// estructura repetitiva while

/* let x = 0   
while(x <=10){
    //ejecuta
    console.log(x)
    x= x+1


} */

//concepto del acumulador

/* let x=1
let suma=0
while(x<=5) {
let valor=parseInt (prompt("ingrese valor"))
suma=suma+valor
console.log(valor)

x=x+1

}
console.log(`el valor de la suma de los numeros ingresados es ${suma}` ) //comilla invertida usar alt+96
 */
//ciclo repetitivo for

// for(inicializacion;condicion;incremento o decremento)
//ejecuta el codigo

/* for (let i=0; i<=10; i= i+1){
    console.log(i)
} */

/* let suma=0

for(let i=0; i<=9;i=i+1 ){
    let valor= parseInt(prompt('ingrese un valor'))
    if(i>=5){
        suma=suma+valor
        console.log(suma)
    }
}
console.log(`la suma de los ultimos 5 valores da como resultado ${suma}`) */

//funciones 3 pasos
//funciones declaracion

/* function mostrarmensaje(){

    console.log(`hola mundo`)
}
 */
/* mostrarmensaje()
 */
//console.log(`hola mundo`)

//funcion nombrada
//funcion que retorna un valor

function calcularTabla(){

    let i=1
    let palabra=``
    
    let valor= parseInt(prompt(`ingrese un valor para motrar la tabla de multiplicar`))
    for(let i=1;i<=10;i=i+1){
        let= resultado=i*valor

        palabra=palabra+ `${valor}*${i}= ${resultado} 
        `
        
    }
    return palabra
}
console.log(calcularTabla())  