//comentario de una sola linea
/* comentario de
mas de una  linea*/


// declaracion de variables
//tipos de datos que existen

/*  numericos entre 1...10000, reales etc
    cadena de caracteres(strings)
    valores logicos(true y false o 1 y 0)
*/

/*
    var numero = 96

    let palabras = "pedro"

    const numeroDepi = 3.1416

    let esnuevo = true

    let numero = 101
*/

/*
    let numero = 63
    console.log("el valor inicial de numero es" , numero)
    let nuevonumero = 9875465
    console.log("el valor iniciar de nuevonumero es", nuevonumero)

    nuevonumero = numero
    console.log ("este es el valor de la ultima variable" ,nuevonumero)
*/

/* let nombre = "juan pedro"
    let edad = 36
    let estadocivil = "casado"
    let sabeprogramar = false

    console.log("tu nommbre es",nombre, " y tu edad es",edad,"años","tu estado civil es",estadocivil,"sabe programar", sabeprogramar) //no se utiliza al dia de hoy
    console.log("tu nommbre es " + nombre +  " y tu edad es " + edad + " años" + " tu estado civil es " + estadocivil + " sabe programar " + sabeprogramar) //no se ultiliza al dia de hoy

    //template string es lo que se usa hoy en dia(para poner comilla invertida usar alt96 ``)

    console.log(`tu nombre es ${nombre} tu edad es ${edad} años tu estado civil es ${estadocivil} `)
*/

//entrada de datos por teclado
   //let = guardonombre = prompt("ingrese su nombre") //hoy en dia no se utiliza mas prompt
      //let = guardoedad = prompt("ingrese edad")
    

       /*   let numero1 = 0
            console.log("el valor inicial es del tipo",typeof(numero1))
            numero1 =parseInt(prompt("ingrese primer numero "))
            console.log(typeof(numero1))
            let numero2 = 0
            numero2 = parseInt(prompt("ingrese segundo numero "))//parseint pasa valor a numerico 
            let = resultadomulti = numero1*numero2
            let = resultadodivi = numero1/numero2
            let = resultadoresta = numero1-numero2
            let = resultadosuma = numero1+numero2
            console.log(resultadosuma)
        */


//estructura condicional simple

/* let nota= parseInt(prompt("ingrese la nota de alumno"))

    if(nota >= 5 ){ //3 items(variable-operador relacional y otra variable que puese ser(numerica, string o booleana))
    console.log("aprueba la materia")

    
                    }
        console.log("otra cosa")
 */

//estructura condicional compuesta 

     let nota= parseInt(prompt("ingrese la nota de alumno"))

    /*if(nota >= 5 ){ 
                    console.log("aprueba la materia")
    } else{
        console.log("no aprobado")
    } */

//operador ternario (se usa cuanto tengo if y else solamente)
let notaaprobado = 5

nota>= notaaprobado ? console.log("aprueba la materia") :  console.log("no aprobado")





// operadores relaciones
    /*
    >mayor
    >= mayor o igual
    <menor
    <= menor o igual
    != distinto
    == igual igual
    === extrictamente igual

    */
