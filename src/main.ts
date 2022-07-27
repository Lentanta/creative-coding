import './style.css';
import P5 from "p5";

const sketch = (p5: P5) => {
  let x = 500 / 2;
  let y = 500 / 2;

  let x1 = 500 / 2;
  let y1 = 500 / 2;

  let up = 0;
  let right = 0;
  let left = 0;
  let down = 0;

  p5.setup = () => {
    p5.createCanvas(500, 500)
    p5.background(0);
  }

  p5.draw = () => {
    p5.background('rgba(0%,0%,0%,1)');

    p5.fill(255);
    p5.text(`UP:${up}\n DOWN:${down}\n LEFT:${left}\n RIGHT:${right}`, 0, 10);
    p5.text(`${Math.floor(p5.noise(p5.frameCount) * 10)}`, 0, 100);
    console.log(Math.floor(p5.sin(p5.frameCount) * 10))

    p5.noStroke();
    p5.square(x, y, 10);
    const rndNumber = Math.floor(p5.random(0, 4))

    switch (rndNumber) {
      case 0:
        left += 1
        if (x > 10) {
          x -= 10
        }
        break;
      case 1:
        right += 1
        if (x < 500 - 10) {
          x += 10
        }
        break;
      case 2:
        down += 1
        if (y < 500 - 10) {
          y += 10
        }
        break;
      case 3:
        up += 1
        if (y > 10) {
          y -= 10
        }
        break;

    }
  }
}

new P5(sketch);

