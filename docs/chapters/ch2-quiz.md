---
title: Chapter 2 Quiz — Ohm's Law and Basic Circuit Configurations
description: Self-assessment quiz covering Ohm's Law, series and parallel circuits, voltage dividers, current dividers, and power
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 2 Quiz — Ohm's Law and Basic Circuit Configurations</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Test your understanding of Ohm's Law, series and parallel resistor combinations, voltage and current dividers, and power calculations. Each question includes a detailed explanation.
</p>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 1</p>

<p style="color: #333; line-height: 1.75;">
Three resistors — 2 kΩ, 3 kΩ, and 5 kΩ — are connected in series across a 20 V source. What is the current flowing through the circuit?
</p>

<div class="upper-alpha" markdown>

1. 10 mA
2. 4 mA
3. 2 mA
4. 20 mA

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Series resistors add: \(R_{total} = 2 + 3 + 5 = 10 \text{ k}\Omega\). Then by Ohm's Law: \(I = V/R_{total} = 20 \text{ V} / 10{,}000 \text{ }\Omega = 0.002 \text{ A} = 2 \text{ mA}\). A key property of series circuits: the same current flows through every element.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Series Resistance \(R_{eq} = R_1 + R_2 + \cdots\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 2</p>

<p style="color: #333; line-height: 1.75;">
Two resistors, 6 kΩ and 3 kΩ, are connected in parallel. What is their equivalent resistance?
</p>

<div class="upper-alpha" markdown>

1. 9 kΩ
2. 4.5 kΩ
3. 2 kΩ
4. 1 kΩ

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Using the product-over-sum formula for two parallel resistors: \(R_{eq} = \frac{R_1 \cdot R_2}{R_1 + R_2} = \frac{6 \times 3}{6 + 3} = \frac{18}{9} = 2 \text{ k}\Omega\). Notice the result is less than either individual resistor — a key property of parallel combinations. Adding parallel paths always reduces overall resistance.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Parallel Resistance \(R_{eq} = R_1 R_2 / (R_1 + R_2)\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 3</p>

<p style="color: #333; line-height: 1.75;">
In a voltage divider, \(V_{in} = 15 \text{ V}\), \(R_1 = 10 \text{ k}\Omega\) (top resistor), and \(R_2 = 5 \text{ k}\Omega\) (bottom resistor connected to ground). What is \(V_{out}\) (the voltage at the junction of R1 and R2)?
</p>

<div class="upper-alpha" markdown>

1. 10 V
2. 7.5 V
3. 5 V
4. 3 V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Using the voltage divider formula: \(V_{out} = V_{in} \cdot \frac{R_2}{R_1 + R_2} = 15 \times \frac{5}{10 + 5} = 15 \times \frac{1}{3} = 5 \text{ V}\). The output voltage is the fraction of input determined by the ratio of the bottom resistor to the total. When \(R_2\) is one-third of the total, the output is one-third of the input.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Voltage Divider Formula
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 4</p>

<p style="color: #333; line-height: 1.75;">
A 100 mA total current enters a parallel combination of \(R_1 = 4 \text{ k}\Omega\) and \(R_2 = 1 \text{ k}\Omega\). How much current flows through \(R_1\)?
</p>

<div class="upper-alpha" markdown>

1. 80 mA
2. 50 mA
3. 25 mA
4. 20 mA

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: D</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Using the current divider formula: \(I_1 = I_{total} \cdot \frac{R_2}{R_1 + R_2} = 100 \times \frac{1}{4 + 1} = 100 \times \frac{1}{5} = 20 \text{ mA}\). Notice that the current through \(R_1\) depends on \(R_2\) in the numerator — more current flows through the lower resistance branch. \(R_1\) has 4× the resistance of \(R_2\), so it carries only 1/5 of the total current while \(R_2\) carries 4/5.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Current Divider Formula
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 5</p>

<p style="color: #333; line-height: 1.75;">
A resistor has 6 V across it and 3 mA through it. How much power does it dissipate?
</p>

<div class="upper-alpha" markdown>

1. 2 mW
2. 9 mW
3. 18 mW
4. 2 W

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Using \(P = VI = 6 \text{ V} \times 3 \times 10^{-3} \text{ A} = 18 \times 10^{-3} \text{ W} = 18 \text{ mW}\). This is the most direct form when both V and I are known. You can verify the resistance is \(R = V/I = 6/0.003 = 2 \text{ k}\Omega\), and check \(P = I^2 R = (0.003)^2 \times 2000 = 18 \text{ mW}\). All three power formulas give the same answer.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Power Calculation \(P = VI\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 6</p>

<p style="color: #333; line-height: 1.75;">
A circuit has a 24 V source, with R1 = 2 kΩ in series with a parallel combination of R2 = 6 kΩ and R3 = 3 kΩ. What is the total current drawn from the source?
</p>

<div class="upper-alpha" markdown>

1. 4 mA
2. 6 mA
3. 8 mA
4. 12 mA

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Step 1: Find \(R_{23}\) (parallel): \(R_{23} = (6 \times 3)/(6 + 3) = 18/9 = 2 \text{ k}\Omega\). Step 2: Total resistance: \(R_{total} = R_1 + R_{23} = 2 + 2 = 4 \text{ k}\Omega\). Step 3: Total current: \(I = 24/4000 = 6 \text{ mA}\). The voltage across the parallel combination is \(6 \text{ mA} \times 2 \text{ k}\Omega = 12 \text{ V}\), and voltages add: \(12 + 12 = 24\) V. ✓
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Series-Parallel Circuit Analysis
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 7</p>

<p style="color: #333; line-height: 1.75;">
A resistor is rated at 1/4 W (0.25 W). If 5 V is applied across it, what is the minimum resistance it can safely have?
</p>

<div class="upper-alpha" markdown>

1. 25 Ω
2. 100 Ω
3. 1.25 kΩ
4. 500 Ω

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Set power equal to the rating and solve for R: \(P = V^2/R\), so \(R = V^2/P = (5)^2/0.25 = 25/0.25 = 100 \text{ }\Omega\). Any resistance lower than 100 Ω would dissipate more than 0.25 W and risk damaging the resistor. For safety, you would derate to 50–70% of the rating and choose an even higher value resistor.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Component Power Rating
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 8</p>

<p style="color: #333; line-height: 1.75;">
A voltage divider uses R1 = 10 kΩ and R2 = 10 kΩ across a 5 V source. A 10 kΩ load resistor is then connected in parallel with R2. What is the output voltage across the load?
</p>

<div class="upper-alpha" markdown>

1. 2.5 V
2. 3.33 V
3. 1.67 V
4. 5 V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The 10 kΩ load parallels R2 (10 kΩ): \(R_{2,eff} = 10k \| 10k = 5 \text{ k}\Omega\). Now the divider is R1 = 10 kΩ, \(R_{2,eff}\) = 5 kΩ: \(V_{out} = 5 \times \frac{5}{10+5} = 5 \times \frac{1}{3} = 1.67 \text{ V}\). Without the load it was 2.5 V — the load dragged it down to 1.67 V, a 33% reduction. This is the loading effect, and it is why high-impedance inputs matter.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Voltage Divider Loading Effect
</p>
</div>
</details>

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Answers Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Question | Answer | Concept Tested |
|----------|--------|----------------|
| 1 | C | Series Resistance |
| 2 | C | Parallel Resistance |
| 3 | C | Voltage Divider Formula |
| 4 | D | Current Divider Formula |
| 5 | C | Power Calculation |
| 6 | B | Series-Parallel Circuit Analysis |
| 7 | B | Component Power Rating |
| 8 | C | Voltage Divider Loading Effect |

</div>

</div>
