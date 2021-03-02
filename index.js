const textoSimulado = [
    'Texto 1: Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    'Texto 2: Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    'Texto 3: when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'Texto 4: It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    'Texto 5: It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,', 
    'Texto 6: and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
];

/**
 * Obtiene una línea random de texto
 * @returns {string}
 */

function textoRandom() {
    return textoSimulado[Math.floor(Math.random() * textoSimulado.length)];
}

module.exports = {
    textoRandom
};