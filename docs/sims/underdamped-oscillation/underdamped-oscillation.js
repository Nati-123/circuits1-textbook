// Underdamped Oscillation MicroSim
// Visualizes the underdamped step response of a second-order system

let canvasWidth = 710;
let canvasHeight = 480;

let zetaSlider, omegaSlider;
let zetaLabel, omegaLabel;

// Plot region
let plotLeft = 80;
let plotRight = 680;
let plotTop = 60;
let plotBottom = 380;
let plotW, plotH;

// Colors
let responseColor = '#5A3EED';
let envelopeColor = '#D4A017';
let finalValueColor = '#00AA55';
let overshootDotColor = '#FF2222';
let bgColor = '#FAFAFA';
let gridColor = '#DDDDDD';
let axisColor = '#333333';
let textColor = '#333333';

function setup() {
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('main');
    textFont('Arial');

    plotW = plotRight - plotLeft;
    plotH = plotBottom - plotTop;

    // Damping ratio slider
    zetaSlider = createSlider(0.05, 0.95, 0.2, 0.01);
    zetaSlider.position(160, canvasHeight - 70);
    zetaSlider.style('width', '200px');

    // Natural frequency slider
    omegaSlider = createSlider(1, 20, 5, 0.5);
    omegaSlider.position(160, canvasHeight - 40);
    omegaSlider.style('width', '200px');
}

function draw() {
    background(bgColor);

    let zeta = zetaSlider.value();
    let omega0 = omegaSlider.value();
    let omegaD = omega0 * sqrt(1 - zeta * zeta);
    let phi = acos(zeta);
    let overshootPct = 100 * exp(-PI * zeta / sqrt(1 - zeta * zeta));

    // Time range: enough to see the response settle
    let tMax = 10 / (zeta * omega0);
    tMax = min(tMax, 20); // cap at 20s
    tMax = max(tMax, 2);  // at least 2s

    // Title
    noStroke();
    fill(textColor);
    textSize(18);
    textAlign(CENTER, TOP);
    text('Underdamped Oscillation Anatomy', canvasWidth / 2, 12);

    // Draw grid and axes
    drawGrid(tMax);
    drawAxes(tMax);

    // Compute response values
    let numPoints = plotW;
    let tValues = [];
    let vValues = [];
    let upperEnv = [];
    let lowerEnv = [];
    let sqrtTerm = sqrt(1 - zeta * zeta);

    for (let i = 0; i <= numPoints; i++) {
        let t = (i / numPoints) * tMax;
        tValues.push(t);

        let envAmp = exp(-zeta * omega0 * t) / sqrtTerm;
        let v = 1 - envAmp * sin(omegaD * t + phi);
        vValues.push(v);

        upperEnv.push(1 + envAmp);
        lowerEnv.push(1 - envAmp);
    }

    // Find voltage range for scaling
    let vMin = 0;
    let vMax = 2;
    // Ensure we capture the full envelope
    let peakUpper = 1 + 1 / sqrtTerm;
    if (peakUpper > vMax) vMax = peakUpper + 0.1;
    let peakLower = 1 - 1 / sqrtTerm;
    if (peakLower < vMin) vMin = peakLower - 0.1;

    // Helper to map to plot coordinates
    function mapX(t) {
        return plotLeft + (t / tMax) * plotW;
    }
    function mapY(v) {
        return plotBottom - ((v - vMin) / (vMax - vMin)) * plotH;
    }

    // Draw final value line (green dashed)
    drawDashedLine(plotLeft, mapY(1), plotRight, mapY(1), finalValueColor, 8, 6);
    fill(finalValueColor);
    noStroke();
    textSize(12);
    textAlign(LEFT, BOTTOM);
    text('Final Value = 1V', plotRight - 110, mapY(1) - 4);

    // Draw envelope (gold dashed)
    drawDashedCurve(tValues, upperEnv, tMax, vMin, vMax, envelopeColor, 6, 6);
    drawDashedCurve(tValues, lowerEnv, tMax, vMin, vMax, envelopeColor, 6, 6);

    // Draw response curve (purple solid)
    stroke(responseColor);
    strokeWeight(2.5);
    noFill();
    beginShape();
    for (let i = 0; i <= numPoints; i++) {
        vertex(mapX(tValues[i]), mapY(vValues[i]));
    }
    endShape();

    // Find first peak overshoot
    let firstPeakT = (PI / 2 - phi + PI) / omegaD;
    // Actually, peak occurs at first maximum of v(t)
    // dv/dt = 0 => find first peak after t=0
    let peakT = -1;
    let peakV = -Infinity;
    let dt = tMax / 1000;
    for (let t = dt; t < tMax; t += dt) {
        let envAmp = exp(-zeta * omega0 * t) / sqrtTerm;
        let v = 1 - envAmp * sin(omegaD * t + phi);
        if (v > peakV) {
            peakV = v;
            peakT = t;
        }
        // Stop after finding the first local maximum
        if (v < peakV - 0.001 && peakT > 0) break;
    }

    // Draw overshoot dot and label
    if (peakT > 0 && peakV > 1.001) {
        let px = mapX(peakT);
        let py = mapY(peakV);

        // Vertical line from final value to peak
        stroke(overshootDotColor);
        strokeWeight(1);
        drawingContext.setLineDash([4, 4]);
        line(px, mapY(1), px, py);
        drawingContext.setLineDash([]);

        // Dot at peak
        fill(overshootDotColor);
        noStroke();
        ellipse(px, py, 10, 10);

        // Label
        textSize(11);
        textAlign(LEFT, BOTTOM);
        fill(overshootDotColor);
        let labelX = px + 8;
        let labelY = py - 4;
        if (labelX > plotRight - 80) labelX = px - 80;
        text('Overshoot: ' + overshootPct.toFixed(1) + '%', labelX, labelY);
        text('Peak: ' + peakV.toFixed(3) + 'V', labelX, labelY + 14);
    }

    // Draw parameter display area
    noStroke();
    fill(255, 255, 255, 220);
    rect(plotLeft + 10, plotTop + 8, 220, 80, 6);
    fill(textColor);
    textSize(13);
    textAlign(LEFT, TOP);
    let infoX = plotLeft + 18;
    let infoY = plotTop + 14;
    text('\u03B6 (damping ratio) = ' + zeta.toFixed(2), infoX, infoY);
    text('\u03C9\u2080 (natural freq) = ' + omega0.toFixed(1) + ' rad/s', infoX, infoY + 20);
    text('\u03C9d (damped freq) = ' + omegaD.toFixed(2) + ' rad/s', infoX, infoY + 40);
    text('Overshoot = ' + overshootPct.toFixed(1) + '%', infoX, infoY + 60);

    // Slider labels
    fill(textColor);
    noStroke();
    textSize(13);
    textAlign(LEFT, CENTER);
    text('\u03B6 = ' + zeta.toFixed(2), 390, canvasHeight - 58);
    text('\u03C9\u2080 = ' + omega0.toFixed(1) + ' rad/s', 390, canvasHeight - 28);

    textAlign(RIGHT, CENTER);
    text('Damping \u03B6:', 150, canvasHeight - 58);
    text('Frequency \u03C9\u2080:', 150, canvasHeight - 28);

    // Legend
    let legX = plotRight - 190;
    let legY = plotBottom - 60;
    fill(255, 255, 255, 220);
    noStroke();
    rect(legX - 8, legY - 8, 188, 55, 6);

    strokeWeight(2.5);
    stroke(responseColor);
    line(legX, legY + 6, legX + 25, legY + 6);
    noStroke();
    fill(textColor);
    textSize(11);
    textAlign(LEFT, CENTER);
    text('Response v(t)', legX + 30, legY + 6);

    stroke(envelopeColor);
    strokeWeight(1.5);
    drawingContext.setLineDash([6, 6]);
    line(legX, legY + 22, legX + 25, legY + 22);
    drawingContext.setLineDash([]);
    noStroke();
    text('Decay Envelope', legX + 30, legY + 22);

    stroke(finalValueColor);
    strokeWeight(1.5);
    drawingContext.setLineDash([8, 6]);
    line(legX, legY + 38, legX + 25, legY + 38);
    drawingContext.setLineDash([]);
    noStroke();
    text('Final Value (1V)', legX + 30, legY + 38);
}

function drawGrid(tMax) {
    stroke(gridColor);
    strokeWeight(0.5);

    // Vertical grid lines (time)
    let numVLines = 10;
    let tStep = niceStep(tMax, numVLines);
    for (let t = tStep; t < tMax; t += tStep) {
        let x = plotLeft + (t / tMax) * plotW;
        line(x, plotTop, x, plotBottom);
    }

    // Horizontal grid lines (voltage)
    let vMin = 0;
    let vMax = 2;
    let sqrtTerm = sqrt(1 - zetaSlider.value() * zetaSlider.value());
    let peakUpper = 1 + 1 / sqrtTerm;
    if (peakUpper > vMax) vMax = peakUpper + 0.1;
    let peakLower = 1 - 1 / sqrtTerm;
    if (peakLower < vMin) vMin = peakLower - 0.1;

    let numHLines = 8;
    let vStep = niceStep(vMax - vMin, numHLines);
    for (let v = ceil(vMin / vStep) * vStep; v <= vMax; v += vStep) {
        let y = plotBottom - ((v - vMin) / (vMax - vMin)) * plotH;
        line(plotLeft, y, plotRight, y);
    }
}

function drawAxes(tMax) {
    let zeta = zetaSlider.value();
    let sqrtTerm = sqrt(1 - zeta * zeta);
    let vMin = 0;
    let vMax = 2;
    let peakUpper = 1 + 1 / sqrtTerm;
    if (peakUpper > vMax) vMax = peakUpper + 0.1;
    let peakLower = 1 - 1 / sqrtTerm;
    if (peakLower < vMin) vMin = peakLower - 0.1;

    stroke(axisColor);
    strokeWeight(1.5);
    // Vertical axis
    line(plotLeft, plotTop, plotLeft, plotBottom);
    // Horizontal axis
    line(plotLeft, plotBottom, plotRight, plotBottom);

    // Time tick labels
    fill(textColor);
    noStroke();
    textSize(10);
    textAlign(CENTER, TOP);
    let numVLines = 10;
    let tStep = niceStep(tMax, numVLines);
    for (let t = 0; t <= tMax; t += tStep) {
        let x = plotLeft + (t / tMax) * plotW;
        text(t.toFixed(1), x, plotBottom + 5);
    }

    // Voltage tick labels
    textAlign(RIGHT, CENTER);
    let numHLines = 8;
    let vStep = niceStep(vMax - vMin, numHLines);
    for (let v = ceil(vMin / vStep) * vStep; v <= vMax; v += vStep) {
        let y = plotBottom - ((v - vMin) / (vMax - vMin)) * plotH;
        text(v.toFixed(2), plotLeft - 8, y);
    }

    // Axis labels
    textSize(13);
    textAlign(CENTER, TOP);
    text('Time (s)', (plotLeft + plotRight) / 2, plotBottom + 22);

    push();
    translate(22, (plotTop + plotBottom) / 2);
    rotate(-HALF_PI);
    textAlign(CENTER, BOTTOM);
    text('Voltage (V)', 0, 0);
    pop();
}

function drawDashedLine(x1, y1, x2, y2, col, dashLen, gapLen) {
    stroke(col);
    strokeWeight(1.5);
    drawingContext.setLineDash([dashLen, gapLen]);
    line(x1, y1, x2, y2);
    drawingContext.setLineDash([]);
}

function drawDashedCurve(tValues, values, tMax, vMin, vMax, col, dashLen, gapLen) {
    stroke(col);
    strokeWeight(1.5);
    drawingContext.setLineDash([dashLen, gapLen]);
    noFill();
    beginShape();
    for (let i = 0; i < tValues.length; i++) {
        let x = plotLeft + (tValues[i] / tMax) * plotW;
        let y = plotBottom - ((values[i] - vMin) / (vMax - vMin)) * plotH;
        vertex(x, y);
    }
    endShape();
    drawingContext.setLineDash([]);
}

function niceStep(range, targetSteps) {
    let rough = range / targetSteps;
    let mag = pow(10, floor(log(rough) / log(10)));
    let residual = rough / mag;
    if (residual <= 1.5) return mag;
    if (residual <= 3) return 2 * mag;
    if (residual <= 7) return 5 * mag;
    return 10 * mag;
}
