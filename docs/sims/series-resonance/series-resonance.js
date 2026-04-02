// Series RLC Resonance Explorer
// MicroSim for visualizing frequency response of a series RLC circuit
// Uses canvas-drawn sliders (no DOM elements) for iframe compatibility

let canvasWidth = 710;
let canvasHeight = 480;

// Plot region
let plotLeft = 80;
let plotRight = 620;
let plotTop = 60;
let plotBottom = 380;

// Canvas sliders
let sliderR, sliderL, sliderC;

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
    this.value = constrain(((mx - this.x) / this.w) * (this.max - this.min) + this.min, this.min, this.max);
  }
  released() { this.dragging = false; }
}

function setup() {
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('main');
    textFont('Arial');

    let sliderY = 430;
    let sliderW = 150;
    let sliderX = 100;
    let sliderSpacing = 210;

    sliderR = new CanvasSlider(sliderX, sliderY, sliderW, 1, 200, 10, 'R (\u03A9)');
    sliderL = new CanvasSlider(sliderX + sliderSpacing, sliderY, sliderW, 1, 100, 10, 'L (mH)');
    sliderC = new CanvasSlider(sliderX + 2 * sliderSpacing, sliderY, sliderW, 0.1, 10, 1, 'C (\u00B5F)');
}

function draw() {
    background(255);

    let R = sliderR.value;                // Ohms
    let L = sliderL.value / 1000;         // Convert mH to H
    let C_val = sliderC.value;            // uF
    let C = C_val * 1e-6;                 // Convert uF to F

    // Resonant frequency
    let f0 = 1 / (TWO_PI * sqrt(L * C));
    // Quality factor
    let Q = (1 / R) * sqrt(L / C);
    // Bandwidth
    let BW = f0 / Q;

    // Frequency range: 0.1*f0 to 10*f0 (log scale)
    let fMin = 0.1 * f0;
    let fMax = 10 * f0;
    let logFMin = log10(fMin);
    let logFMax = log10(fMax);

    // Title
    noStroke();
    fill(0);
    textSize(18);
    textAlign(CENTER, TOP);
    text('Series RLC Resonance Explorer', canvasWidth / 2, 10);

    // Draw grid and axes
    drawGrid(logFMin, logFMax, f0);

    // Compute transfer function across frequency range
    let numPoints = 500;
    let freqs = [];
    let magnitudes = [];
    let peakMag = 0;

    for (let i = 0; i <= numPoints; i++) {
        let logF = map(i, 0, numPoints, logFMin, logFMax);
        let f = pow(10, logF);
        freqs.push(f);
        let omega = TWO_PI * f;
        let impedance = sqrt(R * R + pow(omega * L - 1 / (omega * C), 2));
        let mag = 1 / impedance;
        magnitudes.push(mag);
        if (mag > peakMag) peakMag = mag;
    }

    // Normalize magnitudes to peak
    let normMags = magnitudes.map(m => m / peakMag);

    // Draw -3dB line (1/sqrt(2) of peak)
    let dB3Level = 1 / sqrt(2);
    let dB3Y = map(dB3Level, 0, 1, plotBottom, plotTop);
    stroke(180, 50, 50, 150);
    strokeWeight(1);
    drawingContext.setLineDash([6, 4]);
    line(plotLeft, dB3Y, plotRight, dB3Y);
    drawingContext.setLineDash([]);

    // Label -3dB line
    noStroke();
    fill(180, 50, 50);
    textSize(11);
    textAlign(LEFT, BOTTOM);
    text('-3 dB (0.707)', plotRight + 4, dB3Y + 4);

    // Find -3dB crossing points (half-power frequencies)
    let fLow = null, fHigh = null;
    for (let i = 1; i <= numPoints; i++) {
        if (fLow === null && normMags[i] >= dB3Level && normMags[i - 1] < dB3Level) {
            let t = (dB3Level - normMags[i - 1]) / (normMags[i] - normMags[i - 1]);
            fLow = freqs[i - 1] + t * (freqs[i] - freqs[i - 1]);
        }
        if (fHigh === null && fLow !== null && normMags[i] < dB3Level && normMags[i - 1] >= dB3Level) {
            let t = (dB3Level - normMags[i - 1]) / (normMags[i] - normMags[i - 1]);
            fHigh = freqs[i - 1] + t * (freqs[i] - freqs[i - 1]);
        }
    }

    // Draw bandwidth markers
    if (fLow !== null && fHigh !== null) {
        let xLow = map(log10(fLow), logFMin, logFMax, plotLeft, plotRight);
        let xHigh = map(log10(fHigh), logFMin, logFMax, plotLeft, plotRight);

        stroke(180, 50, 50);
        strokeWeight(2);
        line(xLow, dB3Y - 6, xLow, dB3Y + 6);
        line(xHigh, dB3Y - 6, xHigh, dB3Y + 6);

        stroke(180, 50, 50, 120);
        strokeWeight(1);
        drawingContext.setLineDash([4, 3]);
        line(xLow, dB3Y, xHigh, dB3Y);
        drawingContext.setLineDash([]);

        noStroke();
        fill(180, 50, 50);
        textSize(10);
        textAlign(CENTER, TOP);
        text('BW', (xLow + xHigh) / 2, dB3Y + 8);
    }

    // Draw resonant frequency line (gold dashed)
    let xF0 = map(log10(f0), logFMin, logFMax, plotLeft, plotRight);
    stroke(212, 160, 23);  // #D4A017
    strokeWeight(2);
    drawingContext.setLineDash([8, 5]);
    line(xF0, plotTop, xF0, plotBottom);
    drawingContext.setLineDash([]);

    // Draw the frequency response curve
    stroke(90, 62, 237);  // #5A3EED
    strokeWeight(2.5);
    noFill();
    beginShape();
    for (let i = 0; i <= numPoints; i++) {
        let x = map(log10(freqs[i]), logFMin, logFMax, plotLeft, plotRight);
        let y = map(normMags[i], 0, 1, plotBottom, plotTop);
        vertex(x, y);
    }
    endShape();

    // Peak dot at resonance
    fill(90, 62, 237);
    noStroke();
    ellipse(xF0, plotTop, 10, 10);

    // f0 label near the gold line
    fill(212, 160, 23);
    textSize(12);
    textAlign(LEFT, TOP);
    text('f\u2080 = ' + formatFreq(f0), xF0 + 6, plotTop + 4);

    // Info box background
    fill(255, 255, 255, 200);
    noStroke();
    rect(plotRight - 175, plotTop + 2, 172, 60, 4);

    fill(40);
    textSize(12);
    textAlign(LEFT, TOP);
    let dispX = plotRight - 170;
    let dispY = plotTop + 6;
    text('f\u2080 = ' + formatFreq(f0), dispX, dispY);
    text('Q = ' + Q.toFixed(2), dispX, dispY + 17);
    text('BW = ' + formatFreq(BW), dispX, dispY + 34);

    // Axis labels
    fill(0);
    textSize(13);
    textAlign(CENTER, BOTTOM);
    text('Frequency (Hz)', (plotLeft + plotRight) / 2, plotBottom + 42);

    push();
    translate(18, (plotTop + plotBottom) / 2);
    rotate(-HALF_PI);
    textAlign(CENTER, BOTTOM);
    text('Normalized |I|', 0, 0);
    pop();

    // Draw sliders
    sliderR.display();
    sliderL.display();
    sliderC.display();
}

function drawGrid(logFMin, logFMax, f0) {
    // Plot border
    stroke(200);
    strokeWeight(1);
    noFill();
    rect(plotLeft, plotTop, plotRight - plotLeft, plotBottom - plotTop);

    // Y-axis grid and labels
    textSize(10);
    fill(120);
    textAlign(RIGHT, CENTER);
    for (let v = 0; v <= 1.0; v += 0.2) {
        let y = map(v, 0, 1, plotBottom, plotTop);
        stroke(220);
        strokeWeight(0.5);
        line(plotLeft, y, plotRight, y);
        noStroke();
        text(v.toFixed(1), plotLeft - 6, y);
    }

    // X-axis: log-scale grid lines at powers of 10 and intermediate values
    let minDecade = floor(logFMin);
    let maxDecade = ceil(logFMax);

    textAlign(CENTER, TOP);
    for (let decade = minDecade; decade <= maxDecade; decade++) {
        for (let k = 1; k <= 9; k++) {
            let f = k * pow(10, decade);
            let logF = log10(f);
            if (logF < logFMin || logF > logFMax) continue;
            let x = map(logF, logFMin, logFMax, plotLeft, plotRight);

            if (k === 1) {
                stroke(190);
                strokeWeight(0.8);
            } else {
                stroke(230);
                strokeWeight(0.3);
            }
            line(x, plotTop, x, plotBottom);

            if (k === 1) {
                noStroke();
                fill(120);
                text(formatFreqShort(f), x, plotBottom + 4);
            }
        }
    }
}

function mousePressed() {
    sliderR.pressed(mouseX, mouseY);
    sliderL.pressed(mouseX, mouseY);
    sliderC.pressed(mouseX, mouseY);
}

function mouseDragged() {
    sliderR.dragged(mouseX);
    sliderL.dragged(mouseX);
    sliderC.dragged(mouseX);
}

function mouseReleased() {
    sliderR.released();
    sliderL.released();
    sliderC.released();
}

function log10(x) {
    return Math.log10(x);
}

function formatFreq(f) {
    if (f >= 1e6) return (f / 1e6).toFixed(2) + ' MHz';
    if (f >= 1e3) return (f / 1e3).toFixed(2) + ' kHz';
    return f.toFixed(2) + ' Hz';
}

function formatFreqShort(f) {
    if (f >= 1e6) return (f / 1e6).toFixed(0) + 'M';
    if (f >= 1e3) return (f / 1e3).toFixed(0) + 'k';
    if (f >= 1) return f.toFixed(0);
    return f.toFixed(1);
}
