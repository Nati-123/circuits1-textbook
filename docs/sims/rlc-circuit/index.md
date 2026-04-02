---
title: Series vs Parallel RLC Comparison MicroSim
description: Interactive comparison of series and parallel RLC circuit step responses showing underdamped, critically damped, and overdamped behavior side by side.
---

# Series vs Parallel RLC Comparison MicroSim

<iframe src="main.html" width="720" height="660px" scrolling="no"></iframe>

**Copy this iframe to your website:**

```html
<iframe src="https://dmccreary.github.io/circuits/sims/rlc-circuit/main.html" width="720" height="660px" scrolling="no"></iframe>
```

[Run the RLC Circuit MicroSim in fullscreen](main.html){ .md-button .md-button--primary }

## Description

This MicroSim compares the step responses of **series** and **parallel** RLC circuits side by side. Both circuits share the same R, L, and C values but have different damping characteristics because their neper frequencies differ:

- **Series**: \(\alpha_s = \frac{R}{2L}\) — increasing R increases damping
- **Parallel**: \(\alpha_p = \frac{1}{2RC}\) — increasing R decreases damping

Both share the same natural frequency \(\omega_0 = \frac{1}{\sqrt{LC}}\).

**Damping Conditions:**

| Condition | Response |
|-----------|----------|
| \(\zeta < 1\) (α < ω₀) | Underdamped — oscillates around final value |
| \(\zeta = 1\) (α = ω₀) | Critically damped — fastest rise without overshoot |
| \(\zeta > 1\) (α > ω₀) | Overdamped — slow exponential rise, no oscillation |

**Interactive Features:**

- **R Slider** (1-200 Ω): Changes damping — note opposite effects on series vs parallel
- **L Slider** (1-100 mH): Changes natural frequency and series damping
- **C Slider** (1-100 µF): Changes natural frequency and parallel damping
- **Info Panel**: Live display of α, ζ, ω₀, and damping type for both configurations

### How to Use

1. With defaults (R=20Ω, L=100mH, C=100µF), observe that series is underdamped while parallel may be overdamped (or vice versa)
2. Drag the **R slider** and watch how series and parallel responses change in opposite directions
3. Find the R value where both circuits are critically damped — they will generally differ
4. Change L and C to shift the natural frequency ω₀ (shared by both)

## Physics

**Series RLC** (capacitor voltage, voltage source input):

\[
V_c(t) = V_s \left(1 - \frac{1}{\sqrt{1-\zeta_s^2}} e^{-\alpha_s t} \sin(\omega_d t + \varphi)\right) \quad \text{(underdamped)}
\]

**Parallel RLC** (voltage across parallel combination, current source input):

\[
v(t) = I_s R \left(1 - \frac{1}{\sqrt{1-\zeta_p^2}} e^{-\alpha_p t} \sin(\omega_d t + \varphi)\right) \quad \text{(underdamped)}
\]

## References

- Chapter 7: [Second-Order RLC Circuits](../../chapters/ch7.md)
- Chapter 6: Transient Analysis RC/RL
- RL Charging MicroSim - First-order RL counterpart
- RC Charging MicroSim - First-order RC counterpart
