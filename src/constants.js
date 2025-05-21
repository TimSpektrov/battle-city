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

export const OBJECT_TYPE = {
    BASE: 0,
    BRICK_WALL: 1,
    STEEL_WALL: 2,
    TREE: 3,
    WATER: 4,
    ICE: 5
};

export const UNIT_SIZE = CELL_SIZE * 2

export const BULLET_WIDTH = 4;
export const BULLET_HEIGHT = 4;
export const BULLET_SPEED = 1.5;

export const TANK_WIDTH = UNIT_SIZE;
export const TANK_HEIGHT = UNIT_SIZE;
export const TANK_SPEED = 1;

export const BASE_X = 6 * UNIT_SIZE;
export const BASE_Y = 12 * UNIT_SIZE;

export const PLAYER1_TANK_START_X = 4 * UNIT_SIZE;
export const PLAYER1_TANK_START_Y = 12 * UNIT_SIZE;

export const PLAYER1_TANK_SPRITES = [
    [0, 0, UNIT_SIZE, UNIT_SIZE],
    [UNIT_SIZE, 0, UNIT_SIZE, UNIT_SIZE],
    [6 * UNIT_SIZE, 0, UNIT_SIZE, UNIT_SIZE],
    [7 * UNIT_SIZE, 0, UNIT_SIZE, UNIT_SIZE],
    [4 * UNIT_SIZE, 0, UNIT_SIZE, UNIT_SIZE],
    [5 * UNIT_SIZE, 0, UNIT_SIZE, UNIT_SIZE],
    [2 * UNIT_SIZE, 0, UNIT_SIZE, UNIT_SIZE],
    [3 * UNIT_SIZE, 0, UNIT_SIZE, UNIT_SIZE]
];

export const BRICK_WALL_SPRITES = [
    [32 * CELL_SIZE, 8 * CELL_SIZE, CELL_SIZE, CELL_SIZE], // full wall brick
    [33 * CELL_SIZE, 8 * CELL_SIZE, CELL_SIZE, CELL_SIZE], // right wall brick
    [34 * CELL_SIZE, 8 * CELL_SIZE, CELL_SIZE, CELL_SIZE], // bottom wall brick
    [35 * CELL_SIZE, 8 * CELL_SIZE, CELL_SIZE, CELL_SIZE], // left wall brick
    [36 * CELL_SIZE, 8 * CELL_SIZE, CELL_SIZE, CELL_SIZE], // top wall brick
]

export const STEEL_WALL_SPRITES = [
    [32 * CELL_SIZE, 9 * CELL_SIZE, CELL_SIZE, CELL_SIZE], // full wall concrete
]

export const BULLET_SPRITES = [
    [(20 * UNIT_SIZE) + 3, (6  * UNIT_SIZE) + 6, BULLET_WIDTH, BULLET_HEIGHT],
    [(20 * UNIT_SIZE) + 2 + 3 * CELL_SIZE, (6  * UNIT_SIZE) + 6, BULLET_WIDTH, BULLET_HEIGHT],
    [(20 * UNIT_SIZE) + 3 + 2 * CELL_SIZE, (6  * UNIT_SIZE) + 6, BULLET_WIDTH, BULLET_HEIGHT],
    [(20 * UNIT_SIZE) + 2 + CELL_SIZE, (6  * UNIT_SIZE) + 6, BULLET_WIDTH, BULLET_HEIGHT],
]

export const BASE_SPRITES = [
    [19 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [20 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
];
