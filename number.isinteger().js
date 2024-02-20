// el COMANDO number.isinteger da un valor LOGICO 
//TRUE si el numero es ENTERO
//FALSE si el numero es falso
// se usa haci (number.isintegrer(VARIABLE NUMERICA))

num1 = 1  //entero
console.log(Number.isInteger(num1))

num2 = 2.3 // decimal FALSE
console.log(Number.isInteger(num2))

num3 = "hola" //sprint FALSE
console.log(Number.isInteger(num3))

num4 = undefined //undefinded FALSE
console.log(Number.isInteger(num4))

num5 = true //operador logico FALSE
console.log(Number.isInteger(num5))