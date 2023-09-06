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

let peliculas = [
    {
        titulo: "X-Man", 
        rating: 10,
        loHasVisto: true,
    },
    {
        titulo: "Matrix", 
        rating: 7,
        loHasVisto: false,
    },
    {
        titulo: "Buscando a Nemo", 
        rating: 3,
        loHasVisto: true,
    }
];
for (let i = 0; i < peliculas.length; i ++) {
    if (peliculas[i].loHasVisto == true) {
        console.log(`Viste ${peliculas[i].titulo} - ${peliculas[i].rating} estrellas`) 
    } else {
        console.log(`No viste ${peliculas[i]["titulo"]} - ${peliculas[i]["rating"]} estrellas`) 
    }  
}
--------------------------------------------
Números Duplicados
Veamos el siguiente código:
let numeros = [2, 4, 5, 37, 0]
let numeros_duplicados = {} 
// Después debería quedar así { 0: 0, 2: 4, 4: 8, 5: 10, 37: 74}
Recorré el Arreglo numeros y poné cada número (2, 4, 5, 37, 0) como una Propiedad del Objeto numeros_duplicados. El Valor de cada Propiedad deberá ser ese número multiplicado por dos.
let numeros = [2, 4, 5, 37, 0]
let numeros_duplicados = {} 
// Después debería quedar así { 0: 0, 2: 4, 4: 8, 5: 10, 37: 74}

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros_duplicados[numeros[i]] = numeros[i]*2 )
}
--------------------------------------------
-->Desafío + 27 (Se trata del desafío de la clase 12 que te proponemos que lo compartas en Discord cuando termines)
Tenemos un Arreglo de Objetos, donde cada uno representa a una persona. Usando .filter(), creá un nuevo Arreglo con las personas que tengan más de 27 años.

let personas = [ { nombre: 'Ana', edad: '28'},
{ nombre: 'María', edad: '24' }, { nombre: 'José', edad: '31' }
];
let personasConMasDe27 = // Codeá la solución
console.log(personasConMasDe27);
// [{ nombre: 'Ana', edad: '28' }, { nombre: 'José', edad: '31' }]

let personas = [
    { nombre: 'Ana', edad: '28'},
    { nombre: 'María', edad: '24' }, 
    { nombre: 'José', edad: '31' }
];
let personasConMasDe27 = []
personasConMasDe27 = personas.filter(personas => personas.edad > 27)

*/
