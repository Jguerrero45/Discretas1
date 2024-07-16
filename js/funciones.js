// Array de enunciados
const enunciados = [
    "1. ¿De cuántas maneras pueden sentarse 10 personas en un banco si hay 4 sitios disponibles?",
    "2. En una clase de 21 alumnos van a distribuirse 3 premios. Averiguar de cuántos modos puede hacerse si:\n" +
    "a) los premios son diferentes.\n" +
    "b) los premios son iguales",
    "3. Las diagonales de un polígono se obtienen uniendo pares de vértices no adyacentes.\n" +
    "a) Obtener el número de diagonales del cuadrado, hexágono y decaedro.",
    "4. Hay que colocar a 8 hombres y 7 mujeres en una fila de modo que las mujeres ocupen los \n" +
    "lugares pares. ¿De cuántas maneras pueden hacerse?",
    "5. ¿Cuántos números de 4 dígitos se pueden formar con las cifras 1,2,…9\n" +
    "a) Permitiendo repeticiones\n" +
    "b) Sin repeticiones\n" +
    "c) Si el último dígito debe ser 1 y no se permiten repeticiones",
    "6. En un grupo de 15 amigos, ¿cuántas distribuciones de sus fechas de cumpleaños pueden darse?",
    "7. ¿Cuántas letras de 5 signos con 3 rayas y 2 puntos podría tener el alfabeto Morse?",
    "8. Cuando se arrojan simultáneamente 4 monedas:\n" +
    "a) ¿Cuáles son los resultados posibles que se pueden obtener?\n" +
    "b) ¿Cuántos casos hay en que salgan 2 caras y 2 cruces?",
    "9. 5 libros de matemáticas, 7 de control de proyecto y 3 de interfaces han de ser colocados en una biblioteca. ¿Cuántas colocaciones distintas admiten si:\n" +
    "a) los libros de cada materia han de estar juntos;\n" +
    "b) Sólo los de matemáticas tienen que estar juntos?",
    "10. Consideremos los cuatro libros de matemáticas como una unidad. Se tendría entonces una unidad correspondiente a matemáticas, 6 unidades diferentes de física y dos unidades diferentes de química. Por lo tanto, existen:",
    "11. Un alumno tiene que elegir 7 de las 10 preguntas de un examen. ¿De cuántas maneras puede elegirlas? ¿Y si las 4 primeras son obligatorias?",
    "12. Una línea de ferrocarril tiene 25 estaciones. ¿Cuántos billetes diferentes habrá que imprimir si cada billete lleva impresas las estaciones de origen y destino?",
    "13. Tres atletas toman parte en una competición. ¿De cuántas maneras podrán llegar a la meta? (Pueden llegar juntos)",
    "14. En un hospital se utilizan cinco símbolos para clasificar las historias clínicas de sus pacientes, de manera que los dos primeros son letras y los tres últimos son dígitos. Suponiendo que hay 25 letras, ¿cuántas historias clínicas podrían hacerse si:\n" +
    "a) No hay restricciones sobre letras y números;\n" +
    "b) Las dos letras no pueden ser iguales."
];

// Función para obtener el valor de un parámetro de la URL
function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

// Función para calcular combinaciones
function combinaciones(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}

// Función para calcular permutaciones
function permutaciones(n, k) {
    return factorial(n) / factorial(n - k);
}

// Función para calcular el factorial
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = num; i > 1; i--) {
        result *= i;
    }
    return result;
}

// Obtener el índice del enunciado de la URL
const index = getParameterByName('index');

// Mostrar el enunciado correspondiente
if (index !== null && enunciados[index]) {
    const container = document.getElementById('enunciado-container');
    container.textContent = enunciados[index];

    // Realizar cálculos según el enunciado
    document.getElementById('calcular-btn').addEventListener('click', function () {
        const resultadoContainer = document.getElementById('resultado-container');
        const mLabel = document.getElementById('m-label');
        const mInput = document.getElementById('m-value');
        let resultado = '';

        // Ocultar el tercer label e input por defecto
        mLabel.style.display = 'none';
        mInput.style.display = 'none';
        switch (parseInt(index)) {
            case 0:
                const n0 = parseInt(document.getElementById("n-value").value) || 10;
                const k0 = parseInt(document.getElementById("k-value").value) || 4;
                resultado = `Permutaciones: ${permutaciones(n0, k0)}`;
                break;
            case 1:
                const n1 = parseInt(document.getElementById("n-value").value) || 21;
                const k1 = parseInt(document.getElementById("k-value").value) || 3;
                resultado = `Premios diferentes: ${permutaciones(n1, k1)} \nPremios iguales: ${combinaciones(n1, k1)}`;
                break;
            case 2:
                const n2 = parseInt(document.getElementById("n-value").value) || 4;
                const k2 = parseInt(document.getElementById("k-value").value) || 2;
                resultado = `Combinaciones: ${combinaciones(n2, k2)}\n`;
                break;
            case 3:
                const n3 = parseInt(document.getElementById("n-value").value) || 8;
                const k3 = parseInt(document.getElementById("k-value").value) || 7;
                resultado = `Permutaciones con restricciones: ${factorial(n3) * factorial(k3)}`;
                break;
            case 4:
                const n4 = parseInt(document.getElementById("n-value").value) || 9;
                const k4 = parseInt(document.getElementById("k-value").value) || 4;
                resultado = `Permitiendo repeticiones: ${Math.pow(n4, k4)}\nSin repeticiones: ${permutaciones(n4, k4)}\nCon restricciones: ${permutaciones(n4 - 1, k4 - 1)}`;
                break
            case 5:
                const n5 = parseInt(document.getElementById("n-value").value) || 365;
                const k5 = parseInt(document.getElementById("k-value").value) || 15;
                resultado = `Permutaciones: ${Math.pow(n5, k5)}`;
                break;
            case 6:
                mLabel.style.display = 'block';
                mInput.style.display = 'block';
                const n6 = parseInt(document.getElementById("n-value").value) || 5;
                const k6 = parseInt(document.getElementById("k-value").value) || 3;
                const m6 = parseInt(document.getElementById("m-value").value) || 2;
                resultado = `Combinaciones: ${factorial(n6) / (factorial(k6) * factorial(m6))}`;
                break;
            case 7:
                resultado = `Resultados posibles: E= {CCCC,CCXX,CCCX,CXXX,XXXX}, numero de casos: posibles: 2`;
                break;
            case 8:
                resultado = `a) ${(factorial(3) * factorial(5) * factorial(7) * factorial(3))}\nb) ${factorial(11) * factorial(5)}`;
                break;
            case 9:
                const n7 = parseInt(document.getElementById("n-value").value) || 4;
                const k7 = parseInt(document.getElementById("k-value").value) || 9;
                resultado = `Formas de colocar los libros: ${factorial(n7) * factorial(k7)}`;
                break;
            case 10:
                const n8 = parseInt(document.getElementById("n-value").value) || 10;
                const k8 = parseInt(document.getElementById("k-value").value) || 7;
                resultado = `Combinaciones: ${combinaciones(n8, k8)}`;
                break;
            case 11:
                const n9 = parseInt(document.getElementById("n-value").value) || 25;
                const k9 = parseInt(document.getElementById("k-value").value) || 2;
                resultado = `Billetes diferentes: ${permutaciones(n9, k9) + 0.0000000000001} `;
                break;
            case 12:
                resultado = `Maneras de llegar a la meta: ${13} `;
                break;
            case 13:
                resultado = `Historias clínicas sin restricciones: ${Math.pow(25, 2) * Math.pow(10, 3)} \n Historias clínicas con restricciones: ${25 * 24 * Math.pow(10, 3)} `;
                break;
            default:
                resultado = 'No se requiere cálculo para este enunciado.';
        }

        resultadoContainer.textContent = resultado;
    });
} else {
    // Manejar el caso en que el índice no sea válido
    const container = document.getElementById('enunciado-container');
    container.textContent = "Enunciado no encontrado.";
}
