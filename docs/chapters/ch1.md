# Chapter 1 — Electric Charge and Basic Circuit Quantities

## Introduction

This chapter introduces the fundamental electrical quantities that underpin all of circuit analysis. We will explore electric charge, current, voltage, power, resistance, and conductance — the essential building blocks you need before tackling any real circuit. We will also cover basic circuit vocabulary including nodes, branches, ground, and the difference between open and short circuits.

---

## Electric Charge

Everything in the electrical world begins with **electric charge**. Charge is a fundamental property of matter — just like mass tells you how much "stuff" something contains, charge tells you how that stuff interacts electromagnetically.

There are two types of charge: *positive* and *negative*. Opposite charges attract each other, and like charges repel. This simple rule governs all electrical behavior.

The SI unit of charge is the **coulomb** (C). One coulomb is an enormous amount of charge — roughly $6.24 \times 10^{18}$ electrons. In everyday circuits, you will typically encounter much smaller quantities like microcoulombs ($\mu$C) or nanocoulombs (nC).

| Prefix | Symbol | Multiplier | Example |
|--------|--------|------------|---------|
| mega | M | $10^{6}$ | 1 MC = 1,000,000 C |
| kilo | k | $10^{3}$ | 1 kC = 1,000 C |
| milli | m | $10^{-3}$ | 1 mC = 0.001 C |
| micro | $\mu$ | $10^{-6}$ | 1 $\mu$C = 0.000001 C |
| nano | n | $10^{-9}$ | 1 nC = 0.000000001 C |
| pico | p | $10^{-12}$ | 1 pC = 0.000000000001 C |

The charge carried by a single electron is approximately $-1.602 \times 10^{-19}$ C. This tiny value is called the *elementary charge* and is one of the fundamental constants of nature.

The relationship between charge, current, and time is:

$$
Q = I \cdot t
$$

Where:

- $Q$ = charge in coulombs (C)
- $I$ = current in amperes (A)
- $t$ = time in seconds (s)

---

## Current

Charge sitting still does nothing useful. When charges *move*, they create **electric current** — the lifeblood of every circuit.

Current is defined as the rate at which charge flows past a point:

$$
I = \frac{dQ}{dt}
$$

Where:

- $I$ = current in amperes (A)
- $Q$ = charge in coulombs (C)
- $t$ = time in seconds (s)

If charge flows at a steady rate, this simplifies to $I = Q / t$.

The SI unit of current is the **ampere** (A). One ampere means one coulomb of charge passes a given point every second — that is about $6.24 \times 10^{18}$ electrons per second.

An important subtlety: individual electrons in a wire actually drift very slowly (millimeters per second). So why does a light turn on instantly when you flip the switch? Because you are not waiting for specific electrons to arrive — you are waiting for the *electromagnetic field* to propagate, which travels at nearly the speed of light. Think of a pipe already full of water: when you push water in one end, water immediately comes out the other end.

### Conventional Current vs. Electron Flow

A historical quirk causes much confusion: **conventional current** flows from positive to negative, but electrons actually move from negative to positive. Early scientists guessed that positive charges were moving, and by the time the error was discovered, the convention was too deeply rooted to change.

For circuit analysis, we always use conventional current. The math works out either way — just be consistent.

- **Conventional current**: flows from $+$ to $-$ (used in analysis)
- **Electron flow**: flows from $-$ to $+$ (what physically happens in wires)

---

## Voltage

If current is the flow of charge, **voltage** is what makes charges want to flow. Voltage is the electric potential difference between two points — it is the "pressure" that pushes charges through a circuit.

Formally, voltage is the energy needed to move a unit of charge between two points:

$$
V = \frac{W}{Q}
$$

Where:

- $V$ = voltage in volts (V)
- $W$ = work (energy) in joules (J)
- $Q$ = charge in coulombs (C)

One volt means one joule of energy per coulomb of charge.

A critical point: **voltage is always measured between two points**. Saying "the voltage at point A" implicitly means "the voltage at A relative to some reference." This is just like altitude — when you say a mountain is 4,000 meters tall, you mean above sea level, not above nothing.

| Common Voltage Source | Typical Voltage |
|---|---|
| AA battery | 1.5 V |
| USB port | 5 V |
| Car battery | 12 V |
| US wall outlet (RMS) | 120 V |
| European wall outlet (RMS) | 230 V |
| High-voltage transmission line | 115,000–765,000 V |

**Safety note:** Voltages above roughly 50 V can be dangerous to humans. Always treat electricity with respect.

---

## Electrical Energy and Power

When charges move through a circuit, they transfer **energy**. This energy can light bulbs, spin motors, heat elements, or process information.

The energy transferred when a charge $Q$ moves through a voltage $V$ is:

$$
W = Q \cdot V
$$

More often we care about the *rate* of energy transfer, which is **power**:

$$
P = \frac{dW}{dt} = V \cdot I
$$

Where:

- $P$ = power in watts (W)
- $V$ = voltage in volts (V)
- $I$ = current in amperes (A)

One watt equals one joule per second. Since $V = IR$, we can also write:

$$
P = V \cdot I = I^{2}R = \frac{V^{2}}{R}
$$

These three forms are all equivalent — use whichever is most convenient.

### A Note on Energy Units

Your electricity bill uses **kilowatt-hours (kWh)**, not joules:

$$
1 \text{ kWh} = 1000 \text{ W} \times 3600 \text{ s} = 3.6 \times 10^{6} \text{ J}
$$

A 100 W light bulb running for 10 hours consumes 1 kWh. At typical US electricity prices (~$0.12/kWh), that costs about 12 cents.

---

## Resistance

Not all materials allow charges to flow equally well. **Resistance** is the property that opposes the flow of current — it is friction for electricity.

The most famous equation in electronics captures this relationship:

$$
V = IR
$$

This is **Ohm's Law**. It tells us that for a given resistance, increasing voltage increases current proportionally, and for a given voltage, increasing resistance decreases current.

The SI unit of resistance is the **ohm** ($\Omega$). One ohm is the resistance that permits one ampere of current when one volt is applied.

| Material | Typical Resistivity | Classification |
|---|---|---|
| Silver | $1.59 \times 10^{-8}$ $\Omega \cdot$m | Conductor |
| Copper | $1.68 \times 10^{-8}$ $\Omega \cdot$m | Conductor |
| Aluminum | $2.65 \times 10^{-8}$ $\Omega \cdot$m | Conductor |
| Silicon (pure) | ~2300 $\Omega \cdot$m | Semiconductor |
| Glass | $10^{10}$–$10^{14}$ $\Omega \cdot$m | Insulator |
| Rubber | ~$10^{13}$ $\Omega \cdot$m | Insulator |

Ohm's Law applies to *ohmic* (linear) materials where resistance stays constant regardless of voltage or current. Many real devices — like diodes and transistors — are *non-ohmic*, meaning their resistance varies with operating conditions.

---

## Conductance

**Conductance** is simply the reciprocal of resistance. It measures how *easily* current flows rather than how much it is opposed:

$$
G = \frac{1}{R} = \frac{I}{V}
$$

The SI unit is the **siemens** (S). You may also encounter the older unit *mho* (ohm spelled backward — electrical engineers have a particular sense of humor).

Conductance is especially handy in parallel circuit analysis, because conductances in parallel simply add up.

---

## Electrical Ground

Since voltage is always measured between two points, we need to choose a reference. That reference is called **electrical ground**, defined as 0 V.

Ground can take different forms:

- **Earth ground**: physically connected to the Earth (like the third prong on a wall outlet)
- **Chassis ground**: connected to the metal enclosure of a device
- **Signal ground**: a common reference point in a circuit, not necessarily connected to Earth

In schematics, ground is drawn as three horizontal lines of decreasing width (earth ground) or a small triangle (signal ground). The key idea is that ground is simply a convenient reference — it does not have to be the physical earth.

---

## Circuit Schematic Symbols

Electrical engineers read **circuit schematics** the way musicians read sheet music. Standardized symbols represent every component:

| Component | Symbol Description | Key Characteristic |
|---|---|---|
| Resistor | Zigzag line (US) or rectangle (EU) | Opposes current |
| Capacitor | Two parallel lines | Stores charge |
| Inductor | Coiled line | Stores energy in magnetic field |
| Voltage source | Circle with $+$ and $-$ | Provides constant voltage |
| Current source | Circle with arrow | Provides constant current |
| Ground | Three lines or triangle | Reference point (0 V) |
| Wire | Straight line | Ideal conductor (0 $\Omega$) |
| Node | Dot at wire junction | Connection point |

Learning these symbols is like learning an alphabet — once you know them, you can read any circuit diagram in the world.

---

## Nodes and Branches

To describe the structure of a circuit, we use two key terms:

- A **node** is any point where two or more circuit elements connect. All points joined by ideal wire (zero resistance) form a single node, even if they look like separate dots on the schematic.
- A **branch** is a path between two nodes that contains one circuit element (a resistor, source, etc.). Each branch carries its own current.

For a simple circuit with a battery and two resistors:

- In series: 2 nodes, 2 branches
- In parallel: 2 nodes, 3 branches

These concepts are the foundation of Kirchhoff's laws (Chapter 3) and systematic analysis methods (Chapter 4).

---

## Open Circuits and Short Circuits

Two extreme circuit conditions every engineer must understand:

An **open circuit** has infinite resistance. No current flows, but voltage can exist across the gap. This occurs when a wire is cut or a switch is off.

A **short circuit** has zero resistance. Current can become dangerously large because there is nothing to limit it. The voltage across a short is always zero ($V = IR = I \times 0 = 0$).

| Condition | Resistance | Current | Voltage Across |
|---|---|---|---|
| Open circuit | $\infty$ | 0 | Any value |
| Short circuit | 0 | Limited by rest of circuit | 0 |
| Normal operation | Finite, nonzero | Finite, nonzero | Finite, nonzero |

**Warning:** Never create an unintentional short circuit across a power source. Excessive current causes overheating, fires, or explosions. Circuit breakers and fuses exist specifically to protect against this.

---

## Power Dissipation

When current passes through a resistor, electrical energy is converted to heat. This **power dissipation** is given by:

$$
P = I^{2}R = \frac{V^{2}}{R}
$$

Resistive heating is essential for toasters, space heaters, and incandescent light bulbs. But unwanted dissipation in signal circuits is waste, and engineers work hard to minimize it.

Every resistor has a **power rating** — the maximum power it can safely handle. Common ratings are 1/8 W, 1/4 W, 1/2 W, 1 W, and 2 W. Exceeding the rating can change the resistance value, cause failure, or start a fire.

---

## SI Units for Circuits

Consistency in units prevents errors and allows engineers worldwide to communicate precisely. Here is your essential reference:

| Quantity | Symbol | SI Unit | Unit Symbol |
|---|---|---|---|
| Charge | $Q$ | coulomb | C |
| Current | $I$ | ampere | A |
| Voltage | $V$ | volt | V |
| Resistance | $R$ | ohm | $\Omega$ |
| Conductance | $G$ | siemens | S |
| Power | $P$ | watt | W |
| Energy | $W$ | joule | J |
| Capacitance | $C$ | farad | F |
| Inductance | $L$ | henry | H |

When in doubt, check your units. If you are calculating current and your answer comes out in volts, something went wrong. Dimensional analysis catches more errors than you would expect.

---

## Worked Example

A 9 V battery is connected to a 1 k$\Omega$ resistor. Find the current, power dissipation, and energy consumed in one hour.

**Current (Ohm's Law):**

$$
I = \frac{V}{R} = \frac{9}{1000} = 0.009 \text{ A} = 9 \text{ mA}
$$

**Power:**

$$
P = V \cdot I = 9 \times 0.009 = 0.081 \text{ W} = 81 \text{ mW}
$$

A standard 1/4 W resistor handles this easily.

**Energy in one hour:**

$$
W = P \cdot t = 0.081 \times 3600 = 291.6 \text{ J}
$$

That is about 0.000081 kWh — essentially free to run.

---

## Summary

- **Electric charge** ($Q$) is the fundamental property behind all electrical phenomena, measured in coulombs
- **Current** ($I$) is the flow of charge: $I = dQ/dt$, measured in amperes
- **Voltage** ($V$) is the energy per unit charge that drives current, measured in volts
- **Resistance** ($R$) opposes current: $V = IR$ (Ohm's Law), measured in ohms
- **Conductance** ($G$) is the reciprocal of resistance, measured in siemens
- **Power** ($P$) is the rate of energy transfer: $P = VI$, measured in watts
- **Ground** is the 0 V reference point for voltage measurements
- **Nodes** are connection points; **branches** are paths between nodes
- **Open circuits** have infinite resistance and zero current
- **Short circuits** have zero resistance and potentially dangerous current
- Dimensional analysis using SI units catches calculation errors
