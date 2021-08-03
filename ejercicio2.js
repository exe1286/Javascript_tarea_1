arreglo = [];
numero = 0;
opcion = false;

do {
  numero = Number(prompt("Ingresa al menos 2 números para comparar: "));

  arreglo.push(numero);

  opcion = confirm("Desea seguir agregando?");
} while (opcion == true);

function comprobar(array) {
  let mayor = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    } else {
      continue;
    }
  }
  alert("El numero mayor es: " + mayor);
}
comprobar(arreglo);
