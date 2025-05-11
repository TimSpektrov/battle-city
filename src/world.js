import {CELL_SIZE, DIRECTION} from "./constants.js";
import Tank from "./tank.js";
import {isBetween, isSame} from "./helpers.js";

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
                    width: CELL_SIZE,
                    height: CELL_SIZE,
                    sprite: block
                }
            })
        });
    }

    update(activeKeys) {
        this.player1Tank.update(this, activeKeys)
    }

    canMove(object) {
        const {x, y, direction, width, height} = object;


        if(direction === DIRECTION.UP) {
            const nextY = y - 1;
            const objectOnPath = this._getObjectOnPath(object, x, nextY)
            return !objectOnPath && nextY > 0;
        } else if (object.direction === DIRECTION.RIGHT) {
            const nextX = x + 1;
            const objectOnPath = this._getObjectOnPath(object, nextX, y)
            return !objectOnPath && nextX + CELL_SIZE < this.size;
        } else if (object.direction === DIRECTION.DOWN) {
            const nextY = y + 1;
            const objectOnPath = this._getObjectOnPath(object, x, nextY)
            return !objectOnPath && nextY + CELL_SIZE < this.size;
        } else if (object.direction === DIRECTION.LEFT) {
            const nextX = x - 1;
            const objectOnPath = this._getObjectOnPath(object, nextX, y)
            return !objectOnPath && nextX > 0;
        }
    }

    _getObjectOnPath(object, x, y) {
        return this.level
            .reduce((result, block) => result.concat(...block), [])
            .find(block =>
                    block.sprite > 0
                    && (
                        isSame(object.y, block.y)
                        || isBetween(y, block.y, block.y + block.height)
                        || isBetween(object.y + object.height, block.y, block.y + block.height)
                    ) && (
                        isSame(object.x, block.x)
                        || isBetween(x, block.x, block.x + block.width)
                        || isBetween(object.x + object.width, block.x, block.x + block.width)
                    )

            )
    }

}

