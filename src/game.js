export default class Game {
    constructor({ world, view, levels }) {
        this.world = world;
        this.view = view;
        this.levels = levels
        this.level = 0
        this.activeKeys = new Set()

        this.loop = this.loop.bind(this)
    }

    async init() {
        this.view.init();
        this.world.setLevel(this.levels[this.level]);

        document.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'ArrowRight':
                case 'Space':
                case 'Enter':
                    e.preventDefault()
                    this.activeKeys.add(e.code)
            }
        })

        document.addEventListener('keyup', (e) => {
            switch (e.code) {
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'ArrowRight':
                case 'Space':
                case 'Enter':
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
