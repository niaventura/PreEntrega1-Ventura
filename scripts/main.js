// declarcion de variables //

const NO_PAIS = ""
const Pais1 = "ARGENTINA"
const Pais2 = "CHILE"
const Pais3 = "BRASIL"
let PaisIngresado = ""

/* funcion */
/* Lo que hace es pedirle al usuario apenas ingresa a la pagina que escriba de donde es, permitiendole el acceso solamente a aquellos
residentes de los 3 paises que presente como variables */

function PedirPais() {
    PaisIngresado = prompt("Bienvenido. Por favor ingrese su país de residencia. (Argentina, Chile, Brasil)")
}

/* ciclo */
/* mientras el usuario no ingrese un pais, la pagina le va a volver a pedir que ingrese esa información */ 

while (PaisIngresado == NO_PAIS) {
    console.log("Por favor ingrese su país de residencia. Países admitidos: Argentina, Chile, Brasil.");
    PedirPais();
}


/*condicional */
/* Las alertas van a cambiar dependiendo de las respuestas de los usuarios. si ingresan otro valor que no este dentro de las variables admitidas,
se vuelve a pedir que ingresen un pais valido*/

if (PaisIngresado.toUpperCase() == Pais1) {
    alert("Ha seleccionado a " + Pais1 + " como su país de residencia.");
    console.log("El usuario reside en " + Pais1);
}
else if (PaisIngresado.toUpperCase() == Pais2) {
    alert("Ha seleccionado a " + Pais2 + " como su país de residencia.");
    console.log("El usuario reside en " + Pais2);
}
else if (PaisIngresado.toUpperCase() == Pais3) {
    alert("Ha seleccionado a " + Pais3 + " como su país de residencia.");
    console.log("El usuario reside en " + Pais3);
} else  {
    alert ("Por favor ingrese un país valido.")
    PedirPais ();
}