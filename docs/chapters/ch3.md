# Chapter 3 — Kirchhoff's Laws and Circuit Topology

## Introduction

While Ohm's Law describes the behavior of individual components, **Kirchhoff's Laws** describe what happens at connections — where currents meet at nodes and voltages distribute around loops. Published by Gustav Kirchhoff in 1845, these two laws provide the mathematical framework needed to analyze circuits of any complexity.

This chapter also introduces circuit topology, the node voltage method, the mesh current method, the superposition principle, and delta-wye transformations. By the end, you will have the tools to systematically solve any DC circuit.

---

## 3.1 Kirchhoff's Current Law (KCL)

**Kirchhoff's Current Law** is a direct consequence of conservation of charge. It states that the algebraic sum of all currents entering and leaving any node must equal zero. Every coulomb that arrives at a junction must also depart — charge cannot pile up at a node.

$$
\sum_{k=1}^{n} i_{k} = 0
$$

Equivalently, the total current flowing into a node equals the total current flowing out. By convention, currents entering a node are positive and currents leaving are negative.

### KCL Example

A node where three wires meet: $I_1 = 5$ A flows in and $I_2 = 3$ A flows in. Find the third current.

By KCL (currents entering = positive):

$$
5 + 3 + I_{3} = 0
$$

$$
I_{3} = -8 \text{ A}
$$

The negative sign means 8 A flows **out** of the node.

| Current | Direction | Value |
|---|---|---|
| $I_1$ | Into node | +5 A |
| $I_2$ | Into node | +3 A |
| $I_3$ | Out of node | −8 A |
| **Sum** | — | **0 A** |

---

## 3.2 Kirchhoff's Voltage Law (KVL)

**Kirchhoff's Voltage Law** is a consequence of conservation of energy. It states that the algebraic sum of all voltages around any closed loop must equal zero. Voltage rises from sources are exactly balanced by voltage drops across resistors.

$$
\sum_{k=1}^{n} v_{k} = 0
$$

### Sign Convention for KVL

- **Choose a traversal direction** for the loop (clockwise is conventional)
- **Voltage sources:** entering the $-$ terminal and exiting the $+$ terminal is a rise (+V); the reverse is a drop (−V)
- **Resistors:** traversing in the direction of current is a drop (−IR); against current is a rise (+IR)

### KVL Example

A circuit with a 12 V battery and three series resistors: $R_1 = 2\;\Omega$, $R_2 = 3\;\Omega$, $R_3 = 1\;\Omega$.

First, find the current:

$$
I = \frac{V_{source}}{R_{total}} = \frac{12}{2 + 3 + 1} = \frac{12}{6} = 2 \text{ A}
$$

Apply KVL clockwise starting at the battery's negative terminal:

$$
+12 - (2)(2) - (2)(3) - (2)(1) = 0
$$

$$
+12 - 4 - 6 - 2 = 0 \quad \checkmark
$$

The 12 V supplied by the battery is entirely consumed across the three resistors, confirming conservation of energy.

---

## 3.3 Circuit Topology

**Circuit topology** studies how components are interconnected, independent of their type or value. It determines how many equations you need to fully solve a circuit.

| Term | Definition |
|---|---|
| **Node** | A point where two or more components connect |
| **Branch** | A path containing a single component between two nodes |
| **Loop** | Any closed path through a circuit |
| **Mesh** | A loop that contains no other loops within it (a minimal loop) |

### The Topology Formula

The relationship between branches, nodes, and independent meshes is:

$$
b = n - 1 + m
$$

Where $b$ is the number of branches, $n$ is the number of nodes, and $m$ is the number of independent meshes. KCL yields $n - 1$ independent equations and KVL yields $m$ independent equations.

---

## 3.4 The Node Voltage Method

The **node voltage method** minimizes the number of unknowns by working with node voltages rather than individual branch currents. For a circuit with $n$ nodes, this method requires $n - 1$ equations.

**Steps:**

1. Select a **reference node** (ground) — typically the node with the most connections
2. Define voltages at all other nodes relative to the reference
3. Write KCL equations at each non-reference node
4. Solve the resulting system of equations

All branch currents can then be derived from the solved node voltages using Ohm's Law.

### Choosing the Reference Node

The reference node is the zero-potential point. The choice is arbitrary — it need not be physical earth ground. Select the node with the most connections to simplify equations.

### Node Voltage Example

A circuit with a 10 V source, three nodes (A, B, and reference ground), and connecting resistors.

At node A (all currents leaving):

$$
\frac{V_{A} - 10}{R_{1}} + \frac{V_{A} - V_{B}}{R_{2}} = 0
$$

At node B:

$$
\frac{V_{B} - V_{A}}{R_{2}} + \frac{V_{B}}{R_{3}} = 0
$$

Solve this system for $V_A$ and $V_B$, then derive all branch currents with Ohm's Law.

### The Supernode Technique

When a voltage source connects two non-reference nodes, the current through it is unknown, so you cannot write a standard KCL equation. The **supernode** technique resolves this:

- Enclose the voltage source and its two connected nodes in a single boundary
- Write a KCL equation for the entire supernode (total current in = total current out)
- Add a constraint equation relating the two node voltages: $V_a - V_b = V_s$

---

## 3.5 The Mesh Current Method

The **mesh current method** assigns a circulating current to each mesh and writes KVL equations. For a circuit with $m$ meshes, exactly $m$ equations are required. This method is efficient when the circuit has many nodes but few meshes.

**Steps:**

1. Assign a **mesh current** to each mesh (conventionally all clockwise)
2. Write KVL equations around each mesh
3. Solve for the mesh currents
4. Derive branch currents and voltages as needed

### Shared Branch Currents

When two meshes share a branch, the actual branch current is the combination of both mesh currents:

| Situation | Branch Current |
|---|---|
| Only mesh 1 passes through branch | $I_1$ |
| Meshes 1 and 2 share branch, same direction | $I_1 + I_2$ |
| Meshes 1 and 2 share branch, opposite direction | $I_1 - I_2$ |

### Mesh Analysis Example

Define mesh currents $I_1$ (left mesh, clockwise) and $I_2$ (right mesh, clockwise).

**Mesh 1:**

$$
V_{s} - I_{1} R_{1} - (I_{1} - I_{2}) R_{2} = 0
$$

**Mesh 2:**

$$
-(I_{2} - I_{1}) R_{2} - I_{2} R_{3} = 0
$$

Rearranging into matrix form:

$$
\begin{bmatrix} R_{1} + R_{2} & -R_{2} \\ -R_{2} & R_{2} + R_{3} \end{bmatrix} \begin{bmatrix} I_{1} \\ I_{2} \end{bmatrix} = \begin{bmatrix} V_{s} \\ 0 \end{bmatrix}
$$

The resistance matrix is symmetric: diagonal entries contain the sum of resistances in each mesh, and off-diagonal entries contain the negative of shared resistances.

### The Supermesh Technique

When a current source is shared between two meshes, you cannot write a standard KVL equation for that branch. The **supermesh** technique resolves this:

- Combine the two meshes sharing the current source into a single outer loop
- Write KVL around the supermesh (excluding the current source branch)
- Add a constraint equation: $I_2 - I_1 = I_s$

---

## 3.6 The Superposition Principle

The **superposition principle** provides a divide-and-conquer approach for circuits with multiple independent sources. In a linear circuit, the response at any point equals the sum of responses caused by each source acting alone, with all other sources deactivated.

Deactivating sources means:

- **Voltage sources** → replace with a short circuit (0 V, wire)
- **Current sources** → replace with an open circuit (0 A, break)

### Superposition Example

A circuit with a 12 V voltage source and a 2 A current source. To find current through resistor $R$:

1. Deactivate the current source (open circuit). Solve for $I_R'$ due to the voltage source alone.
2. Deactivate the voltage source (short circuit). Solve for $I_R''$ due to the current source alone.
3. Combine: $I_R = I_R' + I_R''$

If the two contributions flow in opposite directions, algebraic addition handles the sign difference automatically.

Superposition works because Ohm's Law is linear. It does **not** apply to circuits with nonlinear elements like diodes.

---

## 3.7 Load Resistance and Equivalent Resistance

**Load resistance** ($R_L$) is the resistance of the component or subsystem being powered. The rest of the circuit exists to deliver energy to this load.

**Equivalent resistance** ($R_{eq}$) reduces a complex resistor network to a single value that draws the same current from the source.

| Configuration | Formula |
|---|---|
| Series | $R_{eq} = R_1 + R_2 + \cdots + R_n$ |
| Parallel | $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots + \frac{1}{R_n}$ |
| Mixed | Combine step by step using series and parallel rules |

Some configurations — notably bridge circuits — cannot be reduced by series and parallel rules alone. These require the **delta-wye transformation**.

---

## 3.8 Delta and Wye Configurations

Two three-terminal resistor configurations appear frequently:

- **Delta ($\Delta$)** — three resistors connected in a triangle, each directly connecting two terminals
- **Wye (Y)** — three resistors sharing a common central node, each extending to one terminal

These can be made electrically equivalent: from the external terminals, they behave identically despite having different internal structures.

### Delta-to-Wye Transformation

Each wye resistor equals the product of the two adjacent delta resistors divided by the sum of all three:

$$
R_{1} = \frac{R_{a} R_{b}}{R_{a} + R_{b} + R_{c}} \qquad R_{2} = \frac{R_{b} R_{c}}{R_{a} + R_{b} + R_{c}} \qquad R_{3} = \frac{R_{a} R_{c}}{R_{a} + R_{b} + R_{c}}
$$

### Wye-to-Delta Transformation

Each delta resistor equals the sum of all pairwise products of wye resistors divided by the opposite wye resistor:

$$
R_{a} = \frac{R_{1}R_{2} + R_{2}R_{3} + R_{1}R_{3}}{R_{3}} \qquad R_{b} = \frac{R_{1}R_{2} + R_{2}R_{3} + R_{1}R_{3}}{R_{1}} \qquad R_{c} = \frac{R_{1}R_{2} + R_{2}R_{3} + R_{1}R_{3}}{R_{2}}
$$

### When to Use Delta-Wye

- **Bridge circuits** (like the Wheatstone bridge) where resistors cannot be classified as series or parallel
- **Complex networks** that resist simplification by series/parallel reduction
- **Three-phase power systems** (covered in later chapters)

After performing the transformation, standard series and parallel rules can complete the simplification.

---

## 3.9 Circuit Simplification

**Circuit simplification** reduces a complex circuit to its simplest equivalent form:

1. Identify series or parallel resistor groups
2. Combine them using the appropriate formulas
3. Apply delta-wye transformation if no further series/parallel reductions are possible
4. Repeat until a single equivalent resistance remains

| Technique | Formula |
|---|---|
| Series combination | $R_{eq} = R_1 + R_2$ |
| Parallel combination | $R_{eq} = \frac{R_1 R_2}{R_1 + R_2}$ |
| Delta-wye transformation | See Section 3.8 |

Always attempt series and parallel reduction before resorting to delta-wye. The simpler methods are less error-prone and should be exhausted first.

---

## 3.10 Choosing an Analysis Method

| Circuit Characteristic | Recommended Method |
|---|---|
| Few nodes, many meshes | Node voltage method |
| Few meshes, many nodes | Mesh current method |
| Multiple independent sources | Superposition |
| Need only one current or voltage | Simplification + Ohm's Law |
| Bridge or complex topology | Delta-wye transformation first |
| Voltage source between non-reference nodes | Supernode technique |
| Current source shared between meshes | Supermesh technique |

Both the node voltage method and the mesh current method can solve any planar circuit. Choose the one that produces fewer simultaneous equations.

---

## 3.11 The Matrix Approach

For larger circuits, organize equations into matrix form for efficient computation.

**Node voltage formulation** ($n - 1$ unknowns):

$$
\mathbf{G} \mathbf{V} = \mathbf{I}
$$

Where $\mathbf{G}$ is the conductance matrix, $\mathbf{V}$ is the node voltage vector, and $\mathbf{I}$ is the source current vector.

**Mesh current formulation** ($m$ unknowns):

$$
\mathbf{R} \mathbf{I} = \mathbf{V}
$$

Where $\mathbf{R}$ is the resistance matrix, $\mathbf{I}$ is the mesh current vector, and $\mathbf{V}$ is the source voltage vector.

For circuits with only passive elements and independent sources, both matrices are **symmetric**: diagonal entries are positive sums of connected conductances (or resistances), and off-diagonal entries are the negatives of shared conductances (or resistances).

---

## Summary

**Key equations:**

| Concept | Equation |
|---|---|
| KCL | $\sum i_k = 0$ |
| KVL | $\sum v_k = 0$ |
| Topology | $b = n - 1 + m$ |
| Delta → Wye | $R_Y = \frac{R_{\Delta,adj1} \cdot R_{\Delta,adj2}}{\sum R_\Delta}$ |
| Wye → Delta | $R_\Delta = \frac{\sum (R_Y \text{ products})}{R_{Y,opposite}}$ |

**Key concepts:**

- KCL enforces conservation of charge at every node
- KVL enforces conservation of energy around every loop
- Circuit topology (nodes, branches, loops, meshes) determines the structure of analysis equations
- The node voltage method writes KCL equations using node voltages as unknowns
- The mesh current method writes KVL equations using mesh currents as unknowns
- Supernodes handle voltage sources between non-reference nodes
- Supermeshes handle current sources shared between meshes
- Superposition decomposes multi-source circuits into simpler single-source problems
- Delta-wye transformations simplify circuits that cannot be reduced by series/parallel rules alone
- Choose the analysis method that produces the fewest equations for the given circuit
