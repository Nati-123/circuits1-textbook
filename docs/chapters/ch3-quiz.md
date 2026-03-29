---
title: Chapter 3 Quiz — Kirchhoff's Laws and Circuit Topology
description: Self-assessment quiz covering KCL, KVL, circuit topology, and analysis methods
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 3 Quiz — Kirchhoff's Laws and Circuit Topology</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Test your understanding of Kirchhoff's Laws, circuit topology, and systematic analysis methods. Each question includes a detailed explanation.
</p>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 1</p>

<p style="color: #333; line-height: 1.75;">
At a node, three currents enter: 2 A, 5 A, and 1 A. One current of 4 A leaves. What is the fifth current, and in which direction does it flow?
</p>

<div class="upper-alpha" markdown>

1. 4 A, entering the node
2. 4 A, leaving the node
3. 8 A, leaving the node
4. 8 A, entering the node

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
By KCL: \(\sum I_{in} = \sum I_{out}\). Currents in: \(2 + 5 + 1 = 8\) A. Current out: 4 A. The fifth current must be \(8 - 4 = 4\) A leaving the node to balance.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Kirchhoff's Current Law
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 2</p>

<p style="color: #333; line-height: 1.75;">
A loop contains a 15 V battery and three resistors. The voltage drops across the first two resistors are 6 V and 4 V. What is the voltage across the third resistor?
</p>

<div class="upper-alpha" markdown>

1. 25 V
2. 10 V
3. 5 V
4. 15 V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
By KVL: \(V_s - V_{R1} - V_{R2} - V_{R3} = 0\). So \(15 - 6 - 4 - V_{R3} = 0\), giving \(V_{R3} = 5\) V.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Kirchhoff's Voltage Law
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 3</p>

<p style="color: #333; line-height: 1.75;">
A circuit has 5 nodes and 8 branches. How many independent meshes does it have?
</p>

<div class="upper-alpha" markdown>

1. 3
2. 4
3. 5
4. 8

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Using the topology formula: \(b = n - 1 + m\), so \(8 = 5 - 1 + m\), giving \(m = 4\) independent meshes.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Circuit Topology
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 4</p>

<p style="color: #333; line-height: 1.75;">
When should you use a supernode in the node voltage method?
</p>

<div class="upper-alpha" markdown>

1. When a current source connects two non-reference nodes
2. When a voltage source connects two non-reference nodes
3. When a resistor connects to ground
4. When the circuit has more than three nodes

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
A supernode is needed when a voltage source connects two non-reference nodes. The current through an ideal voltage source is unknown, so standard KCL cannot be applied. The supernode encloses both nodes and adds a constraint equation from the source voltage.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Supernode Technique
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 5</p>

<p style="color: #333; line-height: 1.75;">
To apply superposition in a circuit with two voltage sources, what do you do to each source when analyzing the other?
</p>

<div class="upper-alpha" markdown>

1. Remove the source entirely
2. Replace it with an open circuit
3. Replace it with a short circuit
4. Replace it with a 1 Ω resistor

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
When deactivating a voltage source for superposition, replace it with a short circuit (0 V, wire). Current sources are replaced with open circuits (0 A, break). This preserves the circuit connections while removing the source's contribution.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Superposition Principle
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 6</p>

<p style="color: #333; line-height: 1.75;">
What is the difference between a loop and a mesh?
</p>

<div class="upper-alpha" markdown>

1. A loop must be clockwise; a mesh can be either direction
2. A mesh is a loop that contains no other loops inside it
3. A loop is always planar; a mesh may be non-planar
4. There is no difference — the terms are interchangeable

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
A loop is any closed path through a circuit. A mesh is a special case — a loop that contains no other loops within it (a minimal loop). Every mesh is a loop, but not every loop is a mesh.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Circuit Topology
</p>
</div>
</details>

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Answers Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Question | Answer | Concept Tested |
|----------|--------|----------------|
| 1 | B | Kirchhoff's Current Law |
| 2 | C | Kirchhoff's Voltage Law |
| 3 | B | Circuit Topology |
| 4 | B | Supernode Technique |
| 5 | C | Superposition Principle |
| 6 | B | Circuit Topology |

</div>

</div>
