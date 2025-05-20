import {BRICK_WALL_SPRITES, CELL_SIZE, OBJECT_TYPE, STEEL_WALL_SPRITES} from './constants.js';
import Wall from './wall.js';

export default class Stage {
    static createObject(args) {
        switch (args.type) {
            case OBJECT_TYPE.BRICK_WALL: return new Wall({
                ...args,
                sprites: BRICK_WALL_SPRITES
            });

            case OBJECT_TYPE.STEEL_WALL: return new Wall({
                ...args,
                sprites: STEEL_WALL_SPRITES
            });
        }
    }

    constructor(data) {
        this.debug = true;
        this.objects = data.map((values, y) => {
            return values.map((value, x) => {
                return value && Stage.createObject({
                    type: value,
                    x: x * CELL_SIZE,
                    y: y * CELL_SIZE,
                    width: CELL_SIZE,
                    height: CELL_SIZE
                });
            });
        }).reduce((objects, array) => objects.concat(...array.filter(v => !!v)), []);
    }
}


// setStage(data) {
//     this.stage = data.map((blocks, y) => {
//         return blocks.map((block, x) => {
//             return block > 0 ? new Wall({
//                 x: x * CELL_SIZE,
//                 y: y * CELL_SIZE,
//                 width: CELL_SIZE,
//                 height: CELL_SIZE,
//                 sprite: block
//             }) : null;
//         });
//     });
// }
