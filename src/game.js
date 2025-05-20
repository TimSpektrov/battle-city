import {KEYS} from "./constants.js";

export default class Game {
    constructor({ world, view, stages }) {
        this.world = world;
        this.view = view;
        this.stages = stages
        this.stage = 0
        this.activeKeys = new Set()

        this.loop = this.loop.bind(this)
    }

    async init() {
        this.view.init();
        this.world.setStage(this.stages[this.stage]);

        document.addEventListener('keydown', (e) => {
            switch (e.code) {
                case KEYS.UP:
                case KEYS.DOWN:
                case KEYS.LEFT:
                case KEYS.RIGHT:
                case KEYS.SPACE:
                case KEYS.ENTER:
                    e.preventDefault()
                    this.activeKeys.add(e.code)
            }
        })

        document.addEventListener('keyup', (e) => {
            switch (e.code) {
                case KEYS.UP:
                case KEYS.DOWN:
                case KEYS.LEFT:
                case KEYS.RIGHT:
                case KEYS.SPACE:
                case KEYS.ENTER:
                    e.preventDefault()
                    this.activeKeys.delete(e.code)
            }
        })
    }

    start() {
        requestAnimationFrame(this.loop);
    }

    loop() {
        this.world.update(this.activeKeys);
        this.view.update(this.world);

         requestAnimationFrame(this.loop);
    }
}
