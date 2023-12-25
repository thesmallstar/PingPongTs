import "./style.css";
import { Player } from "./player.ts";
import { Ball } from "./ball.ts";
import { CollionHelper } from "./collionHelper.ts";

document.querySelector<HTMLDivElement>(
  "#app"
)!.innerHTML = `<canvas id="ping-pong" width="700" height="500" style="border:1px solid #000000;"></canvas>`;

const canvas = document.querySelector<HTMLCanvasElement>(
  "#ping-pong"
) as HTMLCanvasElement;

const player1 = new Player(0, 0, 100, 20, "Player 1", canvas.getContext("2d")!);
const player2 = new Player(
  0,
  480,
  100,
  20,
  "Player 2",
  canvas.getContext("2d")!
);

const ball = new Ball(350, 250, 10, canvas.getContext("2d")!);

const collisionHelper = new CollionHelper(
  canvas.width,
  canvas.height,
  ball,
  player1,
  player2,
  100,
  20
);

function handleKeyboardPress() {
  if (keys.ArrowLeft) {
    player1.moveX(-10);
  }

  if (keys.ArrowRight) {
    player1.moveX(10);
  }

  if (keys.KeyA) {
    player2.moveX(-10);
  }

  if (keys.KeyD) {
    player2.moveX(10);
  }
}
function draw(player1: Player, player2: Player): void {
  canvas.getContext("2d")!.clearRect(0, 0, canvas.width, canvas.height);
  player1.draw();
  player2.draw();
  handleKeyboardPress();
  ball.draw();
  collisionHelper.checkCollisions();
}

// define keys to listen to
const keys = {
  ArrowLeft: false,
  ArrowRight: false,
  KeyA: false,
  KeyD: false,
  anykey: false,
};

// sets key to true if key is down
function keyboardEvent(event: KeyboardEvent) {
  console.log(event.code);

  const keyCode = (event.code as keyof typeof keys) ?? "anykey";

  if (keys[keyCode] !== undefined) {
    keys[keyCode] = event.type === "keydown";
    event.preventDefault();
    event.type === "keydown" && (keys.anykey = true);
  }
}

var frameCount = 0;
const frameRate = 60;
function update() {
  if (frameCount % (60 / frameRate) === 0) {
    draw(player1, player2);
  }
  frameCount += 1;
  requestAnimationFrame(update);
}

update();

// add key listeners to window
addEventListener("keydown", keyboardEvent);
addEventListener("keyup", keyboardEvent);
