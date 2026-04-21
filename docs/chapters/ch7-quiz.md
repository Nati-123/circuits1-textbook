---
title: Chapter 7 Quiz — Second-Order RLC Circuits
description: Self-assessment quiz covering the characteristic equation, damping ratio, natural frequency, overdamped/underdamped/critically-damped responses, resonant frequency, and Q factor
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 7 Quiz — Second-Order RLC Circuits</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Test your understanding of RLC circuit behavior, the characteristic equation, damping conditions, resonant frequency, and the quality factor. Each question includes a detailed explanation.
</p>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 1</p>

<p style="color: #333; line-height: 1.75;">
A series RLC circuit has \(R = 100 \text{ }\Omega\), \(L = 10 \text{ mH}\), and \(C = 1 \text{ µF}\). What is the undamped natural frequency \(\omega_0\)?
</p>

<div class="upper-alpha" markdown>

1. \(1{,}000 \text{ rad/s}\)
2. \(10{,}000 \text{ rad/s}\)
3. \(100{,}000 \text{ rad/s}\)
4. \(31{,}623 \text{ rad/s}\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
\(\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{0.01 \times 10^{-6}}} = \frac{1}{\sqrt{10^{-8}}} = \frac{1}{10^{-4}} = 10{,}000 \text{ rad/s}\). The natural frequency depends only on L and C, not on R. R controls damping (how quickly oscillations die out) but not the fundamental oscillation frequency. In Hz: \(f_0 = 10{,}000/(2\pi) \approx 1{,}592 \text{ Hz}\).
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Natural Frequency \(\omega_0 = 1/\sqrt{LC}\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 2</p>

<p style="color: #333; line-height: 1.75;">
For the same series RLC circuit (\(R = 100 \text{ }\Omega\), \(L = 10 \text{ mH}\), \(C = 1 \text{ µF}\)), calculate the damping coefficient \(\alpha\) and damping ratio \(\zeta\). What type of response will the circuit exhibit?
</p>

<div class="upper-alpha" markdown>

1. \(\alpha = 5{,}000 \text{ rad/s}\), \(\zeta = 0.5\) — underdamped (oscillatory)
2. \(\alpha = 10{,}000 \text{ rad/s}\), \(\zeta = 1.0\) — critically damped
3. \(\alpha = 5{,}000 \text{ rad/s}\), \(\zeta = 0.5\) — overdamped
4. \(\alpha = 20{,}000 \text{ rad/s}\), \(\zeta = 2.0\) — overdamped

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Series RLC: \(\alpha = R/(2L) = 100/(2 \times 0.01) = 5{,}000 \text{ rad/s}\). Damping ratio: \(\zeta = \alpha/\omega_0 = 5{,}000/10{,}000 = 0.5\). Since \(\zeta < 1\), the circuit is underdamped — it will oscillate around its final value with decaying amplitude. The damped frequency is \(\omega_d = \omega_0\sqrt{1-\zeta^2} = 10{,}000\sqrt{1-0.25} = 8{,}660 \text{ rad/s}\).
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Damping Coefficient \(\alpha = R/2L\) and Damping Ratio \(\zeta = \alpha/\omega_0\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 3</p>

<p style="color: #333; line-height: 1.75;">
For a series RLC circuit to be critically damped, what condition must hold between the damping coefficient \(\alpha\) and the natural frequency \(\omega_0\)?
</p>

<div class="upper-alpha" markdown>

1. \(\alpha > \omega_0\)
2. \(\alpha < \omega_0\)
3. \(\alpha = \omega_0\)
4. \(\alpha = 2\omega_0\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Critical damping occurs when \(\alpha = \omega_0\) (equivalently, \(\zeta = 1\)). This is the boundary between oscillatory (\(\alpha < \omega_0\), underdamped) and non-oscillatory (\(\alpha > \omega_0\), overdamped) behavior. At critical damping, the characteristic equation has a repeated real root \(s = -\omega_0\), giving the fastest return to equilibrium without any overshoot — the "Goldilocks" condition for applications like analog meters, camera stabilization, and automotive suspension design.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Critically Damped Condition \(\alpha = \omega_0\), \(\zeta = 1\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 4</p>

<p style="color: #333; line-height: 1.75;">
The resonant frequency of a series RLC circuit is \(f_0 = 1{,}592 \text{ Hz}\) (approximately). The inductance is \(L = 10 \text{ mH}\). What is the capacitance?
</p>

<div class="upper-alpha" markdown>

1. 100 nF
2. 10 µF
3. 1 µF
4. 100 µF

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Using \(f_0 = 1/(2\pi\sqrt{LC})\): \(\omega_0 = 2\pi \times 1592 \approx 10{,}000 \text{ rad/s}\). Solving for C: \(C = 1/(\omega_0^2 L) = 1/((10{,}000)^2 \times 0.01) = 1/(10^8 \times 0.01) = 1/10^6 = 1 \times 10^{-6} \text{ F} = 1 \text{ µF}\). This confirms the LC values from earlier questions — 10 mH and 1 µF resonate at about 1,592 Hz.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Resonant Frequency \(f_0 = 1/(2\pi\sqrt{LC})\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 5</p>

<p style="color: #333; line-height: 1.75;">
A series RLC circuit has \(Q = 50\) and resonant frequency \(f_0 = 500 \text{ kHz}\). What is the 3 dB bandwidth?
</p>

<div class="upper-alpha" markdown>

1. 25 MHz
2. 10 kHz
3. 1 kHz
4. 25 kHz

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Bandwidth and Q are related by \(BW = f_0/Q = 500{,}000/50 = 10{,}000 \text{ Hz} = 10 \text{ kHz}\). A Q of 50 is fairly selective — only frequencies within ±5 kHz of the 500 kHz center pass with less than 3 dB attenuation. Higher Q means narrower bandwidth and better selectivity. This is why radio IF stages and crystal filters have high Q values.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Q Factor and Bandwidth \(BW = f_0/Q\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 6</p>

<p style="color: #333; line-height: 1.75;">
The damping ratio of an RLC circuit is \(\zeta = 0.1\). What is the quality factor Q, and how would you classify the response?
</p>

<div class="upper-alpha" markdown>

1. \(Q = 5\), overdamped
2. \(Q = 0.05\), critically damped
3. \(Q = 5\), underdamped
4. \(Q = 10\), underdamped

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The relationship between Q and \(\zeta\) is: \(Q = 1/(2\zeta) = 1/(2 \times 0.1) = 5\). Since \(\zeta = 0.1 < 1\), the circuit is underdamped — it will oscillate before settling. With \(\zeta = 0.1\), the percent overshoot is \(e^{-\pi \times 0.1/\sqrt{1-0.01}} \times 100 \approx 73\%\) — very oscillatory. High Q (low damping) means sharp resonance, narrow bandwidth, and many oscillation cycles before settling.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Q Factor and Damping Ratio \(Q = 1/(2\zeta)\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 7</p>

<p style="color: #333; line-height: 1.75;">
At resonance in a series RLC circuit, what happens to the impedance and what is the phase angle between source voltage and current?
</p>

<div class="upper-alpha" markdown>

1. Impedance is maximum and phase angle is 90°
2. Impedance equals R (minimum) and phase angle is 0°
3. Impedance is zero and phase angle is 180°
4. Impedance equals \(X_L + X_C\) and phase angle is 45°

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
At resonance, \(X_L = X_C\), so they cancel: the total reactance is zero. The circuit impedance reduces to just \(R\) (minimum), and current is maximum. Since voltage and current are in phase (phase angle = 0°), the power factor is 1. Note that individual voltages across L and C can exceed the source voltage at resonance — they cancel each other but are large internally.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Series RLC Resonance Conditions
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 8</p>

<p style="color: #333; line-height: 1.75;">
The characteristic equation of a second-order circuit is \(s^2 + 2\alpha s + \omega_0^2 = 0\). If \(\alpha = 3{,}000 \text{ rad/s}\) and \(\omega_0 = 5{,}000 \text{ rad/s}\), what are the roots \(s_{1,2}\)?
</p>

<div class="upper-alpha" markdown>

1. Two distinct real roots: \(-1{,}000\) and \(-5{,}000\)
2. A repeated real root at \(-3{,}000\)
3. Complex conjugate roots: \(-3{,}000 \pm j4{,}000\)
4. Complex conjugate roots: \(-5{,}000 \pm j3{,}000\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Since \(\alpha < \omega_0\) (3,000 < 5,000), the circuit is underdamped. The roots are complex: \(s_{1,2} = -\alpha \pm j\omega_d\) where \(\omega_d = \sqrt{\omega_0^2 - \alpha^2} = \sqrt{25{,}000{,}000 - 9{,}000{,}000} = \sqrt{16{,}000{,}000} = 4{,}000 \text{ rad/s}\). So \(s_{1,2} = -3{,}000 \pm j4{,}000\). Complex conjugate roots mean oscillatory (underdamped) behavior with oscillation frequency \(\omega_d = 4{,}000 \text{ rad/s}\) and decay rate \(\alpha = 3{,}000\).
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Characteristic Equation Roots \(s_{1,2} = -\alpha \pm j\omega_d\)
</p>
</div>
</details>

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Answers Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Question | Answer | Concept Tested |
|----------|--------|----------------|
| 1 | B | Natural Frequency \(\omega_0 = 1/\sqrt{LC}\) |
| 2 | A | Damping Coefficient and Ratio |
| 3 | C | Critically Damped Condition |
| 4 | C | Resonant Frequency |
| 5 | B | Q Factor and Bandwidth |
| 6 | C | Q Factor and Damping Ratio |
| 7 | B | Series RLC Resonance |
| 8 | C | Characteristic Equation Roots |

</div>

</div>
