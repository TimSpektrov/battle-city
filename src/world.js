import {
    BASE_SPRITES,
    BASE_X, BASE_Y,
    CELL_SIZE,
    DIRECTION, PLAYER1_TANK_SPRITES,
    PLAYER1_TANK_START_X,
    PLAYER1_TANK_START_Y,
    TANK_HEIGHT, TANK_SPEED,
    TANK_WIDTH, UNIT_SIZE, WORLD_SIZE
} from "./constants.js";
import Tank from "./tank.js";
import Base from "./base.js";
import Stage from "./stage.js";

export default class World {
    constructor() {
        this.stage = null;
        this.base = new Base({
            x: BASE_X,
            y: BASE_Y,
            width: UNIT_SIZE,
            height: UNIT_SIZE,
            sprites: BASE_SPRITES
        })
        this.player1Tank = new Tank({
            x: PLAYER1_TANK_START_X,
            y: PLAYER1_TANK_START_Y,
            width: TANK_WIDTH,
            height: TANK_HEIGHT,
            sprites: PLAYER1_TANK_SPRITES,
            direction: DIRECTION.UP,
            speed: TANK_SPEED,
        })
        this.player2Tank = null
        this.bullets = [];
        this.enemyTanks = []
    }

    get width() {
        return WORLD_SIZE;
    }

    get height() {
        return WORLD_SIZE;
    }

    get top() {
        return 0;
    }

    get right() {
        return this.width;
    }

    get bottom() {
        return this.height;
    }

    get left() {
        return 0;
    }

    get objects() {
        return [
            this.base,
            this.player1Tank,
            ...this.stage.objects,
            ...this.enemyTanks,
            ...this.bullets
        ];
    }


    setStage(data) {
        this.stage = new Stage(data);
    }

    update(activeKeys) {
        this.player1Tank.update(this, activeKeys)
    }

    isOutOfBounds(object) {
        return (
            object.top < this.top ||
            object.right > this.right ||
            object.bottom > this.bottom ||
            object.left < this.left
        );
    }

    hasCollision(object) {
        const collision = this.getCollision(object);

        return Boolean(collision);
    }

    getCollision(object) {
        const collisionObject = this._getCollisionObject(object);

        if (collisionObject) {
            collisionObject.debug = true;

            return { object: collisionObject };
        }
    }

    _getCollisionObject(object) {
        return this.stage.objects
            .find(block => block && this._haveCollision(object, block));
    }

    _haveCollision(a, b) {
        return (
            a.left < b.right &&
            a.right > b.left &&
            a.top < b.bottom &&
            a.bottom > b.top
        );
    }
}

