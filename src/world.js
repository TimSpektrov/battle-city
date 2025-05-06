import {CELL_SIZE, DIRECTION as Direction} from "./constants.js";
import Tank from "./tank.js";

export default class World {
    level = null;
    player1Tank = new Tank()
    player2Tank = null
    enemyTanks = []

    get size() {
        return this.level[0].length * CELL_SIZE
    }

    setLevel(data) {
        this.level = data.map((blocks, y) => {
            return blocks.map((block, x) => {
                return {
                    x: x * CELL_SIZE,
                    y: y * CELL_SIZE,
                    sprite: block
                }
            })
        });
    }

    update(activeKeys) {
        this.player1Tank.update(this, activeKeys)
    }

    canMove(object) {
        const {x, y, speed, direction} = object;
        console.log(object)
        if(object.direction === Direction.UP) {
            return object.y > 0;
        } else if (object.direction === Direction.RIGHT) {
            return object.x < this.size - CELL_SIZE;
        } else if (object.direction === Direction.DOWN) {
            return object.y  < this.size - CELL_SIZE;
        } else if (object.direction === Direction.LEFT) {
            return object.x > 0;
        }
    }
}

