import { Ball } from "./ball";
import { Player } from "./player";

export class CollionHelper {

    private maxWidth: number;
    private maxHeight: number;
    private ball : Ball;
    private player1: Player;
    private player2: Player;

    constructor(
        maxWidth: number,
        maxHeight: number,
        ball: Ball,
        player1: Player,
        player2: Player,
        wedgeWidth: number,
        wedgeHeight: number
    ) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this.ball = ball;
        this.player1 = player1;
        this.player2 = player2;
    }

    public checkCollisions(): void {
        this.checkWallCollisions();
        this.checkPlayerCollisions();
    }  

    private checkWallCollisions(): void {
        if (this.ball.getPositionX() + this.ball.getRadius() >= this.maxWidth) {
            this.ball.setVelocityX(-this.ball.getVelocityX());
        }

        if (this.ball.getPositionX() - this.ball.getRadius() <= 0) {
            this.ball.setVelocityX(-this.ball.getVelocityX());
        }

        if (this.ball.getPositionY() + this.ball.getRadius() >= this.maxHeight) {
            this.ball.setPositionX(this.maxWidth / 2);
            this.ball.setPositionY(this.maxHeight / 2);
            alert("Player 2 wins!");
        }

        if (this.ball.getPositionY() - this.ball.getRadius() <= 0) {
            this.ball.setPositionX(this.maxWidth / 2);
            this.ball.setPositionY(this.maxHeight / 2);
            alert("Player 1 wins!");
        }
    }

    private checkPlayerCollisions(): void {
        if (this.ball.getPositionY() + this.ball.getRadius() >= this.player2.getPositionY() &&
            this.ball.getPositionX() >= this.player2.getPositionX() &&
            this.ball.getPositionX() <= this.player2.getPositionX() + this.player2.getWidth()) {
            this.ball.setVelocityY(-this.ball.getVelocityY());
        }

        if (this.ball.getPositionY() - this.ball.getRadius() <= this.player1.getPositionY() + this.player1.getHeight() &&
            this.ball.getPositionX() >= this.player1.getPositionX() &&
            this.ball.getPositionX() <= this.player1.getPositionX() + this.player1.getWidth()) {
            this.ball.setVelocityY(-this.ball.getVelocityY());
        }
    }

}