metros = parseInt(prompt("Qué distancia en metros recorrerá:"));

function transporte(m) {
  if (((m) => 0) && m <= 1000) {
    alert("Usted debería ir a pie.");
  } else if (m > 1000 && m <= 10000) {
    alert("Usted debería ir en bicicleta.");
  } else if (m > 10000 && m <= 30000) {
    alert("Usted debería ir en colectivo.");
  } else if (m > 30000 && m <= 100000) {
    alert("Usted debería ir en auto.");
  } else {
    alert("Usted debería ir en avión.");
  }
}

transporte(metros);
