/*-->Variable miAuto
Creá una Variable llamada miAuto y asignale un Objeto vacío.
Asignale a miAuto una Propiedad marca, que a su vez contenga un String.
Agregá una Propiedad año que contenga un número entero.
Agregá una Propiedad nuevo que contenga un booleano.
Creá una Variable llamada propertyKey y asignale el String "modelo"
Agregá la Propiedad modelo al Objeto miAuto
Creá una Variable llamada anotherPropertyKey y dale el Valor "precio".
Cuantificá el Valor de tu auto.
Asigná la String "color" a una Variable nueva llamada nextProperty.
Usá la variable nextProperty para añadir el color a tu auto.
Usá el loop for...in para iterar sobre el Objeto miAuto y que muestre en la consola el key y el value de cada Propiedad.

let miAuto = {}
miAuto["marca"] = "Fiat"
miAuto["año"] = 2023
miAuto["nuevo"] = true
let propertyKey = "modelo"
miAuto[propertyKey]="Argo"
let anotherPropertyKey = "precio"
miAuto[anotherPropertyKey]=3000000000
let nextProperty = "color"
miAuto[nextProperty]="negro"

for (let propiedad in miAuto) {
    console.log(propiedad + ": " + miAuto[propiedad])
}
-------------------
Aumentar La Nota
Tenés una lista de estudiantes con su desempeño académico actual. Querés subirle 2 puntos a aquellos que su nota sea mayor a 5. Recordá que la nota tampoco puede superar al 10.
let estudiantes = [
    { Estudiante: "Juan", nota: 6 },
    { Estudiante: "Mario", nota: 8 },
    { Estudiante: "Julia", nota: 10 },
    { Estudiante: "Sofia", nota: 2 },
]
estudiantes.forEach((Estudiante) => {
    if (estudiante.nota >= 5 && estudiantesnota <= 8) {
        estudiante.nota += 2
    }
});
---------------------------------
Base De Datos De Películas
En este ejercicio, deberás crear un Arreglo llamado películas, que tenga -por cada película- un Objeto con las siguientes Propiedades:

titulo
rating
loHasVisto
Usá un for loop para iterar sobre el Arreglo e imprimir un resultado en la consola que se vea como esto:

Viste "Busqueda implacable" - 5 estrellas   
No viste "Norbit" - 3 estrellas  
Viste "Mini espías" - 2 estrellas  
No viste "La vida es bella" - 5 estrellas
copy to clipboard

🎬 ¡Podés usar tus propias películas!
*/

