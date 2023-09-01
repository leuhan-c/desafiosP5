let pregunta
while (pregunta !== "no") {
    let usuario = prompt("Elegi Piedra, Papel o Tijera").toLowerCase()

        let compu = Math.floor(Math.random() * 3)
        if (usuario === "piedra" && compu === 0) {
            alert("Mi respuesta es piedra. Empatamos")
        }
        else if (usuario === "piedra" && compu === 1) {
            alert("Mi respuesta es papel. Gane")
        }
        else if (usuario === "piedra" && compu === 2) {
            alert("Mi respuesta es tijera. Ganaste")
        }
        else if (usuario === "papel" && compu === 0) {
            alert("Mi respuesta es piedra. Ganaste")
        }
        else if (usuario === "papel" && compu === 1) {
            alert("Mi respuesta es papel. Empatamos")
        }
        else if (usuario === "papel" && compu === 2) {
            alert("Mi respuesta es tijera. Gane")
        }
        else if (usuario === "tijera" && compu === 0) {
            alert("Mi respuesta es piedra. Gane")
        }
        else if (usuario === "tijera" && compu === 1) {
            alert("Mi respuesta es papel. Ganaste")
        }
        else if (usuario === "tijera" && compu === 2) {
            alert("Mi respuesta es tijera. Empatamos")
        }
    pregunta = prompt("Queres jugar a Piedra, Papel o Tijera?").toLowerCase()
}