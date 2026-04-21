// Overdamped Step Response MicroSim
// Canvas-drawn sliders (no DOM elements) for iframe compatibility

// Canvas dimensions
let canvasWidth = 710;
let canvasHeight = 430;

// Plot margins
let marginLeft = 70;
let marginRight = 30;
let marginTop = 50;
let marginBottom = 80;

// Sliders
let zetaSlider, omegaSlider;

// Colors
let curveColor = '#5A3EED';
let finalValueColor = '#D4A017';
let axisColor = '#333333';
let gridColor = '#E0E0E0';
let bgColor = '#FFFFFF';

class CanvasSlider {
  constructor(x, y, w, min, max, value, label) {
    this.x = x; this.y = y; this.w = w;
    this.min = min; this.max = max; this.value = value;
    this.label = label; this.dragging = false;
  }
  get thumbX() { return this.x + ((this.value - this.min) / (this.max - this.min)) * this.w; }
  display() {
    stroke(180); strokeWeight(2); line(this.x, this.y, this.x + this.w, this.y);
    fill('#5A3EED'); noStroke(); ellipse(this.thumbX, this.y, 14, 14);
    fill(60); noStroke(); textSize(12); textAlign(LEFT);
    text(this.label + ': ' + this.value.toFixed(2), this.x, this.y - 12);
  }
  pressed(mx, my) { if (dist(mx, my, this.thumbX, this.y) < 10) this.dragging = true; }
  dragged(mx) {
    if (!this.dragging) return;
    let v = ((mx - this.x) / this.w) * (this.max - this.min) + this.min;
    this.value = constrain(v, this.min, this.max);
  }
  released() { this.dragging = false; }
}

function setup() {
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('main');
    textFont('Arial');

    // Damping ratio slider: zeta from 1.1 to 5.0, default 2.0
    zetaSlider = new CanvasSlider(marginLeft + 10, canvasHeight - 25, 200, 1.1, 5.0, 2.0, 'Damping Ratio ζ');

    // Natural frequency slider: omega0 from 1 to 20, default 5
    omegaSlider = new CanvasSlider(marginLeft + 320, canvasHeight - 25, 200, 1, 20, 5, 'Natural Freq ω₀');
}

function draw() {
    background(bgColor);

    let zeta = zetaSlider.value;
    let omega0 = omegaSlider.value;

    // Compute roots
    let alpha = zeta * omega0;
    let disc = omega0 * sqrt(zeta * zeta - 1);
    let s1 = -alpha + disc;
    let s2 = -alpha - disc;

    // Time range: 0 to 5/(zeta*omega0)
    let tMax = 5 / alpha;
    let Vf = 1.0; // final value

    // Plot area
    let plotLeft = marginLeft;
    let plotRight = canvasWidth - marginRight;
    let plotTop = marginTop;
    let plotBottom = canvasHeight - marginBottom;
    let plotW = plotRight - plotLeft;
    let plotH = plotBottom - plotTop;

    // Voltage range
    let vMin = 0;
    let vMax = 1.2;

    // --- Draw title ---
    fill(axisColor);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(18);
    textStyle(BOLD);
    text('Overdamped Step Response', canvasWidth / 2, 10);

    // --- Draw grid lines ---
    stroke(gridColor);
    strokeWeight(0.5);

    // Horizontal grid lines
    let vStep = 0.2;
    for (let v = vMin; v <= vMax + 0.001; v += vStep) {
        let y = map(v, vMin, vMax, plotBottom, plotTop);
        line(plotLeft, y, plotRight, y);
    }

    // Vertical grid lines
    let numTGrid = 8;
    let tStep = tMax / numTGrid;
    for (let i = 0; i <= numTGrid; i++) {
        let t = i * tStep;
        let x = map(t, 0, tMax, plotLeft, plotRight);
        line(x, plotTop, x, plotBottom);
    }

    // --- Draw axes ---
    stroke(axisColor);
    strokeWeight(1.5);
    line(plotLeft, plotBottom, plotRight, plotBottom);
    line(plotLeft, plotTop, plotLeft, plotBottom);

    // --- Axis labels ---
    fill(axisColor);
    noStroke();
    textStyle(NORMAL);
    textSize(12);

    // Y-axis tick labels
    textAlign(RIGHT, CENTER);
    for (let v = vMin; v <= vMax + 0.001; v += vStep) {
        let y = map(v, vMin, vMax, plotBottom, plotTop);
        text(nf(v, 1, 1), plotLeft - 8, y);
    }

    // X-axis tick labels
    textAlign(CENTER, TOP);
    for (let i = 0; i <= numTGrid; i++) {
        let t = i * tStep;
        let x = map(t, 0, tMax, plotLeft, plotRight);
        text(nf(t, 1, 3), x, plotBottom + 5);
    }

    // Axis titles
    textSize(14);
    textAlign(CENTER, TOP);
    text('Time (s)', (plotLeft + plotRight) / 2, plotBottom + 22);

    push();
    translate(18, (plotTop + plotBottom) / 2);
    rotate(-HALF_PI);
    textAlign(CENTER, BOTTOM);
    text('Voltage (V)', 0, 0);
    pop();

    // --- Draw final value dashed line ---
    let yFinal = map(Vf, vMin, vMax, plotBottom, plotTop);
    stroke(finalValueColor);
    strokeWeight(1.5);
    drawDashedLine(plotLeft, yFinal, plotRight, yFinal, 8, 5);

    // Label final value
    noStroke();
    fill(finalValueColor);
    textAlign(LEFT, BOTTOM);
    textSize(12);
    textStyle(BOLD);
    text('V_f = ' + nf(Vf, 1, 1), plotRight - 60, yFinal - 4);

    // --- Plot the response curve ---
    stroke(curveColor);
    strokeWeight(2);
    noFill();
    beginShape();
    let numPoints = 500;
    for (let i = 0; i <= numPoints; i++) {
        let t = (i / numPoints) * tMax;
        let v;
        if (t <= 0) {
            v = 0;
        } else {
            // v(t) = 1 + (s2/(s1-s2))*exp(s1*t) + (s1/(s2-s1))*exp(s2*t)
            v = Vf + (s2 / (s1 - s2)) * exp(s1 * t) + (s1 / (s2 - s1)) * exp(s2 * t);
        }
        let x = map(t, 0, tMax, plotLeft, plotRight);
        let y = map(v, vMin, vMax, plotBottom, plotTop);
        y = constrain(y, plotTop, plotBottom);
        vertex(x, y);
    }
    endShape();

    // --- Display parameter info ---
    noStroke();
    fill(axisColor);
    textStyle(NORMAL);
    textSize(13);
    textAlign(LEFT, TOP);

    let infoX = plotLeft + 15;
    let infoY = plotTop + 10;
    let lineH = 18;

    fill('#5A3EED');
    textStyle(BOLD);
    text('\u03B6 = ' + nf(zeta, 1, 2), infoX, infoY);
    text('\u03C9\u2080 = ' + nf(omega0, 1, 1) + ' rad/s', infoX, infoY + lineH);

    fill(axisColor);
    textStyle(NORMAL);
    textSize(12);
    text('s\u2081 = ' + nf(s1, 1, 2) + ' /s', infoX, infoY + 2.5 * lineH);
    text('s\u2082 = ' + nf(s2, 1, 2) + ' /s', infoX, infoY + 3.5 * lineH);
    text('\u03B1 = \u03B6\u03C9\u2080 = ' + nf(alpha, 1, 2) + ' /s', infoX, infoY + 4.5 * lineH);

    // --- Draw sliders ---
    textStyle(BOLD);
    zetaSlider.display();
    omegaSlider.display();
}

function mousePressed() {
    zetaSlider.pressed(mouseX, mouseY);
    omegaSlider.pressed(mouseX, mouseY);
}

function mouseDragged() {
    zetaSlider.dragged(mouseX);
    omegaSlider.dragged(mouseX);
}

function mouseReleased() {
    zetaSlider.released();
    omegaSlider.released();
}

// Utility: draw a dashed line
function drawDashedLine(x1, y1, x2, y2, dashLen, gapLen) {
    let d = dist(x1, y1, x2, y2);
    let dx = (x2 - x1) / d;
    let dy = (y2 - y1) / d;
    let pos = 0;
    let drawing = true;
    while (pos < d) {
        let segLen = drawing ? dashLen : gapLen;
        if (pos + segLen > d) segLen = d - pos;
        if (drawing) {
            line(x1 + dx * pos, y1 + dy * pos,
                 x1 + dx * (pos + segLen), y1 + dy * (pos + segLen));
        }
        pos += segLen;
        drawing = !drawing;
    }
}
