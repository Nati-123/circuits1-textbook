---
title: Chapter 8 Quiz — AC Signals and Sinusoidal Waveforms
description: Self-assessment quiz covering sinusoidal parameters, RMS values, phasor representation, frequency spectrum, and complex numbers in rectangular and polar form
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 8 Quiz — AC Signals and Sinusoidal Waveforms</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Test your understanding of AC signals, sinusoidal parameters, RMS values, phase relationships, and complex number representations. Each question includes a detailed explanation.
</p>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 1</p>

<p style="color: #333; line-height: 1.75;">
A sinusoidal voltage is given by \(v(t) = 120\sin(377t + 30°) \text{ V}\). Identify the peak amplitude \(V_m\), the angular frequency \(\omega\), the frequency \(f\), and the phase angle \(\phi\).
</p>

<div class="upper-alpha" markdown>

1. \(V_m = 120 \text{ V}\), \(\omega = 377 \text{ rad/s}\), \(f = 60 \text{ Hz}\), \(\phi = 30°\)
2. \(V_m = 84.9 \text{ V}\), \(\omega = 377 \text{ rad/s}\), \(f = 50 \text{ Hz}\), \(\phi = 30°\)
3. \(V_m = 120 \text{ V}\), \(\omega = 60 \text{ rad/s}\), \(f = 377 \text{ Hz}\), \(\phi = 30°\)
4. \(V_m = 169.7 \text{ V}\), \(\omega = 377 \text{ rad/s}\), \(f = 60 \text{ Hz}\), \(\phi = 0°\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
From \(v(t) = V_m\sin(\omega t + \phi)\): \(V_m = 120 \text{ V}\) (the coefficient), \(\omega = 377 \text{ rad/s}\) (the coefficient of t), \(\phi = 30°\) (the phase offset). Frequency: \(f = \omega/(2\pi) = 377/(2\pi) \approx 60 \text{ Hz}\). Note: \(\omega = 377 \approx 2\pi \times 60\) is the standard US power frequency. The RMS value would be \(120/\sqrt{2} \approx 84.9 \text{ V}\), but \(V_m = 120 \text{ V}\) is the peak, not the RMS.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Sinusoidal Parameters \(V_m\), \(\omega\), \(f\), \(\phi\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 2</p>

<p style="color: #333; line-height: 1.75;">
The US standard wall outlet delivers 120 V RMS at 60 Hz. What is the peak voltage \(V_m\) and the period \(T\)?
</p>

<div class="upper-alpha" markdown>

1. \(V_m = 120 \text{ V}\), \(T = 16.67 \text{ ms}\)
2. \(V_m = 170 \text{ V}\), \(T = 16.67 \text{ ms}\)
3. \(V_m = 170 \text{ V}\), \(T = 60 \text{ ms}\)
4. \(V_m = 84.9 \text{ V}\), \(T = 16.67 \text{ ms}\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Peak voltage: \(V_m = V_{RMS} \times \sqrt{2} = 120 \times 1.414 \approx 170 \text{ V}\). Period: \(T = 1/f = 1/60 = 16.67 \text{ ms}\). The wall outlet is described by its RMS value (120 V) because that is what matters for power delivery — it is the equivalent DC value. However, the actual voltage swings between +170 V and −170 V. High-voltage warning: 170 V peaks are lethal.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> \(V_m = V_{RMS}\sqrt{2}\) and Period \(T = 1/f\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 3</p>

<p style="color: #333; line-height: 1.75;">
Two signals are \(v_1(t) = 10\sin(\omega t)\) and \(v_2(t) = 10\sin(\omega t - 45°)\). How would you describe the phase relationship between them?
</p>

<div class="upper-alpha" markdown>

1. \(v_1\) lags \(v_2\) by 45°
2. \(v_2\) leads \(v_1\) by 45°
3. \(v_1\) leads \(v_2\) by 45°
4. The signals are in phase

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
\(v_1\) has zero phase and \(v_2\) has a phase of \(-45°\). A negative phase means \(v_2\) is delayed (shifted right in time), so \(v_1\) reaches its peaks before \(v_2\). Therefore, \(v_1\) leads \(v_2\) by 45° (equivalently, \(v_2\) lags \(v_1\) by 45°). A positive phase = leading (earlier peaks); a negative phase = lagging (later peaks).
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Phase Relationships — Leading and Lagging
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 4</p>

<p style="color: #333; line-height: 1.75;">
Convert the complex number \(z = 5\angle 53.13°\) from polar form to rectangular form.
</p>

<div class="upper-alpha" markdown>

1. \(z = 3 + j4\)
2. \(z = 4 + j3\)
3. \(z = 5 + j5\)
4. \(z = 3 - j4\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Converting polar to rectangular: \(a = r\cos\theta = 5\cos(53.13°) = 5 \times 0.6 = 3\) and \(b = r\sin\theta = 5\sin(53.13°) = 5 \times 0.8 = 4\). So \(z = 3 + j4\). This is the classic 3-4-5 right triangle: \(\sqrt{3^2 + 4^2} = 5\) and \(\tan^{-1}(4/3) = 53.13°\). Memorizing this triangle saves time in many phasor calculations.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Polar to Rectangular Conversion \(a = r\cos\theta\), \(b = r\sin\theta\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 5</p>

<p style="color: #333; line-height: 1.75;">
Convert the complex number \(z = -5 + j12\) to polar form.
</p>

<div class="upper-alpha" markdown>

1. \(13\angle 67.4°\)
2. \(13\angle -67.4°\)
3. \(13\angle 112.6°\)
4. \(17\angle 112.6°\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Magnitude: \(r = \sqrt{(-5)^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = 13\). Angle: the point \((-5, 12)\) is in the second quadrant. \(\theta = 180° - \tan^{-1}(12/5) = 180° - 67.4° = 112.6°\). So \(z = 13\angle 112.6°\). When using \(\tan^{-1}\), always check which quadrant the point is in — the calculator will only give you angles in the range −90° to +90°, and you must adjust for quadrants II, III, and IV.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Rectangular to Polar Conversion with Quadrant Awareness
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 6</p>

<p style="color: #333; line-height: 1.75;">
Multiply \(z_1 = 4\angle 30°\) by \(z_2 = 3\angle 60°\). Express the result in both polar and rectangular form.
</p>

<div class="upper-alpha" markdown>

1. \(12\angle 90° = j12\)
2. \(12\angle 30° = 6\sqrt{3} + j6\)
3. \(7\angle 90° = j7\)
4. \(12\angle 1800°\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
For polar multiplication: multiply magnitudes and add angles. \(z_1 \times z_2 = (4 \times 3)\angle(30° + 60°) = 12\angle 90°\). In rectangular: \(12\cos(90°) + j12\sin(90°) = 0 + j12 = j12\). This result is purely imaginary, which makes physical sense: rotating a vector by 90° moves it from the real axis to the imaginary axis. Polar form is always the easiest for multiplication and division.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Complex Number Multiplication in Polar Form
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 7</p>

<p style="color: #333; line-height: 1.75;">
A signal has a DC component of 4 V and an AC (sinusoidal) component with a peak of 3 V. What is the total RMS voltage of the combined signal?
</p>

<div class="upper-alpha" markdown>

1. 7 V
2. 5 V
3. 4.53 V
4. 6.12 V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
For a signal with both DC and AC components, the total RMS is: \(V_{rms,total} = \sqrt{V_{DC}^2 + V_{AC,rms}^2}\). The AC RMS is \(V_{AC,rms} = 3/\sqrt{2} = 2.121 \text{ V}\). Therefore: \(V_{rms,total} = \sqrt{4^2 + (2.121)^2} = \sqrt{16 + 4.5} = \sqrt{20.5} \approx 4.53 \text{ V}\). You cannot simply add DC and AC RMS values — they combine as the square root of the sum of squares, just like perpendicular vectors.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Total RMS with DC and AC Components
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 8</p>

<p style="color: #333; line-height: 1.75;">
According to Euler's formula, \(e^{j\theta} = \cos\theta + j\sin\theta\). What is the significance of this relationship for AC circuit analysis?
</p>

<div class="upper-alpha" markdown>

1. It allows us to convert DC circuits to AC by substituting \(j\omega\)
2. It shows that complex exponentials are the same as DC sources
3. It enables differentiation and integration of sinusoids to become simple multiplication by \(j\omega\) and division by \(j\omega\), making phasor analysis possible
4. It proves that all AC signals are periodic

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Euler's formula is the mathematical bridge that makes phasor analysis work. Since \(\frac{d}{dt}e^{j\omega t} = j\omega e^{j\omega t}\), differentiation of a complex exponential (which represents a sinusoid) is just multiplication by \(j\omega\). This converts differential equations — which would require solving ODEs — into simple algebraic equations with complex numbers. Kirchhoff's laws in AC then look just like DC laws but with impedances (\(Z = R + jX\)) instead of pure resistances.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Euler's Formula and its Role in Phasor Analysis
</p>
</div>
</details>

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Answers Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Question | Answer | Concept Tested |
|----------|--------|----------------|
| 1 | A | Sinusoidal Parameters |
| 2 | B | Peak Voltage and Period |
| 3 | C | Phase Relationships |
| 4 | A | Polar to Rectangular Conversion |
| 5 | C | Rectangular to Polar Conversion |
| 6 | A | Complex Multiplication in Polar Form |
| 7 | C | Total RMS with DC and AC Components \(\sqrt{V_{DC}^2 + V_{AC,rms}^2}\) |
| 8 | C | Euler's Formula and Phasor Analysis |

</div>

</div>
