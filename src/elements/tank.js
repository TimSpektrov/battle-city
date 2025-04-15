export default class Tank {
    direction = 0;
    x= 100;
    y = 100;
    animationFrame = 0;
    size = 16; // размер танка на спрайте по х и у
    frames = [
        [0 * this.size, 0 * this.size, this.size, this.size],
        [1 * this.size, 0 * this.size, this.size, this.size],
        [6 * this.size, 0 * this.size, this.size, this.size],
        [7 * this.size, 0 * this.size, this.size, this.size],
        [4 * this.size, 0 * this.size, this.size, this.size],
        [5 * this.size, 0 * this.size, this.size, this.size],
        [2 * this.size, 0 * this.size, this.size, this.size],
        [3 * this.size, 0 * this.size, this.size, this.size],
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
