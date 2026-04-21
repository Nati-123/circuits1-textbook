---
title: Chapter 10 Quiz — AC Power Analysis
description: Self-assessment quiz covering real, reactive, and apparent power, power factor, and power factor correction
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 10 Quiz — AC Power Analysis</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Test your understanding of AC power quantities, the power triangle, power factor, and power factor correction. Each question includes a detailed explanation.
</p>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 1</p>

<p style="color: #333; line-height: 1.75;">
A load draws 8 A RMS from a 120 V RMS source. The phase angle between voltage and current is 30°. What is the real power consumed?
</p>

<div class="upper-alpha" markdown>

1. 960 W
2. 480 W
3. 831 W
4. 1108 W

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Real power is \(P = V_{rms} I_{rms} \cos\theta\). With \(V_{rms} = 120\) V, \(I_{rms} = 8\) A, and \(\theta = 30°\):
\[P = 120 \times 8 \times \cos(30°) = 960 \times 0.866 = 831 \text{ W}\]
The apparent power is \(S = 120 \times 8 = 960\) VA, but only 831 W does useful work due to the power factor of 0.866.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Real Power \(P = V_{rms}I_{rms}\cos\theta\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 2</p>

<p style="color: #333; line-height: 1.75;">
A circuit has real power P = 600 W and reactive power Q = 800 VAR (inductive). What is the apparent power S and the power factor?
</p>

<div class="upper-alpha" markdown>

1. S = 1400 VA, PF = 0.429 lagging
2. S = 1000 VA, PF = 0.6 lagging
3. S = 1000 VA, PF = 0.8 lagging
4. S = 1400 VA, PF = 0.6 lagging

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Using the power triangle: \(S = \sqrt{P^2 + Q^2} = \sqrt{600^2 + 800^2} = \sqrt{360000 + 640000} = \sqrt{1000000} = 1000\) VA. The power factor is:
\[PF = \frac{P}{S} = \frac{600}{1000} = 0.6 \text{ lagging}\]
It is lagging because the reactive power is inductive (positive Q means the load absorbs VARs).
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Power Triangle, \(S = \sqrt{P^2 + Q^2}\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 3</p>

<p style="color: #333; line-height: 1.75;">
Which statement correctly describes the reactive power of a pure capacitor?
</p>

<div class="upper-alpha" markdown>

1. Q is positive, the capacitor absorbs VARs (lagging)
2. Q is positive, the capacitor supplies VARs (leading)
3. Q is negative, the capacitor supplies VARs (leading)
4. Q is zero, capacitors do not participate in reactive power

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
For a capacitor: \(Q_C = -V_{rms}I_{rms}\) (negative). Current leads voltage by 90° in a capacitor, giving a negative phase angle and negative reactive power. This negative sign means capacitors supply reactive power rather than absorb it—they are VAR sources. This is exactly why capacitors are used for power factor correction: they supply the VARs that inductive loads demand.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Reactive Power in Capacitors, Leading Power Factor
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 4</p>

<p style="color: #333; line-height: 1.75;">
Complex power is defined as \(\mathbf{S} = P + jQ\). For an inductive load with a lagging power factor, which quadrant does the complex power vector lie in?
</p>

<div class="upper-alpha" markdown>

1. Second quadrant (P negative, Q positive)
2. Fourth quadrant (P positive, Q negative)
3. Third quadrant (P negative, Q negative)
4. First quadrant (P positive, Q positive)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: D</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
For an inductive (lagging) load, P > 0 (real power is always consumed, never negative for a passive load) and Q > 0 (inductors absorb positive reactive power). Therefore \(\mathbf{S} = P + jQ\) has both components positive, placing it in the first quadrant. A capacitive (leading) load would place S in the fourth quadrant (P > 0, Q < 0).
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Complex Power \(\mathbf{S} = P + jQ\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 5</p>

<p style="color: #333; line-height: 1.75;">
An industrial motor consumes 20 kW at a power factor of 0.5 lagging from a 240 V RMS supply. What is the line current drawn?
</p>

<div class="upper-alpha" markdown>

1. 83.3 A
2. 41.7 A
3. 166.7 A
4. 120 A

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
First find apparent power from real power and PF: \(S = P/PF = 20000/0.5 = 40000\) VA. Then find current from \(S = V_{rms}I_{rms}\):
\[I_{rms} = \frac{S}{V_{rms}} = \frac{40000}{240} = 166.7 \text{ A}\]
This large current results from the poor power factor—if the power factor were 1.0, only 83.3 A would be needed for the same 20 kW. Poor power factor wastes conductor capacity.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Apparent Power \(S = V_{rms}I_{rms}\) and Power Factor
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 6</p>

<p style="color: #333; line-height: 1.75;">
A 5 kW load operates at 0.7 power factor lagging from a 120 V RMS, 60 Hz source. What capacitance is needed in parallel to correct the power factor to unity (PF = 1.0)?
</p>

<div class="upper-alpha" markdown>

1. \(C = \frac{Q_C}{2\pi f V_{rms}^2}\) where \(Q_C = 5000 \times \tan(\cos^{-1}(0.7))\) VAR
2. \(C = \frac{P}{\omega V_{rms}^2}\)
3. \(C = \frac{1}{2\pi f R}\)
4. \(C = \frac{P}{V_{rms}^2}\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The general formula for power factor correction is \(C = Q_C/(\omega V_{rms}^2)\), where \(Q_C\) is the reactive power the capacitor must supply. For unity PF correction, the capacitor must cancel all existing reactive power: \(Q_C = P\tan\theta_1 = P\tan(\cos^{-1}(0.7))\). Numerically, \(\theta_1 = 45.57°\), \(\tan(45.57°) \approx 1.02\), so \(Q_C \approx 5100\) VAR and \(C = 5100/(2\pi \times 60 \times 120^2) \approx 940\) μF.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Power Factor Correction
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 7</p>

<p style="color: #333; line-height: 1.75;">
A source has internal impedance \(Z_s = 20 + j15\) Ω. For maximum power transfer to a load, what should the load impedance \(Z_L\) be?
</p>

<div class="upper-alpha" markdown>

1. \(Z_L = 20 + j15\) Ω
2. \(Z_L = 20 - j15\) Ω
3. \(Z_L = 25\angle 0°\) Ω
4. \(Z_L = -20 - j15\) Ω

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Maximum power transfer in AC circuits requires the load impedance to be the complex conjugate of the source impedance: \(Z_L = Z_s^* = R_s - jX_s\). For \(Z_s = 20 + j15\) Ω, the conjugate is \(Z_L = 20 - j15\) Ω. The load reactance cancels the source reactance (creating resonance), leaving only the resistances, where \(R_L = R_s\) gives maximum power delivery.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Maximum Power Transfer (Conjugate Matching)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 8</p>

<p style="color: #333; line-height: 1.75;">
Power in decibels is defined as \(A_P(dB) = 10\log_{10}(P_{out}/P_{in})\). An amplifier delivers 100 mW output for 0.1 mW input. What is its power gain in dB?
</p>

<div class="upper-alpha" markdown>

1. 10 dB
2. 20 dB
3. 30 dB
4. 40 dB

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The power gain ratio is \(P_{out}/P_{in} = 100 \text{ mW}/0.1 \text{ mW} = 1000\). In decibels:
\[A_P(dB) = 10\log_{10}(1000) = 10 \times 3 = 30 \text{ dB}\]
Each factor of 10 in power adds 10 dB. A gain of 1000 = 10³ corresponds to 30 dB.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Power Gain in Decibels
</p>
</div>
</details>

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Answers Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Question | Answer | Concept Tested |
|----------|--------|----------------|
| 1 | C | Real Power |
| 2 | B | Power Triangle |
| 3 | C | Reactive Power in Capacitors |
| 4 | D | Complex Power |
| 5 | C | Apparent Power and Power Factor |
| 6 | A | Power Factor Correction |
| 7 | B | Maximum Power Transfer |
| 8 | C | Power Gain in Decibels |

</div>

</div>
