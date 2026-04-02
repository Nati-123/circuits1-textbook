// Overdamped Step Response MicroSim
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

function setup() {
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('main');
    textFont('Arial');

    // Damping ratio slider: zeta from 1.1 to 5.0, default 2.0
    zetaSlider = createSlider(1.1, 5.0, 2.0, 0.01);
    zetaSlider.position(marginLeft + 10, canvasHeight - 30);
    zetaSlider.size(200);
    zetaSlider.parent('main');

    // Natural frequency slider: omega0 from 1 to 20, default 5
    omegaSlider = createSlider(1, 20, 5, 0.1);
    omegaSlider.position(marginLeft + 320, canvasHeight - 30);
    omegaSlider.size(200);
    omegaSlider.parent('main');
}

function draw() {
    background(bgColor);

    let zeta = zetaSlider.value();
    let omega0 = omegaSlider.value();

    // Compute roots
    let alpha = zeta * omega0;
    let disc = omega0 * sqrt(zeta * zeta - 1);
    let s1 = -alpha + disc;
    let s2 = -alpha - disc;

    // Time range: 0 to 5/alpha
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
    // Round tStep to a nice number
    for (let i = 0; i <= numTGrid; i++) {
        let t = i * tStep;
        let x = map(t, 0, tMax, plotLeft, plotRight);
        line(x, plotTop, x, plotBottom);
    }

    // --- Draw axes ---
    stroke(axisColor);
    strokeWeight(1.5);
    // X-axis
    line(plotLeft, plotBottom, plotRight, plotBottom);
    // Y-axis
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
    strokeWeight(2.5);
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

    // --- Slider labels ---
    fill(axisColor);
    textSize(12);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    text('Damping Ratio \u03B6: ' + nf(zeta, 1, 2), marginLeft + 10, canvasHeight - 48);
    text('Natural Freq \u03C9\u2080: ' + nf(omega0, 1, 1) + ' rad/s', marginLeft + 320, canvasHeight - 48);
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
