// Energy Exchange in RLC Circuit MicroSim
// Stacked area plot + animated bar gauges showing energy sloshing
// between capacitor and inductor with resistive dissipation.
//
// Underdamped RLC natural response: v(t) = V0*exp(-α t)*cos(ωd t)
// i(t) = C dv/dt
// E_C = 0.5*C*v², E_L = 0.5*L*i², E_R = E_total - E_C - E_L
//
// Component values: L = 1, C = 1/ω₀², R = 2ζ/ω₀

// ── Canvas slider class ──────────────────────────────────────────────────
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

// ── Layout constants ─────────────────────────────────────────────────────
const canvasW = 710;
const canvasH = 480;

const plotLeft   = 60;
const plotRight  = canvasW - 20;
const plotTop    = 40;
const plotBottom = 270;
const plotW      = plotRight - plotLeft;
const plotH      = plotBottom - plotTop;

const barTop      = 300;
const barBottom   = 440;
const barH        = barBottom - barTop;
const barWidth    = 60;
const barGap      = 80;
const barCenterX  = canvasW / 2;
const barLeftX    = barCenterX - barGap;
const barRightX   = barCenterX + barGap;

const controlY = 460;

// ── Colors ───────────────────────────────────────────────────────────────
const colCap   = '#2196F3';   // blue  – capacitor energy
const colInd   = '#FF9800';   // orange – inductor energy
const colRes   = '#E53935';   // red   – resistor dissipated
const colTotal = '#666666';   // dashed total line

// ── Circuit parameters ───────────────────────────────────────────────────
const V0 = 10;  // initial capacitor voltage

// Derived quantities (recomputed when sliders change)
let L, C, R, alpha, omegaD, E_total_0;

// ── Time ─────────────────────────────────────────────────────────────────
let tMax    = 4;
let tCursor = 0;
let playing = true;
let speed   = 0.015;

// ── Precomputed waveform arrays ──────────────────────────────────────────
const N = 600;
let tArr  = [];
let ecArr = [];
let elArr = [];
let erArr = [];

// ── UI elements ──────────────────────────────────────────────────────────
let zetaSlider, omegaSlider;
let btnX, btnY, btnW = 70, btnH = 22;
let resetBtnX;

// ══════════════════════════════════════════════════════════════════════════
// SETUP
// ══════════════════════════════════════════════════════════════════════════

function setup() {
  let canvas = createCanvas(canvasW, canvasH);
  canvas.parent(document.querySelector('main'));

  // Create sliders (canvas-drawn, no DOM)
  zetaSlider  = new CanvasSlider(80, controlY, 150, 0.05, 0.50, 0.10, '\u03B6');
  omegaSlider = new CanvasSlider(320, controlY, 150, 3, 15, 5, '\u03C9\u2080');

  btnX = 540;
  btnY = controlY - 11;
  resetBtnX = btnX + btnW + 10;

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
  let zeta   = zetaSlider.value;
  let omega0 = omegaSlider.value;

  alpha  = zeta * omega0;
  omegaD = omega0 * sqrt(1 - zeta * zeta);

  // Component values per specification
  L = 1;
  C = 1.0 / (omega0 * omega0);
  R = 2 * zeta / omega0;

  E_total_0 = 0.5 * C * V0 * V0;

  // Adjust tMax to show several oscillation periods
  tMax = max(3, 6 * Math.PI / omegaD);
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

    // v(t) = V0 * exp(-αt) * cos(ωd t)
    let v = V0 * expTerm * cosT;

    // i(t) = C * dv/dt
    // dv/dt = V0 * exp(-αt) * [-α cos(ωd t) - ωd sin(ωd t)]
    let dvdt = V0 * expTerm * (-alpha * cosT - omegaD * sinT);
    let i = C * dvdt;

    let ec = 0.5 * C * v * v;
    let el = 0.5 * L * i * i;
    let er = E_total_0 - ec - el;
    if (er < 0) er = 0;  // numerical guard

    ecArr.push(ec);
    elArr.push(el);
    erArr.push(er);
  }

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
  background(255);

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

// ── Title ────────────────────────────────────────────────────────────────

function drawTitle() {
  fill(0);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);
  textStyle(BOLD);
  text('Energy Exchange in RLC Circuit', canvasW / 2, 8);
  textStyle(NORMAL);
}

// ── Stacked area plot ────────────────────────────────────────────────────

function drawStackedAreaPlot() {
  // Axes
  stroke(0);
  strokeWeight(1);
  line(plotLeft, plotBottom, plotRight, plotBottom);
  line(plotLeft, plotTop, plotLeft, plotBottom);

  // Y-axis label
  push();
  fill(0); noStroke(); textAlign(CENTER, CENTER); textSize(12);
  translate(15, (plotTop + plotBottom) / 2);
  rotate(-HALF_PI);
  text('Energy (J)', 0, 0);
  pop();

  // X-axis label
  fill(0); noStroke(); textAlign(CENTER, TOP); textSize(11);
  text('Time (s)', (plotLeft + plotRight) / 2, plotBottom + 3);

  // Y ticks
  textAlign(RIGHT, CENTER); textSize(10);
  let ySteps = 5;
  for (let k = 0; k <= ySteps; k++) {
    let frac = k / ySteps;
    let yy = plotBottom - frac * plotH;
    let val = frac * E_total_0;
    stroke(220); strokeWeight(0.5);
    line(plotLeft, yy, plotRight, yy);
    noStroke(); fill(0);
    text(val.toFixed(3), plotLeft - 4, yy);
  }

  // X ticks
  textAlign(CENTER, TOP);
  let xTicks = 5;
  for (let k = 0; k <= xTicks; k++) {
    let frac = k / xTicks;
    let xx = plotLeft + frac * plotW;
    let val = frac * tMax;
    stroke(220); strokeWeight(0.5);
    line(xx, plotTop, xx, plotBottom);
    noStroke(); fill(0);
    text(val.toFixed(1), xx, plotBottom + 3);
  }

  // Helpers
  function xPx(k) { return plotLeft + (k / (N - 1)) * plotW; }
  function yPx(energy) { return plotBottom - (energy / E_total_0) * plotH; }

  // Stacked areas (bottom-up): Resistor, Inductor, Capacitor

  // 1. Resistor (red)
  noStroke();
  fill(colRes + '88');
  beginShape();
  vertex(plotLeft, plotBottom);
  for (let k = 0; k < N; k++) vertex(xPx(k), yPx(erArr[k]));
  vertex(plotRight, plotBottom);
  endShape(CLOSE);

  // 2. Inductor (orange)
  fill(colInd + '99');
  beginShape();
  for (let k = 0; k < N; k++) vertex(xPx(k), yPx(erArr[k]));
  for (let k = N - 1; k >= 0; k--) vertex(xPx(k), yPx(erArr[k] + elArr[k]));
  endShape(CLOSE);

  // 3. Capacitor (blue)
  fill(colCap + '99');
  beginShape();
  for (let k = 0; k < N; k++) vertex(xPx(k), yPx(erArr[k] + elArr[k]));
  for (let k = N - 1; k >= 0; k--) vertex(xPx(k), yPx(erArr[k] + elArr[k] + ecArr[k]));
  endShape(CLOSE);

  // Total initial energy dashed line
  stroke(colTotal); strokeWeight(1.5);
  drawingContext.setLineDash([6, 4]);
  line(plotLeft, yPx(E_total_0), plotRight, yPx(E_total_0));
  drawingContext.setLineDash([]);

  // Legend
  let legX = plotRight - 180;
  let legY = plotTop + 8;
  noStroke(); textAlign(LEFT, CENTER); textSize(11);

  fill(colCap); rect(legX, legY, 12, 12, 2);
  fill(0); text('E_C (Capacitor)', legX + 16, legY + 6);

  fill(colInd); rect(legX, legY + 18, 12, 12, 2);
  fill(0); text('E_L (Inductor)', legX + 16, legY + 24);

  fill(colRes); rect(legX, legY + 36, 12, 12, 2);
  fill(0); text('E_R (Dissipated)', legX + 16, legY + 42);

  stroke(colTotal); strokeWeight(1.5);
  drawingContext.setLineDash([4, 3]);
  line(legX, legY + 60, legX + 12, legY + 60);
  drawingContext.setLineDash([]);
  noStroke(); fill(0);
  text('E_total (initial)', legX + 16, legY + 60);
}

// ── Time cursor ──────────────────────────────────────────────────────────

function drawTimeCursor() {
  let xx = plotLeft + (tCursor / tMax) * plotW;

  stroke(0); strokeWeight(1.2);
  drawingContext.setLineDash([3, 3]);
  line(xx, plotTop, xx, plotBottom);
  drawingContext.setLineDash([]);

  fill(0); noStroke();
  triangle(xx - 4, plotTop - 1, xx + 4, plotTop - 1, xx, plotTop + 5);
}

// ── Bar gauges ───────────────────────────────────────────────────────────

function drawBarGauges() {
  let s = sampleAt(tCursor);
  let capFrac = s.ec / E_total_0;
  let indFrac = s.el / E_total_0;

  // Background rectangles
  stroke(180); strokeWeight(1); fill(240);
  rect(barLeftX - barWidth / 2, barTop, barWidth, barH, 3);
  rect(barRightX - barWidth / 2, barTop, barWidth, barH, 3);

  // Filled bars (grow upward)
  noStroke();
  fill(colCap);
  let capH = capFrac * barH;
  rect(barLeftX - barWidth / 2, barBottom - capH, barWidth, capH, 0, 0, 3, 3);

  fill(colInd);
  let indH = indFrac * barH;
  rect(barRightX - barWidth / 2, barBottom - indH, barWidth, indH, 0, 0, 3, 3);

  // Labels
  fill(0); noStroke(); textAlign(CENTER, TOP); textSize(11);
  textStyle(BOLD);
  text('Cap Energy', barLeftX, barBottom + 4);
  text('Ind Energy', barRightX, barBottom + 4);
  textStyle(NORMAL);

  // Values above bars
  textAlign(CENTER, BOTTOM); textSize(10);
  fill(colCap); text(s.ec.toFixed(4) + ' J', barLeftX, barBottom - capH - 2);
  fill(colInd); text(s.el.toFixed(4) + ' J', barRightX, barBottom - indH - 2);

  // Dissipated energy between bars
  textAlign(CENTER, CENTER); textSize(11);
  fill(colRes);
  text('Dissipated: ' + s.er.toFixed(4) + ' J', barCenterX, barTop - 10);
}

// ── Controls ─────────────────────────────────────────────────────────────

function drawControls() {
  // Canvas sliders
  zetaSlider.display();
  omegaSlider.display();

  // Play / Pause button
  fill(playing ? '#E0E0E0' : '#C8E6C9');
  stroke(150); strokeWeight(1);
  rect(btnX, btnY, btnW, btnH, 4);
  fill(0); noStroke(); textAlign(CENTER, CENTER); textSize(12);
  text(playing ? 'Pause' : 'Play', btnX + btnW / 2, btnY + btnH / 2);

  // Reset button
  fill('#E0E0E0'); stroke(150); strokeWeight(1);
  rect(resetBtnX, btnY, 60, btnH, 4);
  fill(0); noStroke(); textAlign(CENTER, CENTER);
  text('Reset', resetBtnX + 30, btnY + btnH / 2);
}

// ══════════════════════════════════════════════════════════════════════════
// INTERACTION
// ══════════════════════════════════════════════════════════════════════════

function mousePressed() {
  zetaSlider.pressed(mouseX, mouseY);
  omegaSlider.pressed(mouseX, mouseY);

  // Play / Pause button
  if (mouseX >= btnX && mouseX <= btnX + btnW &&
      mouseY >= btnY && mouseY <= btnY + btnH) {
    playing = !playing;
    return;
  }

  // Reset button
  if (mouseX >= resetBtnX && mouseX <= resetBtnX + 60 &&
      mouseY >= btnY && mouseY <= btnY + btnH) {
    tCursor = 0;
    playing = true;
    return;
  }

  // Click on plot to set time cursor
  if (mouseX >= plotLeft && mouseX <= plotRight &&
      mouseY >= plotTop && mouseY <= plotBottom) {
    tCursor = ((mouseX - plotLeft) / plotW) * tMax;
  }
}

function mouseDragged() {
  zetaSlider.dragged(mouseX);
  omegaSlider.dragged(mouseX);

  if (zetaSlider.dragging || omegaSlider.dragging) {
    recompute();
    return;
  }

  // Drag on plot to scrub time
  if (mouseX >= plotLeft && mouseX <= plotRight &&
      mouseY >= plotTop && mouseY <= plotBottom) {
    tCursor = constrain(((mouseX - plotLeft) / plotW) * tMax, 0, tMax);
  }
}

function mouseReleased() {
  zetaSlider.released();
  omegaSlider.released();
}
