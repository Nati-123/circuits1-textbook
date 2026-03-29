---
title: Chapter 3 Problems — Kirchhoff's Laws and Circuit Topology
description: Practice problems covering KCL, KVL, node voltage, mesh current, superposition, and delta-wye
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 3 Problems</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Practice problems for Kirchhoff's Laws and circuit topology. Problems range from conceptual to computational, organized by topic.
</p>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">KCL Problems</h2>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Problem 3.1</h3>

<p style="color: #333; line-height: 1.75;">
Five wires meet at a node. Currents in four of the wires are: 3 A (in), 7 A (out), 2 A (in), and 1 A (in). Find the current in the fifth wire and state its direction.
</p>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Solution</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
By KCL: \(\sum I_{in} = \sum I_{out}\). In: \(3 + 2 + 1 = 6\) A. Out: 7 A. Since more current leaves than enters, the fifth wire must carry \(7 - 6 = 1\) A <strong>into</strong> the node.
</p>
</div>
</details>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Problem 3.2</h3>

<p style="color: #333; line-height: 1.75;">
At a node, \(I_1 = 10\) mA enters and splits into three branches. If \(I_2 = 3\) mA and \(I_3 = 5\) mA, find \(I_4\).
</p>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Solution</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
\(I_4 = I_1 - I_2 - I_3 = 10 - 3 - 5 = 2\) mA leaving the node.
</p>
</div>
</details>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">KVL Problems</h2>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Problem 3.3</h3>

<p style="color: #333; line-height: 1.75;">
A single loop contains a 24 V battery and four equal resistors. What is the voltage across each resistor?
</p>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Solution</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
By KVL, the total voltage drop equals the source: \(4V_R = 24\) V, so \(V_R = 6\) V across each resistor.
</p>
</div>
</details>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Problem 3.4</h3>

<p style="color: #333; line-height: 1.75;">
A loop has two voltage sources: \(V_1 = 10\) V and \(V_2 = 4\) V (opposing), and two resistors \(R_1 = 3\;\Omega\) and \(R_2 = 3\;\Omega\). Find the loop current and verify KVL.
</p>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Solution</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #333; line-height: 1.75;">
Net voltage: \(10 - 4 = 6\) V. Total resistance: \(3 + 3 = 6\;\Omega\). Current: \(I = 6/6 = 1\) A.
</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
KVL check: \(+10 - (1)(3) - (1)(3) - 4 = 10 - 3 - 3 - 4 = 0\) ✓
</p>
</div>
</details>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Topology Problems</h2>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Problem 3.5</h3>

<p style="color: #333; line-height: 1.75;">
A circuit has 3 nodes and 4 branches. (a) How many independent KCL equations can you write? (b) How many independent meshes are there?
</p>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Solution</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
(a) KCL equations: \(n - 1 = 3 - 1 = 2\).<br/>
(b) Using \(b = n - 1 + m\): \(4 = 2 + m\), so \(m = 2\) meshes.
</p>
</div>
</details>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Node Voltage & Mesh Current Problems</h2>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Problem 3.6</h3>

<p style="color: #333; line-height: 1.75;">
A 20 V source connects to node A through \(R_1 = 5\;\text{k}\Omega\). Node A connects to ground through \(R_2 = 10\;\text{k}\Omega\). Use the node voltage method to find \(V_A\).
</p>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Solution</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
KCL at node A: \(\frac{V_A - 20}{5\text{k}} + \frac{V_A}{10\text{k}} = 0\). Multiply by 10k: \(2(V_A - 20) + V_A = 0\), so \(3V_A = 40\), giving \(V_A = 13.33\) V. This is simply a voltage divider: \(V_A = 20 \times \frac{10}{5+10} = 13.33\) V.
</p>
</div>
</details>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Problem 3.7</h3>

<p style="color: #333; line-height: 1.75;">
Two meshes share a \(4\;\Omega\) resistor. Mesh 1 contains a 10 V source and a \(2\;\Omega\) resistor. Mesh 2 contains a \(6\;\Omega\) resistor. Find both mesh currents.
</p>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Solution</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #333; line-height: 1.75;">
Mesh 1: \(-10 + 2I_1 + 4(I_1 - I_2) = 0 \;\Rightarrow\; 6I_1 - 4I_2 = 10\)<br/>
Mesh 2: \(4(I_2 - I_1) + 6I_2 = 0 \;\Rightarrow\; -4I_1 + 10I_2 = 0\)
</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
From equation 2: \(I_1 = 2.5 I_2\). Substituting: \(6(2.5 I_2) - 4I_2 = 10\), so \(11I_2 = 10\), giving \(I_2 = 0.909\) A and \(I_1 = 2.273\) A.
</p>
</div>
</details>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Delta-Wye Problems</h2>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Problem 3.8</h3>

<p style="color: #333; line-height: 1.75;">
Convert a delta configuration with \(R_a = 12\;\Omega\), \(R_b = 6\;\Omega\), \(R_c = 18\;\Omega\) to its equivalent wye.
</p>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Solution</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
\(\sum R_\Delta = 12 + 6 + 18 = 36\;\Omega\)<br/><br/>
\(R_1 = \frac{R_a R_b}{\sum} = \frac{12 \times 6}{36} = 2\;\Omega\)<br/><br/>
\(R_2 = \frac{R_b R_c}{\sum} = \frac{6 \times 18}{36} = 3\;\Omega\)<br/><br/>
\(R_3 = \frac{R_a R_c}{\sum} = \frac{12 \times 18}{36} = 6\;\Omega\)
</p>
</div>
</details>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Conceptual Problems</h2>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Problem 3.9</h3>

<p style="color: #333; line-height: 1.75;">
Explain why superposition cannot be used to calculate power directly, even though it works for voltage and current.
</p>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Solution</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Superposition relies on linearity. Power is proportional to \(I^2\) or \(V^2\), which are nonlinear functions. The square of a sum is not equal to the sum of squares: \((I_1 + I_2)^2 \neq I_1^2 + I_2^2\). You must first find the total current or voltage using superposition, then calculate power from the combined result.
</p>
</div>
</details>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Problem 3.10</h3>

<p style="color: #333; line-height: 1.75;">
A circuit has 6 nodes and you want to minimize the number of equations. Would you use the node voltage method or the mesh current method? Justify your choice.
</p>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Solution</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The node voltage method requires \(n - 1 = 5\) equations. Without knowing the mesh count, you cannot be certain. However, if the circuit is planar and has fewer meshes than 5, the mesh method would be better. If the circuit has many parallel branches (few meshes), use mesh analysis. If it has many series elements (few nodes relative to meshes), use node voltage analysis. The general rule: choose whichever produces fewer equations.
</p>
</div>
</details>

</div>
