---
title: Chapter 6 Quiz — Transient Analysis RC and RL Circuits
description: Self-assessment quiz covering time constants, RC and RL charging/discharging, the universal step response formula, initial and final conditions, and natural versus forced response
hide:
  - toc
---

<div class="problems-styled" markdown>

<h1 style="color: #5A3EED !important; border-bottom: 3px solid #5A3EED; padding-bottom: 0.4rem; font-weight: 800; margin-bottom: 1.5rem;">Chapter 6 Quiz — Transient Analysis of RC and RL Circuits</h1>

<p style="color: #555; line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem;">
Test your understanding of time constants, exponential transients, initial and final conditions, and the universal step-response formula for first-order RC and RL circuits. Each question includes a detailed explanation.
</p>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 1</p>

<p style="color: #333; line-height: 1.75;">
An RC circuit has \(R = 47 \text{ k}\Omega\) and \(C = 10 \text{ µF}\). What is the time constant \(\tau\), and approximately how long does it take the circuit to reach steady state?
</p>

<div class="upper-alpha" markdown>

1. \(\tau = 47 \text{ ms}\), steady state at 235 ms
2. \(\tau = 470 \text{ ms}\), steady state at 2.35 s
3. \(\tau = 4.7 \text{ ms}\), steady state at 23.5 ms
4. \(\tau = 0.47 \text{ s}\), steady state at 470 ms

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
\(\tau = RC = 47{,}000 \times 10 \times 10^{-6} = 0.47 \text{ s} = 470 \text{ ms}\). Steady state is reached at approximately \(5\tau = 5 \times 0.47 = 2.35 \text{ s}\). After one time constant (470 ms), the circuit is 63.2% of the way to its final value. After five time constants it is at 99.3%, which engineers call "effectively complete."
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> RC Time Constant \(\tau = RC\) and the 5τ Rule
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 2</p>

<p style="color: #333; line-height: 1.75;">
A capacitor charged to 15 V discharges through a 100 kΩ resistor (\(C = 2 \text{ µF}\)). What is the capacitor voltage after one time constant has elapsed?
</p>

<div class="upper-alpha" markdown>

1. 0 V
2. 9.45 V
3. 5.52 V
4. 7.5 V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: C</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
For RC discharging: \(V_C(t) = V_0 e^{-t/\tau}\). At \(t = \tau\): \(V_C(\tau) = 15 \times e^{-1} = 15 \times 0.368 = 5.52 \text{ V}\). After one time constant, the voltage has dropped to 36.8% of its initial value (equivalently, 63.2% of the change has occurred). Note \(\tau = RC = 100{,}000 \times 2 \times 10^{-6} = 0.2 \text{ s}\).
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> RC Discharging Equation \(V_C(t) = V_0 e^{-t/\tau}\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 3</p>

<p style="color: #333; line-height: 1.75;">
An RL circuit has \(L = 40 \text{ mH}\) and \(R = 80 \text{ }\Omega\). A switch closes at \(t = 0\) connecting a 12 V source. What is the time constant \(\tau\) and the final (steady-state) current?
</p>

<div class="upper-alpha" markdown>

1. \(\tau = 3.2 \text{ s}\), \(I_f = 150 \text{ mA}\)
2. \(\tau = 0.5 \text{ ms}\), \(I_f = 150 \text{ mA}\)
3. \(\tau = 0.5 \text{ ms}\), \(I_f = 300 \text{ mA}\)
4. \(\tau = 2 \text{ ms}\), \(I_f = 150 \text{ mA}\)

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
RL time constant: \(\tau = L/R = 0.04/80 = 0.5 \times 10^{-3} \text{ s} = 0.5 \text{ ms}\). Final current (inductor is a short circuit at DC steady state): \(I_f = V_s/R = 12/80 = 0.15 \text{ A} = 150 \text{ mA}\). Note that for RL circuits, more resistance means a faster response (smaller \(\tau\)) — the opposite intuition from RC circuits.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> RL Time Constant \(\tau = L/R\) and Steady-State Current
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 4</p>

<p style="color: #333; line-height: 1.75;">
A first-order circuit switches at \(t = 0\). The capacitor voltage just before the switch is 8 V. After a long time, it will settle to 2 V. The time constant is \(\tau = 5 \text{ ms}\). Using the universal step-response formula, what is \(V_C(t)\) for \(t \geq 0\)?
</p>

<div class="upper-alpha" markdown>

1. \(V_C(t) = 2 + 6\,e^{-t/0.005}\) V
2. \(V_C(t) = 8\,e^{-t/0.005}\) V
3. \(V_C(t) = 8 - 6\,e^{-t/0.005}\) V
4. \(V_C(t) = 2 - 8\,e^{-t/0.005}\) V

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The universal formula: \(x(t) = x(\infty) + [x(0) - x(\infty)]e^{-t/\tau}\). Substituting: \(V_C(t) = 2 + [8 - 2]e^{-t/0.005} = 2 + 6e^{-t/0.005} \text{ V}\). Verify: at \(t = 0\), \(V_C = 2 + 6 = 8 \text{ V}\) ✓; as \(t \to \infty\), \(V_C \to 2 \text{ V}\) ✓. The capacitor voltage decays from 8 V toward 2 V — a step-down transient.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Universal Step-Response Formula \(x(t) = x(\infty) + [x(0)-x(\infty)]e^{-t/\tau}\)
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 5</p>

<p style="color: #333; line-height: 1.75;">
At \(t = 0^+\) (just after a switch closes), what is the initial condition on the capacitor voltage in a circuit where the capacitor had 6 V across it before the switch closed?
</p>

<div class="upper-alpha" markdown>

1. 0 V, because the switch event resets the capacitor
2. 6 V, because capacitor voltage cannot change instantaneously
3. The source voltage, regardless of prior state
4. It depends on the value of the series resistor

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
Capacitor voltage cannot change instantaneously: \(V_C(0^+) = V_C(0^-) = 6 \text{ V}\). This is because an instantaneous voltage jump would require infinite current (\(I = C \, dV/dt\)), which is physically impossible. The capacitor "remembers" its state across switching events. This continuity condition is the starting point for every transient analysis problem.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Initial Conditions — Capacitor Voltage Continuity
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 6</p>

<p style="color: #333; line-height: 1.75;">
At DC steady state, how does an ideal capacitor behave, and how does an ideal inductor behave?
</p>

<div class="upper-alpha" markdown>

1. Capacitor: short circuit; Inductor: open circuit
2. Capacitor: open circuit; Inductor: short circuit
3. Both behave as open circuits
4. Both behave as short circuits

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
At DC steady state: capacitor → open circuit (constant voltage means \(I = C \, dV/dt = 0\)); inductor → short circuit (constant current means \(V = L \, dI/dt = 0\), so no voltage across it, just its wire resistance). These replacements are how you find final conditions \(x(\infty)\) in transient analysis: substitute an open for every capacitor and a wire for every inductor, then solve the resulting purely resistive circuit.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Final Conditions — DC Steady-State Behavior
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 7</p>

<p style="color: #333; line-height: 1.75;">
The natural response of a first-order circuit is \(x_n(t) = Ae^{-t/\tau}\). What does the natural response represent physically, and what happens to it as \(t \to \infty\)?
</p>

<div class="upper-alpha" markdown>

1. The steady-state behavior driven by the source; it grows with time
2. The circuit's inherent response without any source input; it decays to zero
3. The response due to the source only; it remains constant
4. The oscillatory component; it alternates between positive and negative values

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: B</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The natural response is what the circuit does on its own based on its stored energy, independent of any sources. It always decays exponentially to zero as \(t \to \infty\), representing the circuit "forgetting" its initial conditions. The forced response is the steady-state behavior driven by the source. The complete response is natural + forced: \(x(t) = Ae^{-t/\tau} + x(\infty)\), which reduces to just \(x(\infty)\) once the transient has died out.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> Natural Response vs. Forced Response
</p>
</div>
</details>

</div>

---

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

<p style="color: #1565C0; font-weight: 700; font-size: 1.08rem; margin-top: 0; margin-bottom: 14px;">Question 8</p>

<p style="color: #333; line-height: 1.75;">
You need a timing circuit that triggers when the voltage across a capacitor reaches 63.2% of the source voltage. You have \(C = 47 \text{ µF}\). For a 3-second delay, what resistance do you need?
</p>

<div class="upper-alpha" markdown>

1. 63.8 kΩ
2. 141 kΩ
3. 15.9 kΩ
4. 47 kΩ

</div>

<details style="margin-top: 1rem;">
<summary style="color: #5A3EED; font-weight: 700; cursor: pointer;">Show Answer</summary>
<div style="background: #E7F7E7; border: 2px solid #81C784; border-radius: 10px; padding: 18px 22px; margin-top: 10px;">
<p style="color: #2E7D32; font-weight: 700; margin-top: 0;">Correct Answer: A</p>
<p style="color: #333; line-height: 1.75; margin-bottom: 0;">
The voltage reaches 63.2% of the source voltage at exactly \(t = \tau\) (one time constant). So the required time constant is \(\tau = 3 \text{ s}\). Solving for R: \(R = \tau / C = 3 / (47 \times 10^{-6}) = 63{,}830 \text{ }\Omega \approx 63.8 \text{ k}\Omega\). This is a classic RC timer design — the 63.2% threshold at \(t = \tau\) is the basis for 555 timer circuits.
</p>
<p style="color: #555; font-style: italic; margin-bottom: 0; margin-top: 8px;">
<strong>Concept Tested:</strong> RC Timer Design Using the Time Constant
</p>
</div>
</details>

</div>

---

<h2 style="color: #5A3EED !important; border-bottom: 2px solid #5A3EED; padding-bottom: 0.3rem; font-weight: 700; margin-top: 2rem;">Answers Summary</h2>

<div style="background: #EEF4FF; border: 2px solid #A8C8FF; border-radius: 12px; padding: 24px 28px; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(90,61,237,0.07);" markdown>

| Question | Answer | Concept Tested |
|----------|--------|----------------|
| 1 | B | RC Time Constant and 5τ Rule |
| 2 | C | RC Discharging Equation |
| 3 | B | RL Time Constant and Steady-State Current |
| 4 | A | Universal Step-Response Formula |
| 5 | B | Initial Conditions — Capacitor Continuity |
| 6 | B | Final Conditions — DC Steady State |
| 7 | B | Natural Response vs. Forced Response |
| 8 | A | RC Timer Design |

</div>

</div>
