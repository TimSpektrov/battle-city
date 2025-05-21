import { DIRECTION } from './constants.js';

export function getDirectionForKeys(keys) {
    if (keys.has('ArrowUp')) {
        return DIRECTION.UP;
    }

    if (keys.has('ArrowRight')) {
        return DIRECTION.RIGHT;
    }

    if (keys.has('ArrowDown')) {
        return DIRECTION.DOWN;
    }

    if (keys.has('ArrowLeft')) {
        return DIRECTION.LEFT;
    }
}

export const setMoveObject = (direction, value) => {
    const axis = direction % 2 === 0 ? 'y' : 'x';
    console.log('axis', axis)
    let delta;
    switch (direction) {
        case 1:
        case 2:
            delta = 1 * value;
            break;
        case 3:
        case 0:
        default:
            delta = -1 * value;
    }

    return {axis, delta};
}

export function getAxisForDirection(direction) {
    return direction % 2 === 0 ? 'y' : 'x';
}

export function getValueForDirection(direction) {
    switch (direction) {
        case DIRECTION.UP: return -1;
        case DIRECTION.RIGHT: return 1;
        case DIRECTION.DOWN: return 1;
        case DIRECTION.LEFT: return -1;
    }
}

export function getSideForDirection(direction) {
    switch (direction) {
        case DIRECTION.UP: return 'top';
        case DIRECTION.RIGHT: return 'right';
        case DIRECTION.DOWN: return 'bottom';
        case DIRECTION.LEFT: return 'left';
    }
}
