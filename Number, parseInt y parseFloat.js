//sintax:Number(Numero en dormato o no string)
//result: El numero de como numerico y de tipo real
console.log(Number(10.15))
console.log(Number("10.15svd"))
console.log(Number("10.ddd15"))

//sintax:parseInt (numero de formato string que solo copiara los primeros numeros antes de los caracteres del sprint)
//result: El numero numerico y de tipo ENTERO
console.log(parseInt("26.15hshshshsh"))
console.log(parseInt("2.9d6.15ddd"))
console.log(parseInt("2d6.ddddd15hshshshsh"))
console.log(parseInt("a2d6.ddddd15hshshshsh"))

//sintax:parseFloat (num en formato string)
//result:el numero numerico y de tipo REAL 

console.log(parseFloat("61.69jdjdhahsh"))
console.log(parseFloat("6s1.69jdjdhahsh"))
console.log(parseFloat("6s1.6s9jdjdhahsh"))
console.log(parseFloat("a6s1.6s9jdjdhahsh"))

//de no ser haci dara como resultado NaN