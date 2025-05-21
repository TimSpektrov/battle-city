import GameObject from "./game-object.js";
import {getAxisForDirection, getValueForDirection} from "./utils.js";

export default class Bullet extends GameObject{
    constructor({direction, speed,  ...rest}) {
        super(rest);
        this.direction = direction;
        this.speed = speed
    }

    get sprite(){
        return this.sprites[this.direction];
    }

    update(world){
        const axis = getAxisForDirection(this.direction);
        const value = getValueForDirection(this.direction);
        const delta = value * this.speed;

        this[axis] += delta;

        const isOutOfBounds = world.isOutOfBounds(this);
        const hasCollision = world.hasCollision(this);

        if (isOutOfBounds || hasCollision) {
            this[axis] += -delta;
        }
    }
}
