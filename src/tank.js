import {
    BULLET_HEIGHT, BULLET_SPEED,
    BULLET_SPRITES,
    BULLET_WIDTH,
    CELL_SIZE,
    DIRECTION,
    KEYS,
    TANK_HEIGHT,
    TANK_WIDTH
} from "./constants.js";
import Bullet from "./bullet.js";
import GameObject from "./game-object.js";
import {getAxisForDirection, getDirectionForKeys, getValueForDirection} from "./utils.js";

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
        if(
            activeKeys.has(KEYS.UP) ||
            activeKeys.has(KEYS.RIGHT) ||
            activeKeys.has(KEYS.DOWN) ||
            activeKeys.has(KEYS.LEFT)
        ) {
            const direction = getDirectionForKeys(activeKeys);
            this._turn(direction);
            this._move(world, direction);
        }

        if(activeKeys.has(KEYS.SPACE)) {
            if(!this.bullet) {
                console.log(this.direction)
                const coordinates = {}
                switch (this.direction) {
                    case 0:
                        coordinates.x = this.x + CELL_SIZE - (BULLET_WIDTH / 2);
                        coordinates.y = this.y;
                        break;
                    case 1:
                        coordinates.x = this.x + TANK_WIDTH - BULLET_WIDTH;
                        coordinates.y = this.y + CELL_SIZE - (BULLET_HEIGHT / 2);
                        break;
                    case 2:
                        coordinates.x = this.x + CELL_SIZE - (BULLET_WIDTH / 2);
                        coordinates.y = this.y + TANK_HEIGHT - BULLET_HEIGHT;
                        break;
                    case 3:
                        coordinates.x = this.x;
                        coordinates.y = this.y + CELL_SIZE - (BULLET_HEIGHT / 2);
                        break;
                }

                this.bullet = new Bullet({
                    x: coordinates.x,
                    y: coordinates.y,
                    width: BULLET_WIDTH,
                    height: BULLET_HEIGHT,
                    sprites: BULLET_SPRITES,
                    direction: this.direction,
                    speed: BULLET_SPEED,
                });
                world.bullets.push(this.bullet);
                console.log(this.bullet);
            }
        }
    }

    _turn(direction) {
        if(this.direction !== direction) {
            direction % 2 === 0 ? this._turningMove('x') : this._turningMove('y')
        }

        this.direction = direction
    }

    _move(world, direction) {
        const axis = getAxisForDirection(direction);
        const value = getValueForDirection(direction);
        const delta = value * this.speed;

        this.animationFrame ^= 1;
        this[axis] += delta;

        const isOutOfBounds = world.isOutOfBounds(this);
        const hasCollision = world.hasCollision(this);

        if (isOutOfBounds || hasCollision) {
            this[axis] += -delta;
        }
    }

    _turningMove(axis) {
        this[axis] = Math.round(this[axis] / TANK_TURN_SIZE) * TANK_TURN_SIZE
    }
}
