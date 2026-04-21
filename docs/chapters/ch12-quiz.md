---
title: Chapter 12 Quiz — Filters and Resonance
description: Self-assessment quiz covering RC/RL/RLC filter design, cutoff frequency, quality factor, active vs passive filters, and audio decibel references
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 12 Quiz — Filters and Resonance</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Test your understanding of filter design, cutoff frequencies, quality factors, and active versus passive filter tradeoffs. Each question includes a detailed explanation.
</p>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 1</p>

<p style="color: #333; line-height: 1.75;">
An RC low-pass filter is required with cutoff frequency 2 kHz. If a 22 nF capacitor is available, what resistor value should be used?
</p>

<div class="upper-alpha" markdown>

1. \(R \approx 1.44 \text{ kΩ}\)
2. \(R \approx 3.62 \text{ kΩ}\)
3. \(R \approx 7.23 \text{ kΩ}\)
4. \(R \approx 723 \text{ Ω}\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Solving the cutoff frequency formula for R:
\[R = \frac{1}{2\pi f_c C} = \frac{1}{2\pi \times 2000 \times 22 \times 10^{-9}} = \frac{1}{2.765 \times 10^{-4}} \approx 3617 \text{ Ω} \approx 3.62 \text{ kΩ}\]
The nearest standard E24 value is 3.6 kΩ, giving an actual cutoff of approximately 2.01 kHz — acceptably close.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> RC Filter Design, \(f_c = 1/(2\pi RC)\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 2</p>

<p style="color: #333; line-height: 1.75;">
A series RLC band-pass filter has L = 10 mH and C = 2.53 μF. What is its resonant center frequency?
</p>

<div class="upper-alpha" markdown>

1. \(f_0 = 100\) Hz
2. \(f_0 = 1000\) Hz
3. \(f_0 = 10\) kHz
4. \(f_0 = 159\) Hz

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The resonant frequency is \(f_0 = 1/(2\pi\sqrt{LC})\):
\[f_0 = \frac{1}{2\pi\sqrt{10 \times 10^{-3} \times 2.53 \times 10^{-6}}} = \frac{1}{2\pi\sqrt{25.3 \times 10^{-9}}} = \frac{1}{2\pi \times 1.59 \times 10^{-4}} \approx 1000 \text{ Hz}\]
At this frequency the inductive and capacitive reactances cancel, producing maximum current through the load resistor.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Resonant Frequency of RLC Band-Pass Filter
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 3</p>

<p style="color: #333; line-height: 1.75;">
A band-pass filter centered at 5 kHz has a quality factor Q = 10. What is its 3 dB bandwidth?
</p>

<div class="upper-alpha" markdown>

1. 50 kHz
2. 5 kHz
3. 500 Hz
4. 50 Hz

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Bandwidth is related to Q and center frequency by:
\[BW = \frac{f_0}{Q} = \frac{5000}{10} = 500 \text{ Hz}\]
The filter passes frequencies from approximately 4750 Hz to 5250 Hz. A higher Q value would produce a narrower, more selective band; a lower Q would give a wider, less selective response.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Quality Factor and Bandwidth, \(BW = f_0/Q\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 4</p>

<p style="color: #333; line-height: 1.75;">
Which of the following is a key advantage of active filters over passive LC filters for audio frequency applications?
</p>

<div class="upper-alpha" markdown>

1. Active filters can handle higher power and voltage than passive filters
2. Active filters work at higher frequencies than passive filters
3. Active filters can provide gain and avoid large inductors
4. Active filters are simpler and require fewer components

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Active filters using op-amps with RC networks can provide gain (amplification while filtering) and completely eliminate inductors. At audio frequencies (20 Hz–20 kHz), the required inductors would be extremely large and expensive (often several henries). Active filters also allow easy cascading without loading effects, since the op-amp provides high input and low output impedance. However, they require a power supply, which passive filters do not.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Active vs. Passive Filters
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 5</p>

<p style="color: #333; line-height: 1.75;">
An RC high-pass filter uses the same component values as a low-pass filter (same R and C), but the output is taken across the resistor instead of the capacitor. How does the cutoff frequency of the high-pass filter compare to that of the low-pass filter?
</p>

<div class="upper-alpha" markdown>

1. The high-pass cutoff frequency is half that of the low-pass
2. The high-pass cutoff frequency is double that of the low-pass
3. They have the same cutoff frequency
4. The high-pass cutoff frequency depends on the signal amplitude

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Both the RC low-pass (output across C) and the RC high-pass (output across R) have the same cutoff frequency formula: \(f_c = 1/(2\pi RC)\). The difference is in what happens at this frequency: the low-pass has −3 dB with output rolling off above \(f_c\), while the high-pass has −3 dB with output rolling off below \(f_c\). The same RC time constant defines the cutoff in both cases.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> RC Low-Pass vs. High-Pass Filter Cutoff
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 6</p>

<p style="color: #333; line-height: 1.75;">
Professional line level in audio equipment is specified as +4 dBu. What RMS voltage does this correspond to? (Recall: 0 dBu = 0.775 V RMS)
</p>

<div class="upper-alpha" markdown>

1. 0.775 V RMS
2. 1.0 V RMS
3. 1.23 V RMS
4. 3.1 V RMS

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Using the dBu formula \(V = 0.775 \times 10^{dBu/20}\):
\[V = 0.775 \times 10^{4/20} = 0.775 \times 10^{0.2} = 0.775 \times 1.585 = 1.229 \text{ V RMS}\]
The +4 dBu standard (approximately 1.23 V RMS) is the standard operating level for professional audio equipment, providing adequate headroom above the noise floor.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> dBu Reference Level in Audio
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 7</p>

<p style="color: #333; line-height: 1.75;">
A second-order low-pass filter has quality factor Q = 0.707. What does this Q value signify about the filter's passband response?
</p>

<div class="upper-alpha" markdown>

1. The filter has a pronounced resonant peak in the passband
2. The filter has a maximally flat (Butterworth) passband with no peak
3. The filter is overdamped with a gentle, gradual rolloff
4. The filter oscillates indefinitely at the cutoff frequency

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
A quality factor of Q = 0.707 (corresponding to damping ratio ζ = 1/√2 ≈ 0.707) gives a Butterworth response — the flattest possible passband with no peaking before the cutoff frequency. Higher Q values (Q > 0.707) produce a resonant peak before rolloff; lower Q values (Q < 0.5) are overdamped and roll off earlier and more gently. Butterworth is the most common general-purpose design choice.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Quality Factor and Second-Order Filter Response
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 8</p>

<p style="color: #333; line-height: 1.75;">
In a typical audio system, a microphone outputs −50 dBV. How much gain (in dB) is needed to reach the consumer line level of −10 dBV?
</p>

<div class="upper-alpha" markdown>

1. 10 dB
2. 50 dB
3. 40 dB
4. 60 dB

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Gain in dB is simply the difference between output and input levels (since dBV is already on a logarithmic scale):
\[\text{Gain (dB)} = -10 \text{ dBV} - (-50 \text{ dBV}) = -10 + 50 = 40 \text{ dB}\]
This corresponds to a voltage gain of \(10^{40/20} = 100\). The microphone preamplifier must amplify the signal 100 times to reach consumer line level.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> dBV Reference Level and Gain Calculations
</p>
</div>
</details>

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Answers Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Question | Answer | Concept Tested |
|----------|--------|----------------|
| 1 | B | RC Filter Design |
| 2 | B | Resonant Frequency of RLC Filter |
| 3 | C | Quality Factor and Bandwidth |
| 4 | C | Active vs. Passive Filters |
| 5 | C | RC High-Pass vs. Low-Pass Cutoff |
| 6 | C | dBu Reference Level |
| 7 | B | Q Factor and Second-Order Filter Response |
| 8 | C | dBV and Gain Calculations |

</div>

</div>
