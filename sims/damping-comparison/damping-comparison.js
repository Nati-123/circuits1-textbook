// Three Damping Regimes Comparison MicroSim
// Step response of underdamped, critically damped, and overdamped second-order systems
// Uses canvas-drawn sliders (no DOM elements) for iframe compatibility

let canvasWidth = 710;
let canvasHeight = 480;

// Plot area margins
let marginLeft = 70;
let marginRight = 20;
let marginTop = 50;
let marginBottom = 120;

let plotLeft, plotRight, plotTop, plotBottom, plotW, plotH;

// Canvas sliders
let sliderOmega, sliderZetaUnder, sliderZetaOver;
let sliders = [];

// Colors
let colorUnder = '#5A3EED';
let colorCrit = '#D4A017';
let colorOver = '#E53935';

class CanvasSlider {
    constructor(x, y, w, min, max, value, label) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.min = min;
        this.max = max;
        this.value = value;
        this.label = label;
        this.dragging = false;
    }

    get thumbX() {
        return this.x + ((this.value - this.min) / (this.max - this.min)) * this.w;
    }

    display() {
        // Track
        stroke(180);
        strokeWeight(2);
        line(this.x, this.y, this.x + this.w, this.y);

        // Thumb
        fill('#5A3EED');
        noStroke();
        ellipse(this.thumbX, this.y, 14, 14);

        // Label and value
        fill(60);
        noStroke();
        textSize(12);
        textAlign(LEFT);
        text(this.label + ': ' + this.value.toFixed(2), this.x, this.y - 12);
    }

    pressed(mx, my) {
        if (dist(mx, my, this.thumbX, this.y) < 10) {
            this.dragging = true;
        }
    }

    dragged(mx) {
        if (!this.dragging) return;
        this.value = constrain(
            ((mx - this.x) / this.w) * (this.max - this.min) + this.min,
            this.min,
            this.max
        );
    }

    released() {
        this.dragging = false;
    }
}

function setup() {
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('main');
    textFont('Arial');

    plotLeft = marginLeft;
    plotRight = canvasWidth - marginRight;
    plotTop = marginTop;
    plotBottom = canvasHeight - marginBottom;
    plotW = plotRight - plotLeft;
    plotH = plotBottom - plotTop;

    // Slider positions
    let sliderX = plotLeft + 5;
    let sliderW = 200;
    let sliderY = plotBottom + 30;
    let sliderSpacing = 32;

    sliderOmega = new CanvasSlider(sliderX, sliderY, sliderW, 1, 20, 5, '\u03C9\u2080 (rad/s)');
    sliderZetaUnder = new CanvasSlider(sliderX, sliderY + sliderSpacing, sliderW, 0.05, 0.95, 0.2, '\u03B6 underdamped');
    sliderZetaOver = new CanvasSlider(sliderX, sliderY + sliderSpacing * 2, sliderW, 1.5, 5.0, 3.0, '\u03B6 overdamped');

    sliders = [sliderOmega, sliderZetaUnder, sliderZetaOver];
}

function draw() {
    background(255);

    let omega0 = sliderOmega.value;
    let zetaU = sliderZetaUnder.value;
    let zetaO = sliderZetaOver.value;

    // Determine time range based on omega0
    let tMax = max(5 / (zetaU * omega0), 8 / omega0, 3);
    tMax = min(tMax, 15);

    let yMin = -0.2;
    let yMax = 1.8;

    // Draw title
    fill(0);
    noStroke();
    textSize(16);
    textAlign(CENTER, TOP);
    text('Three Damping Regimes Comparison', canvasWidth / 2, 10);

    // Draw plot background
    fill(255);
    stroke(200);
    strokeWeight(1);
    rect(plotLeft, plotTop, plotW, plotH);

    // Draw grid
    drawGrid(tMax, yMin, yMax);

    // Draw final value dashed line at y=1
    drawDashedLine(
        plotLeft,
        mapY(1, yMin, yMax),
        plotRight,
        mapY(1, yMin, yMax),
        color(150),
        1.5
    );
    fill(150);
    noStroke();
    textSize(10);
    textAlign(LEFT, BOTTOM);
    text('y = 1', plotLeft + 4, mapY(1, yMin, yMax) - 2);

    // Compute and draw curves
    let numPts = 500;
    let dt = tMax / numPts;

    // Underdamped
    drawCurve(numPts, dt, tMax, yMin, yMax, function (t) {
        return stepUnderdamped(t, omega0, zetaU);
    }, color(colorUnder), 2.5);

    // Critically damped
    drawCurve(numPts, dt, tMax, yMin, yMax, function (t) {
        return stepCritical(t, omega0);
    }, color(colorCrit), 2.5);

    // Overdamped
    drawCurve(numPts, dt, tMax, yMin, yMax, function (t) {
        return stepOverdamped(t, omega0, zetaO);
    }, color(colorOver), 2.5);

    // Axis labels
    fill(0);
    noStroke();
    textSize(13);
    textAlign(CENTER, TOP);
    text('Time (s)', (plotLeft + plotRight) / 2, plotBottom + 2);

    push();
    translate(15, (plotTop + plotBottom) / 2);
    rotate(-HALF_PI);
    textAlign(CENTER, BOTTOM);
    text('Voltage (V)', 0, 0);
    pop();

    // Legend
    drawLegend(omega0, zetaU, zetaO);

    // Draw sliders
    for (let s of sliders) {
        s.display();
    }
}

// --- Mouse handlers for canvas sliders ---

function mousePressed() {
    for (let s of sliders) {
        s.pressed(mouseX, mouseY);
    }
}

function mouseDragged() {
    for (let s of sliders) {
        s.dragged(mouseX);
    }
}

function mouseReleased() {
    for (let s of sliders) {
        s.released();
    }
}

// --- Step response functions ---

function stepUnderdamped(t, w0, zeta) {
    if (t <= 0) return 0;
    let wd = w0 * sqrt(1 - zeta * zeta);
    let phi = acos(zeta);
    return 1 - exp(-zeta * w0 * t) / sqrt(1 - zeta * zeta) * sin(wd * t + phi);
}

function stepCritical(t, w0) {
    if (t <= 0) return 0;
    return 1 - (1 + w0 * t) * exp(-w0 * t);
}

function stepOverdamped(t, w0, zeta) {
    if (t <= 0) return 0;
    let s1 = w0 * (-zeta + sqrt(zeta * zeta - 1));
    let s2 = w0 * (-zeta - sqrt(zeta * zeta - 1));
    return 1 + s2 / (s1 - s2) * exp(s1 * t) + s1 / (s2 - s1) * exp(s2 * t);
}

// --- Mapping helpers ---

function mapX(t, tMax) {
    return map(t, 0, tMax, plotLeft, plotRight);
}

function mapY(v, yMin, yMax) {
    return map(v, yMin, yMax, plotBottom, plotTop);
}

// --- Drawing helpers ---

function drawCurve(numPts, dt, tMax, yMin, yMax, fn, col, sw) {
    stroke(col);
    strokeWeight(sw);
    noFill();
    beginShape();
    for (let i = 0; i <= numPts; i++) {
        let t = i * dt;
        let v = fn(t);
        let px = mapX(t, tMax);
        let py = mapY(v, yMin, yMax);
        py = constrain(py, plotTop, plotBottom);
        vertex(px, py);
    }
    endShape();
}

function drawGrid(tMax, yMin, yMax) {
    // Vertical grid lines (time)
    let tStep = calculateNiceStep(tMax, 8);
    stroke(225);
    strokeWeight(0.5);
    fill(80);
    textSize(10);
    textAlign(CENTER, TOP);
    for (let t = 0; t <= tMax; t += tStep) {
        let x = mapX(t, tMax);
        line(x, plotTop, x, plotBottom);
        noStroke();
        let label = t.toFixed(1);
        if (t === 0) label = '0';
        text(label, x, plotBottom + 1);
        stroke(225);
    }

    // Horizontal grid lines (voltage)
    let yStep = 0.2;
    textAlign(RIGHT, CENTER);
    for (let v = yMin; v <= yMax + 0.001; v += yStep) {
        let y = mapY(v, yMin, yMax);
        stroke(225);
        line(plotLeft, y, plotRight, y);
        noStroke();
        fill(80);
        text(v.toFixed(1), plotLeft - 5, y);
        stroke(225);
    }

    // Axes
    stroke(0);
    strokeWeight(1.5);
    let y0 = mapY(0, yMin, yMax);
    line(plotLeft, y0, plotRight, y0);
    line(plotLeft, plotTop, plotLeft, plotBottom);
}

function drawDashedLine(x1, y1, x2, y2, col, sw) {
    stroke(col);
    strokeWeight(sw);
    let dashLen = 8;
    let gapLen = 5;
    let dx = x2 - x1;
    let dy = y2 - y1;
    let totalLen = dist(x1, y1, x2, y2);
    let steps = totalLen / (dashLen + gapLen);
    for (let i = 0; i < steps; i++) {
        let startFrac = i * (dashLen + gapLen) / totalLen;
        let endFrac = min((i * (dashLen + gapLen) + dashLen) / totalLen, 1);
        line(
            x1 + dx * startFrac,
            y1 + dy * startFrac,
            x1 + dx * endFrac,
            y1 + dy * endFrac
        );
    }
}

function drawLegend(omega0, zetaU, zetaO) {
    let lx = plotRight - 210;
    let ly = plotTop + 10;
    let lw = 200;
    let lh = 72;
    let lineH = 20;

    // Background
    fill(255, 255, 255, 230);
    stroke(180);
    strokeWeight(1);
    rect(lx, ly, lw, lh, 4);

    let items = [
        { label: 'Underdamped (\u03B6=' + zetaU.toFixed(2) + ')', col: color(colorUnder) },
        { label: 'Critically Damped (\u03B6=1.00)', col: color(colorCrit) },
        { label: 'Overdamped (\u03B6=' + zetaO.toFixed(1) + ')', col: color(colorOver) }
    ];

    for (let i = 0; i < items.length; i++) {
        let iy = ly + 12 + i * lineH;
        stroke(items[i].col);
        strokeWeight(3);
        line(lx + 10, iy, lx + 35, iy);
        noStroke();
        fill(0);
        textSize(11);
        textAlign(LEFT, CENTER);
        text(items[i].label, lx + 42, iy);
    }
}

function calculateNiceStep(range, targetTicks) {
    let rough = range / targetTicks;
    let mag = pow(10, floor(log(rough) / log(10)));
    let norm = rough / mag;
    let niceNorm;
    if (norm < 1.5) niceNorm = 1;
    else if (norm < 3.5) niceNorm = 2;
    else if (norm < 7.5) niceNorm = 5;
    else niceNorm = 10;
    return niceNorm * mag;
}
