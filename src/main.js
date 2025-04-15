import './style.css'
import World from "./elements/world.js";
import View from "./elements/view.js";
import Game from "./elements/game.js";
import levels from "./data/levels.js";
import Sprite from "./elements/sprire.js";

const canvas = document.querySelector("#canvas");
const sprite = new Sprite('./src/assets/sprite.png');

const game = new Game({
        world: new World(),
        view: new View(canvas, sprite),
        levels
    })

game.init().then(() => game.start())

console.log(game)


