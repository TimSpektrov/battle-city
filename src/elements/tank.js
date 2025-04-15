const CELL_SIZE = 16

export default class Tank {
    direction = 0;
    x= 4 * CELL_SIZE;
    y = 12 * CELL_SIZE;
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

    update(activeKeys) {
        if(activeKeys.has('ArrowUp')) {
            this._move(0, 'y', -1)
        } else if(activeKeys.has('ArrowRight')) {
            this._move(1, 'x', +1)
        } else if(activeKeys.has('ArrowDown')) {
            this._move(2, 'y', 1)
        } else if(activeKeys.has('ArrowLeft')) {
            this._move(3, 'x', -1)
        }
    }

    _move(direction, axis, value) {
        this.direction = direction;
        this[axis] += value;
        this.animationFrame ^= 1;
    }
}
