// Pulse Response and Ringing MicroSim
// Shows input pulse and RLC underdamped output with ringing

let sliderZeta, sliderOmega, sliderPulse;
let canvasWidth = 710;
let canvasHeight = 430;

// Plot layout
let marginLeft = 70;
let marginRight = 30;
let marginTop = 40;
let plotGap = 30;
let topPlotHeight = 120;
let bottomPlotHeight = 190;
let topPlotY, bottomPlotY;
let plotWidth;

// Time axis
let tMax = 4.0;
let numPoints = 600;

function setup() {
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('main');

    topPlotY = marginTop;
    bottomPlotY = marginTop + topPlotHeight + plotGap;
    plotWidth = canvasWidth - marginLeft - marginRight;

    // Sliders
    let sliderX = marginLeft;
    let sliderW = 140;
    let sliderY = canvasHeight - 22;

    sliderZeta = createSlider(0.05, 0.5, 0.1, 0.01);
    sliderZeta.position(sliderX, sliderY);
    sliderZeta.size(sliderW);

    sliderOmega = createSlider(5, 30, 10, 0.5);
    sliderOmega.position(sliderX + sliderW + 70, sliderY);
    sliderOmega.size(sliderW);

    sliderPulse = createSlider(0.1, 2.0, 0.5, 0.01);
    sliderPulse.position(sliderX + 2 * (sliderW + 70), sliderY);
    sliderPulse.size(sliderW);
}

function stepResponse(t, zeta, omega0) {
    // Underdamped step response:
    // v(t) = 1 - exp(-zeta*omega0*t) / sqrt(1-zeta^2) * sin(wd*t + acos(zeta))
    if (t <= 0) return 0;
    let wd = omega0 * sqrt(1 - zeta * zeta);
    let phi = acos(zeta);
    return 1 - exp(-zeta * omega0 * t) / sqrt(1 - zeta * zeta) * sin(wd * t + phi);
}

function draw() {
    background(245);

    let zeta = sliderZeta.value();
    let omega0 = sliderOmega.value();
    let pw = sliderPulse.value();

    // Title
    fill(0);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(16);
    textStyle(BOLD);
    text('Pulse Response and Ringing', canvasWidth / 2, 8);
    textStyle(NORMAL);

    // Slider labels
    textSize(12);
    textAlign(LEFT, CENTER);
    let sliderY = canvasHeight - 13;
    let sliderW = 140;
    let sliderX = marginLeft;

    fill(80);
    text('\u03B6 = ' + zeta.toFixed(2), sliderX + sliderW + 4, sliderY);
    text('\u03C9\u2080 = ' + omega0.toFixed(1), sliderX + sliderW + 70 + sliderW + 4, sliderY);
    text('pw = ' + pw.toFixed(2) + ' s', sliderX + 2 * (sliderW + 70) + sliderW + 4, sliderY);

    // Compute signals
    let tVals = [];
    let pulse = [];
    let response = [];

    for (let i = 0; i < numPoints; i++) {
        let t = (i / (numPoints - 1)) * tMax;
        tVals.push(t);
        pulse.push((t >= 0 && t <= pw) ? 1 : 0);
        // Superposition: step at t=0 minus step at t=pw
        let v = stepResponse(t, zeta, omega0) - stepResponse(t - pw, zeta, omega0);
        response.push(v);
    }

    // Find response range for scaling
    let rMin = 0, rMax = 0;
    for (let i = 0; i < response.length; i++) {
        if (response[i] < rMin) rMin = response[i];
        if (response[i] > rMax) rMax = response[i];
    }
    // Add padding
    let rPad = (rMax - rMin) * 0.15;
    if (rPad < 0.1) rPad = 0.1;
    rMin -= rPad;
    rMax += rPad;

    // Draw top plot (input pulse)
    drawPlotBox(marginLeft, topPlotY, plotWidth, topPlotHeight);
    drawGrid(marginLeft, topPlotY, plotWidth, topPlotHeight, tMax, -0.2, 1.3);
    drawYAxis(marginLeft, topPlotY, topPlotHeight, -0.2, 1.3, 'V(in)');
    drawTimeAxis(marginLeft, topPlotY, plotWidth, topPlotHeight, tMax, false);

    // Plot pulse signal
    stroke('#D4A017');
    strokeWeight(2.5);
    noFill();
    beginShape();
    for (let i = 0; i < numPoints; i++) {
        let x = marginLeft + (tVals[i] / tMax) * plotWidth;
        let y = mapVal(pulse[i], -0.2, 1.3, topPlotY + topPlotHeight, topPlotY);
        vertex(x, y);
    }
    endShape();

    // Label
    noStroke();
    fill('#D4A017');
    textSize(11);
    textAlign(LEFT, BOTTOM);
    text('Input Pulse', marginLeft + 5, topPlotY + 14);

    // Draw bottom plot (response)
    drawPlotBox(marginLeft, bottomPlotY, plotWidth, bottomPlotHeight);
    drawGrid(marginLeft, bottomPlotY, plotWidth, bottomPlotHeight, tMax, rMin, rMax);
    drawYAxis(marginLeft, bottomPlotY, bottomPlotHeight, rMin, rMax, 'V(out)');
    drawTimeAxis(marginLeft, bottomPlotY, plotWidth, bottomPlotHeight, tMax, true);

    // Zero line on bottom plot
    let zeroY = mapVal(0, rMin, rMax, bottomPlotY + bottomPlotHeight, bottomPlotY);
    stroke(150);
    strokeWeight(0.8);
    drawingContext.setLineDash([4, 4]);
    line(marginLeft, zeroY, marginLeft + plotWidth, zeroY);
    drawingContext.setLineDash([]);

    // Pulse width marker
    let pwX = marginLeft + (pw / tMax) * plotWidth;
    stroke('#D4A017');
    strokeWeight(0.8);
    drawingContext.setLineDash([3, 3]);
    line(pwX, bottomPlotY, pwX, bottomPlotY + bottomPlotHeight);
    drawingContext.setLineDash([]);

    // Plot response
    stroke('#5A3EED');
    strokeWeight(2.5);
    noFill();
    beginShape();
    for (let i = 0; i < numPoints; i++) {
        let x = marginLeft + (tVals[i] / tMax) * plotWidth;
        let y = mapVal(response[i], rMin, rMax, bottomPlotY + bottomPlotHeight, bottomPlotY);
        vertex(x, y);
    }
    endShape();

    // Label
    noStroke();
    fill('#5A3EED');
    textSize(11);
    textAlign(LEFT, BOTTOM);
    text('Output Response', marginLeft + 5, bottomPlotY + 14);

    // Parameter display box
    fill(255, 255, 255, 210);
    stroke(180);
    strokeWeight(1);
    let boxX = marginLeft + plotWidth - 175;
    let boxY = bottomPlotY + 5;
    rect(boxX, boxY, 170, 54, 4);
    noStroke();
    fill(60);
    textSize(11);
    textAlign(LEFT, TOP);
    text('\u03B6 = ' + zeta.toFixed(2) + '   \u03C9\u2080 = ' + omega0.toFixed(1) + ' rad/s', boxX + 8, boxY + 6);
    text('Pulse width = ' + pw.toFixed(2) + ' s', boxX + 8, boxY + 21);
    let wd = omega0 * sqrt(1 - zeta * zeta);
    text('\u03C9d = ' + wd.toFixed(2) + ' rad/s', boxX + 8, boxY + 36);
}

function mapVal(v, inMin, inMax, outMin, outMax) {
    return outMin + (v - inMin) / (inMax - inMin) * (outMax - outMin);
}

function drawPlotBox(x, y, w, h) {
    stroke(100);
    strokeWeight(1);
    noFill();
    rect(x, y, w, h);
}

function drawGrid(x, y, w, h, tMax, vMin, vMax) {
    stroke(220);
    strokeWeight(0.5);

    // Vertical grid lines (time)
    let numVLines = 8;
    for (let i = 1; i < numVLines; i++) {
        let gx = x + (i / numVLines) * w;
        line(gx, y, gx, y + h);
    }

    // Horizontal grid lines
    let numHLines = 4;
    for (let i = 1; i < numHLines; i++) {
        let gy = y + (i / numHLines) * h;
        line(x, gy, x + w, gy);
    }
}

function drawYAxis(x, y, h, vMin, vMax, label) {
    fill(80);
    noStroke();
    textSize(10);
    textAlign(RIGHT, CENTER);

    let numTicks = 4;
    for (let i = 0; i <= numTicks; i++) {
        let v = vMin + (i / numTicks) * (vMax - vMin);
        let ty = y + h - (i / numTicks) * h;
        text(v.toFixed(1), x - 5, ty);
    }

    // Label
    push();
    translate(x - 50, y + h / 2);
    rotate(-HALF_PI);
    textAlign(CENTER, CENTER);
    textSize(12);
    fill(60);
    text(label, 0, 0);
    pop();
}

function drawTimeAxis(x, y, w, h, tMax, showLabel) {
    fill(80);
    noStroke();
    textSize(10);
    textAlign(CENTER, TOP);

    let numTicks = 8;
    for (let i = 0; i <= numTicks; i++) {
        let t = (i / numTicks) * tMax;
        let tx = x + (i / numTicks) * w;
        text(t.toFixed(1), tx, y + h + 3);
    }

    if (showLabel) {
        textSize(12);
        fill(60);
        text('Time (s)', x + w / 2, y + h + 16);
    }
}
