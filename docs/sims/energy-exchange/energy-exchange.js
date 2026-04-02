// Energy Exchange in RLC Circuit MicroSim
// Shows energy sloshing between capacitor and inductor with resistive dissipation.
// Underdamped RLC natural response: switch opens at t=0 with initial cap voltage V0.
//
// v(t) = V0 * exp(-alpha*t) * cos(omega_d * t)
// i(t) = -(V0 / (omega_d * L)) * exp(-alpha*t) * (alpha*cos(omega_d*t) + omega_d*sin(omega_d*t))
//
// E_C = 0.5 * C * v(t)^2
// E_L = 0.5 * L * i(t)^2
// E_R = E_total_0 - E_C - E_L  (cumulative dissipated energy)

// ── Canvas & layout ───────────────────────────────────────────────────────
const canvasW = 710;
const canvasH = 480;

const plotLeft   = 60;
const plotRight  = canvasW - 20;
const plotTop    = 40;
const plotBottom = 270;
const plotW      = plotRight - plotLeft;
const plotH      = plotBottom - plotTop;

const barTop     = 300;
const barBottom   = 440;
const barH        = barBottom - barTop;
const barWidth    = 60;
const barGap      = 80;
const barCenterX  = canvasW / 2;
const barLeftX    = barCenterX - barGap;
const barRightX   = barCenterX + barGap;

const controlY    = 455;

// ── Colors ────────────────────────────────────────────────────────────────
const colCap   = '#2196F3';  // blue  - capacitor energy
const colInd   = '#FF9800';  // orange - inductor energy
const colRes   = '#E53935';  // red   - resistor dissipated
const colTotal = '#666666';  // dashed total line
const colBg    = '#FFFFFF';

// ── Circuit parameters ────────────────────────────────────────────────────
let V0 = 10;       // initial capacitor voltage (V)
let C  = 0.01;     // capacitance (F) — value chosen so energies are visible
let L  = 0.01;     // inductance (H)

// Slider-controlled
let zeta   = 0.1;  // damping ratio
let omega0 = 5;    // natural frequency (rad/s)

// Derived
let alpha, omegaD, R;
let E_total_0;      // 0.5 * C * V0^2

// ── Time ──────────────────────────────────────────────────────────────────
let tMax    = 4;    // seconds shown on plot
let tCursor = 0;    // current time position
let playing = true;
let speed   = 0.015; // seconds per frame

// ── Precomputed waveform arrays ───────────────────────────────────────────
const N = 600;      // number of sample points
let tArr  = [];
let ecArr = [];
let elArr = [];
let erArr = [];

// ── UI elements (canvas-drawn) ────────────────────────────────────────────
let zetaSliderX, zetaSliderW;
let omegaSliderX, omegaSliderW;
let btnX, btnY, btnW = 70, btnH = 22;
let draggingZeta  = false;
let draggingOmega = false;

// ══════════════════════════════════════════════════════════════════════════
// SETUP
// ══════════════════════════════════════════════════════════════════════════

function setup() {
    const canvas = createCanvas(canvasW, canvasH);
    canvas.parent(document.querySelector('main'));

    // Slider layout
    zetaSliderX  = 100;
    zetaSliderW  = 150;
    omegaSliderX = 340;
    omegaSliderW = 150;
    btnX = 560;
    btnY = controlY - 11;

    recompute();

    describe(
        'Animated energy exchange in an underdamped RLC circuit showing ' +
        'capacitor energy, inductor energy, and resistive dissipation over time.',
        LABEL
    );
}

// ══════════════════════════════════════════════════════════════════════════
// PHYSICS
// ══════════════════════════════════════════════════════════════════════════

function recompute() {
    alpha  = zeta * omega0;
    omegaD = omega0 * sqrt(1 - zeta * zeta);

    // Derive R, L, C from omega0, zeta keeping V0 fixed
    // omega0 = 1/sqrt(LC), alpha = R/(2L), zeta = alpha/omega0
    // We pick L and C so omega0 = 1/sqrt(LC) and keep things reasonable
    L = 0.1;                          // 100 mH
    C = 1.0 / (omega0 * omega0 * L);  // from omega0 = 1/sqrt(LC)
    R = 2 * L * alpha;                // from alpha = R/(2L)

    E_total_0 = 0.5 * C * V0 * V0;

    // Adjust tMax so we see several oscillation periods
    tMax = max(3, 6 * Math.PI / omegaD);
    // Cap tMax to something sensible
    if (tMax > 20) tMax = 20;

    // Build waveform arrays
    tArr  = [];
    ecArr = [];
    elArr = [];
    erArr = [];

    for (let k = 0; k < N; k++) {
        let t = (k / (N - 1)) * tMax;
        tArr.push(t);

        let expTerm = exp(-alpha * t);
        let cosT = cos(omegaD * t);
        let sinT = sin(omegaD * t);

        let v = V0 * expTerm * cosT;
        let i = -(V0 / (omegaD * L)) * expTerm * (alpha * cosT + omegaD * sinT);

        let ec = 0.5 * C * v * v;
        let el = 0.5 * L * i * i;
        let er = E_total_0 - ec - el;
        if (er < 0) er = 0; // numerical guard

        ecArr.push(ec);
        elArr.push(el);
        erArr.push(er);
    }

    // Reset cursor if past new tMax
    if (tCursor > tMax) tCursor = 0;
}

// Interpolate arrays at arbitrary time t
function sampleAt(t) {
    let frac = t / tMax;
    let idx  = frac * (N - 1);
    let i0   = floor(idx);
    let i1   = min(i0 + 1, N - 1);
    let f    = idx - i0;
    return {
        ec: lerp(ecArr[i0], ecArr[i1], f),
        el: lerp(elArr[i0], elArr[i1], f),
        er: lerp(erArr[i0], erArr[i1], f)
    };
}

// ══════════════════════════════════════════════════════════════════════════
// DRAW
// ══════════════════════════════════════════════════════════════════════════

function draw() {
    background(colBg);

    // Advance time
    if (playing) {
        tCursor += speed;
        if (tCursor > tMax) tCursor = 0;
    }

    drawTitle();
    drawStackedAreaPlot();
    drawTimeCursor();
    drawBarGauges();
    drawControls();
}

// ── Title ─────────────────────────────────────────────────────────────────

function drawTitle() {
    fill(0);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(16);
    textStyle(BOLD);
    text('Energy Exchange in RLC Circuit', canvasW / 2, 8);
    textStyle(NORMAL);
}

// ── Stacked area plot ─────────────────────────────────────────────────────

function drawStackedAreaPlot() {
    // Axes
    stroke(0);
    strokeWeight(1);
    line(plotLeft, plotBottom, plotRight, plotBottom); // x-axis
    line(plotLeft, plotTop, plotLeft, plotBottom);     // y-axis

    // Y-axis label
    push();
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(12);
    translate(15, (plotTop + plotBottom) / 2);
    rotate(-HALF_PI);
    text('Energy (J)', 0, 0);
    pop();

    // X-axis label
    fill(0);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(11);
    text('Time (s)', (plotLeft + plotRight) / 2, plotBottom + 3);

    // Y ticks
    textAlign(RIGHT, CENTER);
    textSize(10);
    let ySteps = 5;
    for (let k = 0; k <= ySteps; k++) {
        let frac = k / ySteps;
        let yy = plotBottom - frac * plotH;
        let val = frac * E_total_0;
        stroke(220);
        strokeWeight(0.5);
        line(plotLeft, yy, plotRight, yy);
        noStroke();
        fill(0);
        text(val.toFixed(3), plotLeft - 4, yy);
    }

    // X ticks
    textAlign(CENTER, TOP);
    let xTicks = 5;
    for (let k = 0; k <= xTicks; k++) {
        let frac = k / xTicks;
        let xx = plotLeft + frac * plotW;
        let val = frac * tMax;
        stroke(220);
        strokeWeight(0.5);
        line(xx, plotTop, xx, plotBottom);
        noStroke();
        fill(0);
        text(val.toFixed(1), xx, plotBottom + 3);
    }

    // Helper: map data index to pixel x
    function xPx(k) { return plotLeft + (k / (N - 1)) * plotW; }
    function yPx(energy) { return plotBottom - (energy / E_total_0) * plotH; }

    // Draw stacked areas bottom-up: R (red), then L (orange) on top of R, then C (blue) on top of L+R
    // Stack order from bottom: Resistor, Inductor, Capacitor

    // 1. Resistor area (red) — from baseline 0 to erArr
    noStroke();
    fill(colRes + '88');
    beginShape();
    vertex(plotLeft, plotBottom);
    for (let k = 0; k < N; k++) {
        vertex(xPx(k), yPx(erArr[k]));
    }
    vertex(plotRight, plotBottom);
    endShape(CLOSE);

    // 2. Inductor area (orange) — from erArr to erArr+elArr
    fill(colInd + '99');
    beginShape();
    for (let k = 0; k < N; k++) {
        vertex(xPx(k), yPx(erArr[k]));
    }
    for (let k = N - 1; k >= 0; k--) {
        vertex(xPx(k), yPx(erArr[k] + elArr[k]));
    }
    endShape(CLOSE);

    // 3. Capacitor area (blue) — from erArr+elArr to erArr+elArr+ecArr (= total)
    fill(colCap + '99');
    beginShape();
    for (let k = 0; k < N; k++) {
        vertex(xPx(k), yPx(erArr[k] + elArr[k]));
    }
    for (let k = N - 1; k >= 0; k--) {
        vertex(xPx(k), yPx(erArr[k] + elArr[k] + ecArr[k]));
    }
    endShape(CLOSE);

    // Total initial energy dashed line
    stroke(colTotal);
    strokeWeight(1.5);
    drawingContext.setLineDash([6, 4]);
    let yTotal = yPx(E_total_0);
    line(plotLeft, yTotal, plotRight, yTotal);
    drawingContext.setLineDash([]);

    // Legend
    let legX = plotRight - 180;
    let legY = plotTop + 8;
    noStroke();
    textAlign(LEFT, CENTER);
    textSize(11);

    fill(colCap);
    rect(legX, legY, 12, 12, 2);
    fill(0);
    text('E_C (Capacitor)', legX + 16, legY + 6);

    fill(colInd);
    rect(legX, legY + 18, 12, 12, 2);
    fill(0);
    text('E_L (Inductor)', legX + 16, legY + 24);

    fill(colRes);
    rect(legX, legY + 36, 12, 12, 2);
    fill(0);
    text('E_R (Dissipated)', legX + 16, legY + 42);

    // Dashed line legend
    stroke(colTotal);
    strokeWeight(1.5);
    drawingContext.setLineDash([4, 3]);
    line(legX, legY + 60, legX + 12, legY + 60);
    drawingContext.setLineDash([]);
    noStroke();
    fill(0);
    text('E_total (initial)', legX + 16, legY + 60);
}

// ── Time cursor ───────────────────────────────────────────────────────────

function drawTimeCursor() {
    let xFrac = tCursor / tMax;
    let xx = plotLeft + xFrac * plotW;

    stroke(0);
    strokeWeight(1.2);
    drawingContext.setLineDash([3, 3]);
    line(xx, plotTop, xx, plotBottom);
    drawingContext.setLineDash([]);

    // Small triangle at top
    fill(0);
    noStroke();
    triangle(xx - 4, plotTop - 1, xx + 4, plotTop - 1, xx, plotTop + 5);
}

// ── Bar gauges ────────────────────────────────────────────────────────────

function drawBarGauges() {
    let s = sampleAt(tCursor);

    let capFrac = s.ec / E_total_0;
    let indFrac = s.el / E_total_0;

    // Background rectangles
    stroke(180);
    strokeWeight(1);
    fill(240);
    rect(barLeftX - barWidth / 2, barTop, barWidth, barH, 3);
    rect(barRightX - barWidth / 2, barTop, barWidth, barH, 3);

    // Filled bars (grow upward from bottom)
    noStroke();
    fill(colCap);
    let capH = capFrac * barH;
    rect(barLeftX - barWidth / 2, barBottom - capH, barWidth, capH, 0, 0, 3, 3);

    fill(colInd);
    let indH = indFrac * barH;
    rect(barRightX - barWidth / 2, barBottom - indH, barWidth, indH, 0, 0, 3, 3);

    // Labels
    fill(0);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(11);
    textStyle(BOLD);
    text('Capacitor', barLeftX, barBottom + 4);
    text('Energy', barLeftX, barBottom + 17);
    text('Inductor', barRightX, barBottom + 4);
    text('Energy', barRightX, barBottom + 17);
    textStyle(NORMAL);

    // Value text above bars
    textAlign(CENTER, BOTTOM);
    textSize(10);
    fill(colCap);
    text(s.ec.toFixed(4) + ' J', barLeftX, barBottom - capH - 2);
    fill(colInd);
    text(s.el.toFixed(4) + ' J', barRightX, barBottom - indH - 2);

    // Dissipated energy text between bars
    textAlign(CENTER, CENTER);
    textSize(11);
    fill(colRes);
    text('Dissipated: ' + s.er.toFixed(4) + ' J', barCenterX, barTop - 10);
}

// ── Controls: sliders + button ────────────────────────────────────────────

function drawControls() {
    let y = controlY;

    // ── Zeta slider ───────────────────────────────────────────────────────
    fill(0);
    noStroke();
    textAlign(LEFT, CENTER);
    textSize(12);
    text('\u03B6 = ' + zeta.toFixed(2), 12, y);

    stroke(180);
    strokeWeight(2);
    line(zetaSliderX, y, zetaSliderX + zetaSliderW, y);

    let zetaFrac = (zeta - 0.05) / (0.5 - 0.05);
    let zetaKnobX = zetaSliderX + zetaFrac * zetaSliderW;
    fill(colCap);
    noStroke();
    ellipse(zetaKnobX, y, 14, 14);

    // ── Omega slider ──────────────────────────────────────────────────────
    fill(0);
    noStroke();
    textAlign(LEFT, CENTER);
    text('\u03C9\u2080 = ' + omega0.toFixed(1), 275, y);

    stroke(180);
    strokeWeight(2);
    line(omegaSliderX, y, omegaSliderX + omegaSliderW, y);

    let omegaFrac = (omega0 - 3) / (15 - 3);
    let omegaKnobX = omegaSliderX + omegaFrac * omegaSliderW;
    fill(colInd);
    noStroke();
    ellipse(omegaKnobX, y, 14, 14);

    // ── Play / Pause button ───────────────────────────────────────────────
    let bx = btnX, by = btnY;
    fill(playing ? '#E0E0E0' : '#C8E6C9');
    stroke(150);
    strokeWeight(1);
    rect(bx, by, btnW, btnH, 4);

    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(12);
    text(playing ? 'Pause' : 'Play', bx + btnW / 2, by + btnH / 2);

    // ── Reset button ──────────────────────────────────────────────────────
    let rbx = btnX + btnW + 10;
    fill('#E0E0E0');
    stroke(150);
    strokeWeight(1);
    rect(rbx, by, 60, btnH, 4);

    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    text('Reset', rbx + 30, by + btnH / 2);
}

// ══════════════════════════════════════════════════════════════════════════
// INTERACTION
// ══════════════════════════════════════════════════════════════════════════

function mousePressed() {
    let y = controlY;

    // Check zeta slider
    let zetaFrac = (zeta - 0.05) / (0.5 - 0.05);
    let zetaKnobX = zetaSliderX + zetaFrac * zetaSliderW;
    if (dist(mouseX, mouseY, zetaKnobX, y) < 12) {
        draggingZeta = true;
        return;
    }

    // Check omega slider
    let omegaFrac = (omega0 - 3) / (15 - 3);
    let omegaKnobX = omegaSliderX + omegaFrac * omegaSliderW;
    if (dist(mouseX, mouseY, omegaKnobX, y) < 12) {
        draggingOmega = true;
        return;
    }

    // Check play/pause button
    if (mouseX >= btnX && mouseX <= btnX + btnW &&
        mouseY >= btnY && mouseY <= btnY + btnH) {
        playing = !playing;
        return;
    }

    // Check reset button
    let rbx = btnX + btnW + 10;
    if (mouseX >= rbx && mouseX <= rbx + 60 &&
        mouseY >= btnY && mouseY <= btnY + btnH) {
        tCursor = 0;
        playing = true;
        return;
    }

    // Click on plot to set time cursor
    if (mouseX >= plotLeft && mouseX <= plotRight &&
        mouseY >= plotTop && mouseY <= plotBottom) {
        let frac = (mouseX - plotLeft) / plotW;
        tCursor = frac * tMax;
    }
}

function mouseDragged() {
    if (draggingZeta) {
        let frac = constrain((mouseX - zetaSliderX) / zetaSliderW, 0, 1);
        zeta = 0.05 + frac * (0.5 - 0.05);
        recompute();
    }
    if (draggingOmega) {
        let frac = constrain((mouseX - omegaSliderX) / omegaSliderW, 0, 1);
        omega0 = 3 + frac * (15 - 3);
        recompute();
    }

    // Drag on plot to scrub time
    if (!draggingZeta && !draggingOmega &&
        mouseX >= plotLeft && mouseX <= plotRight &&
        mouseY >= plotTop && mouseY <= plotBottom) {
        let frac = constrain((mouseX - plotLeft) / plotW, 0, 1);
        tCursor = frac * tMax;
    }
}

function mouseReleased() {
    draggingZeta = false;
    draggingOmega = false;
}
