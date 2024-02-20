
// var: 
// se utiliza para declarar una variable que solo funciona en toda la funcion o bloque

// Let:
// se utliza para definir una variabledentro del mismo scope

// cont:
// Se utilisa para declarar una constante que no se puede reasignar
var ejemploA, ejemploB
function ejemplo(a) {
     //Let se declara dentro de este scope
    if (a == 1) {//scope
        let a = "let1"
        return a
    }
    if (a == 2){//scope
        let a = "let2"
        return a
    }
    if (a == 3){//scope
        let a = "let3"
        return a
    }
}
console.log(ejemplo(3))


