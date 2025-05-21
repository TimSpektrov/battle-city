import {CELL_SIZE, NUMBER_OF_CELLS, UNIT_SIZE} from "./constants.js";

export default class View {
    constructor(canvas, sprite) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.sprite = sprite;
    }

    async init() {
        await this.sprite.load();
    }

    update(world) {
        this.clearScreen();
        this.renderObjects(world.objects);
        this.renderGrid();
    }

    renderObjects(objects) {
        for (const object of objects) {
            const { x, y, width, height, sprite } = object;

            this.context.drawImage(
                this.sprite.image,
                ...sprite,
                x, y, width, height
            );

            if (object.debug) {
                this.context.strokeStyle = '#ff0000';
                this.context.lineWidth = 1;
                this.context.strokeRect(x + 1, y + 1, width - 2, height - 2);
                object.debug = false;
            }
        }
    }

    renderGrid() {

        for (let y = 0; y < NUMBER_OF_CELLS * 2; y++) {
            for (let x = 0; x < NUMBER_OF_CELLS * 2; x++) {
                this.context.strokeStyle = '#ffffff';
                this.context.lineWidth = .05;
                this.context.strokeRect(x * CELL_SIZE + 1, y * CELL_SIZE + 1, CELL_SIZE - 1, CELL_SIZE - 1);
            }
        }
    }

    clearScreen() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
