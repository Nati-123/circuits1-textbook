---
title: Chapter 11 Quiz — Frequency Response and Bode Plots
description: Self-assessment quiz covering transfer functions, Bode plots, cutoff frequency, roll-off rates, and filter types
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 11 Quiz — Frequency Response and Bode Plots</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Test your understanding of transfer functions, Bode magnitude and phase plots, cutoff frequencies, and filter characteristics. Each question includes a detailed explanation.
</p>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 1</p>

<p style="color: #333; line-height: 1.75;">
A circuit has transfer function \(H(j\omega) = V_{out}/V_{in} = 5\angle -30°\). If the input is \(v_{in}(t) = 2\cos(\omega t)\) V, what is the output?
</p>

<div class="upper-alpha" markdown>

1. \(v_{out}(t) = 10\cos(\omega t - 30°)\) V
2. \(v_{out}(t) = 5\cos(\omega t - 30°)\) V
3. \(v_{out}(t) = 2\cos(\omega t - 30°)\) V
4. \(v_{out}(t) = 10\cos(\omega t + 30°)\) V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The transfer function multiplies the input phasor. The input phasor is \(\mathbf{V}_{in} = 2\angle 0°\). Applying the transfer function:
\[\mathbf{V}_{out} = H \times \mathbf{V}_{in} = 5\angle -30° \times 2\angle 0° = 10\angle -30° \text{ V}\]
Converting back to time domain: \(v_{out}(t) = 10\cos(\omega t - 30°)\) V. The magnitude scales by 5 and the phase shifts by −30°.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Transfer Function \(H(j\omega)\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 2</p>

<p style="color: #333; line-height: 1.75;">
A signal has a magnitude of 0.01 relative to a reference. What is this expressed in decibels?
</p>

<div class="upper-alpha" markdown>

1. −20 dB
2. −10 dB
3. −40 dB
4. −30 dB

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Using the voltage gain decibel formula: \(|H|_{dB} = 20\log_{10}|H|\). For \(|H| = 0.01\):
\[|H|_{dB} = 20\log_{10}(0.01) = 20 \times (-2) = -40 \text{ dB}\]
Each factor of 10 in voltage magnitude corresponds to 20 dB. A factor of 1/100 (= 0.01) is −40 dB, representing 100× attenuation.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Decibel Gain
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 3</p>

<p style="color: #333; line-height: 1.75;">
An RC low-pass filter has R = 15 kΩ and C = 10 nF. What is its cutoff frequency?
</p>

<div class="upper-alpha" markdown>

1. \(f_c = 1061\) Hz
2. \(f_c = 1592\) Hz
3. \(f_c = 6667\) Hz
4. \(f_c = 150\) Hz

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The cutoff frequency of an RC filter is \(f_c = 1/(2\pi RC)\):
\[f_c = \frac{1}{2\pi \times 15000 \times 10 \times 10^{-9}} = \frac{1}{2\pi \times 150 \times 10^{-6}} = \frac{1}{9.42 \times 10^{-4}} \approx 1061 \text{ Hz}\]
At this frequency, the output is 70.7% of the input (−3 dB), and the phase shift is −45°.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Cutoff Frequency \(f_c = 1/(2\pi RC)\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 4</p>

<p style="color: #333; line-height: 1.75;">
A Bode magnitude plot shows the gain as 0 dB for frequencies below 500 Hz, then rolling off at −20 dB/decade above 500 Hz. What type of filter is this and what is the gain at 5000 Hz?
</p>

<div class="upper-alpha" markdown>

1. High-pass filter; gain = −20 dB at 5000 Hz
2. Low-pass filter; gain = −20 dB at 5000 Hz
3. Low-pass filter; gain = −3 dB at 5000 Hz
4. Band-pass filter; gain = −20 dB at 5000 Hz

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
A filter that passes low frequencies (0 dB passband) and attenuates high frequencies is a low-pass filter. At 5000 Hz, which is exactly one decade (10×) above the cutoff of 500 Hz, the asymptotic approximation gives a gain of 0 − 20 dB = −20 dB. The −20 dB/decade slope means each factor-of-10 increase in frequency adds −20 dB of attenuation.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Bode Magnitude Plot and Roll-Off Rate
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 5</p>

<p style="color: #333; line-height: 1.75;">
At the cutoff (−3 dB) frequency of a first-order low-pass filter, what is the phase shift of the output relative to the input?
</p>

<div class="upper-alpha" markdown>

1. 0°
2. −90°
3. −45°
4. −180°

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
For a first-order RC low-pass filter \(H(j\omega) = 1/(1 + j\omega/\omega_c)\), the phase is \(\phi = -\tan^{-1}(\omega/\omega_c)\). At \(\omega = \omega_c\) (the cutoff frequency):
\[\phi = -\tan^{-1}(1) = -45°\]
The phase ranges from 0° (far below cutoff) to −90° (far above cutoff), passing through exactly −45° at the cutoff frequency.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Bode Phase Plot at Cutoff Frequency
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 6</p>

<p style="color: #333; line-height: 1.75;">
A filter has two poles. What roll-off rate does it produce above its cutoff frequency?
</p>

<div class="upper-alpha" markdown>

1. −20 dB/decade
2. −40 dB/decade
3. −60 dB/decade
4. −10 dB/decade

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Each pole contributes −20 dB/decade of roll-off. A second-order filter (two poles) therefore produces:
\[2 \times (-20 \text{ dB/decade}) = -40 \text{ dB/decade}\]
This is also expressed as −12 dB/octave. Second-order filters attenuate stopband frequencies much more sharply than first-order filters. In general, an nth-order filter rolls off at −20n dB/decade.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Poles and Roll-Off Rate
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 7</p>

<p style="color: #333; line-height: 1.75;">
Which filter type is best suited for removing 60 Hz power line hum from an audio signal while preserving all other frequencies?
</p>

<div class="upper-alpha" markdown>

1. Low-pass filter with \(f_c = 60\) Hz
2. High-pass filter with \(f_c = 60\) Hz
3. Band-pass filter centered at 60 Hz
4. Band-reject (notch) filter centered at 60 Hz

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: D</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
A band-reject filter (notch filter) attenuates a narrow band of frequencies centered at the target frequency while passing all others with minimal effect. This is exactly what is needed: block 60 Hz hum while preserving the audio above and below it. A low-pass or high-pass filter would remove large portions of the desired audio signal, and a band-pass filter would discard everything except a narrow band around 60 Hz.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Band-Reject (Notch) Filter Applications
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 8</p>

<p style="color: #333; line-height: 1.75;">
A frequency changes from 200 Hz to 2000 Hz. How many decades and how many octaves does this represent?
</p>

<div class="upper-alpha" markdown>

1. 1 decade and approximately 3.32 octaves
2. 2 decades and 6 octaves
3. 1 decade and 2 octaves
4. 0.5 decades and 1.66 octaves

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
A decade is a factor of 10, and an octave is a factor of 2. From 200 Hz to 2000 Hz is exactly a factor of 10, so it is 1 decade. In octaves: \(\log_2(10) = 3.32\) octaves. (Each decade equals approximately 3.32 octaves.) These conversions are fundamental to reading and constructing Bode plots.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Decades and Octaves
</p>
</div>
</details>

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Answers Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Question | Answer | Concept Tested |
|----------|--------|----------------|
| 1 | A | Transfer Function |
| 2 | C | Decibel Gain |
| 3 | A | Cutoff Frequency |
| 4 | B | Bode Magnitude Plot and Roll-Off Rate |
| 5 | C | Bode Phase Plot at Cutoff Frequency |
| 6 | B | Poles and Roll-Off Rate |
| 7 | D | Band-Reject Filter Applications |
| 8 | A | Decades and Octaves |

</div>

</div>
