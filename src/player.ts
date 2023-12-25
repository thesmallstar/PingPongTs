export class Player {
  private positionX: number;
  private positionY: number;
  private width: number;
  private height: number;
  private name: string;
  private score: number;
  private ctx: CanvasRenderingContext2D;

  constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    name: string,
    ctx: CanvasRenderingContext2D
  ) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.name = name;
    this.score = 0;
    this.ctx = ctx;
  }

  public draw(): void {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
  }

  public getScore(): number {
    return this.score;
  }

  public getName(): string {
    return this.name;
  }

  public handleWin(): void {
    this.score++;
  }

  public getPositionX(): number {
    return this.positionX;
  }

  public getPositionY(): number {
    return this.positionY;
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public moveX(x: number): void {
    this.positionX += x;
    this.positionX = Math.max(this.positionX, 0);
    this.positionX = Math.min(this.positionX, 700 - this.width);
  }
}
