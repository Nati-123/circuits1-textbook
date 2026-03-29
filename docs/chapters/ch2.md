# Chapter 2 — Ohm's Law and Basic Circuit Configurations

## Introduction

This chapter teaches you to analyze real circuits. If Chapter 1 gave you the vocabulary — voltage, current, resistance — this chapter teaches you to speak in complete sentences. The most important sentence? **Ohm's Law**. Master it, and you can look at a circuit schematic and understand what it does.

We will cover the resistor in detail, explore voltage and current sources, learn series and parallel circuit rules, and build two of the most useful circuits in electronics: the voltage divider and the current divider.

---

## The Resistor

The **resistor** is the most common component in electronics. It opposes the flow of current, much like a narrow section in a water pipe limits flow.

Resistors serve several functions:

- Limiting current to protect sensitive components
- Dividing voltage to create reference levels
- Converting electrical energy to heat
- Setting operating points in amplifier circuits

| Parameter | Symbol | Unit | Typical Range |
|---|---|---|---|
| Resistance | $R$ | Ohms ($\Omega$) | 0.1 $\Omega$ to 10 M$\Omega$ |
| Power Rating | $P$ | Watts (W) | 0.125 W to 2 W (common) |
| Tolerance | — | Percent (%) | $\pm$1% to $\pm$10% |
| Temperature Coefficient | TC | ppm/°C | $\pm$50 to $\pm$200 |

### Resistor Color Code

The colored bands on resistors encode their resistance value. The standard system uses position and color to represent digits and multipliers:

| Color | Digit | Multiplier | Tolerance |
|---|---|---|---|
| Black | 0 | $\times 1$ | — |
| Brown | 1 | $\times 10$ | $\pm$1% |
| Red | 2 | $\times 100$ | $\pm$2% |
| Orange | 3 | $\times 1$k | — |
| Yellow | 4 | $\times 10$k | — |
| Green | 5 | $\times 100$k | $\pm$0.5% |
| Blue | 6 | $\times 1$M | $\pm$0.25% |
| Violet | 7 | $\times 10$M | $\pm$0.1% |
| Gray | 8 | — | $\pm$0.05% |
| White | 9 | — | — |
| Gold | — | $\times 0.1$ | $\pm$5% |
| Silver | — | $\times 0.01$ | $\pm$10% |

**For a 4-band resistor:**

- Band 1: First digit
- Band 2: Second digit
- Band 3: Multiplier
- Band 4: Tolerance

### Resistor Tolerance

No resistor is manufactured perfectly. A 1 k$\Omega$ resistor with $\pm$5% tolerance (gold band) will actually measure somewhere between 950 $\Omega$ and 1050 $\Omega$. For precision circuits like measurement instruments or audio filters, specify $\pm$1% (brown band) or tighter.

---

## Ohm's Law

Georg Ohm discovered this relationship in 1827, and it remains the most important equation in circuit analysis:

$$
V = I \cdot R
$$

Where:

- $V$ = voltage across the resistor (volts)
- $I$ = current through the resistor (amperes)
- $R$ = resistance (ohms)

This equation says that voltage and current are directly proportional when resistance is constant. Double the voltage, and you double the current.

Ohm's Law can be rearranged to solve for any variable:

- $V = I \cdot R$ — find voltage
- $I = V / R$ — find current
- $R = V / I$ — find resistance

### Ohm's Law Example

A 9 V battery is connected to a 1 k$\Omega$ resistor. What current flows?

$$
I = \frac{V}{R} = \frac{9}{1000} = 0.009 \text{ A} = 9 \text{ mA}
$$

---

## Power in Resistive Circuits

Current flowing through a resistor converts electrical energy to heat. The rate of this conversion is **power**:

$$
P = V \cdot I
$$

Combining with Ohm's Law gives two additional forms:

$$
P = I^{2} R = \frac{V^{2}}{R}
$$

| Known Quantities | Formula to Use |
|---|---|
| $V$ and $I$ | $P = V \cdot I$ |
| $I$ and $R$ | $P = I^{2} R$ |
| $V$ and $R$ | $P = V^{2} / R$ |

### Component Power Rating

Every resistor has a **power rating** — the maximum power it can safely dissipate. Common values are 1/8 W, 1/4 W, 1/2 W, and 1 W. Exceed the rating and the resistor overheats, potentially changing value, failing open, or catching fire.

### Component Derating

Experienced engineers do not run components at their maximum ratings. **Derating** means operating below the maximum to improve reliability and lifespan.

A common rule of thumb: derate to 50–70% of the rated maximum. If your calculation shows 0.4 W dissipation, use a 1 W resistor rather than a 1/2 W unit right at its limit. Reasons include:

- Temperature affects resistance
- Components age faster under stress
- Manufacturing tolerances reduce actual capability
- Ambient temperature inside enclosures can be higher than bench conditions

---

## Voltage and Current Sources

Circuits need something to drive current. That is the role of **sources**.

### Voltage Source

An ideal **voltage source** maintains a constant voltage across its terminals regardless of the current drawn. Real-world examples include batteries (approximately) and regulated power supplies.

### Current Source

An ideal **current source** maintains a constant current through itself regardless of the voltage across it. Certain transistor configurations act as current sources, and they are essential for amplifier biasing.

| Source Type | Maintains Constant | Varies With Load |
|---|---|---|
| Ideal voltage source | Voltage | Current |
| Ideal current source | Current | Voltage |

### Dependent Sources

**Dependent sources** (controlled sources) have their output determined by a voltage or current elsewhere in the circuit. There are four types:

- **VCVS**: Voltage-Controlled Voltage Source
- **VCCS**: Voltage-Controlled Current Source
- **CCVS**: Current-Controlled Voltage Source
- **CCCS**: Current-Controlled Current Source

Dependent sources are drawn as diamond shapes to distinguish them from independent sources. They become critical when studying amplifiers and transistors.

---

## Series Circuits

When components are connected end-to-end, forming a single path for current, we have a **series circuit**.

Key properties:

- **Same current** flows through every component
- **Voltages add up** to equal the source voltage
- **Resistances add directly**

$$
R_{total} = R_{1} + R_{2} + R_{3} + \dots + R_{n}
$$

Putting two equal resistors in series doubles the total resistance. The total resistance is always larger than any individual resistor in the chain.

---

## Parallel Circuits

When components connect across the same two nodes, sharing the same voltage, they are in **parallel**.

Key properties:

- **Same voltage** across every component
- **Currents add up** to equal the total current from the source
- **Resistances combine reciprocally**

$$
\frac{1}{R_{total}} = \frac{1}{R_{1}} + \frac{1}{R_{2}} + \frac{1}{R_{3}} + \dots + \frac{1}{R_{n}}
$$

For two resistors in parallel, a simpler formula applies:

$$
R_{total} = \frac{R_{1} \cdot R_{2}}{R_{1} + R_{2}}
$$

This is the "product over sum" formula. A key insight: **the total parallel resistance is always less than the smallest individual resistor**. Adding more parallel paths makes it easier for current to flow.

---

## Series-Parallel Circuits

Most real circuits combine series and parallel elements. The strategy for analyzing them:

1. Identify groups of resistors that are purely in series or purely in parallel
2. Replace each group with its equivalent resistance
3. Repeat until a single equivalent resistance remains
4. Work backward to find individual voltages and currents

---

## Voltage Divider

Two resistors in series with the output tapped from the middle form a **voltage divider** — one of the most useful circuits in electronics.

$$
V_{out} = V_{in} \cdot \frac{R_{2}}{R_{1} + R_{2}}
$$

Where:

- $V_{out}$ = output voltage (at the junction of $R_1$ and $R_2$)
- $V_{in}$ = input voltage
- $R_1$ = resistor connected to the positive input
- $R_2$ = resistor connected to ground

If $R_1 = R_2$, then $V_{out} = V_{in} / 2$. Equal resistors give half the input voltage.

Voltage dividers are used for:

- Creating reference voltages for comparators
- Scaling signals to fit ADC input ranges
- Biasing transistor circuits
- Reading resistive sensors (thermistors, photoresistors)

### Loading Effect

Voltage dividers work perfectly when nothing is connected to the output. Connect a load (with its own resistance), and the output voltage drops because the load appears in parallel with $R_2$.

For a voltage divider to work well, the load resistance should be much larger than $R_2$ — typically 10$\times$ larger or more.

---

## Current Divider

Just as voltage divides in series circuits, current divides in parallel circuits. For two parallel resistors:

$$
I_{1} = I_{total} \cdot \frac{R_{2}}{R_{1} + R_{2}}
$$

Where:

- $I_1$ = current through $R_1$
- $I_{total}$ = total current entering the parallel combination

Notice: the current through $R_1$ depends on $R_2$ (and vice versa). More current flows through the **smaller** resistance — the path of least resistance.

---

## Linearity

Ohm's Law describes a **linear** relationship. Double the voltage, double the current. This linearity enables powerful analysis techniques:

- **Superposition**: analyze each source separately and add results
- **Thevenin/Norton equivalents**: reduce complex circuits to simple models
- **Matrix methods**: solve circuit equations using linear algebra

Not all components are linear (diodes and transistors are not), but resistive circuits are, making them beautifully predictable.

---

## Potentiometers

A **potentiometer** is a three-terminal resistor with an adjustable center tap. It is essentially an adjustable voltage divider.

The three terminals are:

- End terminal 1 (one end of the resistive element)
- Wiper (the moving contact)
- End terminal 2 (other end)

Potentiometers are used for volume controls, brightness adjustments, calibration settings, and position sensing. Common values range from 1 k$\Omega$ to 1 M$\Omega$.

---

## Wire Resistance

In ideal analysis, wires have zero resistance. In reality, every wire has some resistance:

$$
R_{wire} = \rho \cdot \frac{L}{A}
$$

Where:

- $\rho$ = resistivity of the material ($\Omega \cdot$m)
- $L$ = wire length (m)
- $A$ = cross-sectional area (m$^{2}$)

For short bench circuits, wire resistance is negligible. It matters when wires are long, currents are high, precision is needed, or wire gauge is small.

| AWG | Diameter (mm) | Resistance ($\Omega$/m) | Typical Use |
|---|---|---|---|
| 10 | 2.59 | 0.0033 | Power distribution |
| 14 | 1.63 | 0.0083 | House wiring |
| 18 | 1.02 | 0.021 | Lamp cord |
| 22 | 0.64 | 0.053 | Hookup wire |
| 26 | 0.40 | 0.134 | Ribbon cable |
| 30 | 0.25 | 0.339 | Wire wrap |

---

## Worked Example

**Problem:** Find all currents and voltages in a circuit with a 12 V source, $R_1 = 2$ k$\Omega$ in series with a parallel combination of $R_2 = 3$ k$\Omega$ and $R_3 = 6$ k$\Omega$.

**Step 1 — Equivalent resistance of parallel combination:**

$$
R_{23} = \frac{R_{2} \cdot R_{3}}{R_{2} + R_{3}} = \frac{3\text{k} \times 6\text{k}}{3\text{k} + 6\text{k}} = \frac{18\text{M}}{9\text{k}} = 2 \text{ k}\Omega
$$

**Step 2 — Total resistance:**

$$
R_{total} = R_{1} + R_{23} = 2\text{k} + 2\text{k} = 4 \text{ k}\Omega
$$

**Step 3 — Total current:**

$$
I_{total} = \frac{V_{s}}{R_{total}} = \frac{12}{4000} = 3 \text{ mA}
$$

**Step 4 — Voltage across $R_1$:**

$$
V_{1} = I_{total} \cdot R_{1} = 3\text{mA} \times 2\text{k}\Omega = 6 \text{ V}
$$

**Step 5 — Voltage across parallel combination:**

$$
V_{23} = V_{s} - V_{1} = 12 - 6 = 6 \text{ V}
$$

**Step 6 — Branch currents:**

$$
I_{2} = \frac{V_{23}}{R_{2}} = \frac{6}{3000} = 2 \text{ mA}
$$

$$
I_{3} = \frac{V_{23}}{R_{3}} = \frac{6}{6000} = 1 \text{ mA}
$$

**Verification:** $I_2 + I_3 = 2 + 1 = 3$ mA $= I_{total}$ ✓

The current divides in inverse proportion to resistance: twice as much flows through the 3 k$\Omega$ resistor as through the 6 k$\Omega$ resistor.

---

## Summary

**Key formulas:**

| Formula | Application |
|---|---|
| $V = IR$ | Ohm's Law |
| $P = VI = I^{2}R = V^{2}/R$ | Power |
| $R_{s} = R_{1} + R_{2} + \dots$ | Series resistance |
| $1/R_{p} = 1/R_{1} + 1/R_{2} + \dots$ | Parallel resistance |
| $R_{p} = (R_{1} \cdot R_{2})/(R_{1} + R_{2})$ | Two parallel resistors |
| $V_{out} = V_{in} \cdot R_{2}/(R_{1} + R_{2})$ | Voltage divider |

**Key concepts:**

- Ohm's Law ($V = IR$) is the foundation of all circuit analysis
- Series circuits: same current, voltages add, resistances add
- Parallel circuits: same voltage, currents add, resistances combine reciprocally
- Voltage dividers produce a fraction of the input voltage based on the resistance ratio
- Current dividers split current inversely proportional to resistance
- Always check power ratings — components fail when overheated
- Derate components to 50–70% of maximum for reliability
- Real wires have resistance that matters at high currents or long distances
- Linearity of Ohm's Law enables superposition and other powerful analysis techniques
