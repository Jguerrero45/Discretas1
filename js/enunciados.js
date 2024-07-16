document.addEventListener('DOMContentLoaded', function () {
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

    const urls = [
        "./templates/ejercicios.html",
    ];

    const container = document.getElementById('enunciados-container');

    enunciados.forEach((enunciado, index) => {
        const p = document.createElement('p');
        p.textContent = enunciado;
        container.appendChild(p);

        // Crear un botón
        const button = document.createElement('button');
        button.textContent = 'Ir a la resolucion';

        // Asignar un evento click al botón
        button.addEventListener('click', () => {
            // Redirigir a la página específica con el índice del enunciado como parámetro
            window.location.href = `${urls[0]}?index=${index}`;
        });

        // Añadir el botón debajo del enunciado
        container.appendChild(button);
    });
});