// Series vs Parallel RLC Configuration MicroSim
// Shows step responses of both series and parallel RLC circuits side by side.
// Completely self-contained — no external dependencies other than p5.js.

// ── Canvas-drawn slider class ─────────────────────────────────────────────
class CanvasSlider {
  constructor(x, y, w, min, max, value, label, unit) {
    this.x = x; this.y = y; this.w = w;
    this.min = min; this.max = max; this.value = value;
    this.label = label; this.unit = unit || ''; this.dragging = false;
  }
  get thumbX() { return this.x + ((this.value - this.min) / (this.max - this.min)) * this.w; }
  display() {
    stroke(180); strokeWeight(2); line(this.x, this.y, this.x + this.w, this.y);
    fill('#5A3EED'); noStroke(); ellipse(this.thumbX, this.y, 14, 14);
    fill(60); noStroke(); textSize(12); textAlign(LEFT);
    text(this.label + ' = ' + this.value.toFixed(1) + ' ' + this.unit, this.x, this.y - 12);
  }
  pressed(mx, my) { if (dist(mx, my, this.thumbX, this.y) < 10) this.dragging = true; }
  dragged(mx) {
    if (!this.dragging) return;
    this.value = constrain(((mx - this.x) / this.w) * (this.max - this.min) + this.min, this.min, this.max);
  }
  released() { this.dragging = false; }
}

// ── Global state ──────────────────────────────────────────────────────────
let sliderR, sliderL, sliderC;
let canvasW = 710, canvasH = 650;

// Plot layout constants
let plotLeft = 60, plotRight = 690;
let plotW;

// Top plot (series)
let plot1Top = 50, plot1Bot = 270;
// Info panel between plots
let infoTop = 278, infoBot = 340;
// Bottom plot (parallel)
let plot2Top = 348, plot2Bot = 568;
// Slider area
let sliderAreaTop = 580;

function setup() {
  plotW = plotRight - plotLeft;
  let canvas = createCanvas(canvasW, canvasH);
  canvas.parent(document.querySelector('main'));

  let sliderX = 160, sliderW = 380;
  sliderR = new CanvasSlider(sliderX, sliderAreaTop + 18, sliderW, 1, 200, 20, 'R', '\u03A9');
  sliderL = new CanvasSlider(sliderX, sliderAreaTop + 42, sliderW, 1, 100, 100, 'L', 'mH');
  sliderC = new CanvasSlider(sliderX, sliderAreaTop + 66, sliderW, 1, 100, 100, 'C', '\u00B5F');
}

function draw() {
  background(255);

  // Read slider values
  let R = sliderR.value;
  let L_mH = sliderL.value;
  let C_uF = sliderC.value;
  let L = L_mH * 0.001;       // H
  let C = C_uF * 1e-6;        // F

  let Vs = 10; // source voltage / Is*R for parallel

  // ── Compute parameters ────────────────────────────────────────────────
  let omega0 = 1 / Math.sqrt(L * C);
  let alpha_s = R / (2 * L);
  let alpha_p = 1 / (2 * R * C);
  let zeta_s = alpha_s / omega0;
  let zeta_p = alpha_p / omega0;

  function dampingLabel(zeta) {
    if (Math.abs(zeta - 1) < 0.02) return 'Critically Damped';
    if (zeta < 1) return 'Underdamped';
    return 'Overdamped';
  }

  // ── Title ─────────────────────────────────────────────────────────────
  fill(40); noStroke(); textSize(16); textAlign(CENTER, TOP);
  text('Series vs Parallel RLC Comparison', canvasW / 2, 10);

  // ── Time range ────────────────────────────────────────────────────────
  // Show enough time for response to settle (~5 time constants)
  let tau_s = 1 / alpha_s;
  let tau_p = 1 / alpha_p;
  let tMax = Math.max(tau_s, tau_p) * 6;
  tMax = Math.max(tMax, 5 / omega0); // at least a few natural periods
  let numPts = 500;

  // ── Compute step responses ────────────────────────────────────────────
  function seriesVc(t) {
    if (t <= 0) return 0;
    let z = zeta_s;
    if (Math.abs(z - 1) < 0.02) {
      // critically damped
      return Vs * (1 - (1 + omega0 * t) * Math.exp(-omega0 * t));
    } else if (z < 1) {
      // underdamped
      let wd = omega0 * Math.sqrt(1 - z * z);
      let phi = Math.acos(z);
      return Vs * (1 - (1 / Math.sqrt(1 - z * z)) * Math.exp(-alpha_s * t) * Math.sin(wd * t + phi));
    } else {
      // overdamped
      let s1 = -alpha_s + Math.sqrt(alpha_s * alpha_s - omega0 * omega0);
      let s2 = -alpha_s - Math.sqrt(alpha_s * alpha_s - omega0 * omega0);
      if (Math.abs(s1 - s2) < 1e-10) return Vs * (1 - Math.exp(s1 * t));
      let A1 = s2 / (s2 - s1);
      let A2 = -s1 / (s2 - s1);
      return Vs * (1 - A1 * Math.exp(s1 * t) - A2 * Math.exp(s2 * t));
    }
  }

  function parallelV(t) {
    if (t <= 0) return 0;
    let Vfinal = Vs; // Is * R equivalent
    let z = zeta_p;
    if (Math.abs(z - 1) < 0.02) {
      return Vfinal * (1 - (1 + omega0 * t) * Math.exp(-omega0 * t));
    } else if (z < 1) {
      let wd = omega0 * Math.sqrt(1 - z * z);
      let phi = Math.acos(z);
      return Vfinal * (1 - (1 / Math.sqrt(1 - z * z)) * Math.exp(-alpha_p * t) * Math.sin(wd * t + phi));
    } else {
      let s1 = -alpha_p + Math.sqrt(alpha_p * alpha_p - omega0 * omega0);
      let s2 = -alpha_p - Math.sqrt(alpha_p * alpha_p - omega0 * omega0);
      if (Math.abs(s1 - s2) < 1e-10) return Vfinal * (1 - Math.exp(s1 * t));
      let A1 = s2 / (s2 - s1);
      let A2 = -s1 / (s2 - s1);
      return Vfinal * (1 - A1 * Math.exp(s1 * t) - A2 * Math.exp(s2 * t));
    }
  }

  // Build data arrays
  let seriesData = [];
  let parallelData = [];
  let seriesMax = Vs, seriesMin = 0;
  let parallelMax = Vs, parallelMin = 0;

  for (let i = 0; i <= numPts; i++) {
    let t = (i / numPts) * tMax;
    let sv = seriesVc(t);
    let pv = parallelV(t);
    seriesData.push({ t: t, v: sv });
    parallelData.push({ t: t, v: pv });
    if (sv > seriesMax) seriesMax = sv;
    if (sv < seriesMin) seriesMin = sv;
    if (pv > parallelMax) parallelMax = pv;
    if (pv < parallelMin) parallelMin = pv;
  }

  // Add padding to y range
  let sPad = (seriesMax - seriesMin) * 0.1 + 0.5;
  seriesMax += sPad; seriesMin -= sPad;
  if (seriesMin > -0.5) seriesMin = -0.5;

  let pPad = (parallelMax - parallelMin) * 0.1 + 0.5;
  parallelMax += pPad; parallelMin -= pPad;
  if (parallelMin > -0.5) parallelMin = -0.5;

  // ── Draw top plot (Series) ────────────────────────────────────────────
  drawPlot(
    plotLeft, plot1Top, plotRight, plot1Bot,
    seriesData, tMax, seriesMin, seriesMax,
    'Series RLC Step Response \u2014 Vc(t)',
    '#5A3EED', Vs, dampingLabel(zeta_s)
  );

  // ── Draw info panel ───────────────────────────────────────────────────
  drawInfoPanel(R, L, C, omega0, alpha_s, alpha_p, zeta_s, zeta_p, dampingLabel(zeta_s), dampingLabel(zeta_p));

  // ── Draw bottom plot (Parallel) ───────────────────────────────────────
  drawPlot(
    plotLeft, plot2Top, plotRight, plot2Bot,
    parallelData, tMax, parallelMin, parallelMax,
    'Parallel RLC Step Response \u2014 v(t)',
    '#E53935', Vs, dampingLabel(zeta_p)
  );

  // ── Draw sliders ──────────────────────────────────────────────────────
  sliderR.display();
  sliderL.display();
  sliderC.display();
}

// ── Plot drawing function ─────────────────────────────────────────────────
function drawPlot(left, top, right, bot, data, tMax, vMin, vMax, title, lineColor, finalVal, dampLabel) {
  let w = right - left;
  let h = bot - top;

  // Background
  fill(252); stroke('#E0E0E0'); strokeWeight(1);
  rect(left, top, w, h);

  // Grid lines
  stroke('#E0E0E0'); strokeWeight(0.5);
  // Horizontal grid
  let vRange = vMax - vMin;
  let vStep = niceStep(vRange / 5);
  let vStart = Math.ceil(vMin / vStep) * vStep;
  for (let v = vStart; v <= vMax; v += vStep) {
    let y = map(v, vMin, vMax, bot, top);
    line(left, y, right, y);
  }
  // Vertical grid
  let tStep = niceStep(tMax / 6);
  for (let t = 0; t <= tMax * 1.01; t += tStep) {
    let x = map(t, 0, tMax, left, right);
    if (x >= left && x <= right) line(x, top, x, bot);
  }

  // Axes
  stroke('#333'); strokeWeight(1.5);
  line(left, bot, right, bot);
  line(left, top, left, bot);

  // Axis labels
  fill('#333'); noStroke(); textSize(9);
  // Y-axis ticks
  for (let v = vStart; v <= vMax; v += vStep) {
    let y = map(v, vMin, vMax, bot, top);
    if (y > top + 5 && y < bot - 5) {
      textAlign(RIGHT, CENTER);
      text(v.toFixed(1) + ' V', left - 5, y);
    }
  }
  // X-axis ticks
  textAlign(CENTER, TOP);
  for (let t = 0; t <= tMax * 1.01; t += tStep) {
    let x = map(t, 0, tMax, left, right);
    if (x >= left && x <= right) {
      text(formatTime(t), x, bot + 3);
    }
  }

  // Axis titles
  textSize(10); textAlign(CENTER, TOP);
  text('Time (s)', (left + right) / 2, bot + 14);
  push();
  translate(left - 42, (top + bot) / 2);
  rotate(-HALF_PI);
  textAlign(CENTER, BOTTOM);
  text('Voltage (V)', 0, 0);
  pop();

  // Plot title
  fill(40); noStroke(); textSize(12); textAlign(CENTER, BOTTOM);
  text(title, (left + right) / 2, top - 4);

  // Dashed final value line
  let yFinal = map(finalVal, vMin, vMax, bot, top);
  if (yFinal > top && yFinal < bot) {
    drawDashed(left, yFinal, right, yFinal, '#D4A017', 1.5);
    fill('#D4A017'); noStroke(); textSize(9); textAlign(RIGHT, BOTTOM);
    text('Final = ' + finalVal.toFixed(1) + ' V', right - 4, yFinal - 2);
  }

  // Draw the response curve
  stroke(lineColor); strokeWeight(2.5); noFill();
  beginShape();
  for (let i = 0; i < data.length; i++) {
    let x = map(data[i].t, 0, tMax, left, right);
    let y = constrain(map(data[i].v, vMin, vMax, bot, top), top, bot);
    vertex(x, y);
  }
  endShape();

  // Damping type label
  let labelCol;
  if (dampLabel === 'Underdamped') labelCol = color(0, 100, 200);
  else if (dampLabel === 'Critically Damped') labelCol = color(0, 150, 50);
  else labelCol = color(180, 80, 0);
  fill(labelCol); noStroke(); textSize(11); textAlign(RIGHT, TOP);
  text(dampLabel, right - 6, top + 6);
}

// ── Info panel ────────────────────────────────────────────────────────────
function drawInfoPanel(R, L, C, omega0, alpha_s, alpha_p, zeta_s, zeta_p, dampS, dampP) {
  let panelLeft = plotLeft;
  let panelRight = plotRight;
  let panelTop = infoTop;
  let panelH = infoBot - infoTop;

  fill(245, 248, 255); stroke(200); strokeWeight(1);
  rect(panelLeft, panelTop, panelRight - panelLeft, panelH, 4);

  let col1 = panelLeft + 15;
  let col2 = panelLeft + 250;
  let col3 = panelLeft + 460;
  let row1 = panelTop + 14;
  let row2 = panelTop + 30;
  let row3 = panelTop + 46;

  fill(60); noStroke(); textSize(11); textAlign(LEFT, TOP);

  // Column 1: Series
  fill('#5A3EED'); textSize(11);
  text('Series:', col1, row1);
  fill(60); textSize(10);
  text('\u03B1_s = R/(2L) = ' + alpha_s.toFixed(1) + ' rad/s', col1, row2);
  text('\u03B6_s = ' + zeta_s.toFixed(3) + '  \u2014  ' + dampS, col1, row3);

  // Column 2: Parallel
  fill('#E53935'); textSize(11);
  text('Parallel:', col2, row1);
  fill(60); textSize(10);
  text('\u03B1_p = 1/(2RC) = ' + alpha_p.toFixed(1) + ' rad/s', col2, row2);
  text('\u03B6_p = ' + zeta_p.toFixed(3) + '  \u2014  ' + dampP, col2, row3);

  // Column 3: Shared
  fill(40); textSize(11);
  text('Shared:', col3, row1);
  fill(60); textSize(10);
  text('\u03C9\u2080 = 1/\u221A(LC) = ' + omega0.toFixed(1) + ' rad/s', col3, row2);
  let f0 = omega0 / (2 * Math.PI);
  text('f\u2080 = ' + f0.toFixed(1) + ' Hz', col3, row3);
}

// ── Dashed line helper ────────────────────────────────────────────────────
function drawDashed(x1, y1, x2, y2, col, weight) {
  push();
  stroke(col); strokeWeight(weight);
  let d = dist(x1, y1, x2, y2);
  if (d === 0) { pop(); return; }
  let dx = (x2 - x1) / d, dy = (y2 - y1) / d;
  let pattern = [6, 4];
  let pos = 0, idx = 0;
  while (pos < d) {
    let seg = Math.min(pattern[idx % pattern.length], d - pos);
    if (idx % 2 === 0) {
      line(x1 + dx * pos, y1 + dy * pos,
           x1 + dx * (pos + seg), y1 + dy * (pos + seg));
    }
    pos += seg; idx++;
  }
  pop();
}

// ── Nice step for axis ticks ──────────────────────────────────────────────
function niceStep(rawStep) {
  if (rawStep <= 0) return 1;
  let mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  let frac = rawStep / mag;
  if (frac < 1.5) return mag;
  if (frac < 3.5) return 2 * mag;
  if (frac < 7.5) return 5 * mag;
  return 10 * mag;
}

// ── Format time for axis labels ───────────────────────────────────────────
function formatTime(tSec) {
  if (tSec < 0.001) return (tSec * 1e6).toFixed(0) + '\u00B5s';
  if (tSec < 1) return (tSec * 1000).toFixed(1) + 'ms';
  return tSec.toFixed(2) + 's';
}

// ── Mouse interaction for sliders ─────────────────────────────────────────
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
