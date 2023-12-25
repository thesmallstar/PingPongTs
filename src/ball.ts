export class Ball {

    private postionX: number;
    private postionY: number;
    private velocityX: number = 1.5;
    private velocityY: number = 1.5;

    private radius: number;
    private ctx: CanvasRenderingContext2D;


    constructor(
        postionX: number,
        postionY: number,
        radius: number,
        ctx: CanvasRenderingContext2D
    ) {
        this.postionX = postionX;
        this.postionY = postionY;
        this.radius = radius;
        this.ctx = ctx;
    }

    public getPositionX(): number {
        return this.postionX;
    }

    public getPositionY(): number {
        return this.postionY;
    }

    public getRadius(): number {
        return this.radius;
    }

    public getVelocityX(): number {
        return this.velocityX;
    }

    public setPositionX(positionX: number): void {
        this.postionX = positionX;
    }

    public setPositionY(positionY: number): void {
        this.postionY = positionY;
    }

    public getVelocityY(): number {
        return this.velocityY;
    }

    public setVelocityX(velocityX: number): void {
        this.velocityX = velocityX;
    }

    public setVelocityY(velocityY: number): void {
        this.velocityY = velocityY;
    }


    public draw(): void {
        this.ctx.beginPath();
        this.ctx.arc(this.postionX, this.postionY, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = "white";
        this.ctx.fill();
        this.postionX = this.postionX + this.velocityX;
        this.postionY = this.postionY + this.velocityY;
    }
}