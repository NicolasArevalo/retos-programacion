/*
 * Reto #28
 * MÁQUINA EXPENDEDORA
 * Fecha publicación enunciado: 11/07/22
 * Fecha publicación resolución: 18/07/22
 * Dificultad: MEDIA
 *
 * Enunciado: Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección del producto.
 * - El programa retornará el nombre del producto y un array con el dinero de vuelta (con el menor
 *   número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe, deberá indicarse con un mensaje
 *   y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 */

import promptSync from 'prompt-sync'
import chalk from 'chalk'

const p = promptSync()

let gameStatus = true
const l = mssg => console.log(mssg)
const t = obj => console.table(obj)

const productos = {
    'Cocacola': 2500,
    'Chocorramo': 800,
    'Supercoco': 200,
    'Nucita': 700,
    'Choclitos': 1300,
    'Papas de poio': 1600,
}

while (gameStatus) {
    console.clear()
    
    l('                         ')
    l(chalk.white.bold('Bienvenido a la máquina expendedora.'))
    l(chalk.bold('Lista de productos: '))
    l(chalk.white.bgBlack('-----------------------'))
    Object
    .entries(productos)
    .map(([item, precio], i) => {
        l(chalk.white.bgBlack(`${i + 1}. ${item} ---- $` + chalk.green(Number(precio))))
    })
    
    l(chalk.white.bgBlack('-----------------------'))
    l('Presiona '+ chalk.red('0') +'(o da enter) para salir')
    l(chalk.blueBright('Ingresa el dinero con el que vas a pagar.'))
    let resDinero = Number(p('-> '))
    if (resDinero === 0) {
        l(chalk.bold('A la orden.'))
        break
    }
    l(chalk.blueBright('Ingresa el número del producto que deseas.'))
    let resProducto = Number(p('-> '))
    if (resDinero === 0) {
        l(chalk.bold('A la orden.'))
        break
    }

    //console.log(Boolean(resDinero) && resProducto > 0  & resProducto < Object.keys(productos).length + 1)
    //gameStatus = false

    if (Boolean(resDinero) & resProducto > 0 & resProducto < Object.keys(productos).length + 1) {
        const [producto, precio] = Object.entries(productos)[resProducto-1]
        //l({producto, precio})
        const vueltas = resDinero - Number(precio)
        if(vueltas < 0) {
            l('No te alcanza, kbron.')
            l('Aquí tienes tu dinero de regreso: '+resDinero)
        } else{
            l(`Aquí tienes tu ${chalk.yellow(producto)}`)
            l('Tus vueltas son: '+chalk.yellow(Math.abs(vueltas)))
        }

        l(chalk.bold('Presiona '+ chalk.red('0')+' (o da enter) si deseas salir.'))
        let res = Number(p('-> '))

        if(!res) gameStatus = false

    } else{
        gameStatus = false
    }

    if (resDinero === 0 || resProducto === 0) gameStatus = false
}