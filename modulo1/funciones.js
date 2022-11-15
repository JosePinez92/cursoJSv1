/*
Para declarar una función usamos la palabra reservada function seguida del nombre de la función y entre paréntesis los parámetros que recibe la función.

function saludar() {
  console.log('Hola')
}


Una función tiene un scope global y puede ser llamada/invocada desde cualquier parte del código. Esto cambia si la función está dentro de otra función.

Una función también puede crearse y asignarse a una variable.

const saludar = function() {
  console.log('Hola')
}

saludar()

Esto se conoce como una función anónima y es muy útil cuando queremos pasar una función como parámetro a otra función.

A diferencia de las funciones declaradas con function, las funciones anónimas no pueden ser invocadas antes de su declaración.

saludar() // Error

const saludar = function() {
  console.log('Hola')
}

FUNCIONES FLECHA
No tienen su propio this
No necesitan la palabra reservada function
No necesitan los paréntesis si solo tiene un parámetro
No necesitan las llaves si solo tiene una línea de código
No necesitan la palabra reservada return si solo tiene una línea de código


Declaración de una función flecha
const saludar = function () {
  console.log('Hola')
}

saludar()


const saludar = () => {
  console.log('Hola')
}

saludar()

Retorno implícito

const saludar = (nombre = 'Pepe') => 'Hola ' + nombre

console.log(saludar())

Retorno explícito

const saludar = (nombre = 'Pepe') => {
  return 'Hola ' + nombre
}

console.log(saludar())

Parámetros múltiples

const saludar = (nombre = 'Pepe', edad) => {
  return 'Hola ' + nombre + ' tienes ' + edad + ' años'
}

console.log(saludar('Juan', 32))
*/