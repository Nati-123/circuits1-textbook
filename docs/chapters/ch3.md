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

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 0.6rem;">
The diagram below shows how Chapter 3 concepts build upon each other. <strong>Hover</strong> over a concept to see its connections. <strong>Click</strong> to open its MicroSim or section.
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 8px; margin: 1rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);">
<iframe src="../../sims/concept-map/main.html" width="100%" height="590px" scrolling="no" style="border:none; border-radius:8px; overflow:hidden;"></iframe>
</div>

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Learning Dependency Graph</h2>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.2rem;">
The numbered sequence below shows the recommended learning order. Each concept depends on the ones above it.
</p>

<div style="background: #F8F6FF; border: 2px solid #D4C8FF; border-radius: 12px; padding: 20px 24px; margin: 1rem 0;" markdown>

| Step | Concept | Depends On |
|------|---------|------------|
| 1 | Electric charge, voltage, current, resistance | Prerequisites (Ch 1) |
| 2 | Ohm's Law, series &amp; parallel circuits | Step 1 (Ch 2) |
| 3 | Nodes, branches — circuit topology | Steps 1–2 |
| 4 | Loops and meshes | Step 3 |
| 5 | **KCL** — conservation of charge at nodes | Steps 3–4 |
| 6 | **KVL** — conservation of energy around loops | Steps 3–4 |
| 7 | Node voltage method | Steps 5 (KCL) |
| 8 | Mesh current method | Steps 6 (KVL) |
| 9 | Supernode &amp; supermesh techniques | Steps 7–8 |
| 10 | Superposition principle | Steps 5–6 (linearity) |
| 11 | Matrix methods (systematic solving) | Steps 7–8 |
| 12 | Delta-wye transformation | Step 2 |
| 13 | Equivalent resistance &amp; circuit simplification | Steps 10–12 |

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

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Circuit Diagram — KCL at a Node</h3>

<div style="background: #F8F6FF; border: 2px solid #D4C8FF; border-radius: 12px; padding: 20px; margin: 1.5rem 0; text-align: center;">
<svg width="360" height="260" viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" style="font-family: 'Segoe UI', Arial, sans-serif;">
  <!-- Central node -->
  <circle cx="180" cy="130" r="10" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="180" y="135" text-anchor="middle" fill="white" font-size="11" font-weight="bold">N</text>
  <!-- Wire 1 - top left incoming -->
  <line x1="60" y1="40" x2="175" y2="125" stroke="#333" stroke-width="2.5"/>
  <polygon points="170,120 182,128 174,132" fill="#333"/>
  <!-- I1 label and arrow -->
  <text x="85" y="65" fill="#5A3EED" font-size="15" font-weight="700">I₁ = 5 A</text>
  <text x="85" y="82" fill="#2E7D32" font-size="12" font-weight="600">→ IN</text>
  <!-- Wire 2 - bottom left incoming -->
  <line x1="60" y1="220" x2="175" y2="135" stroke="#333" stroke-width="2.5"/>
  <polygon points="170,140 182,132 174,128" fill="#333"/>
  <!-- I2 label -->
  <text x="85" y="205" fill="#5A3EED" font-size="15" font-weight="700">I₂ = 3 A</text>
  <text x="85" y="222" fill="#2E7D32" font-size="12" font-weight="600">→ IN</text>
  <!-- Wire 3 - right outgoing -->
  <line x1="190" y1="130" x2="320" y2="130" stroke="#333" stroke-width="2.5"/>
  <polygon points="310,124 322,130 310,136" fill="#333"/>
  <!-- I3 label -->
  <text x="230" y="118" fill="#E53935" font-size="15" font-weight="700">I₃ = 8 A</text>
  <text x="230" y="155" fill="#E53935" font-size="12" font-weight="600">→ OUT</text>
  <!-- KCL equation -->
  <text x="180" y="250" text-anchor="middle" fill="#333" font-size="13" font-weight="600">KCL: I₁ + I₂ − I₃ = 5 + 3 − 8 = 0 ✓</text>
</svg>
</div>

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

<h4 style="color: #5A3EED; font-weight: 700; margin-top: 2rem; margin-bottom: 0.8rem;">Interactive Simulation: KCL Node Current Balance</h4>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px; margin: 1rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);">
<iframe src="../../sims/kcl-node-simulator/main.html" width="100%" height="620px" scrolling="no" style="border:none; border-radius:8px; overflow:hidden;"></iframe>
</div>

---

<h2 id="32-kvl" style="color: #5A3EED !important; border-left: none !important; border-bottom: 2px solid #5A3EED; padding-left: 0 !important; padding-bottom: 0.4rem; font-weight: 800; margin-top: 2.2rem; margin-bottom: 0.8rem;">3.2 Kirchhoff's Voltage Law (KVL)</h2>

<p style="color: #555; line-height: 1.85; font-size: 1.02rem; margin-bottom: 1.2rem;">
<strong style="color: #333;">Kirchhoff's Voltage Law</strong> is a consequence of conservation of energy. It states that the algebraic sum of all voltages around any closed loop in a circuit must equal zero. Voltage rises from sources are exactly balanced by voltage drops across components.
</p>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px 28px; margin: 1rem 0 1.2rem 0; text-align: center; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

$$\sum_{k=1}^{n} v_k = 0$$

</div>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Circuit Diagram — KVL Single Loop</h3>

<div style="background: #F8F6FF; border: 2px solid #D4C8FF; border-radius: 12px; padding: 20px; margin: 1.5rem 0; text-align: center;">
<svg width="420" height="300" viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" style="font-family: 'Segoe UI', Arial, sans-serif;">
  <!-- Battery (left side) -->
  <line x1="60" y1="50" x2="60" y2="100" stroke="#333" stroke-width="2.5"/>
  <line x1="45" y1="100" x2="75" y2="100" stroke="#333" stroke-width="3"/>
  <line x1="50" y1="115" x2="70" y2="115" stroke="#333" stroke-width="1.5"/>
  <line x1="45" y1="130" x2="75" y2="130" stroke="#333" stroke-width="3"/>
  <line x1="50" y1="145" x2="70" y2="145" stroke="#333" stroke-width="1.5"/>
  <line x1="60" y1="145" x2="60" y2="250" stroke="#333" stroke-width="2.5"/>
  <text x="20" y="128" fill="#2E7D32" font-size="14" font-weight="700">12 V</text>
  <text x="68" y="95" fill="#333" font-size="11" font-weight="600">+</text>
  <text x="68" y="155" fill="#333" font-size="11" font-weight="600">−</text>
  <!-- Top wire -->
  <line x1="60" y1="50" x2="360" y2="50" stroke="#333" stroke-width="2.5"/>
  <!-- R1 -->
  <rect x="110" y="35" width="60" height="30" fill="none" stroke="#5A3EED" stroke-width="2.5" rx="3"/>
  <text x="140" y="55" text-anchor="middle" fill="#5A3EED" font-size="13" font-weight="700">R₁=2Ω</text>
  <text x="140" y="25" text-anchor="middle" fill="#E53935" font-size="12" font-weight="600">−4 V</text>
  <!-- R2 -->
  <rect x="210" y="35" width="60" height="30" fill="none" stroke="#5A3EED" stroke-width="2.5" rx="3"/>
  <text x="240" y="55" text-anchor="middle" fill="#5A3EED" font-size="13" font-weight="700">R₂=3Ω</text>
  <text x="240" y="25" text-anchor="middle" fill="#E53935" font-size="12" font-weight="600">−6 V</text>
  <!-- R3 (right side, vertical) -->
  <line x1="360" y1="50" x2="360" y2="110" stroke="#333" stroke-width="2.5"/>
  <rect x="345" y="110" width="30" height="60" fill="none" stroke="#5A3EED" stroke-width="2.5" rx="3"/>
  <text x="340" y="145" text-anchor="end" fill="#5A3EED" font-size="13" font-weight="700">R₃=1Ω</text>
  <text x="395" y="145" fill="#E53935" font-size="12" font-weight="600">−2 V</text>
  <line x1="360" y1="170" x2="360" y2="250" stroke="#333" stroke-width="2.5"/>
  <!-- Bottom wire -->
  <line x1="60" y1="250" x2="360" y2="250" stroke="#333" stroke-width="2.5"/>
  <!-- Current arrow (clockwise) -->
  <polygon points="220,245 230,250 220,255" fill="#E53935"/>
  <text x="210" y="275" fill="#E53935" font-size="13" font-weight="700">I = 2 A</text>
  <!-- Clockwise loop arrow -->
  <path d="M 180,120 A 60,60 0 1,1 240,120" fill="none" stroke="#B8860B" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="238,114 244,122 234,122" fill="#B8860B"/>
  <text x="210" y="160" text-anchor="middle" fill="#B8860B" font-size="12" font-weight="600">CW loop</text>
  <!-- KVL equation -->
  <text x="210" y="295" text-anchor="middle" fill="#333" font-size="12" font-weight="600">KVL: +12 − 4 − 6 − 2 = 0 ✓</text>
</svg>
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

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Circuit Diagram — Topology Elements</h3>

<div style="background: #F8F6FF; border: 2px solid #D4C8FF; border-radius: 12px; padding: 20px; margin: 1.5rem 0; text-align: center;">
<svg width="440" height="280" viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg" style="font-family: 'Segoe UI', Arial, sans-serif;">
  <!-- Node A (top-left) -->
  <circle cx="80" cy="60" r="8" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="80" y="40" text-anchor="middle" fill="#5A3EED" font-size="14" font-weight="700">a</text>
  <!-- Node B (top-right) -->
  <circle cx="300" cy="60" r="8" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="300" y="40" text-anchor="middle" fill="#5A3EED" font-size="14" font-weight="700">b</text>
  <!-- Node C (bottom-left) -->
  <circle cx="80" cy="200" r="8" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="80" y="230" text-anchor="middle" fill="#5A3EED" font-size="14" font-weight="700">c</text>
  <!-- Node D (bottom-right) -->
  <circle cx="300" cy="200" r="8" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="300" y="230" text-anchor="middle" fill="#5A3EED" font-size="14" font-weight="700">d</text>
  <!-- Branch 1: a-b (top) with V source -->
  <line x1="88" y1="60" x2="130" y2="60" stroke="#333" stroke-width="2.5"/>
  <circle cx="190" cy="60" r="18" fill="none" stroke="#2E7D32" stroke-width="2.5"/>
  <text x="190" y="65" text-anchor="middle" fill="#2E7D32" font-size="12" font-weight="700">Vs</text>
  <line x1="172" y1="60" x2="130" y2="60" stroke="#333" stroke-width="2.5"/>
  <line x1="208" y1="60" x2="292" y2="60" stroke="#333" stroke-width="2.5"/>
  <text x="190" y="35" text-anchor="middle" fill="#888" font-size="11" font-style="italic">branch 1</text>
  <!-- Branch 2: a-c (left) with R1 -->
  <line x1="80" y1="68" x2="80" y2="110" stroke="#333" stroke-width="2.5"/>
  <rect x="65" y="110" width="30" height="50" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="55" y="140" text-anchor="end" fill="#E53935" font-size="12" font-weight="700">R₁</text>
  <line x1="80" y1="160" x2="80" y2="192" stroke="#333" stroke-width="2.5"/>
  <text x="40" y="140" text-anchor="end" fill="#888" font-size="11" font-style="italic">b2</text>
  <!-- Branch 3: b-d (right) with R2 -->
  <line x1="300" y1="68" x2="300" y2="110" stroke="#333" stroke-width="2.5"/>
  <rect x="285" y="110" width="30" height="50" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="325" y="140" fill="#E53935" font-size="12" font-weight="700">R₂</text>
  <line x1="300" y1="160" x2="300" y2="192" stroke="#333" stroke-width="2.5"/>
  <text x="340" y="140" fill="#888" font-size="11" font-style="italic">b3</text>
  <!-- Branch 4: c-d (bottom) with R3 -->
  <line x1="88" y1="200" x2="140" y2="200" stroke="#333" stroke-width="2.5"/>
  <rect x="140" y="185" width="100" height="30" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="190" y="205" text-anchor="middle" fill="#E53935" font-size="12" font-weight="700">R₃</text>
  <line x1="240" y1="200" x2="292" y2="200" stroke="#333" stroke-width="2.5"/>
  <text x="190" y="180" text-anchor="middle" fill="#888" font-size="11" font-style="italic">branch 4</text>
  <!-- Branch 5: a-d (diagonal) with R4 -->
  <line x1="88" y1="66" x2="292" y2="194" stroke="#333" stroke-width="2" stroke-dasharray="6,3"/>
  <rect x="160" y="112" width="60" height="28" fill="white" stroke="#E53935" stroke-width="2" rx="3"/>
  <text x="190" y="131" text-anchor="middle" fill="#E53935" font-size="12" font-weight="700">R₄</text>
  <text x="215" y="108" fill="#888" font-size="11" font-style="italic">b5</text>
  <!-- Mesh labels -->
  <path d="M 120,95 A 15,15 0 1,1 140,95" fill="none" stroke="#B8860B" stroke-width="1.2"/>
  <text x="115" y="105" fill="#B8860B" font-size="11" font-weight="700">M₁</text>
  <path d="M 240,130 A 15,15 0 1,1 260,130" fill="none" stroke="#B8860B" stroke-width="1.2"/>
  <text x="235" y="150" fill="#B8860B" font-size="11" font-weight="700">M₂</text>
  <!-- Legend -->
  <text x="380" y="60" fill="#5A3EED" font-size="12" font-weight="700">4 nodes</text>
  <text x="380" y="80" fill="#E53935" font-size="12" font-weight="700">5 branches</text>
  <text x="380" y="100" fill="#B8860B" font-size="12" font-weight="700">2 meshes</text>
  <text x="220" y="265" text-anchor="middle" fill="#333" font-size="12" font-weight="600">b = n − 1 + m → 5 = 4 − 1 + 2 ✓</text>
</svg>
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

<h4 style="color: #5A3EED; font-weight: 700; margin-top: 2rem; margin-bottom: 0.8rem;">Interactive Simulation: Circuit Topology Explorer</h4>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px; margin: 1rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);">
<iframe src="../../sims/topology-counter/main.html" width="100%" height="620px" scrolling="no" style="border:none; border-radius:8px; overflow:hidden;"></iframe>
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

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Circuit Diagram — Node Voltage Method</h3>

<div style="background: #F8F6FF; border: 2px solid #D4C8FF; border-radius: 12px; padding: 20px; margin: 1.5rem 0; text-align: center;">
<svg width="440" height="280" viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg" style="font-family: 'Segoe UI', Arial, sans-serif;">
  <!-- Ground node (bottom) -->
  <line x1="60" y1="220" x2="380" y2="220" stroke="#333" stroke-width="2.5"/>
  <!-- Ground symbol -->
  <line x1="210" y1="220" x2="210" y2="235" stroke="#333" stroke-width="2"/>
  <line x1="195" y1="235" x2="225" y2="235" stroke="#333" stroke-width="2.5"/>
  <line x1="200" y1="241" x2="220" y2="241" stroke="#333" stroke-width="2"/>
  <line x1="205" y1="247" x2="215" y2="247" stroke="#333" stroke-width="1.5"/>
  <text x="210" y="268" text-anchor="middle" fill="#333" font-size="12" font-weight="600">Reference (Ground)</text>
  <!-- Voltage source (left) -->
  <line x1="60" y1="50" x2="60" y2="90" stroke="#333" stroke-width="2.5"/>
  <circle cx="60" cy="120" r="22" fill="none" stroke="#2E7D32" stroke-width="2.5"/>
  <text x="60" y="116" text-anchor="middle" fill="#2E7D32" font-size="10" font-weight="700">10V</text>
  <text x="60" y="128" text-anchor="middle" fill="#2E7D32" font-size="10">+ −</text>
  <line x1="60" y1="142" x2="60" y2="220" stroke="#333" stroke-width="2.5"/>
  <!-- R1: source to node A -->
  <line x1="60" y1="50" x2="110" y2="50" stroke="#333" stroke-width="2.5"/>
  <rect x="110" y="35" width="70" height="30" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="145" y="55" text-anchor="middle" fill="#E53935" font-size="12" font-weight="700">R₁=2kΩ</text>
  <line x1="180" y1="50" x2="210" y2="50" stroke="#333" stroke-width="2.5"/>
  <!-- Node A -->
  <circle cx="210" cy="50" r="8" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="210" y="30" text-anchor="middle" fill="#5A3EED" font-size="14" font-weight="700">V<tspan font-size="10" dy="3">A</tspan></text>
  <!-- R2: node A to node B -->
  <line x1="218" y1="50" x2="260" y2="50" stroke="#333" stroke-width="2.5"/>
  <rect x="260" y="35" width="70" height="30" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="295" y="55" text-anchor="middle" fill="#E53935" font-size="12" font-weight="700">R₂=4kΩ</text>
  <line x1="330" y1="50" x2="380" y2="50" stroke="#333" stroke-width="2.5"/>
  <!-- Node B -->
  <circle cx="380" cy="50" r="8" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" fill="#5A3EED" font-size="14" font-weight="700">V<tspan font-size="10" dy="3">B</tspan></text>
  <!-- R3: node B to ground -->
  <line x1="380" y1="58" x2="380" y2="100" stroke="#333" stroke-width="2.5"/>
  <rect x="365" y="100" width="30" height="70" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="405" y="140" fill="#E53935" font-size="12" font-weight="700">R₃=6kΩ</text>
  <line x1="380" y1="170" x2="380" y2="220" stroke="#333" stroke-width="2.5"/>
  <!-- KCL arrows at node A -->
  <path d="M 190,70 Q 195,80 210,75" fill="none" stroke="#B8860B" stroke-width="1.5"/>
  <text x="175" y="88" fill="#B8860B" font-size="10" font-weight="600">KCL</text>
  <!-- Node A to ground wire -->
  <line x1="210" y1="58" x2="210" y2="220" stroke="#333" stroke-width="1" stroke-dasharray="4,4" opacity="0.3"/>
</svg>
</div>

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

<h4 style="color: #5A3EED; font-weight: 700; margin-top: 2rem; margin-bottom: 0.8rem;">Interactive Simulation: Node Voltage Method Solver</h4>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px; margin: 1rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);">
<iframe src="../../sims/node-voltage-solver/main.html" width="100%" height="750px" scrolling="no" style="border:none; border-radius:8px; overflow:hidden;"></iframe>
</div>

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

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Circuit Diagram — Two-Mesh Circuit</h3>

<div style="background: #F8F6FF; border: 2px solid #D4C8FF; border-radius: 12px; padding: 20px; margin: 1.5rem 0; text-align: center;">
<svg width="440" height="280" viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg" style="font-family: 'Segoe UI', Arial, sans-serif;">
  <!-- Outer rectangle -->
  <!-- Top wire -->
  <line x1="40" y1="50" x2="400" y2="50" stroke="#333" stroke-width="2.5"/>
  <!-- Bottom wire -->
  <line x1="40" y1="220" x2="400" y2="220" stroke="#333" stroke-width="2.5"/>
  <!-- Left wire -->
  <line x1="40" y1="50" x2="40" y2="220" stroke="#333" stroke-width="2.5"/>
  <!-- Right wire -->
  <line x1="400" y1="50" x2="400" y2="220" stroke="#333" stroke-width="2.5"/>
  <!-- Middle wire (shared branch) -->
  <line x1="220" y1="50" x2="220" y2="220" stroke="#333" stroke-width="2.5"/>
  <!-- Voltage source (left side) -->
  <circle cx="40" cy="135" r="22" fill="none" stroke="#2E7D32" stroke-width="2.5"/>
  <text x="40" y="131" text-anchor="middle" fill="#2E7D32" font-size="10" font-weight="700">12V</text>
  <text x="40" y="143" text-anchor="middle" fill="#2E7D32" font-size="10">+ −</text>
  <!-- R1 (top-left) -->
  <rect x="100" y="35" width="60" height="30" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="130" y="55" text-anchor="middle" fill="#E53935" font-size="12" font-weight="700">R₁=3Ω</text>
  <!-- R2 (middle, shared) -->
  <rect x="205" y="100" width="30" height="60" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="250" y="135" fill="#E53935" font-size="12" font-weight="700">R₂=6Ω</text>
  <text x="250" y="150" fill="#888" font-size="10" font-style="italic">(shared)</text>
  <!-- R3 (top-right) -->
  <rect x="290" y="35" width="60" height="30" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="320" y="55" text-anchor="middle" fill="#E53935" font-size="12" font-weight="700">R₃=4Ω</text>
  <!-- Mesh 1 current (CW arrow) -->
  <path d="M 110,110 A 45,45 0 1,1 150,110" fill="none" stroke="#5A3EED" stroke-width="2"/>
  <polygon points="148,104 156,112 146,114" fill="#5A3EED"/>
  <text x="130" y="155" text-anchor="middle" fill="#5A3EED" font-size="14" font-weight="700">I₁</text>
  <!-- Mesh 2 current (CW arrow) -->
  <path d="M 290,110 A 45,45 0 1,1 330,110" fill="none" stroke="#B8860B" stroke-width="2"/>
  <polygon points="328,104 336,112 326,114" fill="#B8860B"/>
  <text x="310" y="155" text-anchor="middle" fill="#B8860B" font-size="14" font-weight="700">I₂</text>
  <!-- Node dots -->
  <circle cx="220" cy="50" r="5" fill="#333"/>
  <circle cx="220" cy="220" r="5" fill="#333"/>
  <!-- Results -->
  <text x="130" y="195" text-anchor="middle" fill="#5A3EED" font-size="12" font-weight="600">I₁ = 2.22 A</text>
  <text x="310" y="195" text-anchor="middle" fill="#B8860B" font-size="12" font-weight="600">I₂ = 1.33 A</text>
  <text x="220" y="268" text-anchor="middle" fill="#333" font-size="12" font-weight="600">Shared branch current: I₁ − I₂ = 0.89 A</text>
</svg>
</div>

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

<h4 style="color: #5A3EED; font-weight: 700; margin-top: 2rem; margin-bottom: 0.8rem;">Interactive Simulation: Mesh Current Method Solver</h4>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px; margin: 1rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);">
<iframe src="../../sims/mesh-current-solver/main.html" width="100%" height="750px" scrolling="no" style="border:none; border-radius:8px; overflow:hidden;"></iframe>
</div>

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

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Circuit Diagram — Superposition Principle</h3>

<div style="background: #F8F6FF; border: 2px solid #D4C8FF; border-radius: 12px; padding: 20px; margin: 1.5rem 0; text-align: center;">
<svg width="440" height="420" viewBox="0 0 440 420" xmlns="http://www.w3.org/2000/svg" style="font-family: 'Segoe UI', Arial, sans-serif;">
  <!-- Title: Original Circuit -->
  <text x="220" y="20" text-anchor="middle" fill="#333" font-size="13" font-weight="700">Original Circuit</text>
  <!-- Original circuit box -->
  <rect x="60" y="30" width="320" height="100" fill="none" stroke="#D4C8FF" stroke-width="1.5" rx="8" stroke-dasharray="5,3"/>
  <!-- Vs -->
  <circle cx="100" cy="80" r="18" fill="none" stroke="#2E7D32" stroke-width="2.5"/>
  <text x="100" y="85" text-anchor="middle" fill="#2E7D32" font-size="11" font-weight="700">12V</text>
  <!-- R -->
  <line x1="118" y1="80" x2="170" y2="80" stroke="#333" stroke-width="2"/>
  <rect x="170" y="67" width="60" height="26" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="200" y="85" text-anchor="middle" fill="#E53935" font-size="11" font-weight="700">R=6Ω</text>
  <line x1="230" y1="80" x2="280" y2="80" stroke="#333" stroke-width="2"/>
  <!-- Is -->
  <circle cx="320" cy="80" r="18" fill="none" stroke="#1565C0" stroke-width="2.5"/>
  <text x="320" y="85" text-anchor="middle" fill="#1565C0" font-size="11" font-weight="700">2A</text>
  <line x1="280" y1="80" x2="302" y2="80" stroke="#333" stroke-width="2"/>
  <!-- Equals sign -->
  <text x="220" y="160" text-anchor="middle" fill="#333" font-size="18" font-weight="700">=</text>
  <!-- Sub-circuit 1: Voltage source only -->
  <text x="120" y="185" text-anchor="middle" fill="#2E7D32" font-size="12" font-weight="700">Step 1: V source only</text>
  <rect x="20" y="195" width="200" height="90" fill="none" stroke="#2E7D32" stroke-width="1.5" rx="8"/>
  <!-- Vs active -->
  <circle cx="60" cy="240" r="16" fill="none" stroke="#2E7D32" stroke-width="2.5"/>
  <text x="60" y="244" text-anchor="middle" fill="#2E7D32" font-size="10" font-weight="700">12V</text>
  <!-- R -->
  <line x1="76" y1="240" x2="100" y2="240" stroke="#333" stroke-width="2"/>
  <rect x="100" y="228" width="50" height="24" fill="none" stroke="#E53935" stroke-width="2" rx="3"/>
  <text x="125" y="244" text-anchor="middle" fill="#E53935" font-size="10" font-weight="700">6Ω</text>
  <line x1="150" y1="240" x2="180" y2="240" stroke="#333" stroke-width="2"/>
  <!-- Is = open circuit -->
  <line x1="180" y1="230" x2="180" y2="250" stroke="#E53935" stroke-width="2.5"/>
  <text x="193" y="244" fill="#E53935" font-size="9" font-weight="600">open</text>
  <!-- Result -->
  <text x="120" y="275" text-anchor="middle" fill="#2E7D32" font-size="11" font-weight="600">I'R = 12/6 = 2 A</text>
  <!-- Plus sign -->
  <text x="230" y="245" text-anchor="middle" fill="#333" font-size="22" font-weight="700">+</text>
  <!-- Sub-circuit 2: Current source only -->
  <text x="340" y="185" text-anchor="middle" fill="#1565C0" font-size="12" font-weight="700">Step 2: I source only</text>
  <rect x="250" y="195" width="180" height="90" fill="none" stroke="#1565C0" stroke-width="1.5" rx="8"/>
  <!-- Vs = short -->
  <line x1="280" y1="240" x2="310" y2="240" stroke="#2E7D32" stroke-width="2.5"/>
  <text x="295" y="232" fill="#2E7D32" font-size="9" font-weight="600">short</text>
  <!-- R -->
  <rect x="310" y="228" width="50" height="24" fill="none" stroke="#E53935" stroke-width="2" rx="3"/>
  <text x="335" y="244" text-anchor="middle" fill="#E53935" font-size="10" font-weight="700">6Ω</text>
  <line x1="360" y1="240" x2="380" y2="240" stroke="#333" stroke-width="2"/>
  <!-- Is active -->
  <circle cx="400" cy="240" r="16" fill="none" stroke="#1565C0" stroke-width="2.5"/>
  <text x="400" y="244" text-anchor="middle" fill="#1565C0" font-size="10" font-weight="700">2A</text>
  <!-- Result -->
  <text x="340" y="275" text-anchor="middle" fill="#1565C0" font-size="11" font-weight="600">I''R = 2 A</text>
  <!-- Final result -->
  <rect x="100" y="320" width="240" height="50" fill="#EEF4FF" stroke="#A8C8FF" stroke-width="2" rx="10"/>
  <text x="220" y="340" text-anchor="middle" fill="#333" font-size="13" font-weight="700">Step 3: Combine</text>
  <text x="220" y="360" text-anchor="middle" fill="#5A3EED" font-size="14" font-weight="700">IR = I'R + I''R = 2 + 2 = 4 A</text>
  <!-- Arrows -->
  <line x1="120" y1="295" x2="180" y2="320" stroke="#888" stroke-width="1.5"/>
  <line x1="340" y1="295" x2="260" y2="320" stroke="#888" stroke-width="1.5"/>
</svg>
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

<h4 style="color: #5A3EED; font-weight: 700; margin-top: 2rem; margin-bottom: 0.8rem;">Interactive Simulation: Superposition Principle Demonstrator</h4>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px; margin: 1rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);">
<iframe src="../../sims/superposition-demo/main.html" width="100%" height="700px" scrolling="no" style="border:none; border-radius:8px; overflow:hidden;"></iframe>
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

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Circuit Diagram — Series and Parallel Equivalent Resistance</h3>

<div style="background: #F8F6FF; border: 2px solid #D4C8FF; border-radius: 12px; padding: 20px; margin: 1.5rem 0; text-align: center;">
<svg width="440" height="360" viewBox="0 0 440 360" xmlns="http://www.w3.org/2000/svg" style="font-family: 'Segoe UI', Arial, sans-serif;">
  <!-- Series Section -->
  <text x="220" y="22" text-anchor="middle" fill="#333" font-size="14" font-weight="700">Series: Req = R₁ + R₂ + R₃</text>
  <!-- Series circuit -->
  <line x1="30" y1="60" x2="80" y2="60" stroke="#333" stroke-width="2.5"/>
  <rect x="80" y="47" width="70" height="26" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="115" y="65" text-anchor="middle" fill="#E53935" font-size="11" font-weight="700">R₁</text>
  <line x1="150" y1="60" x2="180" y2="60" stroke="#333" stroke-width="2.5"/>
  <rect x="180" y="47" width="70" height="26" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="215" y="65" text-anchor="middle" fill="#E53935" font-size="11" font-weight="700">R₂</text>
  <line x1="250" y1="60" x2="280" y2="60" stroke="#333" stroke-width="2.5"/>
  <rect x="280" y="47" width="70" height="26" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="315" y="65" text-anchor="middle" fill="#E53935" font-size="11" font-weight="700">R₃</text>
  <line x1="350" y1="60" x2="410" y2="60" stroke="#333" stroke-width="2.5"/>
  <!-- Arrow to equivalent -->
  <text x="220" y="100" text-anchor="middle" fill="#5A3EED" font-size="16" font-weight="700">⇓</text>
  <line x1="100" y1="120" x2="160" y2="120" stroke="#333" stroke-width="2.5"/>
  <rect x="160" y="107" width="120" height="26" fill="none" stroke="#5A3EED" stroke-width="2.5" rx="3"/>
  <text x="220" y="125" text-anchor="middle" fill="#5A3EED" font-size="12" font-weight="700">R<tspan font-size="9" dy="3">eq</tspan><tspan dy="-3"> = R₁+R₂+R₃</tspan></text>
  <line x1="280" y1="120" x2="340" y2="120" stroke="#333" stroke-width="2.5"/>
  <!-- Divider -->
  <line x1="30" y1="155" x2="410" y2="155" stroke="#D4C8FF" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Parallel Section -->
  <text x="220" y="178" text-anchor="middle" fill="#333" font-size="14" font-weight="700">Parallel: 1/Req = 1/R₁ + 1/R₂ + 1/R₃</text>
  <!-- Parallel circuit -->
  <line x1="50" y1="260" x2="120" y2="260" stroke="#333" stroke-width="2.5"/>
  <!-- Split point -->
  <circle cx="120" cy="260" r="4" fill="#333"/>
  <!-- Top branch R1 -->
  <line x1="120" y1="260" x2="120" y2="210" stroke="#333" stroke-width="2"/>
  <line x1="120" y1="210" x2="170" y2="210" stroke="#333" stroke-width="2"/>
  <rect x="170" y="197" width="70" height="26" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="205" y="215" text-anchor="middle" fill="#E53935" font-size="11" font-weight="700">R₁</text>
  <line x1="240" y1="210" x2="310" y2="210" stroke="#333" stroke-width="2"/>
  <!-- Middle branch R2 -->
  <line x1="120" y1="260" x2="170" y2="260" stroke="#333" stroke-width="2"/>
  <rect x="170" y="247" width="70" height="26" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="205" y="265" text-anchor="middle" fill="#E53935" font-size="11" font-weight="700">R₂</text>
  <line x1="240" y1="260" x2="310" y2="260" stroke="#333" stroke-width="2"/>
  <!-- Bottom branch R3 -->
  <line x1="120" y1="260" x2="120" y2="310" stroke="#333" stroke-width="2"/>
  <line x1="120" y1="310" x2="170" y2="310" stroke="#333" stroke-width="2"/>
  <rect x="170" y="297" width="70" height="26" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="205" y="315" text-anchor="middle" fill="#E53935" font-size="11" font-weight="700">R₃</text>
  <line x1="240" y1="310" x2="310" y2="310" stroke="#333" stroke-width="2"/>
  <!-- Join point -->
  <circle cx="310" cy="260" r="4" fill="#333"/>
  <line x1="310" y1="210" x2="310" y2="310" stroke="#333" stroke-width="2"/>
  <line x1="310" y1="260" x2="390" y2="260" stroke="#333" stroke-width="2.5"/>
  <!-- Arrow to equivalent -->
  <text x="390" y="245" fill="#5A3EED" font-size="14" font-weight="700">⇒</text>
  <text x="370" y="340" text-anchor="middle" fill="#5A3EED" font-size="12" font-weight="700">R<tspan font-size="9" dy="3">eq</tspan></text>
</svg>
</div>

<h4 style="color: #5A3EED; font-weight: 700; margin-top: 2rem; margin-bottom: 0.8rem;">Interactive Simulation: Equivalent Resistance Calculator</h4>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px; margin: 1rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);">
<iframe src="../../sims/equivalent-resistance/main.html" width="100%" height="700px" scrolling="no" style="border:none; border-radius:8px; overflow:hidden;"></iframe>
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

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Circuit Diagram — Delta and Wye Configurations</h3>

<div style="background: #F8F6FF; border: 2px solid #D4C8FF; border-radius: 12px; padding: 20px; margin: 1.5rem 0; text-align: center;">
<svg width="440" height="280" viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg" style="font-family: 'Segoe UI', Arial, sans-serif;">
  <!-- Delta Configuration (left) -->
  <text x="110" y="22" text-anchor="middle" fill="#333" font-size="14" font-weight="700">Delta (Δ)</text>
  <!-- Triangle nodes -->
  <circle cx="110" cy="50" r="6" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="110" y="42" text-anchor="middle" fill="#5A3EED" font-size="11" font-weight="700">1</text>
  <circle cx="40" cy="190" r="6" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="28" y="195" fill="#5A3EED" font-size="11" font-weight="700">3</text>
  <circle cx="180" cy="190" r="6" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="192" y="195" fill="#5A3EED" font-size="11" font-weight="700">2</text>
  <!-- Ra: 1-2 -->
  <line x1="116" y1="55" x2="175" y2="185" stroke="#333" stroke-width="2.5"/>
  <rect x="140" y="105" width="45" height="22" fill="white" stroke="#E53935" stroke-width="2" rx="3"/>
  <text x="162" y="120" text-anchor="middle" fill="#E53935" font-size="11" font-weight="700">R<tspan font-size="8" dy="2">a</tspan></text>
  <!-- Rb: 1-3 -->
  <line x1="104" y1="55" x2="45" y2="185" stroke="#333" stroke-width="2.5"/>
  <rect x="48" y="105" width="45" height="22" fill="white" stroke="#E53935" stroke-width="2" rx="3"/>
  <text x="70" y="120" text-anchor="middle" fill="#E53935" font-size="11" font-weight="700">R<tspan font-size="8" dy="2">b</tspan></text>
  <!-- Rc: 2-3 -->
  <line x1="46" y1="190" x2="174" y2="190" stroke="#333" stroke-width="2.5"/>
  <rect x="85" y="197" width="50" height="22" fill="white" stroke="#E53935" stroke-width="2" rx="3"/>
  <text x="110" y="213" text-anchor="middle" fill="#E53935" font-size="11" font-weight="700">R<tspan font-size="8" dy="2">c</tspan></text>
  <!-- Bidirectional arrow -->
  <text x="220" y="125" text-anchor="middle" fill="#5A3EED" font-size="28" font-weight="700">⇔</text>
  <!-- Wye Configuration (right) -->
  <text x="340" y="22" text-anchor="middle" fill="#333" font-size="14" font-weight="700">Wye (Y)</text>
  <!-- Center node -->
  <circle cx="340" cy="130" r="6" fill="#B8860B" stroke="#333" stroke-width="2"/>
  <text x="355" y="128" fill="#B8860B" font-size="11" font-weight="700">N</text>
  <!-- Terminal 1 (top) -->
  <circle cx="340" cy="50" r="6" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="340" y="42" text-anchor="middle" fill="#5A3EED" font-size="11" font-weight="700">1</text>
  <line x1="340" y1="56" x2="340" y2="124" stroke="#333" stroke-width="2.5"/>
  <rect x="348" y="75" width="42" height="22" fill="white" stroke="#E53935" stroke-width="2" rx="3"/>
  <text x="369" y="90" text-anchor="middle" fill="#E53935" font-size="11" font-weight="700">R<tspan font-size="8" dy="2">1</tspan></text>
  <!-- Terminal 3 (bottom-left) -->
  <circle cx="270" cy="200" r="6" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="258" y="205" fill="#5A3EED" font-size="11" font-weight="700">3</text>
  <line x1="335" y1="134" x2="275" y2="195" stroke="#333" stroke-width="2.5"/>
  <rect x="278" y="162" width="42" height="22" fill="white" stroke="#E53935" stroke-width="2" rx="3"/>
  <text x="299" y="177" text-anchor="middle" fill="#E53935" font-size="11" font-weight="700">R<tspan font-size="8" dy="2">3</tspan></text>
  <!-- Terminal 2 (bottom-right) -->
  <circle cx="410" cy="200" r="6" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="422" y="205" fill="#5A3EED" font-size="11" font-weight="700">2</text>
  <line x1="345" y1="134" x2="405" y2="195" stroke="#333" stroke-width="2.5"/>
  <rect x="362" y="162" width="42" height="22" fill="white" stroke="#E53935" stroke-width="2" rx="3"/>
  <text x="383" y="177" text-anchor="middle" fill="#E53935" font-size="11" font-weight="700">R<tspan font-size="8" dy="2">2</tspan></text>
  <!-- Bottom label -->
  <text x="220" y="260" text-anchor="middle" fill="#333" font-size="12" font-weight="600">Same terminal voltages and currents at nodes 1, 2, 3</text>
</svg>
</div>

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

<h4 style="color: #5A3EED; font-weight: 700; margin-top: 2rem; margin-bottom: 0.8rem;">Interactive Simulation: Delta-Wye Transformation Calculator</h4>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 18px; margin: 1rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);">
<iframe src="../../sims/delta-wye-calculator/main.html" width="100%" height="650px" scrolling="no" style="border:none; border-radius:8px; overflow:hidden;"></iframe>
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

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Circuit Diagram — Step-by-Step Simplification</h3>

<div style="background: #F8F6FF; border: 2px solid #D4C8FF; border-radius: 12px; padding: 20px; margin: 1.5rem 0; text-align: center;">
<svg width="440" height="370" viewBox="0 0 440 370" xmlns="http://www.w3.org/2000/svg" style="font-family: 'Segoe UI', Arial, sans-serif;">
  <!-- Step 1: Original circuit with series+parallel -->
  <text x="220" y="18" text-anchor="middle" fill="#333" font-size="13" font-weight="700">Step 1: Identify series and parallel groups</text>
  <!-- Source -->
  <circle cx="30" cy="65" r="16" fill="none" stroke="#2E7D32" stroke-width="2.5"/>
  <text x="30" y="69" text-anchor="middle" fill="#2E7D32" font-size="10" font-weight="700">Vs</text>
  <line x1="46" y1="65" x2="80" y2="65" stroke="#333" stroke-width="2"/>
  <!-- R1 in series -->
  <rect x="80" y="53" width="55" height="24" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="107" y="70" text-anchor="middle" fill="#E53935" font-size="10" font-weight="700">R₁=4Ω</text>
  <line x1="135" y1="65" x2="170" y2="65" stroke="#333" stroke-width="2"/>
  <circle cx="170" cy="65" r="3" fill="#333"/>
  <!-- R2 and R3 in parallel -->
  <line x1="170" y1="65" x2="170" y2="42" stroke="#333" stroke-width="2"/>
  <line x1="170" y1="42" x2="210" y2="42" stroke="#333" stroke-width="2"/>
  <rect x="210" y="30" width="55" height="24" fill="none" stroke="#1565C0" stroke-width="2.5" rx="3"/>
  <text x="237" y="47" text-anchor="middle" fill="#1565C0" font-size="10" font-weight="700">R₂=6Ω</text>
  <line x1="265" y1="42" x2="310" y2="42" stroke="#333" stroke-width="2"/>
  <line x1="170" y1="65" x2="170" y2="88" stroke="#333" stroke-width="2"/>
  <line x1="170" y1="88" x2="210" y2="88" stroke="#333" stroke-width="2"/>
  <rect x="210" y="76" width="55" height="24" fill="none" stroke="#1565C0" stroke-width="2.5" rx="3"/>
  <text x="237" y="93" text-anchor="middle" fill="#1565C0" font-size="10" font-weight="700">R₃=3Ω</text>
  <line x1="265" y1="88" x2="310" y2="88" stroke="#333" stroke-width="2"/>
  <circle cx="310" cy="65" r="3" fill="#333"/>
  <line x1="310" y1="42" x2="310" y2="88" stroke="#333" stroke-width="2"/>
  <line x1="310" y1="65" x2="360" y2="65" stroke="#333" stroke-width="2"/>
  <!-- R4 in series -->
  <rect x="360" y="53" width="55" height="24" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="387" y="70" text-anchor="middle" fill="#E53935" font-size="10" font-weight="700">R₄=2Ω</text>
  <!-- Parallel bracket -->
  <path d="M 205,25 L 200,25 L 200,105 L 205,105" fill="none" stroke="#1565C0" stroke-width="1.5"/>
  <text x="190" y="68" text-anchor="end" fill="#1565C0" font-size="9" font-weight="600">parallel</text>
  <!-- Arrow down -->
  <text x="220" y="130" text-anchor="middle" fill="#5A3EED" font-size="16" font-weight="700">⇓</text>
  <!-- Step 2: Combine parallel -->
  <text x="220" y="152" text-anchor="middle" fill="#333" font-size="13" font-weight="700">Step 2: Combine R₂ ∥ R₃ = (6×3)/(6+3) = 2 Ω</text>
  <circle cx="50" cy="190" r="16" fill="none" stroke="#2E7D32" stroke-width="2.5"/>
  <text x="50" y="194" text-anchor="middle" fill="#2E7D32" font-size="10" font-weight="700">Vs</text>
  <line x1="66" y1="190" x2="100" y2="190" stroke="#333" stroke-width="2"/>
  <rect x="100" y="178" width="55" height="24" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="127" y="195" text-anchor="middle" fill="#E53935" font-size="10" font-weight="700">R₁=4Ω</text>
  <line x1="155" y1="190" x2="190" y2="190" stroke="#333" stroke-width="2"/>
  <rect x="190" y="178" width="65" height="24" fill="none" stroke="#5A3EED" stroke-width="2.5" rx="3"/>
  <text x="222" y="195" text-anchor="middle" fill="#5A3EED" font-size="10" font-weight="700">R₂₃=2Ω</text>
  <line x1="255" y1="190" x2="290" y2="190" stroke="#333" stroke-width="2"/>
  <rect x="290" y="178" width="55" height="24" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="317" y="195" text-anchor="middle" fill="#E53935" font-size="10" font-weight="700">R₄=2Ω</text>
  <!-- Arrow down -->
  <text x="220" y="240" text-anchor="middle" fill="#5A3EED" font-size="16" font-weight="700">⇓</text>
  <!-- Step 3: Combine all series -->
  <text x="220" y="262" text-anchor="middle" fill="#333" font-size="13" font-weight="700">Step 3: Combine series: 4 + 2 + 2 = 8 Ω</text>
  <circle cx="100" cy="300" r="16" fill="none" stroke="#2E7D32" stroke-width="2.5"/>
  <text x="100" y="304" text-anchor="middle" fill="#2E7D32" font-size="10" font-weight="700">Vs</text>
  <line x1="116" y1="300" x2="170" y2="300" stroke="#333" stroke-width="2.5"/>
  <rect x="170" y="286" width="100" height="28" fill="#EEF4FF" stroke="#5A3EED" stroke-width="3" rx="5"/>
  <text x="220" y="305" text-anchor="middle" fill="#5A3EED" font-size="13" font-weight="700">R<tspan font-size="9" dy="3">eq</tspan><tspan dy="-3"> = 8 Ω</tspan></text>
  <line x1="270" y1="300" x2="340" y2="300" stroke="#333" stroke-width="2.5"/>
  <!-- Final note -->
  <text x="220" y="350" text-anchor="middle" fill="#333" font-size="12" font-weight="600">I = Vs / Req</text>
</svg>
</div>

---

<h2 id="310-choosing" style="color: #5A3EED !important; border-left: none !important; border-bottom: 2px solid #5A3EED; padding-left: 0 !important; padding-bottom: 0.4rem; font-weight: 800; margin-top: 2.2rem; margin-bottom: 0.8rem;">3.10 Choosing an Analysis Method</h2>

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Circuit Diagram — Method Selection Flowchart</h3>

<div style="background: #F8F6FF; border: 2px solid #D4C8FF; border-radius: 12px; padding: 20px; margin: 1.5rem 0; text-align: center;">
<svg width="440" height="340" viewBox="0 0 440 340" xmlns="http://www.w3.org/2000/svg" style="font-family: 'Segoe UI', Arial, sans-serif;">
  <!-- Start -->
  <rect x="150" y="10" width="140" height="35" fill="#5A3EED" stroke="#333" stroke-width="2" rx="17"/>
  <text x="220" y="33" text-anchor="middle" fill="white" font-size="13" font-weight="700">Analyze Circuit</text>
  <!-- Arrow down -->
  <line x1="220" y1="45" x2="220" y2="65" stroke="#333" stroke-width="2"/>
  <polygon points="215,62 225,62 220,70" fill="#333"/>
  <!-- Decision 1: Simple? -->
  <polygon points="220,75 320,110 220,145 120,110" fill="none" stroke="#B8860B" stroke-width="2"/>
  <text x="220" y="107" text-anchor="middle" fill="#B8860B" font-size="11" font-weight="700">Series/Parallel</text>
  <text x="220" y="120" text-anchor="middle" fill="#B8860B" font-size="11" font-weight="700">only?</text>
  <!-- Yes: Simplification -->
  <line x1="320" y1="110" x2="390" y2="110" stroke="#333" stroke-width="2"/>
  <text x="350" y="103" fill="#2E7D32" font-size="10" font-weight="700">Yes</text>
  <rect x="370" y="95" width="65" height="30" fill="#E7F7E7" stroke="#2E7D32" stroke-width="2" rx="5"/>
  <text x="402" y="115" text-anchor="middle" fill="#2E7D32" font-size="10" font-weight="700">Simplify</text>
  <!-- No: next question -->
  <line x1="220" y1="145" x2="220" y2="165" stroke="#333" stroke-width="2"/>
  <text x="230" y="158" fill="#E53935" font-size="10" font-weight="700">No</text>
  <polygon points="215,162 225,162 220,170" fill="#333"/>
  <!-- Decision 2: Multiple sources? -->
  <polygon points="220,175 320,210 220,245 120,210" fill="none" stroke="#B8860B" stroke-width="2"/>
  <text x="220" y="207" text-anchor="middle" fill="#B8860B" font-size="11" font-weight="700">Multiple</text>
  <text x="220" y="220" text-anchor="middle" fill="#B8860B" font-size="11" font-weight="700">sources?</text>
  <!-- Yes: Superposition -->
  <line x1="320" y1="210" x2="370" y2="210" stroke="#333" stroke-width="2"/>
  <text x="340" y="203" fill="#2E7D32" font-size="10" font-weight="700">Yes</text>
  <rect x="355" y="195" width="80" height="30" fill="#EEF4FF" stroke="#5A3EED" stroke-width="2" rx="5"/>
  <text x="395" y="215" text-anchor="middle" fill="#5A3EED" font-size="10" font-weight="700">Superposition</text>
  <!-- No: systematic -->
  <line x1="220" y1="245" x2="220" y2="265" stroke="#333" stroke-width="2"/>
  <text x="230" y="258" fill="#E53935" font-size="10" font-weight="700">No</text>
  <polygon points="215,262 225,262 220,270" fill="#333"/>
  <!-- Final decision: Fewer nodes or meshes? -->
  <line x1="220" y1="270" x2="120" y2="300" stroke="#333" stroke-width="2"/>
  <line x1="220" y1="270" x2="320" y2="300" stroke="#333" stroke-width="2"/>
  <!-- Node voltage -->
  <rect x="40" y="290" width="120" height="30" fill="#EEF4FF" stroke="#5A3EED" stroke-width="2" rx="5"/>
  <text x="100" y="310" text-anchor="middle" fill="#5A3EED" font-size="10" font-weight="700">Node Voltage</text>
  <text x="100" y="330" text-anchor="middle" fill="#888" font-size="9">(fewer nodes)</text>
  <!-- Mesh current -->
  <rect x="280" y="290" width="120" height="30" fill="#EEF4FF" stroke="#5A3EED" stroke-width="2" rx="5"/>
  <text x="340" y="310" text-anchor="middle" fill="#5A3EED" font-size="10" font-weight="700">Mesh Current</text>
  <text x="340" y="330" text-anchor="middle" fill="#888" font-size="9">(fewer meshes)</text>
</svg>
</div>

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

<h3 style="color: #5A3EED; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem;">Circuit Diagram — Matrix Formulation Example</h3>

<div style="background: #F8F6FF; border: 2px solid #D4C8FF; border-radius: 12px; padding: 20px; margin: 1.5rem 0; text-align: center;">
<svg width="440" height="250" viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" style="font-family: 'Segoe UI', Arial, sans-serif;">
  <!-- Title -->
  <text x="220" y="20" text-anchor="middle" fill="#333" font-size="13" font-weight="700">Conductance Matrix (GV = I) for a 3-Node Circuit</text>
  <!-- Circuit: 3 non-reference nodes -->
  <!-- Ground -->
  <line x1="50" y1="200" x2="390" y2="200" stroke="#333" stroke-width="2.5"/>
  <line x1="210" y1="200" x2="210" y2="215" stroke="#333" stroke-width="2"/>
  <line x1="195" y1="215" x2="225" y2="215" stroke="#333" stroke-width="2.5"/>
  <line x1="200" y1="221" x2="220" y2="221" stroke="#333" stroke-width="1.5"/>
  <line x1="205" y1="227" x2="215" y2="227" stroke="#333" stroke-width="1"/>
  <!-- Node 1 -->
  <circle cx="80" cy="80" r="7" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="80" y="60" text-anchor="middle" fill="#5A3EED" font-size="13" font-weight="700">V₁</text>
  <!-- Node 2 -->
  <circle cx="220" cy="80" r="7" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="220" y="60" text-anchor="middle" fill="#5A3EED" font-size="13" font-weight="700">V₂</text>
  <!-- Node 3 -->
  <circle cx="360" cy="80" r="7" fill="#5A3EED" stroke="#333" stroke-width="2"/>
  <text x="360" y="60" text-anchor="middle" fill="#5A3EED" font-size="13" font-weight="700">V₃</text>
  <!-- G12: node1 to node2 -->
  <line x1="87" y1="80" x2="130" y2="80" stroke="#333" stroke-width="2"/>
  <rect x="130" y="68" width="55" height="24" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="157" y="85" text-anchor="middle" fill="#E53935" font-size="10" font-weight="700">G₁₂</text>
  <line x1="185" y1="80" x2="213" y2="80" stroke="#333" stroke-width="2"/>
  <!-- G23: node2 to node3 -->
  <line x1="227" y1="80" x2="270" y2="80" stroke="#333" stroke-width="2"/>
  <rect x="270" y="68" width="55" height="24" fill="none" stroke="#E53935" stroke-width="2.5" rx="3"/>
  <text x="297" y="85" text-anchor="middle" fill="#E53935" font-size="10" font-weight="700">G₂₃</text>
  <line x1="325" y1="80" x2="353" y2="80" stroke="#333" stroke-width="2"/>
  <!-- G10: node1 to ground -->
  <line x1="80" y1="87" x2="80" y2="130" stroke="#333" stroke-width="2"/>
  <rect x="65" y="130" width="30" height="40" fill="none" stroke="#1565C0" stroke-width="2.5" rx="3"/>
  <text x="55" y="155" text-anchor="end" fill="#1565C0" font-size="10" font-weight="700">G₁₀</text>
  <line x1="80" y1="170" x2="80" y2="200" stroke="#333" stroke-width="2"/>
  <!-- G20: node2 to ground -->
  <line x1="220" y1="87" x2="220" y2="130" stroke="#333" stroke-width="2"/>
  <rect x="205" y="130" width="30" height="40" fill="none" stroke="#1565C0" stroke-width="2.5" rx="3"/>
  <text x="245" y="155" fill="#1565C0" font-size="10" font-weight="700">G₂₀</text>
  <line x1="220" y1="170" x2="220" y2="200" stroke="#333" stroke-width="2"/>
  <!-- G30: node3 to ground -->
  <line x1="360" y1="87" x2="360" y2="130" stroke="#333" stroke-width="2"/>
  <rect x="345" y="130" width="30" height="40" fill="none" stroke="#1565C0" stroke-width="2.5" rx="3"/>
  <text x="385" y="155" fill="#1565C0" font-size="10" font-weight="700">G₃₀</text>
  <line x1="360" y1="170" x2="360" y2="200" stroke="#333" stroke-width="2"/>
  <!-- Current sources -->
  <text x="80" y="45" text-anchor="middle" fill="#2E7D32" font-size="10" font-weight="600">I₁ →</text>
  <text x="220" y="45" text-anchor="middle" fill="#2E7D32" font-size="10" font-weight="600">I₂ →</text>
  <text x="360" y="45" text-anchor="middle" fill="#2E7D32" font-size="10" font-weight="600">I₃ →</text>
  <!-- Matrix note -->
  <text x="220" y="245" text-anchor="middle" fill="#333" font-size="11" font-weight="600">Diagonal: sum of conductances at node | Off-diagonal: −(shared conductance)</text>
</svg>
</div>

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
