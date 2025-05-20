import {CELL_SIZE, TANK_HEIGHT, TANK_WIDTH} from "../constants.js";


export default {
    98: [38 * CELL_SIZE, 4 * CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 2], // full eagle
    99: [40 * CELL_SIZE, 4 * CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 2], // full eagle


    //  Player1Tank
    11: [0, 0, TANK_WIDTH, TANK_HEIGHT],               // top
    12: [TANK_WIDTH, 0, TANK_WIDTH, TANK_WIDTH],
    13: [6 * TANK_WIDTH, 0, TANK_WIDTH, TANK_WIDTH],   // right
    14: [7 * TANK_WIDTH, 0, TANK_WIDTH, TANK_WIDTH],
    15: [4 * TANK_WIDTH, 0, TANK_WIDTH, TANK_WIDTH],   // bottom
    16: [5 * TANK_WIDTH, 0, TANK_WIDTH, TANK_WIDTH],
    17: [2 * TANK_WIDTH, 0, TANK_WIDTH, TANK_WIDTH],   // left
    18: [3 * TANK_WIDTH, 0, TANK_WIDTH, TANK_WIDTH],
}
