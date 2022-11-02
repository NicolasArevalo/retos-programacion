/*
 * Reto #9
 * CÓDIGO MORSE
 * Fecha publicación enunciado: 02/03/22
 * Fecha publicación resolución: 07/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const traduccion = {
    'ch': '————',
    'ñ': '——·——',
    a: '·—',
    b: '—···',
    c: '—·—·',
    d: '—··',
    e: '·',
    f: '···—·',
    g: '——·',
    h: '····',
    i: '··',
    j: '·———',
    k: '—·—',
    l: '·—··',
    m: '——',
    n: '—·',
    o: '———',
    p: '·——·',
    q: '——·—',
    r: '·—·',
    s: '···',
    t: '—',
    u: '··—',
    v: '···—',
    w: '·——',
    x: '—··—',
    y: '—·——',
    z: '——··',

}
function traducirPalabra(word) {
    console.log(word)
    return 'traduccion'
}

function encoder(phrase) {

    let newWord = ''
    const arr = phrase.toLowerCase().split(' ')

    arr.forEach(word => {

        let newWordDos = ''
        const eachLetter = word.split('')

        eachLetter.forEach(letter => {
            Object
                .entries(traduccion)
                .forEach(([letra, traduccion]) => {
                    if(letter === letra) newWordDos += ' '+traduccion
                        //else console.log('kputaswbn ', letter, ' - ', letra, ': ', traduccion)
                })
        })

        if(newWord.length == 0) newWord = newWordDos
            else newWord += '  '+newWordDos
        
    })

    return newWord

}

console.log(encoder('SOS'))