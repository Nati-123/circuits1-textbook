// Quality Factor and Bandwidth MicroSim
// Canvas: 710 x 480

let sliderF0, sliderQ;
let canvasWidth = 710;
let canvasHeight = 480;

// Plot area margins
let marginLeft = 70;
let marginRight = 140;
let marginTop = 50;
let marginBottom = 60;

// Fixed Q curves
let fixedQs = [2, 5, 20, 50];
let fixedColors;

// Frequency range for log scale
let fMin = 10;
let fMax = 100000;

function setup() {
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('main');
    textFont('Arial');

    fixedColors = [
        color(230, 80, 80),   // Q=2  red
        color(80, 180, 80),   // Q=5  green
        color(80, 150, 230),  // Q=20 blue
        color(230, 160, 40)   // Q=50 orange
    ];

    // Slider for f0
    sliderF0 = createSlider(100, 10000, 1000, 10);
    sliderF0.position(marginLeft + 10, canvasHeight - 22);
    sliderF0.style('width', '180px');
    sliderF0.parent('main');

    // Slider for highlighted Q
    sliderQ = createSlider(1, 100, 10, 1);
    sliderQ.position(marginLeft + 310, canvasHeight - 22);
    sliderQ.style('width', '180px');
    sliderQ.parent('main');
}

function draw() {
    background(255);

    let f0 = sliderF0.value();
    let qHighlight = sliderQ.value();

    let plotLeft = marginLeft;
    let plotRight = canvasWidth - marginRight;
    let plotTop = marginTop;
    let plotBottom = canvasHeight - marginBottom;
    let plotW = plotRight - plotLeft;
    let plotH = plotBottom - plotTop;

    // Title
    fill(0);
    noStroke();
    textSize(16);
    textAlign(CENTER, TOP);
    text('Quality Factor and Bandwidth', canvasWidth / 2, 10);

    // Draw plot background
    fill(250);
    stroke(200);
    strokeWeight(1);
    rect(plotLeft, plotTop, plotW, plotH);

    // --- Grid and axes ---
    drawGrid(plotLeft, plotTop, plotW, plotH, f0);

    // --- Draw -3dB dashed line ---
    let y3dB = plotTop + plotH * (1 - 0.707);
    drawDashedLine(plotLeft, y3dB, plotRight, y3dB, color(120, 120, 120), 1.5);
    fill(120);
    noStroke();
    textSize(10);
    textAlign(LEFT, BOTTOM);
    text('-3 dB (0.707)', plotRight + 4, y3dB + 4);

    // --- Draw fixed Q curves ---
    for (let i = 0; i < fixedQs.length; i++) {
        drawCurve(fixedQs[i], f0, plotLeft, plotTop, plotW, plotH, fixedColors[i], 1.5);
    }

    // --- Draw highlighted Q curve (thick) ---
    let highlightColor = color(90, 62, 237); // #5A3EED
    drawCurve(qHighlight, f0, plotLeft, plotTop, plotW, plotH, highlightColor, 3.5);

    // --- Draw bandwidth markers for highlighted Q ---
    let bw = f0 / qHighlight;
    let fLow = f0 * (sqrt(1 + 1 / (4 * qHighlight * qHighlight)) - 1 / (2 * qHighlight));
    let fHigh = f0 * (sqrt(1 + 1 / (4 * qHighlight * qHighlight)) + 1 / (2 * qHighlight));

    let xLow = freqToX(fLow, plotLeft, plotW);
    let xHigh = freqToX(fHigh, plotLeft, plotW);

    if (xLow >= plotLeft && xLow <= plotRight) {
        stroke(highlightColor);
        strokeWeight(1.5);
        drawDashedLine(xLow, y3dB, xLow, plotBottom, highlightColor, 1.2);
    }
    if (xHigh >= plotLeft && xHigh <= plotRight) {
        stroke(highlightColor);
        strokeWeight(1.5);
        drawDashedLine(xHigh, y3dB, xHigh, plotBottom, highlightColor, 1.2);
    }

    // BW arrow
    if (xLow >= plotLeft && xHigh <= plotRight) {
        let yArrow = y3dB + 14;
        stroke(highlightColor);
        strokeWeight(1.5);
        line(xLow, yArrow, xHigh, yArrow);
        // arrowheads
        line(xLow, yArrow, xLow + 5, yArrow - 3);
        line(xLow, yArrow, xLow + 5, yArrow + 3);
        line(xHigh, yArrow, xHigh - 5, yArrow - 3);
        line(xHigh, yArrow, xHigh - 5, yArrow + 3);
        // BW label
        noStroke();
        fill(highlightColor);
        textSize(10);
        textAlign(CENTER, TOP);
        text('BW', (xLow + xHigh) / 2, yArrow + 2);
    }

    // --- Axis labels ---
    fill(0);
    noStroke();
    textSize(12);
    textAlign(CENTER, TOP);
    text('Frequency (Hz)', (plotLeft + plotRight) / 2, plotBottom + 22);

    push();
    translate(16, (plotTop + plotBottom) / 2);
    rotate(-HALF_PI);
    textAlign(CENTER, BOTTOM);
    textSize(12);
    text('Normalized Response', 0, 0);
    pop();

    // --- Legend ---
    let legendX = plotRight + 10;
    let legendY = plotTop + 10;
    textSize(11);
    textAlign(LEFT, CENTER);
    noStroke();

    fill(0);
    textStyle(BOLD);
    text('Fixed Q:', legendX, legendY);
    textStyle(NORMAL);

    for (let i = 0; i < fixedQs.length; i++) {
        let ly = legendY + 18 + i * 18;
        stroke(fixedColors[i]);
        strokeWeight(2.5);
        line(legendX, ly, legendX + 20, ly);
        noStroke();
        fill(0);
        text('Q = ' + fixedQs[i], legendX + 25, ly);
    }

    // Highlighted Q info
    let infoY = legendY + 18 + fixedQs.length * 18 + 14;
    stroke(highlightColor);
    strokeWeight(3.5);
    line(legendX, infoY, legendX + 20, infoY);
    noStroke();
    fill(highlightColor);
    textStyle(BOLD);
    text('Q = ' + qHighlight, legendX + 25, infoY);
    textStyle(NORMAL);

    fill(60);
    textSize(10);
    text('BW = ' + nf(bw, 0, 1) + ' Hz', legendX, infoY + 18);
    text('f\u2080 = ' + f0 + ' Hz', legendX, infoY + 34);

    // --- Slider labels ---
    fill(0);
    noStroke();
    textSize(11);
    textAlign(LEFT, CENTER);
    text('f\u2080 = ' + f0 + ' Hz', marginLeft + 10, canvasHeight - 34);
    text('Q = ' + qHighlight, marginLeft + 310, canvasHeight - 34);
}

function drawCurve(Q, f0, plotLeft, plotTop, plotW, plotH, col, weight) {
    let plotRight = plotLeft + plotW;
    let plotBottom = plotTop + plotH;
    let numPoints = 400;

    stroke(col);
    strokeWeight(weight);
    noFill();
    beginShape();
    for (let i = 0; i <= numPoints; i++) {
        let t = i / numPoints;
        let logF = log(fMin) / log(10) + t * (log(fMax) / log(10) - log(fMin) / log(10));
        let f = pow(10, logF);
        let ratio = f / f0 - f0 / f;
        let H = 1.0 / sqrt(1 + Q * Q * ratio * ratio);

        let x = plotLeft + t * plotW;
        let y = plotTop + plotH * (1 - H);

        // Clip to plot area
        if (x >= plotLeft && x <= plotRight && y >= plotTop && y <= plotBottom) {
            vertex(x, y);
        }
    }
    endShape();
}

function freqToX(f, plotLeft, plotW) {
    let logMin = log(fMin) / log(10);
    let logMax = log(fMax) / log(10);
    let logF = log(f) / log(10);
    let t = (logF - logMin) / (logMax - logMin);
    return plotLeft + t * plotW;
}

function drawGrid(plotLeft, plotTop, plotW, plotH, f0) {
    let plotRight = plotLeft + plotW;
    let plotBottom = plotTop + plotH;
    let logMin = log(fMin) / log(10);
    let logMax = log(fMax) / log(10);

    // Vertical grid lines (log frequency)
    textSize(9);
    textAlign(CENTER, TOP);
    fill(140);
    for (let decade = floor(logMin); decade <= ceil(logMax); decade++) {
        for (let k = 1; k <= 9; k++) {
            let f = k * pow(10, decade);
            if (f < fMin || f > fMax) continue;
            let x = freqToX(f, plotLeft, plotW);
            if (k === 1) {
                stroke(180);
                strokeWeight(0.8);
            } else {
                stroke(225);
                strokeWeight(0.4);
            }
            line(x, plotTop, x, plotBottom);
            if (k === 1) {
                noStroke();
                fill(100);
                let label = f >= 1000 ? nf(f / 1000, 0, 0) + 'k' : nf(f, 0, 0);
                text(label, x, plotBottom + 4);
            }
        }
    }

    // Horizontal grid lines (magnitude)
    textAlign(RIGHT, CENTER);
    for (let v = 0; v <= 10; v++) {
        let mag = v / 10;
        let y = plotTop + plotH * (1 - mag);
        if (v % 2 === 0) {
            stroke(180);
            strokeWeight(0.8);
        } else {
            stroke(225);
            strokeWeight(0.4);
        }
        line(plotLeft, y, plotRight, y);
        if (v % 2 === 0) {
            noStroke();
            fill(100);
            textSize(9);
            text(nf(mag, 0, 1), plotLeft - 6, y);
        }
    }
}

function drawDashedLine(x1, y1, x2, y2, col, weight) {
    stroke(col);
    strokeWeight(weight);
    let d = dist(x1, y1, x2, y2);
    let dashLen = 6;
    let gapLen = 4;
    let steps = floor(d / (dashLen + gapLen));
    let dx = (x2 - x1) / d;
    let dy = (y2 - y1) / d;
    for (let i = 0; i < steps; i++) {
        let sx = x1 + (dashLen + gapLen) * i * dx;
        let sy = y1 + (dashLen + gapLen) * i * dy;
        line(sx, sy, sx + dashLen * dx, sy + dashLen * dy);
    }
}
