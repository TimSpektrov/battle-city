import {CELL_SIZE, DIRECTION, KEYS} from "./constants.js";

const TANK_TURN_SIZE = CELL_SIZE;

export default class Tank {
    constructor({x, y, width, height, direction, speed, frames}) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.direction = direction;
        this.speed = speed;
        this.frames = frames;
        this.animationFrame = 0;
        this.isFiring = false;
    }

    get top() {
        return this.y;
    }

    get right() {
        return this.x + this.width;
    }

    get bottom() {
        return this.y + this.height;
    }

    get left() {
        return this.x;
    }

    get sprite() {
        return this.frames[this.direction * 2 + this.animationFrame];
    }

    update(world, activeKeys) {
        if (activeKeys.has(KEYS.UP)) {
            this._turn(DIRECTION.UP);
            this._move('y', -1);

            if (world.isOutOfBounds(this) || world.hasCollision(this)) {
                this._move('y', 1);
            }
        } else if (activeKeys.has(KEYS.RIGHT)) {
            this._turn(DIRECTION.RIGHT);
            this._move('x', 1);

            if (world.isOutOfBounds(this) || world.hasCollision(this)) {
                this._move('x', -1);
            }
        } else if (activeKeys.has(KEYS.DOWN)) {
            this._turn(DIRECTION.DOWN);
            this._move('y', 1);

            if (world.isOutOfBounds(this) || world.hasCollision(this)) {
                this._move('y', -1);
            }
        } else if (activeKeys.has(KEYS.LEFT)) {
            this._turn(DIRECTION.LEFT);
            this._move('x', -1);

            if (world.isOutOfBounds(this) || world.hasCollision(this)) {
                this._move('x', 1);
            }
        }

        if(activeKeys.has(KEYS.SPACE)) {
            console.log('fire')
            // const bullet = {}
        }
    }

    _turn(direction) {
        if(this.direction !== direction) {
            direction % 2 === 0 ? this._turningMove('x') : this._turningMove('y')
        }

        this.direction = direction
    }

    _move(axis, value) {
        this[axis] += this.speed * value;
        this.animationFrame ^= 1;
    }

    _turningMove(axis) {
        this[axis] = Math.round(this[axis] / TANK_TURN_SIZE) * TANK_TURN_SIZE
    }
}
