---
title: Chapter 16 Quiz — Laboratory Measurement Techniques
description: Self-assessment quiz covering oscilloscope operation, multimeter usage, probe compensation, triggering, loading effects, and safety
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 16 Quiz — Laboratory Measurement Techniques</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Test your understanding of oscilloscope operation, multimeter techniques, probe selection, triggering, loading effects, and laboratory safety. Each question includes a detailed explanation.
</p>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 1</p>

<p style="color: #333; line-height: 1.75;">
An oscilloscope displays a waveform that appears to slowly drift across the screen despite the signal being perfectly stable. What is the most likely cause and the correct fix?
</p>

<div class="upper-alpha" markdown>

1. The volts/division setting is too high; reduce it so the waveform fills the screen
2. The time base is too slow; set a faster time/division
3. The trigger level is not set within the waveform's amplitude range; adjust the trigger level to cross the waveform
4. The AC coupling is blocking the waveform; switch to DC coupling

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
A drifting display is a classic symptom of incorrect triggering. The oscilloscope starts a new sweep at a different random point on the waveform each time because the trigger level is not being crossed consistently. Setting the trigger level to a voltage that falls within the waveform's amplitude range (typically through the rising or falling portion) ensures the scope always starts at the same relative phase — producing a stable, stationary display.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Oscilloscope Triggering
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 2</p>

<p style="color: #333; line-height: 1.75;">
A 10X oscilloscope probe is connected to a 1 kHz calibration square wave. The displayed waveform shows rounded corners with no overshoot. What condition does this indicate and how should it be corrected?
</p>

<div class="upper-alpha" markdown>

1. Over-compensated probe; decrease the trimmer capacitor on the probe
2. Under-compensated probe; increase the trimmer capacitor on the probe
3. Correct compensation; no adjustment needed
4. The time base is too slow; reduce time/division to see the sharp edges

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Rounded corners (slow rise time, no flat top at the correct level immediately) indicate an under-compensated probe. The probe's compensating capacitor is too small relative to the oscilloscope input capacitance, causing high-frequency attenuation. Increasing the trimmer capacitor (adjusting the screw on the probe body) adds more high-frequency compensation until the square wave shows flat tops and sharp corners. An over-compensated probe shows overshoot (spikes) at the corners.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Probe Compensation (10X Probe)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 3</p>

<p style="color: #333; line-height: 1.75;">
You need to measure current through a branch of a powered circuit using a multimeter. What is the correct procedure?
</p>

<div class="upper-alpha" markdown>

1. Place the multimeter probes in parallel with the branch and set it to current (A) mode
2. Break the circuit in that branch, insert the multimeter in series in current (A) mode
3. Measure voltage across a known resistor in parallel, then calculate current
4. Touch one probe to the positive rail and one to the branch, in voltage mode

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Ammeters (current meters) have very low internal resistance and must be placed in series so the current flows through them. Connecting a current meter in parallel creates a near-short circuit that can destroy the meter's fuse or damage the circuit. The correct procedure is to power off the circuit, break the wire in the branch being measured, connect the meter in series (current flows through it), then power on and read the current.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Current Measurement with Multimeter
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 4</p>

<p style="color: #333; line-height: 1.75;">
A sensor circuit has a Thevenin source impedance of 500 kΩ. You measure its output with a 10 MΩ multimeter and read 3.8 V. What is the actual (unloaded) voltage of the sensor?
</p>

<div class="upper-alpha" markdown>

1. 3.80 V (the measurement is accurate because 10 MΩ >> 500 kΩ)
2. 4.0 V
3. 7.6 V
4. 3.61 V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The voltage divider formed by source impedance (500 kΩ) and meter impedance (10 MΩ = 10,000 kΩ) gives:
\[V_{measured} = V_{actual} \times \frac{10000}{10000 + 500} = V_{actual} \times \frac{10000}{10500} = V_{actual} \times 0.952\]
Solving: \(V_{actual} = 3.8/0.952 = 3.99 \approx 4.0\) V. Even though 10 MΩ seems much larger than 500 kΩ, loading still causes a 5% error. When source impedance is more than about 1% of the meter impedance, loading error becomes significant.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Loading Error in Voltage Measurement
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 5</p>

<p style="color: #333; line-height: 1.75;">
You are viewing a 1 kHz sine wave on an oscilloscope and want to display exactly 3 complete cycles. What time/division setting should you choose? (The screen has 10 horizontal divisions.)
</p>

<div class="upper-alpha" markdown>

1. 100 μs/div
2. 300 μs/div
3. 1 ms/div
4. 30 μs/div

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The period of a 1 kHz signal is \(T = 1/f = 1/1000 = 1\) ms. Three cycles need a total time of \(3 \times 1\text{ ms} = 3\) ms. With 10 divisions across the screen:
\[\text{Time/div} = \frac{3 \text{ ms}}{10 \text{ divisions}} = 300 \text{ μs/div}\]
This is a standard scope setting that would display three full, well-proportioned waveform cycles for easy measurement of period, amplitude, and shape.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Oscilloscope Time Base Setting
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 6</p>

<p style="color: #333; line-height: 1.75;">
When should AC coupling be selected on an oscilloscope input instead of DC coupling?
</p>

<div class="upper-alpha" markdown>

1. When measuring a DC voltage level precisely
2. When examining a small AC ripple voltage riding on top of a large DC supply voltage
3. When measuring the full amplitude of a square wave with DC offset
4. Always — AC coupling is better for all measurements

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
AC coupling blocks the DC component of the signal, allowing only the AC variation to be displayed. This is ideal when a small AC ripple (say, 50 mV) sits on top of a large DC voltage (say, 12 V). In DC coupling mode, the large DC offset would push the small AC signal off the screen even at high volts/div. With AC coupling, the DC is blocked and the small AC ripple fills the screen at a sensitive setting. For measuring DC levels or the complete waveform including offset, use DC coupling.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> AC vs. DC Coupling
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 7</p>

<p style="color: #333; line-height: 1.75;">
Why is a 10X probe preferred over a 1X (direct) probe for most oscilloscope measurements, even though the 10X probe reduces the displayed signal by a factor of 10?
</p>

<div class="upper-alpha" markdown>

1. The 10X probe amplifies the signal at the probe tip, improving sensitivity
2. The 10X probe has higher input impedance and lower capacitance, causing less loading and wider bandwidth
3. The 10X probe is required for safety with any voltage above 1 V
4. The 10X probe provides better accuracy only for DC signals

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
A 10X probe uses an internal resistor divider that raises the input impedance from 1 MΩ (1X) to 10 MΩ, and reduces input capacitance from ~100 pF to ~10–15 pF. The higher impedance causes less loading on the circuit under test, and the lower capacitance reduces distortion of high-frequency signals (fast edges). The 10X probe also has a much wider usable bandwidth — typically 200–500 MHz versus 10–20 MHz for a direct probe. The only trade-off is reduced sensitivity to very small signals.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> 1X vs. 10X Probe Selection
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 8</p>

<p style="color: #333; line-height: 1.75;">
Which of the following is a correct safety practice when working with circuits in the laboratory?
</p>

<div class="upper-alpha" markdown>

1. It is safe to make all connections while the circuit is powered, as long as the voltage is below 50 V DC
2. Always power off the circuit before making or changing connections, and use one hand when probing live circuits to avoid completing a path through your body
3. Large capacitors can be safely handled immediately after power-off since they discharge through the circuit resistors
4. Jewelry such as rings and watches should be worn to protect against accidental contact with components

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; font-weight: 700; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The two most important lab safety rules are: (1) power off before making connections to avoid accidental short circuits and component damage; and (2) use the one-hand rule when probing live circuits — keeping one hand in your pocket or behind your back prevents current from flowing hand-to-hand across your chest and heart, which is the most dangerous shock path. Large capacitors can hold lethal charge long after power-off and must be deliberately discharged. Metal jewelry can create unintended short circuits and should be removed.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Electrical Safety Practices
</p>
</div>
</details>

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Answers Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Question | Answer | Concept Tested |
|----------|--------|----------------|
| 1 | C | Oscilloscope Triggering |
| 2 | B | Probe Compensation |
| 3 | B | Current Measurement with Multimeter |
| 4 | B | Loading Error in Voltage Measurement |
| 5 | B | Oscilloscope Time Base Setting |
| 6 | B | AC vs. DC Coupling |
| 7 | B | 1X vs. 10X Probe Selection |
| 8 | B | Electrical Safety Practices |

</div>

</div>
