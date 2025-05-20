import {BULLET_HEIGHT, BULLET_SPRITES, BULLET_WIDTH, CELL_SIZE, DIRECTION, KEYS} from "./constants.js";
import Bullet from "./bullet.js";
import GameObject from "./game-object.js";

const TANK_TURN_SIZE = CELL_SIZE;

export default class Tank extends GameObject {
    constructor({direction, speed, ...rest}) {
        super(rest)

        this.direction = direction;
        this.speed = speed;
        this.animationFrame = 0;
    }

    get sprite() {
        return this.sprites[this.direction * 2 + this.animationFrame];
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
            if(!this.bullet) {
                this.bullet = new Bullet({
                    x: this.x,
                    y: this.y,
                    width: BULLET_WIDTH,
                    height: BULLET_HEIGHT,
                    sprites: BULLET_SPRITES,
                });
                world.bullets.push(this.bullet);
            }
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
