---
title: Chapter 5 Quiz — Passive Components
description: Self-assessment quiz covering capacitors, inductors, energy storage, series/parallel combinations, mutual inductance, and signal fundamentals
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 5 Quiz — Passive Components</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Test your understanding of capacitors, inductors, energy storage, series and parallel combinations, mutual inductance, and signal fundamentals including RMS and decibels. Each question includes a detailed explanation.
</p>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 1</p>

<p style="color: #333; line-height: 1.75;">
A 100 µF capacitor is charged to 20 V. How much energy is stored in it?
</p>

<div class="upper-alpha" markdown>

1. 2 mJ
2. 10 mJ
3. 20 mJ
4. 40 mJ

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Using \(E = \frac{1}{2}CV^2 = \frac{1}{2} \times 100 \times 10^{-6} \times (20)^2 = \frac{1}{2} \times 100 \times 10^{-6} \times 400 = 0.020 \text{ J} = 20 \text{ mJ}\). Notice the voltage-squared relationship: if you double the voltage to 40 V, the stored energy quadruples to 80 mJ. This is why high-voltage capacitors (like those in camera flashes) store substantial energy.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Capacitor Energy \(E = \frac{1}{2}CV^2\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 2</p>

<p style="color: #333; line-height: 1.75;">
Three capacitors — 10 µF, 20 µF, and 30 µF — are connected in series. What is the equivalent capacitance?
</p>

<div class="upper-alpha" markdown>

1. 60 µF
2. 10 µF
3. 5.45 µF
4. 1.83 µF

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Series capacitors use the reciprocal formula: \(\frac{1}{C_T} = \frac{1}{10} + \frac{1}{20} + \frac{1}{30} = \frac{6}{60} + \frac{3}{60} + \frac{2}{60} = \frac{11}{60}\), so \(C_T = 60/11 \approx 5.45 \text{ µF}\). Series capacitors reduce the total capacitance (opposite of resistors!), and the result is always less than the smallest individual capacitor (10 µF).
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Capacitors in Series
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 3</p>

<p style="color: #333; line-height: 1.75;">
An inductor with \(L = 50 \text{ mH}\) carries a steady current of 400 mA. How much energy is stored in its magnetic field?
</p>

<div class="upper-alpha" markdown>

1. 20 mJ
2. 4 mJ
3. 8 mJ
4. 10 mJ

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Using \(E = \frac{1}{2}LI^2 = \frac{1}{2} \times 0.05 \times (0.4)^2 = \frac{1}{2} \times 0.05 \times 0.16 = 0.004 \text{ J} = 4 \text{ mJ}\). The current-squared relationship for inductors mirrors the voltage-squared relationship for capacitors. When this inductor's current is suddenly interrupted, this 4 mJ must go somewhere — usually as a dangerous voltage spike, which is why flyback diodes are essential.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Inductor Energy \(E = \frac{1}{2}LI^2\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 4</p>

<p style="color: #333; line-height: 1.75;">
The voltage across a 10 µF capacitor is changing at a rate of 500 V/s. What current flows through the capacitor?
</p>

<div class="upper-alpha" markdown>

1. 50 µA
2. 500 mA
3. 5 mA
4. 50 mA

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Using the capacitor I-V relationship: \(I = C \frac{dV}{dt} = 10 \times 10^{-6} \times 500 = 0.005 \text{ A} = 5 \text{ mA}\). Current only flows through a capacitor when voltage is changing. If the voltage were constant (DC), no current would flow at all — this is why capacitors block DC signals.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Capacitor I-V Relationship \(I = C \, dV/dt\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 5</p>

<p style="color: #333; line-height: 1.75;">
Two inductors, \(L_1 = 4 \text{ mH}\) and \(L_2 = 12 \text{ mH}\), are connected in parallel (with no mutual inductance). What is the equivalent inductance?
</p>

<div class="upper-alpha" markdown>

1. 16 mH
2. 8 mH
3. 4 mH
4. 3 mH

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: D</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Inductors in parallel combine like resistors in parallel (unlike capacitors). Using the product-over-sum formula: \(L_{eq} = \frac{L_1 \cdot L_2}{L_1 + L_2} = \frac{4 \times 12}{4 + 12} = \frac{48}{16} = 3 \text{ mH}\). Remember: inductors follow resistor rules (series adds, parallel reciprocal), while capacitors follow the opposite.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Inductors in Parallel
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 6</p>

<p style="color: #333; line-height: 1.75;">
A sinusoidal voltage has a peak value of 14.14 V. What is its RMS value?
</p>

<div class="upper-alpha" markdown>

1. 14.14 V
2. 20 V
3. 10 V
4. 7.07 V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
For a sinusoid: \(V_{RMS} = V_{peak} / \sqrt{2} = 14.14 / 1.414 \approx 10 \text{ V}\). RMS is the "equivalent DC" voltage for power delivery — a 10 V RMS AC signal dissipates the same power in a resistor as a 10 V DC signal. The US wall outlet is 120 V RMS, meaning its peak is \(120 \times \sqrt{2} \approx 170 \text{ V}\).
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> RMS Value \(V_{RMS} = V_{peak}/\sqrt{2}\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 7</p>

<p style="color: #333; line-height: 1.75;">
Two coupled inductors have \(L_1 = 9 \text{ mH}\) and \(L_2 = 4 \text{ mH}\) with a coupling coefficient \(k = 0.5\). What is their mutual inductance \(M\)?
</p>

<div class="upper-alpha" markdown>

1. 6.5 mH
2. 6 mH
3. 3 mH
4. 1.5 mH

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Using the coupling coefficient formula: \(M = k\sqrt{L_1 \cdot L_2} = 0.5 \times \sqrt{9 \times 4} = 0.5 \times \sqrt{36} = 0.5 \times 6 = 3 \text{ mH}\). The coupling coefficient \(k\) ranges from 0 (no coupling) to 1 (perfect coupling). A coupling coefficient of 0.5 means the inductors share 50% of the maximum possible mutual flux linkage. This principle underlies transformer operation.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Mutual Inductance \(M = k\sqrt{L_1 L_2}\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 8</p>

<p style="color: #333; line-height: 1.75;">
An audio amplifier stage has a voltage gain of +26 dB. By what factor does it multiply the voltage?
</p>

<div class="upper-alpha" markdown>

1. 26 times
2. 10 times
3. 20 times
4. 200 times

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
For voltage gain in dB: \(A_V = 10^{dB/20} = 10^{26/20} = 10^{1.3} \approx 20\). You can also use the additive shortcut: \(+20 \text{ dB} = 10\times\) and \(+6 \text{ dB} = 2\times\), so \(+26 \text{ dB} = 10 \times 2 = 20\times\). This is why decibels are used: cascaded gain stages simply add their dB values instead of multiplying their linear gains.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Decibel Gain Conversion \(dB = 20\log_{10}(A_V)\)
</p>
</div>
</details>

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Answers Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Question | Answer | Concept Tested |
|----------|--------|----------------|
| 1 | C | Capacitor Energy \(E = \frac{1}{2}CV^2\) |
| 2 | C | Capacitors in Series |
| 3 | B | Inductor Energy \(E = \frac{1}{2}LI^2\) |
| 4 | C | Capacitor I-V Relationship |
| 5 | D | Inductors in Parallel |
| 6 | C | RMS Value |
| 7 | C | Mutual Inductance |
| 8 | C | Decibel Gain Conversion |

</div>

</div>
