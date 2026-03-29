# Chapter 4: Circuit Analysis Techniques (Nodal & Mesh)

## 4.1 Introduction

As circuits grow more complex, applying KCL and KVL directly to every element becomes tedious. Nodal analysis and mesh analysis provide systematic methods to solve any circuit by writing a minimal set of equations.

---

## 4.2 Nodal Analysis

Nodal analysis uses KCL to write equations at each node in terms of node voltages.

### Steps

1. Choose a reference node (ground)
2. Assign voltage variables to each remaining node
3. Apply KCL at each non-reference node
4. Solve the resulting system of equations

### Formulation

For a node connected to other nodes through resistors:

$$
\frac{V_a - V_b}{R_1} + \frac{V_a - V_c}{R_2} + \frac{V_a}{R_3} = 0
$$

Where:
- \(V_a\), \(V_b\), \(V_c\) = node voltages
- \(R_1\), \(R_2\), \(R_3\) = resistances between nodes

---

## 4.3 Supernode

When a voltage source is connected between two non-reference nodes, the two nodes form a **supernode**.

- Write a KCL equation around the supernode (treat both nodes as one)
- Add a constraint equation from the voltage source:

$$
V_a - V_b = V_s
$$

---

## 4.4 Nodal Analysis Example

Consider a circuit with three nodes. A 10 V source connects to node 1 through a 2 Ω resistor, and nodes 1 and 2 are connected by a 4 Ω resistor. Node 2 connects to ground through a 6 Ω resistor.

**At node 1:**

$$
\frac{V_1 - 10}{2} + \frac{V_1 - V_2}{4} = 0
$$

**At node 2:**

$$
\frac{V_2 - V_1}{4} + \frac{V_2}{6} = 0
$$

Solving these two equations simultaneously gives the node voltages.

---

## 4.5 Mesh Analysis

Mesh analysis uses KVL to write equations around each mesh in terms of mesh currents.

### Steps

1. Assign a mesh current to each mesh (typically clockwise)
2. Apply KVL around each mesh
3. Solve the resulting system of equations

### Formulation

For a mesh with a voltage source and resistors:

$$
-V_s + I_1 R_1 + (I_1 - I_2) R_2 = 0
$$

Where:
- \(I_1\), \(I_2\) = mesh currents
- \(R_1\), \(R_2\) = resistances in the mesh
- \(V_s\) = voltage source

---

## 4.6 Supermesh

When a current source is shared between two meshes, the two meshes form a **supermesh**.

- Write a KVL equation around the supermesh (skip the branch with the current source)
- Add a constraint equation from the current source:

$$
I_2 - I_1 = I_s
$$

---

## 4.7 Mesh Analysis Example

Consider a circuit with two meshes. Mesh 1 has a 12 V source and a 3 Ω resistor. A 6 Ω resistor is shared between both meshes. Mesh 2 has a 4 Ω resistor.

**Mesh 1:**

$$
-12 + 3I_1 + 6(I_1 - I_2) = 0
$$

$$
9I_1 - 6I_2 = 12
$$

**Mesh 2:**

$$
6(I_2 - I_1) + 4I_2 = 0
$$

$$
-6I_1 + 10I_2 = 0
$$

Solving: \(I_1 = 2.22\) A, \(I_2 = 1.33\) A

---

## 4.8 Choosing Between Nodal and Mesh

| Feature | Nodal Analysis | Mesh Analysis |
|---|---|---|
| Based on | KCL | KVL |
| Variables | Node voltages | Mesh currents |
| Best for | Circuits with many parallel elements | Circuits with many series elements |
| Works with | Any circuit | Planar circuits only |

---

## 4.9 Summary

- Nodal analysis writes KCL equations using node voltages
- Mesh analysis writes KVL equations using mesh currents
- Supernodes handle voltage sources between non-reference nodes
- Supermeshes handle current sources shared between meshes
- Nodal works for any circuit; mesh requires planar circuits
