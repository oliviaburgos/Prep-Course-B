// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    let suma = 0;
    let i = 0;
    while(i < 11){
      suma += i;
      i++;
    }
    return suma;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
return array.filter((e) => e % 2 === 0);


}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
return array.map((num) => num ** 2);

}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  const sumArray = (array, n) => {
    const size = array.length;{

    for (let i = 0; i < size; i++)
        const a = array[0];}

    for (let j = 0; j < size; j++) {
        if (i === j) continue;
        const b = array[j];
        if (a + b === n) { return true; }
    }
    return false;
}


}
   
  

 



function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  num += "";
  return num.length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
