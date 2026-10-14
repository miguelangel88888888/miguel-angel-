const nombre = "Laura";
const edad = 19;
const ciudad = "Pereira";

console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);

console.log("Tipo de nombre:", typeof nombre);
console.log("Tipo de edad:", typeof edad);
console.log("Tipo de ciudad:", typeof ciudad);

const anioActual = 2026;
const anioNacimiento = anioActual - edad;
console.log("Año aproximado de nacimiento:", anioNacimiento);

const edadTexto = "19";
console.log('edadTexto + 1:', edadTexto + 1);
console.log("Number(edadTexto) + 1:", Number(edadTexto) + 1);
// Al sumar un string, JavaScript concatena; Number convierte el texto a número para hacer una suma aritmética.

console.table([
  { nombre: "Andrés", edad: 18 },
  { nombre: "Camila", edad: 20 },
  { nombre: "Sofía", edad: 19 },
]);
