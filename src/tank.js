import {CELL_SIZE, DIRECTION} from "./constants.js";

export default class Tank {
    direction = DIRECTION.UP;
    x= 4 * CELL_SIZE;
    y = 12 * CELL_SIZE;
    width = CELL_SIZE;
    height = CELL_SIZE;
    speed = 1;
    animationFrame = 0;
    frames = [
        [0, 0, CELL_SIZE, CELL_SIZE],
        [CELL_SIZE, 0, CELL_SIZE, CELL_SIZE],
        [6 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE],
        [7 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE],
        [4 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE],
        [5 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE],
        [2 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE],
        [3 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE],
    ]
    get sprite() {
        return this.frames[this.direction * 2 + this.animationFrame];
    }

    update(world, activeKeys) {
        if(activeKeys.has('ArrowUp')) {
            this._turn(DIRECTION.UP)

            if(world.canMove(this)) {
                this._move('y', -1)
            }
        } else if(activeKeys.has('ArrowRight')) {
            this._turn(DIRECTION.RIGHT)

            if(world.canMove(this)) {
                this._move('x', 1)
            }
        } else if(activeKeys.has('ArrowDown')) {
            this._turn(DIRECTION.DOWN)

            if(world.canMove(this)) {
                this._move('y', 1)
            }
        } else if(activeKeys.has('ArrowLeft')) {
            this._turn(DIRECTION.LEFT)

            if(world.canMove(this)) {
                this._move('x', -1)
            }
        }
    }

    _turn(direction) {
        this.direction = direction
    }

    _move(axis, value) {
        this[axis] += this.speed * value;
        this.animationFrame ^= 1;
    }
}
