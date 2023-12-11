import P5 from "p5";

class Walker {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  moveX(x: number) {
    this.x = this.x + x;
  }

  moveY(y: number) {
    this.y = this.y + y;
  }
}

const sketch = (p5: P5) => {
  const width = 500;
  const height = 500;

  let walker = new Walker(width / 2, height / 2);
  const walkerSize = 10;

  p5.setup = () => {
    p5.createCanvas(500, 500)
    p5.background(0);
  }

  p5.draw = () => {
    p5.background('rgba(0%,0%,0%,0.05)');

    p5.noStroke();
    p5.square(
      walker.x,
      walker.y,
      walkerSize
    );
    const rndNumber = Math.floor(p5.random(0, 4))

    switch (rndNumber) {
      case 0:
        if (walker.x > walkerSize)
          walker.moveX(-12)

        break;
      case 1:
        if (walker.x < width - walkerSize)
          walker.moveX(12)

        break;
      case 2:
        if (walker.y < width - walkerSize)
          walker.moveY(12)

        break;
      case 3:
        if (walker.y > walkerSize)
          walker.moveY(-12)

        break;
    }
  }
}

new P5(sketch);

