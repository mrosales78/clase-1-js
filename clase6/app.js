
let lista= document.getElementById(`lista`)
let cuerpo= document.getElementById(`cuerpo`)
let micolor= prompt('ingrese color')

cuerpo.style.backgroundColor =`${micolor}`

//lista.innerText=`hola mundo`

let palabras=["paola","sabrina","adelina","maria","julia","romina"]

//console.log(palabras.length)

let recorrer=palabras.length
//console.log(recorrer)

for(let i=0;i<recorrer;i++){
    console.log(palabras[i])
    lista.innerHTML+= `<li>${palabras[i]}</li>`

//acumulador= acumulador+valor
//acumulador+=valor(similar al anterior pero mas acotado)
}




//metodos array

//let numeros=[5,8,9,7,6,0,10,15]
//let palabras=["paola","sabrina","adelina","maria","julia"]

//numeros.push(29)//agrega dato al final del array
//numeros.pop()//saca ultimo dato del array(saca no elimina)
//numeros.shift()//saca primero dato del array(saca no elimina)
//numeros.unshift(23,`hola mundo`)//agrega datos al inicio del array
//numeros.reverse()//invierte datos de array
//console.log(numeros.lastIndexOf(5))//muestra la posicion del indice del dato buscado, en este caso el numero 5 esta en el indice 0



//console.log(numeros.join())//muestra el contenido de array como un string(cadena de caracteres)
//palabras.sort()//ordena los datos en orden alfabetico
//console.log(palabras)

//numeros.sort(function(a,b){
//    return a-b //esta funcion si hace que se orden los numeros en orden de menor a mayor, si ponemos b-a en el return  los ordena de mayor a menor
//})//en datos numericos el metodo sort no ordena de menos a mayor, ver ejemplo en consola
//console.log(numeros)


//console.log(numeros) 

