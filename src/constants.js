export const NUMBER_OF_CELLS = 26;
export const CELL_SIZE = 8;
export const WORLD_SIZE = NUMBER_OF_CELLS * CELL_SIZE;

export const DIRECTION = {
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 3
}

export const KEYS = {
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
    SPACE: 'Space',
    ENTER: 'Enter',
}

export const TANK_WIDTH = CELL_SIZE * 2;
export const TANK_HEIGHT = CELL_SIZE * 2;
export const TANK_SPEED = 1;

export const PLAYER1_TANK_START_X = 8 * CELL_SIZE;
export const PLAYER1_TANK_START_Y = 24 * CELL_SIZE;

export const PLAYER1_TANK_SPRITES = [
    [0, 0, TANK_WIDTH, TANK_WIDTH],
    [TANK_WIDTH, 0, TANK_WIDTH, TANK_WIDTH],
    [6 * TANK_WIDTH, 0, TANK_WIDTH, TANK_WIDTH],
    [7 * TANK_WIDTH, 0, TANK_WIDTH, TANK_WIDTH],
    [4 * TANK_WIDTH, 0, TANK_WIDTH, TANK_WIDTH],
    [5 * TANK_WIDTH, 0, TANK_WIDTH, TANK_WIDTH],
    [2 * TANK_WIDTH, 0, TANK_WIDTH, TANK_WIDTH],
    [3 * TANK_WIDTH, 0, TANK_WIDTH, TANK_WIDTH]
];

// export const BRICK_WALL_SPRITES = [
//     [32 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE], // full
//     [34 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE], // right
//     [36 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE], // bottom
//     [38 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE], // left
//     [40 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE], // top
// ];
