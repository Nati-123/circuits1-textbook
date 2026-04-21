---
title: Chapter 13 Quiz — Operational Amplifiers
description: Self-assessment quiz covering ideal op-amp rules, inverting and non-inverting amplifiers, voltage followers, summing amplifiers, and practical limitations
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 13 Quiz — Operational Amplifiers</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Test your understanding of op-amp golden rules, fundamental amplifier configurations, and practical limitations. Each question includes a detailed explanation.
</p>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 1</p>

<p style="color: #333; line-height: 1.75;">
An inverting amplifier has \(R_i = 4.7\) kΩ and \(R_f = 47\) kΩ. What is the closed-loop voltage gain?
</p>

<div class="upper-alpha" markdown>

1. \(A_V = +10\)
2. \(A_V = -10\)
3. \(A_V = +11\)
4. \(A_V = -47\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The inverting amplifier gain formula is \(A_V = -R_f/R_i\):
\[A_V = -\frac{47 \text{ kΩ}}{4.7 \text{ kΩ}} = -10\]
The negative sign indicates phase inversion — a positive input produces a negative output. The magnitude is 10, so the output is 10 times the input amplitude but inverted (180° phase shift).
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Inverting Amplifier Gain \(A_V = -R_f/R_i\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 2</p>

<p style="color: #333; line-height: 1.75;">
A non-inverting amplifier has \(R_f = 90\) kΩ and \(R_i = 10\) kΩ. If the input is 0.5 V, what is the output voltage?
</p>

<div class="upper-alpha" markdown>

1. −4.5 V
2. 5 V
3. 9 V
4. 0.5 V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The non-inverting amplifier gain is \(A_V = 1 + R_f/R_i\):
\[A_V = 1 + \frac{90 \text{ kΩ}}{10 \text{ kΩ}} = 1 + 9 = 10\]
Output: \(V_{out} = A_V \times V_{in} = 10 \times 0.5 \text{ V} = 5 \text{ V}\). The output is non-inverting (same polarity as input) and the gain is always ≥ 1. Note: the gain of +10 (non-inverting) differs from −10 (inverting) with the same resistor ratio.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Non-Inverting Amplifier Gain \(A_V = 1 + R_f/R_i\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 3</p>

<p style="color: #333; line-height: 1.75;">
According to the ideal op-amp golden rules, when negative feedback is applied and the non-inverting input is connected to ground, the inverting input is called a "virtual ground." Why?
</p>

<div class="upper-alpha" markdown>

1. The inverting input is directly connected to the circuit ground through a resistor
2. The feedback forces the inverting input to sit at 0 V even though it is not connected to ground
3. Current flows from ground into the inverting input
4. The inverting input is connected to a virtual power supply at 0 V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The first golden rule (virtual short) states that negative feedback forces the two input terminals to the same voltage: \(V_+ = V_-\). When \(V_+ = 0\) V (ground), the feedback drives the output until \(V_- = 0\) V as well — even though the inverting input is not physically connected to ground. This is called a virtual ground: the node is at ground potential but carries no current to ground (since ideal op-amp inputs draw no current, per the second golden rule).
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Virtual Ground and Golden Rules
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 4</p>

<p style="color: #333; line-height: 1.75;">
Why is a voltage follower (unity-gain buffer) useful in circuit design even though its gain is only 1?
</p>

<div class="upper-alpha" markdown>

1. It provides very high input impedance and very low output impedance, isolating circuit stages
2. It increases the signal voltage by unity
3. It filters high-frequency noise from the signal
4. It inverts the signal phase while preserving amplitude

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The voltage follower's value is impedance transformation, not voltage gain. Its very high input impedance (ideally infinite) means it does not load the preceding stage, while its very low output impedance (ideally zero) means it can drive subsequent low-impedance loads without voltage drop. It acts as an isolation barrier between stages, preventing a heavy load from affecting the source that drives it.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Voltage Follower (Buffer Amplifier)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 5</p>

<p style="color: #333; line-height: 1.75;">
A summing amplifier has \(R_f = 100\) kΩ and three equal input resistors \(R_1 = R_2 = R_3 = 100\) kΩ. Inputs are \(V_1 = 1\) V, \(V_2 = 2\) V, \(V_3 = -1\) V. What is the output?
</p>

<div class="upper-alpha" markdown>

1. \(V_{out} = +2\) V
2. \(V_{out} = -2\) V
3. \(V_{out} = +4\) V
4. \(V_{out} = -4\) V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
For a summing amplifier with equal input resistors and feedback resistor \(R_f\):
\[V_{out} = -\frac{R_f}{R}(V_1 + V_2 + V_3) = -\frac{100}{100}(1 + 2 + (-1)) = -(1)(2) = -2 \text{ V}\]
The summing amplifier inverts (due to the inverting topology at virtual ground) and sums all inputs. The output is −2 V, which is the negative sum of the three inputs.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Summing Amplifier
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 6</p>

<p style="color: #333; line-height: 1.75;">
An op-amp has a gain-bandwidth product (GBW) of 10 MHz. If it is configured as a non-inverting amplifier with gain of 100, what is the usable bandwidth of this amplifier?
</p>

<div class="upper-alpha" markdown>

1. 1 GHz
2. 10 MHz
3. 1 MHz
4. 100 kHz

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: D</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The gain-bandwidth product is approximately constant for a given op-amp:
\[BW = \frac{GBW}{A_{CL}} = \frac{10 \text{ MHz}}{100} = 100 \text{ kHz}\]
Higher closed-loop gain comes at the cost of reduced bandwidth. If you need more bandwidth, you must reduce gain or choose an op-amp with a higher GBW. This trade-off is fundamental to op-amp design.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Gain-Bandwidth Product
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 7</p>

<p style="color: #333; line-height: 1.75;">
An op-amp integrator has R = 100 kΩ and C = 10 nF. A constant input of \(V_{in} = 2\) V is applied at t = 0. What is the output after 0.5 ms?
</p>

<div class="upper-alpha" markdown>

1. \(V_{out} = -1\) V
2. \(V_{out} = +1\) V
3. \(V_{out} = -2\) V
4. \(V_{out} = +2\) V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
For the op-amp integrator with constant input: \(V_{out}(t) = -\frac{V_{in} \cdot t}{RC}\). First find the RC time constant:
\[RC = 100 \times 10^3 \times 10 \times 10^{-9} = 1 \text{ ms}\]
At t = 0.5 ms:
\[V_{out} = -\frac{2 \text{ V} \times 0.5 \text{ ms}}{1 \text{ ms}} = -\frac{2 \times 0.5}{1} = -1 \text{ V}\]
The output ramps linearly downward (negative because the integrator inverts) at 2000 V/s.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Op-Amp Integrator Circuit
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 8</p>

<p style="color: #333; line-height: 1.75;">
An op-amp is powered by ±12 V supplies. Its output is driven into saturation. Which of the following best describes what happens?
</p>

<div class="upper-alpha" markdown>

1. The output voltage exceeds the supply rails due to the high open-loop gain
2. The output voltage clamps to approximately ±10–11 V and can no longer respond linearly to the input
3. The op-amp draws zero current from the supply in saturation
4. The output switches rapidly between +12 V and −12 V, producing oscillation

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
When an op-amp is saturated, its output is limited to approximately 1–2 V inside the supply rails — typically ±10 V to ±11 V for ±12 V supplies (standard op-amps; rail-to-rail types can swing closer to the rails). The output is stuck at its maximum value and can no longer amplify the input linearly. The circuit is no longer controlled by the feedback network. Saturation occurs when the required output exceeds what the supply can provide.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Op-Amp Saturation
</p>
</div>
</details>

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Answers Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Question | Answer | Concept Tested |
|----------|--------|----------------|
| 1 | B | Inverting Amplifier Gain |
| 2 | B | Non-Inverting Amplifier Gain |
| 3 | B | Virtual Ground and Golden Rules |
| 4 | A | Voltage Follower (Buffer) |
| 5 | B | Summing Amplifier |
| 6 | D | Gain-Bandwidth Product |
| 7 | A | Op-Amp Integrator |
| 8 | B | Op-Amp Saturation |

</div>

</div>
