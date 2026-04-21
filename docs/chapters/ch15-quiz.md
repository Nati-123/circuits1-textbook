---
title: Chapter 15 Quiz — Audio Applications and Amplifiers
description: Self-assessment quiz covering preamplifiers, power amplifier classes, SNR, THD, intermodulation distortion, and clipping
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 15 Quiz — Audio Applications and Amplifiers</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Test your understanding of audio signal chains, amplifier classes, noise, distortion, and audio quality metrics. Each question includes a detailed explanation.
</p>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 1</p>

<p style="color: #333; line-height: 1.75;">
A condenser microphone outputs 8 mV RMS. A preamplifier must bring this to a line level of 1 V RMS. What gain is required in dB?
</p>

<div class="upper-alpha" markdown>

1. 42 dB
2. 48 dB
3. 54 dB
4. 62 dB

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The required voltage gain ratio is \(A = V_{out}/V_{in} = 1\text{ V}/8\text{ mV} = 125\). Converting to dB:
\[A_{dB} = 20\log_{10}(125) = 20 \times 2.097 = 41.94 \text{ dB} \approx 42 \text{ dB}\]
This is a typical gain needed when amplifying from a condenser microphone level to consumer line level, placing it in the middle of the practical preamp gain range.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Preamplifier Gain Calculation
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 2</p>

<p style="color: #333; line-height: 1.75;">
A Class A power amplifier and a Class D switching amplifier each deliver 50 W to a speaker. The Class A amplifier draws 200 W from the supply. What is the efficiency of the Class A amplifier, and how does it compare to the typical efficiency of Class D?
</p>

<div class="upper-alpha" markdown>

1. Class A: 50%, Class D: typically 25%
2. Class A: 25%, Class D: typically over 90%
3. Class A: 75%, Class D: typically 60%
4. Class A: 25%, Class D: typically 60%

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Efficiency is \(\eta = P_{out}/P_{in} = 50/200 = 0.25 = 25\%\). Class A amplifiers have the transistor always conducting, which produces the lowest distortion but also the most heat waste — theoretical maximum efficiency is only 25% for a resistive load. Class D switching amplifiers, by contrast, switch the output transistors fully on or off, achieving efficiencies typically above 90%. This is why Class D is preferred for portable devices and subwoofers where heat management matters.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Amplifier Classes and Efficiency
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 3</p>

<p style="color: #333; line-height: 1.75;">
An amplifier has an output signal of 2 V RMS and a noise voltage of 0.002 V RMS. What is the signal-to-noise ratio in dB?
</p>

<div class="upper-alpha" markdown>

1. 40 dB
2. 60 dB
3. 80 dB
4. 20 dB

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
SNR is calculated as:
\[SNR = 20\log_{10}\left(\frac{V_{signal}}{V_{noise}}\right) = 20\log_{10}\left(\frac{2}{0.002}\right) = 20\log_{10}(1000) = 20 \times 3 = 60 \text{ dB}\]
A 60 dB SNR means the signal is 1000 times larger in voltage than the noise. This is an acceptable figure for consumer audio; professional equipment targets 90 dB or higher.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Signal-to-Noise Ratio (SNR)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 4</p>

<p style="color: #333; line-height: 1.75;">
Thermal noise in a resistor is given by \(V_{noise} = \sqrt{4k_B T R \Delta f}\). Which of the following strategies would reduce thermal noise in an audio preamplifier?
</p>

<div class="upper-alpha" markdown>

1. Increasing the value of the input resistor to reduce current
2. Using a wider bandwidth to capture more signal
3. Using lower-value resistors in the signal path and band-limiting the bandwidth to 20 kHz
4. Operating at higher temperature to reduce electron collision frequency

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
From the thermal noise formula, noise power is proportional to both R and Δf. To reduce noise: (1) use smaller resistance values in the signal path wherever possible, and (2) limit the bandwidth Δf to only the range needed (for audio, 20 kHz). Higher resistance, wider bandwidth, and higher temperature all increase noise. Cooling components can reduce thermal noise in extreme applications, but operating at higher temperature increases it.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Thermal Noise and the Noise Floor
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 5</p>

<p style="color: #333; line-height: 1.75;">
An amplifier is driven by a 1 kHz sine wave. Its output contains the fundamental at 1 kHz plus harmonics at 2 kHz (50 mV), 3 kHz (30 mV), and 4 kHz (20 mV). The fundamental amplitude is 2 V. What is the THD?
</p>

<div class="upper-alpha" markdown>

1. THD = 2%
2. THD ≈ 3%
3. THD ≈ 5%
4. THD ≈ 10%

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
THD combines all harmonics in quadrature (root-sum-square):
\[THD = \frac{\sqrt{V_2^2 + V_3^2 + V_4^2}}{V_1} \times 100\% = \frac{\sqrt{50^2 + 30^2 + 20^2}}{2000} \times 100\%\]
\[= \frac{\sqrt{2500 + 900 + 400}}{2000} \times 100\% = \frac{\sqrt{3800}}{2000} \times 100\% = \frac{61.6}{2000} \times 100\% \approx 3.1\%\]
A THD of ~3% falls in the "noticeable distortion" range for critical listening, though some users find it acceptable for music.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Total Harmonic Distortion (THD)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 6</p>

<p style="color: #333; line-height: 1.75;">
An amplifier is tested with two input tones at 1000 Hz and 1500 Hz. Its output shows extra frequency components at 500 Hz and 2500 Hz in addition to the two original tones. What type of distortion is this?
</p>

<div class="upper-alpha" markdown>

1. Harmonic distortion — new frequencies are harmonically related to the inputs
2. Clipping distortion — the amplifier is running out of headroom
3. Intermodulation distortion — sum and difference frequencies created by non-linearity
4. Phase distortion — phase shifts create new apparent frequencies

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The new frequency components at 500 Hz (= 1500 − 1000) and 2500 Hz (= 1500 + 1000) are sum and difference products of the two input frequencies. This is the signature of intermodulation distortion (IMD), caused by the non-linear characteristics of amplifying devices. IMD is particularly objectionable because the new frequencies are not harmonically related to either input tone, creating dissonant sounds that have no musical relationship to the original signals.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Intermodulation Distortion (IMD)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 7</p>

<p style="color: #333; line-height: 1.75;">
Hard clipping in a power amplifier creates which of the following effects on the output waveform and frequency content?
</p>

<div class="upper-alpha" markdown>

1. The waveform becomes a pure sine wave, and the spectrum shows only the fundamental
2. The waveform peaks are abruptly flattened, and the spectrum gains strong odd harmonics
3. The waveform is attenuated (made quieter) and the noise floor rises
4. The waveform becomes a triangle wave with only odd harmonics decreasing as \(1/n^2\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Hard clipping occurs when the amplifier output reaches the supply rail and is abruptly cut flat. This transforms a smooth sine wave into a flat-topped waveform resembling a square wave. From Fourier analysis, a symmetrically clipped waveform looks increasingly like a square wave, which contains strong odd harmonics (3rd, 5th, 7th, …) with amplitudes decreasing as 1/n. These added high-frequency harmonics produce the characteristic harsh, buzzing sound of a clipped amplifier, and can damage tweeters by injecting excessive high-frequency energy.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Clipping and Its Harmonic Effects
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 8</p>

<p style="color: #333; line-height: 1.75;">
Class AB amplifiers are the most commonly used power amplifier type for general audio. Which of the following best describes why Class AB is preferred over pure Class A or Class B?
</p>

<div class="upper-alpha" markdown>

1. Class AB has the highest possible efficiency (greater than Class D)
2. Class AB eliminates all distortion, achieving perfect linearity
3. Class AB offers a practical balance between the low distortion of Class A and the efficiency of Class B, while avoiding crossover distortion
4. Class AB is the only class that can output more than 1 watt of power

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Class A has very low distortion but ~25% efficiency and high heat dissipation. Class B improves efficiency (~70%) but each transistor only handles half the waveform — where the two transistors hand off at zero crossing, a non-linearity called crossover distortion appears. Class AB biases both transistors slightly on at all times, greatly reducing crossover distortion while maintaining reasonable efficiency (~60%). This compromise makes Class AB the standard for audio power amplifiers where sound quality and practical heat management both matter.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Amplifier Classes A, B, AB Comparison
</p>
</div>
</details>

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Answers Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Question | Answer | Concept Tested |
|----------|--------|----------------|
| 1 | A | Preamplifier Gain Calculation |
| 2 | B | Amplifier Classes and Efficiency |
| 3 | B | Signal-to-Noise Ratio (SNR) |
| 4 | C | Thermal Noise Reduction |
| 5 | B | Total Harmonic Distortion (THD) |
| 6 | C | Intermodulation Distortion (IMD) |
| 7 | B | Clipping and Harmonic Effects |
| 8 | C | Amplifier Classes A, B, AB Comparison |

</div>

</div>
