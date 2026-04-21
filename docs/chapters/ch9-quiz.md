---
title: Chapter 9 Quiz — Phasors and Complex Impedance
description: Self-assessment quiz covering phasor notation, impedance, reactance, and AC circuit analysis
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 9 Quiz — Phasors and Complex Impedance</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Test your understanding of phasors, complex impedance, reactance, and phasor domain circuit analysis. Each question includes a detailed explanation.
</p>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 1</p>

<p style="color: #333; line-height: 1.75;">
A sinusoidal voltage is described as \(v(t) = 15\cos(2000t + 45°)\) V. What is its phasor representation?
</p>

<div class="upper-alpha" markdown>

1. \(\mathbf{V} = 15\angle 45°\) V
2. \(\mathbf{V} = 15\angle 2000°\) V
3. \(\mathbf{V} = 15\angle -45°\) V
4. \(\mathbf{V} = 2000\angle 45°\) V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The phasor captures the amplitude and phase angle of the sinusoid, discarding the time variation \(e^{j\omega t}\). For \(v(t) = V_m\cos(\omega t + \phi)\), the phasor is \(\mathbf{V} = V_m\angle\phi\). Here \(V_m = 15\) V and \(\phi = 45°\), so \(\mathbf{V} = 15\angle 45°\) V. The angular frequency \(\omega = 2000\) rad/s is tracked separately.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Phasor Notation
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 2</p>

<p style="color: #333; line-height: 1.75;">
A 50 μF capacitor is connected to a 500 rad/s AC source. What is its impedance?
</p>

<div class="upper-alpha" markdown>

1. \(Z_C = j25 \text{ Ω}\)
2. \(Z_C = -j40 \text{ Ω}\)
3. \(Z_C = 40 \text{ Ω}\)
4. \(Z_C = -j25000 \text{ Ω}\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Capacitor impedance is \(Z_C = \frac{1}{j\omega C}\). With \(\omega = 500\) rad/s and \(C = 50 \times 10^{-6}\) F:
\[Z_C = \frac{1}{j(500)(50 \times 10^{-6})} = \frac{1}{j0.025} = \frac{-j}{0.025} = -j40 \text{ Ω}\]
The negative imaginary sign indicates that current leads voltage by 90° in a capacitor.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Capacitive Impedance \(Z_C = 1/(j\omega C)\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 3</p>

<p style="color: #333; line-height: 1.75;">
A series circuit contains R = 30 Ω and \(X_L = 40\) Ω. What is the magnitude of the total impedance and the phase angle?
</p>

<div class="upper-alpha" markdown>

1. \(|Z| = 70 \text{ Ω}\), \(\theta = 53.13°\)
2. \(|Z| = 50 \text{ Ω}\), \(\theta = 53.13°\)
3. \(|Z| = 50 \text{ Ω}\), \(\theta = 36.87°\)
4. \(|Z| = 70 \text{ Ω}\), \(\theta = 36.87°\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
For a series R-L circuit: \(Z = R + jX_L = 30 + j40\) Ω. The magnitude is:
\[|Z| = \sqrt{R^2 + X_L^2} = \sqrt{30^2 + 40^2} = \sqrt{900 + 1600} = \sqrt{2500} = 50 \text{ Ω}\]
The phase angle is:
\[\theta = \tan^{-1}(X_L/R) = \tan^{-1}(40/30) = \tan^{-1}(1.333) = 53.13°\]
Since the reactance is positive (inductive), current lags voltage by 53.13°.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Impedance Triangle
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 4</p>

<p style="color: #333; line-height: 1.75;">
In a phasor diagram, one phasor points to 0° and another points to 90° (counterclockwise from the first). How would you describe the phase relationship between these two signals?
</p>

<div class="upper-alpha" markdown>

1. The second signal lags the first by 90°
2. The second signal leads the first by 90°
3. The two signals are in phase
4. The two signals are 180° out of phase

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
In phasor diagrams, a counterclockwise rotation represents a phase lead. A phasor at 90° counterclockwise from the reference (0°) phasor reaches its peak value 90° earlier in the cycle—it leads by 90°. Conversely, a clockwise rotation indicates a phase lag.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Phasor Diagram and Phase Relationships
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 5</p>

<p style="color: #333; line-height: 1.75;">
A voltage divider consists of a resistor \(R = 100\) Ω in series with a capacitor \(Z_C = -j100\) Ω. A source voltage \(\mathbf{V}_s = 10\angle 0°\) V is applied. What is the voltage across the capacitor?
</p>

<div class="upper-alpha" markdown>

1. \(\mathbf{V}_C = 10\angle 0°\) V
2. \(\mathbf{V}_C = 5\angle 0°\) V
3. \(\mathbf{V}_C = 7.07\angle -45°\) V
4. \(\mathbf{V}_C = 5\sqrt{2}\angle -45°\) V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Using the voltage divider rule with impedances:
\[\mathbf{V}_C = \mathbf{V}_s \cdot \frac{Z_C}{Z_R + Z_C} = 10\angle 0° \cdot \frac{-j100}{100 - j100}\]
The denominator: \(|100 - j100| = 100\sqrt{2}\angle -45°\). So:
\[\mathbf{V}_C = 10 \cdot \frac{100\angle -90°}{100\sqrt{2}\angle -45°} = 10 \cdot \frac{1}{\sqrt{2}}\angle -45° = 7.07\angle -45° \text{ V}\]
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Voltage Divider with Impedances
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 6</p>

<p style="color: #333; line-height: 1.75;">
A series RLC circuit has R = 10 Ω, \(Z_L = j20\) Ω, and \(Z_C = -j20\) Ω. What is the total current if the source is \(\mathbf{V}_s = 50\angle 0°\) V?
</p>

<div class="upper-alpha" markdown>

1. \(\mathbf{I} = 1.25\angle 0°\) A
2. \(\mathbf{I} = 5\angle 0°\) A
3. \(\mathbf{I} = 5\angle 90°\) A
4. \(\mathbf{I} = 1.78\angle 0°\) A

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
First find the total impedance: \(Z_{total} = R + Z_L + Z_C = 10 + j20 - j20 = 10\angle 0°\) Ω. The inductive and capacitive reactances cancel exactly—this is resonance! Then:
\[\mathbf{I} = \frac{\mathbf{V}_s}{Z_{total}} = \frac{50\angle 0°}{10\angle 0°} = 5\angle 0° \text{ A}\]
At resonance, the circuit is purely resistive and current is in phase with the source voltage.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Series Resonance and KVL with Phasors
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 7</p>

<p style="color: #333; line-height: 1.75;">
A series RLC circuit resonates at \(f_0 = 10\) kHz and has Q = 25. What is the bandwidth of the circuit?
</p>

<div class="upper-alpha" markdown>

1. 250 kHz
2. 4000 Hz
3. 400 Hz
4. 40 Hz

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The bandwidth of a resonant circuit is related to the quality factor by:
\[BW = \frac{f_0}{Q} = \frac{10{,}000 \text{ Hz}}{25} = 400 \text{ Hz}\]
A higher Q means a narrower bandwidth and better selectivity. This circuit would pass frequencies roughly from 9800 Hz to 10200 Hz.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Bandwidth and Quality Factor
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 8</p>

<p style="color: #333; line-height: 1.75;">
An inductor's impedance is \(Z_L = j\omega L\). At DC (\(\omega = 0\)) and at very high frequency, how does an ideal inductor behave?
</p>

<div class="upper-alpha" markdown>

1. Short circuit at DC; open circuit at high frequency
2. Open circuit at DC; short circuit at high frequency
3. Short circuit at DC; short circuit at high frequency
4. Open circuit at DC; open circuit at high frequency

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Inductive reactance is \(X_L = \omega L\). At DC (\(\omega = 0\)): \(X_L = 0\), so the inductor is a short circuit (just a wire). At very high frequency (\(\omega \to \infty\)): \(X_L \to \infty\), so the inductor approaches an open circuit. This is why inductors block AC but pass DC—the opposite behavior of capacitors.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Inductive Reactance vs. Frequency
</p>
</div>
</details>

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Answers Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Question | Answer | Concept Tested |
|----------|--------|----------------|
| 1 | A | Phasor Notation |
| 2 | B | Capacitive Impedance |
| 3 | B | Impedance Triangle |
| 4 | B | Phasor Diagram and Phase Relationships |
| 5 | C | Voltage Divider with Impedances |
| 6 | B | Series Resonance and KVL with Phasors |
| 7 | C | Bandwidth and Quality Factor |
| 8 | A | Inductive Reactance vs. Frequency |

</div>

</div>
