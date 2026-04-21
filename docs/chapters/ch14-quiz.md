---
title: Chapter 14 Quiz — Signal Analysis and Fourier Series
description: Self-assessment quiz covering Fourier series, harmonics, waveform symmetry, and frequency spectrum analysis
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 14 Quiz — Signal Analysis and Fourier Series</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Test your understanding of Fourier series decomposition, harmonic content, waveform symmetry, and the relationship between time-domain and frequency-domain representations. Each question includes a detailed explanation.
</p>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 1</p>

<p style="color: #333; line-height: 1.75;">
A periodic signal has a period of 4 ms. What is its fundamental frequency, and what is the frequency of its 5th harmonic?
</p>

<div class="upper-alpha" markdown>

1. \(f_0 = 250\) Hz, 5th harmonic = 1000 Hz
2. \(f_0 = 250\) Hz, 5th harmonic = 1250 Hz
3. \(f_0 = 400\) Hz, 5th harmonic = 2000 Hz
4. \(f_0 = 500\) Hz, 5th harmonic = 2500 Hz

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The fundamental frequency is \(f_0 = 1/T = 1/(4 \times 10^{-3}) = 250\) Hz. Harmonics are integer multiples of the fundamental, so the 5th harmonic is:
\[f_5 = 5 \times f_0 = 5 \times 250 = 1250 \text{ Hz}\]
The nth harmonic always has frequency \(n \times f_0\), regardless of the waveform shape.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Fundamental Frequency and Harmonics
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 2</p>

<p style="color: #333; line-height: 1.75;">
A square wave centered at zero (alternating between +A and −A) contains which harmonics, and how do their amplitudes decrease?
</p>

<div class="upper-alpha" markdown>

1. All harmonics (odd and even), amplitudes decrease as \(1/n\)
2. Odd harmonics only, amplitudes decrease as \(1/n^2\)
3. Odd harmonics only, amplitudes decrease as \(1/n\)
4. Even harmonics only, amplitudes decrease as \(1/n\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
A square wave has half-wave symmetry [f(t + T/2) = −f(t)], which eliminates all even harmonics. Its Fourier series is:
\[f(t) = \frac{4A}{\pi}\left[\sin(\omega_0 t) + \frac{1}{3}\sin(3\omega_0 t) + \frac{1}{5}\sin(5\omega_0 t) + \cdots\right]\]
Only harmonics 1, 3, 5, 7, … are present, and their amplitudes decrease as 1/n (1, 1/3, 1/5, 1/7, …). The sharp corners of the square wave require many harmonics to reproduce.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Square Wave Harmonic Content
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 3</p>

<p style="color: #333; line-height: 1.75;">
A sawtooth wave contains all harmonics with amplitudes decreasing as \(1/n\). A triangle wave contains only odd harmonics with amplitudes decreasing as \(1/n^2\). Which waveform requires more harmonics to accurately reproduce, and why?
</p>

<div class="upper-alpha" markdown>

1. Triangle wave, because it has fewer harmonics and needs more to compensate
2. Sawtooth wave, because it contains both odd and even harmonics
3. Sawtooth wave, because its harmonics decrease more slowly (as \(1/n\) vs \(1/n^2\)), meaning higher harmonics are relatively larger
4. Both require the same number of harmonics since they both start rolling off at the fundamental

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The sawtooth wave requires more harmonics for accurate reproduction. Its sudden reset creates a discontinuity that demands high-frequency content. Because sawtooth harmonics decay only as 1/n, the 9th harmonic is still 1/9 ≈ 11% of the fundamental. For the triangle wave, harmonics decay as 1/n², so the 9th harmonic is only 1/81 ≈ 1.2% of the fundamental — much less significant. The smoother the waveform (fewer discontinuities), the faster harmonics decay and the fewer are needed.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Sawtooth vs. Triangle Wave Harmonic Decay
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 4</p>

<p style="color: #333; line-height: 1.75;">
A waveform satisfies the condition \(f(-t) = f(t)\). What type of symmetry does it have, and what does this imply about its Fourier series?
</p>

<div class="upper-alpha" markdown>

1. Odd symmetry — the series contains only sine terms
2. Half-wave symmetry — the series contains only odd harmonics
3. Even symmetry — the series contains only cosine terms (no sine terms)
4. Even symmetry — the series contains no DC component

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
A function satisfying \(f(-t) = f(t)\) is an even function — it is symmetric about the vertical axis (mirror image about t = 0). Because cosine is an even function and sine is odd, the Fourier series of an even function contains only cosine terms: all \(b_n = 0\). This dramatically simplifies the computation of Fourier coefficients, since only the \(a_n\) terms need to be calculated.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Even Symmetry in Fourier Series
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 5</p>

<p style="color: #333; line-height: 1.75;">
On a frequency spectrum display, a signal shows discrete vertical lines (spectral lines) only at 400 Hz, 800 Hz, 1200 Hz, and 1600 Hz, with no energy elsewhere. What can you conclude about the signal?
</p>

<div class="upper-alpha" markdown>

1. It is a non-periodic (random) signal with energy at those particular frequencies
2. It is a periodic signal with fundamental frequency 400 Hz, showing the 1st through 4th harmonics
3. It is a square wave, since it has only even harmonics
4. It is a sawtooth wave with fundamental 400 Hz and only 4 harmonics

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Discrete spectral lines (a line spectrum) always indicate a periodic signal. The spacing between spectral lines equals the fundamental frequency: 800 − 400 = 400 Hz, confirming \(f_0 = 400\) Hz. The lines appear at 1×, 2×, 3×, and 4× \(f_0\), which are the first four harmonics. This pattern of both odd and even harmonics rules out a pure square wave (which has only odd harmonics), suggesting an asymmetric waveform such as a sawtooth or pulse wave.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Reading a Frequency Spectrum
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 6</p>

<p style="color: #333; line-height: 1.75;">
A square wave with fundamental frequency 1 kHz is passed through a low-pass filter with cutoff frequency 3.5 kHz. Approximately what shape will the output waveform have?
</p>

<div class="upper-alpha" markdown>

1. A perfect square wave, because the fundamental passes through
2. A sine wave, because only the fundamental (1 kHz) passes through
3. A waveform with smooth corners but visible flat tops, as harmonics 1, 3 pass but higher harmonics are attenuated
4. A triangle wave, because the filter integrates the square wave

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The square wave's odd harmonics are at 1 kHz, 3 kHz, 5 kHz, 7 kHz, … With a cutoff at 3.5 kHz, the 1st (1 kHz) and 3rd (3 kHz) harmonics pass through with little attenuation, but the 5th harmonic (5 kHz) and above are significantly attenuated. The result is a waveform that still looks roughly like a square wave — with some flat sections near the top and bottom — but with noticeably rounded and possibly slightly rippled corners due to the missing higher harmonics.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Effect of Filtering on Waveform Harmonic Content
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 7</p>

<p style="color: #333; line-height: 1.75;">
A waveform has half-wave symmetry, satisfying \(f(t + T/2) = -f(t)\). Which harmonics appear in its Fourier series?
</p>

<div class="upper-alpha" markdown>

1. Only even harmonics (2nd, 4th, 6th, …)
2. All harmonics (1st, 2nd, 3rd, …)
3. Only odd harmonics (1st, 3rd, 5th, …)
4. Only the fundamental (1st harmonic)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Half-wave symmetry means the waveform in the second half-period is the exact negative of the first half. When computing Fourier coefficients for even harmonics (n = 2, 4, 6, …), the contributions from the two half-periods cancel to zero. Therefore, only odd harmonics (n = 1, 3, 5, 7, …) survive. Square waves and triangle waves both exhibit half-wave symmetry, which is why both contain only odd harmonics.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Half-Wave Symmetry
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 8</p>

<p style="color: #333; line-height: 1.75;">
A pure sine wave is viewed on a spectrum analyzer. How many spectral lines does it display, and where?
</p>

<div class="upper-alpha" markdown>

1. Many lines at odd multiples of the fundamental frequency
2. Two lines: one at the fundamental and one at DC
3. A single line at the fundamental frequency
4. A continuous spectrum spread across many frequencies

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
A pure sine wave is the simplest periodic waveform — it is already a single sinusoid. Its Fourier series has only one term (the fundamental), so its frequency spectrum shows exactly one spectral line at the fundamental frequency \(f_0\). All complex periodic waveforms can be thought of as combinations of pure sine waves at harmonic frequencies, but a pure sine wave by definition has no harmonic content beyond the fundamental.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Spectrum of a Pure Sine Wave
</p>
</div>
</details>

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Answers Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Question | Answer | Concept Tested |
|----------|--------|----------------|
| 1 | B | Fundamental Frequency and Harmonics |
| 2 | C | Square Wave Harmonic Content |
| 3 | C | Sawtooth vs. Triangle Harmonic Decay |
| 4 | C | Even Symmetry in Fourier Series |
| 5 | B | Reading a Frequency Spectrum |
| 6 | C | Effect of Filtering on Harmonic Content |
| 7 | C | Half-Wave Symmetry |
| 8 | C | Spectrum of a Pure Sine Wave |

</div>

</div>
