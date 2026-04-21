---
title: Chapter 4 Quiz — DC Circuit Analysis Methods
description: Self-assessment quiz covering Thevenin/Norton equivalents, source transformation, maximum power transfer, superposition, nodal analysis, and mesh analysis
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 4 Quiz — DC Circuit Analysis Methods</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Test your understanding of Thévenin and Norton equivalents, source transformation, maximum power transfer, and systematic analysis methods. Each question includes a detailed explanation.
</p>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 1</p>

<p style="color: #333; line-height: 1.75;">
To find the Thévenin resistance \(R_{Th}\) of a circuit containing only independent sources and resistors, what do you do to the independent sources?
</p>

<div class="upper-alpha" markdown>

1. Replace all voltage sources with open circuits and all current sources with short circuits
2. Replace all voltage sources with short circuits and all current sources with open circuits
3. Leave all sources as-is and measure the open-circuit voltage
4. Replace all sources with 1 Ω test resistors

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
To find \(R_{Th}\): turn off (zero) all independent sources — voltage sources become short circuits (0 V = wire) and current sources become open circuits (0 A = break) — then compute the resistance looking into the terminals. This reflects the physical meaning: \(R_{Th}\) is the resistance the terminal "sees" with all internal drives removed.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Thévenin Resistance Calculation
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 2</p>

<p style="color: #333; line-height: 1.75;">
A Thévenin equivalent has \(V_{Th} = 12 \text{ V}\) and \(R_{Th} = 4 \text{ k}\Omega\). What is the equivalent Norton current \(I_N\)?
</p>

<div class="upper-alpha" markdown>

1. 48 mA
2. 3 mA
3. 4 mA
4. 12 mA

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The Thévenin-Norton relationship: \(I_N = V_{Th}/R_{Th} = 12 \text{ V} / 4{,}000 \text{ }\Omega = 0.003 \text{ A} = 3 \text{ mA}\). The Norton resistance \(R_N = R_{Th} = 4 \text{ k}\Omega\). These two representations — a voltage source in series with \(R_{Th}\), or a current source in parallel with \(R_N\) — are completely equivalent at the terminals.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Thévenin-Norton Conversion \(I_N = V_{Th}/R_{Th}\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 3</p>

<p style="color: #333; line-height: 1.75;">
A source circuit has a Thévenin equivalent of \(V_{Th} = 20 \text{ V}\) and \(R_{Th} = 5 \text{ k}\Omega\). What load resistance \(R_L\) must be connected to draw maximum power, and what is that maximum power?
</p>

<div class="upper-alpha" markdown>

1. \(R_L = 5 \text{ k}\Omega\), \(P_{max} = 20 \text{ mW}\)
2. \(R_L = 10 \text{ k}\Omega\), \(P_{max} = 40 \text{ mW}\)
3. \(R_L = 5 \text{ k}\Omega\), \(P_{max} = 40 \text{ mW}\)
4. \(R_L = 0 \text{ }\Omega\), \(P_{max} = 80 \text{ mW}\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Maximum power transfer occurs when \(R_L = R_{Th} = 5 \text{ k}\Omega\). The maximum power is: \(P_{max} = V_{Th}^2 / (4 R_{Th}) = (20)^2 / (4 \times 5000) = 400 / 20{,}000 = 0.02 \text{ W} = 20 \text{ mW}\). At this condition, exactly half the voltage appears across the load and half the power is dissipated in \(R_{Th}\) — 50% efficiency is the price of maximum power transfer.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Maximum Power Transfer \(R_L = R_{Th}\), \(P_{max} = V_{Th}^2/4R_{Th}\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 4</p>

<p style="color: #333; line-height: 1.75;">
A circuit has two independent sources: a 10 V voltage source and a 2 mA current source. Using superposition, you find that the 10 V source alone produces a node voltage of 4 V, and the 2 mA source alone produces a node voltage of −1 V at the same node. What is the actual node voltage with both sources active?
</p>

<div class="upper-alpha" markdown>

1. 5 V
2. −4 V
3. 3 V
4. 8 V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Superposition states that the response due to multiple independent sources equals the algebraic sum of the responses due to each source acting alone. Total node voltage = \(4 \text{ V} + (-1 \text{ V}) = 3 \text{ V}\). Superposition applies because the circuit is linear — doubling any source doubles that source's contribution, and contributions add independently.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Superposition Principle
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 5</p>

<p style="color: #333; line-height: 1.75;">
In nodal analysis, what special technique is required when an independent voltage source connects two non-reference nodes?
</p>

<div class="upper-alpha" markdown>

1. The mesh current method must be used instead
2. The voltage source branch is treated as a short circuit
3. A supernode is formed by enclosing both nodes in a single KCL boundary
4. One node voltage is set to zero and the other equals the source voltage

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
When a voltage source connects two non-reference nodes, its current is unknown (an ideal voltage source provides whatever current is needed). A supernode is formed by drawing a boundary around both nodes. KCL is written for the entire supernode boundary (treating it as one "big node"), and the voltage source adds one constraint equation: the voltage difference between the two enclosed nodes equals the source voltage.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Supernode Technique in Nodal Analysis
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 6</p>

<p style="color: #333; line-height: 1.75;">
A current source of 5 mA in parallel with a 2 kΩ resistor is to be converted to its equivalent voltage source representation. What are the values of the equivalent voltage source and its series resistance?
</p>

<div class="upper-alpha" markdown>

1. 2.5 mV in series with 2 kΩ
2. 10 V in series with 2 kΩ
3. 10 V in series with 400 Ω
4. 2.5 V in series with 500 Ω

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Source transformation: a current source \(I_s\) in parallel with resistance \(R\) converts to a voltage source \(V_s = I_s \cdot R\) in series with the same \(R\). Here: \(V_s = 5 \times 10^{-3} \times 2000 = 10 \text{ V}\) in series with \(2 \text{ k}\Omega\). The resistance stays the same; only the source form changes. Both representations are electrically equivalent at the terminals.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Source Transformation \(V_s = I_s \cdot R\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 7</p>

<p style="color: #333; line-height: 1.75;">
In mesh analysis, how is the voltage across a resistor shared by two adjacent meshes (mesh 1 with current \(I_1\) and mesh 2 with current \(I_2\)) expressed in the KVL equation for mesh 1?
</p>

<div class="upper-alpha" markdown>

1. \(V_R = R \cdot I_1\)
2. \(V_R = R \cdot I_2\)
3. \(V_R = R \cdot (I_1 + I_2)\)
4. \(V_R = R \cdot (I_1 - I_2)\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: D</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
When a resistor is shared between two meshes, the actual current through it is the algebraic difference of the two mesh currents. If both mesh currents pass through the shared resistor in the same physical direction, they partly cancel; if in opposite directions they add. In the KVL equation for mesh 1, the voltage drop across the shared resistor is \(R \cdot (I_1 - I_2)\), where \(I_1\) is the "own" mesh current and \(I_2\) is the "neighbor" mesh current flowing in the opposing sense.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Mesh Analysis — Shared Resistor Treatment
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 8</p>

<p style="color: #333; line-height: 1.75;">
A circuit has an output resistance of \(R_{out} = 2 \text{ k}\Omega\) and drives a load with input resistance \(R_{in} = 8 \text{ k}\Omega\). What fraction of the open-circuit source voltage actually appears at the load input?
</p>

<div class="upper-alpha" markdown>

1. 50%
2. 80%
3. 20%
4. 100%

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The connecting circuit forms a voltage divider: \(V_{load}/V_{Th} = R_{in}/(R_{out} + R_{in}) = 8/(2 + 8) = 8/10 = 0.8 = 80\%\). Only 20% is "lost" in the output resistance. The rule of thumb \(R_{in} \geq 10 \times R_{out}\) for under 10% loading loss: here the ratio is 4:1, so 20% loss is noticeable but not catastrophic. Higher load impedance means less loading effect.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Loading Effect and Input/Output Resistance
</p>
</div>
</details>

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Answers Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Question | Answer | Concept Tested |
|----------|--------|----------------|
| 1 | B | Thévenin Resistance Calculation |
| 2 | B | Thévenin-Norton Conversion |
| 3 | A | Maximum Power Transfer |
| 4 | C | Superposition Principle |
| 5 | C | Supernode Technique |
| 6 | B | Source Transformation |
| 7 | D | Mesh Analysis — Shared Resistors |
| 8 | B | Loading Effect |

</div>

</div>
