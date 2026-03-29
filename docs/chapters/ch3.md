---
title: Chapter 3 — Kirchhoff's Laws and Circuit Topology
description: Conservation laws and systematic methods for analyzing any electrical circuit including KCL, KVL, circuit topology, node voltage, mesh current, and delta-wye transformation
---

<div class="unit1-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 3 — Kirchhoff's Laws and Circuit Topology</h1>

<details class="video-overview">
<summary><strong>Chapter Overview</strong> (click to expand)</summary>

This chapter introduces the two fundamental conservation laws that govern all electrical circuits: Kirchhoff's Current Law (KCL) and Kirchhoff's Voltage Law (KVL). While Ohm's Law describes the behavior of individual components, Kirchhoff's Laws describe what happens at connections — where currents meet at nodes and voltages distribute around loops.

Combined with circuit topology and systematic methods, these laws make it possible to solve any linear DC circuit, no matter how complex.

**Key Takeaways**

1. KCL enforces conservation of charge at every node; KVL enforces conservation of energy around every closed loop.
2. The node voltage method and mesh current method provide systematic procedures that can solve any linear circuit.
3. Delta-wye transformations convert between equivalent resistor configurations, enabling simplification of circuits that series/parallel rules alone cannot handle.

</details>

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Concepts Covered</h2>

<div style="background: #F8F6FF; border: 2px solid #D4C8FF; border-radius: 12px; padding: 20px 24px; margin: 1rem 0;" markdown>

1. Kirchhoff's Current Law (KCL)
2. Kirchhoff's Voltage Law (KVL)
3. Loop
4. Mesh
5. Circuit Topology
6. Node Voltage Method
7. Reference Node
8. Supernode
9. Mesh Current Method
10. Supermesh
11. Superposition Principle
12. Load Resistance
13. Equivalent Resistance
14. Delta Configuration
15. Wye Configuration
16. Delta-Wye Transformation
17. Circuit Simplification

</div>

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Prerequisites</h2>

<div style="background: #F8F6FF; border: 2px solid #D4C8FF; border-radius: 12px; padding: 20px 24px; margin: 1rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

Before beginning this chapter, students should have:

- Understanding of electric charge, voltage, current, power, and resistance (Chapter 1)
- Mastery of Ohm's Law, series and parallel circuits, and voltage/current dividers (Chapter 2)
- Familiarity with circuit schematic symbols and conventions

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Concept Map</h2>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.2rem;">
The following diagram shows how Chapter 3 concepts build upon Chapters 1–2 and relate to each other.
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px; margin: 1rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07); overflow-x: auto;">
<svg viewBox="0 0 780 520" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:780px;display:block;margin:0 auto;" font-family="Roboto, Segoe UI, sans-serif">
  <!-- Row 0: Ch1 -->
  <rect x="250" y="10" width="280" height="44" rx="10" fill="#F8F6FF" stroke="#5A3EED" stroke-width="2"/>
  <text x="390" y="37" text-anchor="middle" font-size="13" fill="#333"><tspan font-weight="700">Ch 1:</tspan> Charge, Voltage, Current, Resistance</text>
  <!-- Arrow 0→1 -->
  <line x1="390" y1="54" x2="390" y2="76" stroke="#5A3EED" stroke-width="2" marker-end="url(#arr)"/>

  <!-- Row 1: Ch2 -->
  <rect x="250" y="76" width="280" height="44" rx="10" fill="#F8F6FF" stroke="#5A3EED" stroke-width="2"/>
  <text x="390" y="103" text-anchor="middle" font-size="13" fill="#333"><tspan font-weight="700">Ch 2:</tspan> Ohm's Law, Series &amp; Parallel</text>
  <!-- Arrows 1→2 and 1→DY -->
  <line x1="390" y1="120" x2="390" y2="152" stroke="#5A3EED" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="500" y1="120" x2="650" y2="152" stroke="#5A3EED" stroke-width="2" marker-end="url(#arr)"/>

  <!-- Row 2: Topology center -->
  <rect x="265" y="152" width="250" height="44" rx="10" fill="#EEF4FF" stroke="#A8C8FF" stroke-width="2"/>
  <text x="390" y="179" text-anchor="middle" font-size="13" fill="#333"><tspan font-weight="700">Nodes &amp; Branches</tspan> — Circuit Topology</text>
  <!-- Delta-Wye right -->
  <rect x="575" y="152" width="180" height="44" rx="10" fill="#FFF7DD" stroke="#F0D87A" stroke-width="2"/>
  <text x="665" y="179" text-anchor="middle" font-size="13" fill="#333"><tspan font-weight="700">Delta-Wye</tspan> Transform</text>

  <!-- Arrows from Topology → KCL, KVL, Loops -->
  <line x1="330" y1="196" x2="170" y2="232" stroke="#5A3EED" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="390" y1="196" x2="390" y2="232" stroke="#5A3EED" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="450" y1="196" x2="580" y2="232" stroke="#5A3EED" stroke-width="2" marker-end="url(#arr)"/>

  <!-- Row 3: KCL, Loops & Meshes, KVL -->
  <rect x="55" y="232" width="230" height="44" rx="10" fill="#E7F7E7" stroke="#81C784" stroke-width="2"/>
  <text x="170" y="259" text-anchor="middle" font-size="13" fill="#333"><tspan font-weight="700">KCL</tspan> — Conservation of Charge</text>

  <rect x="305" y="232" width="170" height="44" rx="10" fill="#EEF4FF" stroke="#A8C8FF" stroke-width="2"/>
  <text x="390" y="259" text-anchor="middle" font-size="13" fill="#333"><tspan font-weight="700">Loops &amp; Meshes</tspan></text>

  <rect x="500" y="232" width="230" height="44" rx="10" fill="#E7F7E7" stroke="#81C784" stroke-width="2"/>
  <text x="615" y="259" text-anchor="middle" font-size="13" fill="#333"><tspan font-weight="700">KVL</tspan> — Conservation of Energy</text>

  <!-- Arrows Row3 → Row4 -->
  <line x1="170" y1="276" x2="170" y2="312" stroke="#5A3EED" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="615" y1="276" x2="615" y2="312" stroke="#5A3EED" stroke-width="2" marker-end="url(#arr)"/>
  <!-- KCL → Superposition, KVL → Superposition -->
  <line x1="240" y1="276" x2="370" y2="312" stroke="#5A3EED" stroke-width="1.5" stroke-dasharray="6,3" marker-end="url(#arr)"/>
  <line x1="540" y1="276" x2="420" y2="312" stroke="#5A3EED" stroke-width="1.5" stroke-dasharray="6,3" marker-end="url(#arr)"/>

  <!-- Row 4: Node Voltage, Superposition, Mesh Current -->
  <rect x="55" y="312" width="230" height="44" rx="10" fill="#FFF7DD" stroke="#F0D87A" stroke-width="2"/>
  <text x="170" y="339" text-anchor="middle" font-size="13" fill="#333"><tspan font-weight="700">Node Voltage Method</tspan></text>

  <rect x="310" y="312" width="160" height="44" rx="10" fill="#FFF7DD" stroke="#F0D87A" stroke-width="2"/>
  <text x="390" y="339" text-anchor="middle" font-size="13" fill="#333"><tspan font-weight="700">Superposition</tspan></text>

  <rect x="500" y="312" width="230" height="44" rx="10" fill="#FFF7DD" stroke="#F0D87A" stroke-width="2"/>
  <text x="615" y="339" text-anchor="middle" font-size="13" fill="#333"><tspan font-weight="700">Mesh Current Method</tspan></text>

  <!-- Arrows → Row 5 special cases -->
  <line x1="120" y1="356" x2="120" y2="392" stroke="#5A3EED" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="660" y1="356" x2="660" y2="392" stroke="#5A3EED" stroke-width="2" marker-end="url(#arr)"/>
  <!-- Node Voltage → Matrix -->
  <line x1="220" y1="356" x2="340" y2="392" stroke="#5A3EED" stroke-width="1.5" stroke-dasharray="6,3" marker-end="url(#arr)"/>
  <!-- Mesh Current → Matrix -->
  <line x1="560" y1="356" x2="440" y2="392" stroke="#5A3EED" stroke-width="1.5" stroke-dasharray="6,3" marker-end="url(#arr)"/>

  <!-- Row 5: Supernode, Matrix Methods, Supermesh -->
  <rect x="30" y="392" width="180" height="40" rx="10" fill="#FFF7DD" stroke="#F0D87A" stroke-width="2"/>
  <text x="120" y="416" text-anchor="middle" font-size="13" fill="#333">Supernode</text>

  <rect x="290" y="392" width="200" height="40" rx="10" fill="#EEF4FF" stroke="#A8C8FF" stroke-width="2"/>
  <text x="390" y="416" text-anchor="middle" font-size="13" fill="#333"><tspan font-weight="700">Matrix Methods</tspan></text>

  <rect x="570" y="392" width="180" height="40" rx="10" fill="#FFF7DD" stroke="#F0D87A" stroke-width="2"/>
  <text x="660" y="416" text-anchor="middle" font-size="13" fill="#333">Supermesh</text>

  <!-- Arrows → Circuit Simplification -->
  <line x1="390" y1="432" x2="390" y2="462" stroke="#5A3EED" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="665" y1="196" x2="665" y2="440" stroke="#5A3EED" stroke-width="1.5" stroke-dasharray="6,3"/>
  <line x1="665" y1="440" x2="530" y2="462" stroke="#5A3EED" stroke-width="1.5" stroke-dasharray="6,3" marker-end="url(#arr)"/>
  <!-- Superposition → Simplification -->
  <line x1="390" y1="356" x2="340" y2="462" stroke="#5A3EED" stroke-width="1.5" stroke-dasharray="6,3" marker-end="url(#arr)"/>

  <!-- Row 6: Circuit Simplification -->
  <rect x="255" y="462" width="270" height="44" rx="10" fill="#E7F7E7" stroke="#81C784" stroke-width="2"/>
  <text x="390" y="489" text-anchor="middle" font-size="14" font-weight="700" fill="#333">Circuit Simplification</text>

  <!-- Arrow marker -->
  <defs>
    <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#5A3EED"/>
    </marker>
  </defs>
</svg>
</div>

---

<h2 id="31-kcl" style="color: #5A3EED !important; border-left: none !important; border-bottom: 2px solid #5A3EED; padding-left: 0 !important; padding-bottom: 0.4rem; font-weight: 800; margin-top: 2.2rem; margin-bottom: 0.8rem;">3.1 Kirchhoff's Current Law (KCL)</h2>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.2rem;">
<strong style="color: #333;">Kirchhoff's Current Law</strong> is a direct consequence of the conservation of electric charge. It states that the algebraic sum of all currents entering and leaving any node in a circuit must equal zero. Every coulomb of charge that arrives at a node must also depart — charge cannot accumulate at a junction.
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 1rem 0 1.2rem 0; text-align: center; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

$$\sum_{k=1}^{n} i_k = 0$$

</div>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.5rem;">
Equivalently, the total current flowing into a node equals the total current flowing out. By convention, currents entering a node are assigned positive signs and currents leaving are assigned negative signs. Consistent application of this sign convention ensures correct results.
</p>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Applying KCL — Example</h3>

<div style="background: #FFF7DD; border: 2px solid #F0D87A; border-radius: 10px; padding: 24px; margin: 1.5rem 0;" markdown>
<p style="color: #B8860B; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Example 3.1 — KCL at a Three-Wire Node</p>

<p style="color: #555; line-height: 1.75;">
A node where three wires meet. Current \(I_1 = 5\) A flows in and \(I_2 = 3\) A flows in. Find the current through the third wire.
</p>

<p style="color: #555; line-height: 1.75;">
By KCL (currents entering as positive): \(I_1 + I_2 + I_3 = 0\)
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 10px 0; text-align: center;" markdown>

$$5 + 3 + I_3 = 0 \quad \Rightarrow \quad I_3 = -8 \text{ A}$$

</div>

<p style="color: #555; line-height: 1.75; margin-bottom: 1rem;">
The negative sign indicates 8 A flows <strong>out</strong> of the node.
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 10px 0;" markdown>

| Current | Direction | Value |
|---------|-----------|-------|
| \(I_1\) | Into node | +5 A |
| \(I_2\) | Into node | +3 A |
| \(I_3\) | Out of node | −8 A |
| **Sum** | — | **0 A** |

</div>
</div>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">KCL at a Four-Wire Node — Example</h3>

<div style="background: #FFF7DD; border: 2px solid #F0D87A; border-radius: 10px; padding: 24px; margin: 1.5rem 0;" markdown>
<p style="color: #B8860B; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Example 3.2 — KCL with Four Currents</p>

<p style="color: #555; line-height: 1.75;">
At a node, \(I_1 = 4\) A enters, \(I_2 = 6\) A leaves, and \(I_3 = 2\) A enters. Find \(I_4\).
</p>

<p style="color: #555; line-height: 1.75;">
Using the convention that currents entering are positive:
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 10px 0; text-align: center;" markdown>

$$4 + (-6) + 2 + I_4 = 0 \quad \Rightarrow \quad I_4 = 0 \text{ A}$$

</div>

<p style="color: #555; line-height: 1.75; margin-bottom: 0;">
The fourth wire carries zero current — the inflows and outflows already balance through the other three wires.
</p>
</div>

---

<h2 id="32-kvl" style="color: #5A3EED !important; border-left: none !important; border-bottom: 2px solid #5A3EED; padding-left: 0 !important; padding-bottom: 0.4rem; font-weight: 800; margin-top: 2.2rem; margin-bottom: 0.8rem;">3.2 Kirchhoff's Voltage Law (KVL)</h2>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.2rem;">
<strong style="color: #333;">Kirchhoff's Voltage Law</strong> is a consequence of conservation of energy. It states that the algebraic sum of all voltages around any closed loop in a circuit must equal zero. Voltage rises from sources are exactly balanced by voltage drops across components.
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 1rem 0 1.2rem 0; text-align: center; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

$$\sum_{k=1}^{n} v_k = 0$$

</div>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Sign Convention for KVL</h3>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1rem;">
Correct application of KVL requires a consistent sign convention:
</p>

<ul style="list-style: none; padding-left: 0.8rem; margin: 0.8rem 0 1.2rem 0;">
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Choose a traversal direction</strong> for the loop (clockwise is conventional)</li>
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Voltage sources:</strong> Entering − and exiting + is a rise (+V). The reverse is a drop (−V).</li>
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Resistors:</strong> Traversing in the direction of current is a drop (−IR). Against current is a rise (+IR).</li>
</ul>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">KVL Example — Series Resistor Circuit</h3>

<div style="background: #FFF7DD; border: 2px solid #F0D87A; border-radius: 10px; padding: 24px; margin: 1.5rem 0;" markdown>
<p style="color: #B8860B; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Example 3.3 — KVL in a Single Loop</p>

<p style="color: #555; line-height: 1.75;">
A circuit has a 12 V battery and three series resistors: \(R_1 = 2\;\Omega\), \(R_2 = 3\;\Omega\), \(R_3 = 1\;\Omega\).
</p>

<p style="color: #555; line-height: 1.75;">
First, determine the current:
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 10px 0; text-align: center;" markdown>

$$I = \frac{V_{source}}{R_{total}} = \frac{12}{2+3+1} = \frac{12}{6} = 2 \text{ A}$$

</div>

<p style="color: #555; line-height: 1.75;">
Apply KVL clockwise starting at the battery's negative terminal:
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 10px 0; text-align: center;" markdown>

$$+12 - (2)(2) - (2)(3) - (2)(1) = +12 - 4 - 6 - 2 = 0 \quad \checkmark$$

</div>

<p style="color: #555; line-height: 1.75; margin-bottom: 0;">
The 12 V supplied by the battery is entirely dissipated across the three resistors, confirming conservation of energy.
</p>
</div>

<h4 style="color: #5A3EED; font-weight: 700; margin-top: 2rem; margin-bottom: 0.8rem;">Interactive Simulation: KVL Loop Voltage Sum</h4>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px; margin: 1rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);">
<iframe src="../../sims/kvl-loop-simulator/main.html" width="100%" height="580px" scrolling="no" style="border:none; border-radius:8px; overflow:hidden;"></iframe>
</div>

<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(56,142,60,0.08);">
<p style="color: #2E7D32; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 10px;">Learning Objectives — KVL Simulator</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
<strong>Bloom Level:</strong> Apply (L3) &nbsp;|&nbsp; <strong>Bloom Verb:</strong> Calculate, verify<br/>
Students will verify KVL by adjusting source voltage and resistor values, observing that the sum of voltage drops always equals the source voltage regardless of component values.
</p>
</div>

---

<h2 id="33-topology" style="color: #5A3EED !important; border-left: none !important; border-bottom: 2px solid #5A3EED; padding-left: 0 !important; padding-bottom: 0.4rem; font-weight: 800; margin-top: 2.2rem; margin-bottom: 0.8rem;">3.3 Circuit Topology</h2>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.2rem;">
<strong style="color: #333;">Circuit topology</strong> is the study of how components are interconnected, independent of component type or value. Topological analysis determines the number of independent equations required to fully solve a circuit.
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Term | Definition |
|------|------------|
| **Node** | A point where two or more components connect |
| **Branch** | A path containing a single component between two nodes |
| **Loop** | Any closed path through a circuit |
| **Mesh** | A loop that contains no other loops within it (a minimal loop) |

</div>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">The Topology Formula</h3>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1rem;">
The relationship between branches, nodes, and independent meshes is:
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 1rem 0 1.2rem 0; text-align: center; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

$$b = n - 1 + m$$

</div>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.2rem;">
where \(b\) is the number of branches, \(n\) is the number of nodes, and \(m\) is the number of independent meshes. KCL yields \(n-1\) independent equations and KVL yields \(m\) independent equations.
</p>

<div style="background: #FFF7DD; border: 2px solid #F0D87A; border-radius: 10px; padding: 24px; margin: 1.5rem 0;" markdown>
<p style="color: #B8860B; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Example 3.4 — Counting Topology Elements</p>

<p style="color: #555; line-height: 1.75;">
A circuit has 4 nodes and 6 branches. How many independent meshes does it have?
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 10px 0; text-align: center;" markdown>

$$b = n - 1 + m \quad \Rightarrow \quad 6 = 4 - 1 + m \quad \Rightarrow \quad m = 3$$

</div>

<p style="color: #555; line-height: 1.75; margin-bottom: 0;">
Three independent meshes means we need 3 KVL equations (or equivalently, 3 KCL equations at the \(n-1 = 3\) non-reference nodes).
</p>
</div>

---

<h2 id="34-node-voltage" style="color: #5A3EED !important; border-left: none !important; border-bottom: 2px solid #5A3EED; padding-left: 0 !important; padding-bottom: 0.4rem; font-weight: 800; margin-top: 2.2rem; margin-bottom: 0.8rem;">3.4 The Node Voltage Method</h2>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.2rem;">
The <strong style="color: #333;">node voltage method</strong> is a systematic procedure that minimizes the number of unknowns by working with node voltages rather than individual branch currents. For a circuit with \(n\) nodes, this method requires \(n-1\) equations.
</p>

<ul style="list-style: none; padding-left: 0.8rem; margin: 0.8rem 0 1.2rem 0;">
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Step 1:</strong> Select a <strong>reference node</strong> (ground) — typically the node with the most connections</li>
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Step 2:</strong> Define voltages at all other nodes relative to the reference</li>
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Step 3:</strong> Write KCL equations at each non-reference node</li>
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Step 4:</strong> Solve the resulting system of equations</li>
</ul>

<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0;">
<p style="color: #2E7D32; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 10px;">Reference Node Selection Tip</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Choose the node with the greatest number of connections. If a ground symbol is present, use that node. The negative terminal of a voltage source is often a good choice.
</p>
</div>

<div style="background: #FFF7DD; border: 2px solid #F0D87A; border-radius: 10px; padding: 24px; margin: 1.5rem 0;" markdown>
<p style="color: #B8860B; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Example 3.5 — Two-Node Circuit</p>

<p style="color: #555; line-height: 1.75;">
A 10 V source connects to node A through \(R_1 = 2\;\text{k}\Omega\). Nodes A and B are connected by \(R_2 = 4\;\text{k}\Omega\). Node B connects to ground through \(R_3 = 6\;\text{k}\Omega\).
</p>

<p style="color: #555; line-height: 1.75;">At node A (all currents leaving):</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 10px 0; text-align: center;" markdown>

$$\frac{V_A - 10}{2\text{k}} + \frac{V_A - V_B}{4\text{k}} = 0$$

</div>

<p style="color: #555; line-height: 1.75;">At node B:</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 10px 0; text-align: center;" markdown>

$$\frac{V_B - V_A}{4\text{k}} + \frac{V_B}{6\text{k}} = 0$$

</div>

<p style="color: #555; line-height: 1.75;">Solving: multiply through by 12k to clear denominators.</p>

<p style="color: #555; line-height: 1.75;">Node A: \(6(V_A - 10) + 3(V_A - V_B) = 0 \;\Rightarrow\; 9V_A - 3V_B = 60\)</p>

<p style="color: #555; line-height: 1.75;">Node B: \(3(V_B - V_A) + 2V_B = 0 \;\Rightarrow\; -3V_A + 5V_B = 0\)</p>

<p style="color: #555; line-height: 1.75;">From the second equation: \(V_A = 5V_B/3\). Substituting: \(9(5V_B/3) - 3V_B = 60\), giving \(V_B = 5\) V and \(V_A = 8.33\) V.</p>
</div>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">The Supernode Technique</h3>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.2rem;">
When a voltage source connects two non-reference nodes, the current through it is unknown. The <strong style="color: #333;">supernode</strong> technique resolves this:
</p>

<ul style="list-style: none; padding-left: 0.8rem; margin: 0.8rem 0 1.2rem 0;">
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> Enclose the voltage source and its two connected nodes in a single boundary</li>
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> Write a KCL equation for the entire supernode</li>
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> Add a constraint equation: \(V_a - V_b = V_s\)</li>
</ul>

---

<h2 id="35-mesh-current" style="color: #5A3EED !important; border-left: none !important; border-bottom: 2px solid #5A3EED; padding-left: 0 !important; padding-bottom: 0.4rem; font-weight: 800; margin-top: 2.2rem; margin-bottom: 0.8rem;">3.5 The Mesh Current Method</h2>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.2rem;">
The <strong style="color: #333;">mesh current method</strong> assigns a circulating current to each mesh and writes KVL equations. For a circuit with \(m\) meshes, exactly \(m\) equations are required. This method is particularly efficient for circuits with many nodes but few meshes.
</p>

<ul style="list-style: none; padding-left: 0.8rem; margin: 0.8rem 0 1.2rem 0;">
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Step 1:</strong> Assign a <strong>mesh current</strong> to each mesh (conventionally all clockwise)</li>
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Step 2:</strong> Write KVL equations around each mesh</li>
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Step 3:</strong> Solve for the mesh currents</li>
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Step 4:</strong> Derive branch currents and voltages as needed</li>
</ul>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Situation | Branch Current |
|-----------|---------------|
| Only mesh 1 passes through branch | \(I_1\) |
| Meshes 1 and 2 share branch, same direction | \(I_1 + I_2\) |
| Meshes 1 and 2 share branch, opposite direction | \(I_1 - I_2\) |

</div>

<div style="background: #FFF7DD; border: 2px solid #F0D87A; border-radius: 10px; padding: 24px; margin: 1.5rem 0;" markdown>
<p style="color: #B8860B; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Example 3.6 — Two-Mesh Circuit</p>

<p style="color: #555; line-height: 1.75;">
A 12 V source is in mesh 1 with \(R_1 = 3\;\Omega\). A shared \(R_2 = 6\;\Omega\) connects both meshes. Mesh 2 has \(R_3 = 4\;\Omega\).
</p>

<p style="color: #555; line-height: 1.75;"><strong>Mesh 1:</strong></p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 10px 0; text-align: center;" markdown>

$$-12 + 3I_1 + 6(I_1 - I_2) = 0 \quad \Rightarrow \quad 9I_1 - 6I_2 = 12$$

</div>

<p style="color: #555; line-height: 1.75;"><strong>Mesh 2:</strong></p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 10px 0; text-align: center;" markdown>

$$6(I_2 - I_1) + 4I_2 = 0 \quad \Rightarrow \quad -6I_1 + 10I_2 = 0$$

</div>

<p style="color: #555; line-height: 1.75;">
In matrix form:
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 10px 0; text-align: center;" markdown>

$$\begin{bmatrix} 9 & -6 \\ -6 & 10 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 12 \\ 0 \end{bmatrix}$$

</div>

<p style="color: #555; line-height: 1.75; margin-bottom: 0;">
Solving: \(I_1 = 2.22\) A, \(I_2 = 1.33\) A. The resistance matrix is symmetric — diagonal entries are the sum of resistances in each mesh, off-diagonal entries are the negatives of shared resistances.
</p>
</div>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">The Supermesh Technique</h3>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.2rem;">
When a current source is shared between two meshes, KVL cannot be written directly for that branch. The <strong style="color: #333;">supermesh</strong> resolves this by combining the two meshes into a single outer loop and adding the constraint \(I_2 - I_1 = I_s\).
</p>

---

<h2 id="36-superposition" style="color: #5A3EED !important; border-left: none !important; border-bottom: 2px solid #5A3EED; padding-left: 0 !important; padding-bottom: 0.4rem; font-weight: 800; margin-top: 2.2rem; margin-bottom: 0.8rem;">3.6 The Superposition Principle</h2>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.2rem;">
The <strong style="color: #333;">superposition principle</strong> is a divide-and-conquer approach for circuits with multiple independent sources. In a linear circuit, the response at any point equals the algebraic sum of responses caused by each source acting alone, with all other independent sources deactivated.
</p>

<ul style="list-style: none; padding-left: 0.8rem; margin: 0.8rem 0 1.2rem 0;">
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Voltage sources</strong> → Replace with a short circuit (0 V)</li>
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Current sources</strong> → Replace with an open circuit (0 A)</li>
</ul>

<div style="background: #FFF8E1; border-left: 4px solid #F0D87A; border-radius: 8px; padding: 16px 20px; margin: 1rem 0;">
<strong style="color: #B8860B;">Key Insight:</strong> Superposition works because Ohm's Law is linear. It does <strong>not</strong> apply to circuits with nonlinear elements like diodes. Also note: superposition applies to voltage and current, but <strong>not</strong> to power (power is nonlinear — it depends on \(I^2\) or \(V^2\)).
</div>

<div style="background: #FFF7DD; border: 2px solid #F0D87A; border-radius: 10px; padding: 24px; margin: 1.5rem 0;" markdown>
<p style="color: #B8860B; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Example 3.7 — Superposition with Two Sources</p>

<p style="color: #555; line-height: 1.75;">
A circuit has a 12 V voltage source and a 2 A current source. To find the current through resistor \(R = 6\;\Omega\):
</p>

<ul style="list-style: none; padding-left: 0.8rem; margin: 0.5rem 0;">
<li style="margin-bottom: 0.5rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Step 1:</strong> Deactivate the current source (open circuit). Solve for \(I_R' = 12/6 = 2\) A.</li>
<li style="margin-bottom: 0.5rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Step 2:</strong> Deactivate the voltage source (short circuit). Solve for \(I_R'' = 2\) A (all current source current flows through R).</li>
<li style="margin-bottom: 0.5rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Step 3:</strong> Combine: \(I_R = I_R' + I_R'' = 2 + 2 = 4\) A</li>
</ul>
</div>

---

<h2 id="37-equivalent" style="color: #5A3EED !important; border-left: none !important; border-bottom: 2px solid #5A3EED; padding-left: 0 !important; padding-bottom: 0.4rem; font-weight: 800; margin-top: 2.2rem; margin-bottom: 0.8rem;">3.7 Load and Equivalent Resistance</h2>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.2rem;">
<strong style="color: #333;">Load resistance</strong> (\(R_L\)) is the resistance of the component or subsystem being powered. <strong style="color: #333;">Equivalent resistance</strong> (\(R_{eq}\)) reduces a complex network to a single value that draws the same current from the source.
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Configuration | Formula |
|---------------|---------|
| Series | \(R_{eq} = R_1 + R_2 + \cdots + R_n\) |
| Parallel | \(\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots + \frac{1}{R_n}\) |
| Mixed | Combine step by step |

</div>

---

<h2 id="38-delta-wye" style="color: #5A3EED !important; border-left: none !important; border-bottom: 2px solid #5A3EED; padding-left: 0 !important; padding-bottom: 0.4rem; font-weight: 800; margin-top: 2.2rem; margin-bottom: 0.8rem;">3.8 Delta-Wye Transformations</h2>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.2rem;">
Two three-terminal resistor configurations appear frequently and can be made electrically equivalent:
</p>

<ul style="list-style: none; padding-left: 0.8rem; margin: 0.8rem 0 1.2rem 0;">
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Delta (Δ)</strong> — three resistors in a triangle, each connecting two terminals directly</li>
<li style="margin-bottom: 0.9rem; line-height: 1.75; color: #333;"><span style="color: #5A3EED; font-weight: 700; margin-right: 0.5rem;">&#9679;</span> <strong>Wye (Y)</strong> — three resistors sharing a common center node</li>
</ul>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Delta-to-Wye</h3>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 1rem 0 1.2rem 0; text-align: center; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

$$R_1 = \frac{R_a R_b}{R_a + R_b + R_c} \qquad R_2 = \frac{R_b R_c}{R_a + R_b + R_c} \qquad R_3 = \frac{R_a R_c}{R_a + R_b + R_c}$$

</div>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Wye-to-Delta</h3>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 1rem 0 1.2rem 0; text-align: center; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

$$R_a = \frac{R_1 R_2 + R_2 R_3 + R_1 R_3}{R_3} \qquad R_b = \frac{R_1 R_2 + R_2 R_3 + R_1 R_3}{R_1} \qquad R_c = \frac{R_1 R_2 + R_2 R_3 + R_1 R_3}{R_2}$$

</div>

<div style="background: #FFF8E1; border-left: 4px solid #F0D87A; border-radius: 8px; padding: 16px 20px; margin: 1rem 0;">
<strong style="color: #B8860B;">When to Use:</strong> Bridge circuits (Wheatstone bridge), complex networks that resist series/parallel simplification, and three-phase power systems. Always try series/parallel reduction first — it is simpler and less error-prone.
</div>

---

<h2 id="39-simplification" style="color: #5A3EED !important; border-left: none !important; border-bottom: 2px solid #5A3EED; padding-left: 0 !important; padding-bottom: 0.4rem; font-weight: 800; margin-top: 2.2rem; margin-bottom: 0.8rem;">3.9 Circuit Simplification Strategy</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Technique | Formula |
|-----------|---------|
| Series combination | \(R_{eq} = R_1 + R_2\) |
| Parallel combination | \(R_{eq} = \frac{R_1 R_2}{R_1 + R_2}\) |
| Delta-wye | See Section 3.8 |

</div>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.2rem;">
Steps: (1) Identify series/parallel groups. (2) Combine them. (3) Apply delta-wye if stuck. (4) Repeat until one equivalent resistance remains.
</p>

---

<h2 id="310-choosing" style="color: #5A3EED !important; border-left: none !important; border-bottom: 2px solid #5A3EED; padding-left: 0 !important; padding-bottom: 0.4rem; font-weight: 800; margin-top: 2.2rem; margin-bottom: 0.8rem;">3.10 Choosing an Analysis Method</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Circuit Characteristic | Recommended Method |
|-----------------------|-------------------|
| Few nodes, many meshes | Node voltage method |
| Few meshes, many nodes | Mesh current method |
| Multiple independent sources | Superposition |
| Need only one quantity | Simplification + Ohm's Law |
| Bridge or complex topology | Delta-wye first |
| Voltage source between non-reference nodes | Supernode |
| Current source shared between meshes | Supermesh |

</div>

---

<h2 id="311-matrix" style="color: #5A3EED !important; border-left: none !important; border-bottom: 2px solid #5A3EED; padding-left: 0 !important; padding-bottom: 0.4rem; font-weight: 800; margin-top: 2.2rem; margin-bottom: 0.8rem;">3.11 The Matrix Approach</h2>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 0.8rem;">
<strong style="color: #333;">Node voltage formulation</strong> (\(n-1\) unknowns):
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 1rem 0 1.2rem 0; text-align: center;" markdown>

$$\mathbf{G} \mathbf{V} = \mathbf{I}$$

</div>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 0.8rem;">
<strong style="color: #333;">Mesh current formulation</strong> (\(m\) unknowns):
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 1rem 0 1.2rem 0; text-align: center;" markdown>

$$\mathbf{R} \mathbf{I} = \mathbf{V}$$

</div>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.5rem;">
For circuits with only passive elements and independent sources, both matrices are <strong>symmetric</strong>. Diagonal entries are positive sums of connected conductances (or resistances). Off-diagonal entries are the negatives of shared conductances (or resistances).
</p>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Key Equations Reference</h2>

<div style="background: #F8F6FF; border: 2px solid #D4C8FF; border-radius: 12px; padding: 20px 24px; margin: 1rem 0;" markdown>

| Concept | Equation |
|---------|----------|
| KCL | \(\sum i_k = 0\) |
| KVL | \(\sum v_k = 0\) |
| Topology | \(b = n - 1 + m\) |
| Delta → Wye | \(R_Y = \frac{R_{\Delta,adj1} \cdot R_{\Delta,adj2}}{\sum R_\Delta}\) |
| Wye → Delta | \(R_\Delta = \frac{\sum (R_Y \text{ products})}{R_{Y,opposite}}\) |

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Chapter Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 20px 24px; margin: 1rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);">
<p style="color: #333; line-height: 1.85; font-size: 1.02rem; margin: 0;">
Kirchhoff's Current Law enforces conservation of charge at nodes. Kirchhoff's Voltage Law enforces conservation of energy around loops. Circuit topology — nodes, branches, loops, and meshes — determines the structure of analysis equations. The node voltage method and mesh current method provide systematic procedures for any linear circuit, with supernodes and supermeshes handling special source configurations. The superposition principle decomposes multi-source circuits into simpler single-source problems. Delta-wye transformations enable simplification of circuits that series/parallel rules cannot reduce. Choose the method that produces the fewest simultaneous equations.
</p>
</div>

</div>
