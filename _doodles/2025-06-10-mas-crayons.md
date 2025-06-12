---
layout: doodle
title: Boxes of boxes of crayons
date: 2025-06-10
---

## Quick recapitation
Previously we used the properties of our magic crayons to define a model for a set of such crayons. The crayons have the following special properties:
 - Colors: Crayons come in six colors: red, cyan, green, magenta, blue, and yellow.
 - Opponent cancellation: A pair of crayons of opposite colors cancel each other in color, but still count as having two crayons. The pairs of opponent colors are red-cyan, green-magenta, and blue-yellow.
 - Opponent pair equivalence: A pair of opponent crayons is equivalent to, and can be substituted for, any other pair of opponent crayons.

 These properties let us define the state of a box of crayons as the number of crayons $T$ and the average color vector of the crayons $\vec{c}$:
  - $T \in \mathbb{Z}_{\ge0}$
  - $\vec{c} \in [-1,1]^3$

We also defined a derivative property $\vec{s}$ representing the total net color vector of the box:
 - $\vec{s} \in \mathbb{Z}^3$

Going forward, we'll instead use $\vec{s}$ as the primary state property and $\vec{c}$ as a derived property, since $\vec{s}$ is more useful in the equations we'll encounter. First, though, we need to define the individual crayons and the rules for combining them.

We'll define the set of possible colors as $\mathcal{C} = \set{R,C,G,M,B,Y}$ An individual crayon of color $c \in \mathcal{C}$ has a net color vector in one of the six possible axial directions $\vec{v}(c)$, determined by its color:

$$
\vec{v}(R) = \begin{bmatrix} 1 \\0 \\0 \end{bmatrix},
\vec{v}(C) = \begin{bmatrix} -1 \\0 \\0 \end{bmatrix},
\vec{v}(G) = \begin{bmatrix} 0 \\1 \\0 \end{bmatrix},
\vec{v}(M) = \begin{bmatrix} 0 \\-1 \\0 \end{bmatrix},
\vec{v}(B) = \begin{bmatrix} 0 \\0 \\1 \end{bmatrix},
\vec{v}(Y) = \begin{bmatrix} 0 \\0 \\-1 \end{bmatrix}
$$

Then, for any multiset $S$ of $T$ crayons, $S \in \mathcal{C}^T$:
 - $T := \|S\|$
 - $\vec{s} := \sum\limits_{c \in S}{\vec{v}(c)}$
 - $\vec{c} := \frac{1}{T} \cdot \vec{s}$

Any number of multisets of crayons $S_i$ can be combined into another multiset $C$ under the rules of scalar and vector addition:
 - $T_C = \sum\limits_{i}{T_i}$
 - $\vec{s_C} = \sum\limits_{i}{\vec{s_i}}$

Finally, a subset of crayons $B$ can be removed from a multiset $A$, where $B \subseteq A$ and $C = A - B$, using the rules of scalar and vector subtraction:
 - $T_C = T_A - T_B$
 - $\vec{s_C} = \vec{s_A} - \vec{s_B}$

We showed that any multiset of crayons resulting in a given $T$ and $\vec{s}$ is equivalent to any other multiset resulting in the same values of $T$ and $\vec{s}$, even if the two sets were known to be built using different crayon compositions.

## The tip of the problem
This forms the foundation for what will actually be a grid of boxes of such magic crayons. Rather than adding and removing crayons from a box at will, neighboring boxes in the grid will spill their contents into each other in a sort of osmotic exchange. We will start with a simple version with just two boxes, then build up from there to a grid of arbitray size.

First, let's lay a few ground rules that will bind some sense to the problem:
 - Total crayon count is conserved in a closed system.
 - The net color vector is conserved in a closed system.

We'll also see that neighboring boxes tend towards a same-state equilibrium. This would be caused by a relationship between the change in state and the difference in state. For example, a relationship of one of the forms:

$$\newcommand{\dd}[2]{\triangle{#1}}$$

$$
\begin{array}{c}
\triangle{T}(A,B) \propto (T_B - T_A)^n \\[0.5em]
\triangle{\vec{s}}(A,B) \propto (\vec{s_B} - \vec{s_A})^n
\end{array}
$$

or

$$
\begin{array}{c}
\triangle{T}(A,B) \propto N^{(T_B - T_A)} \\[0.5em]
\triangle{\vec{s}}(A,B) \propto N^{(\vec{s_B} - \vec{s_A})}
\end{array}
$$

or

$$
\begin{array}{c}
\triangle{T}(A,B) \propto \log(T_B - T_A) \\[0.5em]
\triangle{\vec{s}}(A,B) \propto \log(\vec{s_B} - \vec{s_A})
\end{array}
$$

or many other forms, or even some combination of those, provided, of course, that any previously-defined relationships between $T$ and $\vec{s}$ are maintained.

## Acute observations
There are many possible ways to incorporate the difference in state into the change of state. However, the requirement that the closed system $A \uplus B$ conserve total $T$ and $\vec{s}$ rules out most of these options. Using $T$ as an example:

$$
\begin{array}{c}
\sum\limits_{i,j}{\triangle{T}}(i,j) = 0 \\[0.5em]
\Rightarrow \triangle{T}(A,B) + \triangle{T}(B,A) = 0 \\[0.5em]
\Rightarrow \triangle{T}(A,B) = -\triangle{T}(B,A)
\end{array}
$$

we can see that $\triangle{T}(A,B) \propto (T_B - T_A) = k \cdot (T_B - T_A)$ (for some constant of proportionality $k$) satisfies this requirement:

$$
\triangle{T}(A,B) = k \cdot (T_B - T_A) = -k \cdot (T_A - T_B) = -\triangle{T}(B,A)
$$

and, by the same argument for $\vec{s}$, we now know that:

$$
\begin{array}{c}
\triangle{T}(A,B) \propto (T_B - T_A) \\[0.5em]
\triangle{\vec{s}}(A,B) \propto (\vec{s_B} - \vec{s_A})
\end{array}
$$

satisfy the properties we are targeting. Any pair of antisymmetric functions should do, but this one is simple and intuitive.

## A calculated jab
Given this, let's describe the flow between two neighboring boxes $A$ and $B$ in these terms, to hopefully define the equations in full. We have $\triangle{T}(A,B) = k \cdot (T_B - T_A)$. We'll want to constrain $k$ to reside in $(0, 1)$: $k \lt 0$ causes the model to diverge rather than converge, $k \gt 1$ results in oscillatory behavior (convergent if $k \lt 2$ but still undesired), $k=1$ causes the model to converge in one step (too trivial), and $k=0$ precludes proportionality. One way to enforce the desired range while still allowing further modification is to constrain it to be the output of a logistic function:

$$
\newcommand{\sigfunc}[1]{\frac{1}{1 + e^{-{#1}}}} \\
k = \sigfunc{K}
$$

where now $K$ can be any real number. From this we gain the ability to add just about any relation we'd like to the mix. We can even let $K$ be a function of $A$ and $B$, provided we maintain a symmetric relationship $K(A, B) = K(B, A)$ so that the conservation rules are respected.

$\newcommand{\kfunc}[2]{\frac{\alpha}{T_{#1} + T_{#2}}}$
Let's introduce a simple damping effect, $K(A,B) = \kfunc{A}{B}$, where $\alpha \in \mathbb{R}$ is a spill coefficient. Then we can unzip all of the definitions to this point and get back to our exchange amounts:

$$
\begin{array}{c}
\triangle{T}(A,B) = \sigfunc{\kfunc{A}{B}} \cdot (T_B - T_A) \\[1em]
\triangle{\vec{s}}(A,B) = \sigfunc{\kfunc{A}{B}} \cdot (\vec{s_B} - \vec{s_A})
\end{array}
$$

To clarify, this is largely the result of choice. In general, the state change is of the form $\triangle{S} = k(A,B) \cdot f(A,B)$, where $k$ is a symmetric function $k: A,B \mapsto (0,1)$ and $f$ is any antisymmetric function.

## Et tu, Tuesday?
Let's expand our model to now be a row of $N$ boxes rather than just a pair.

Without considering the edges just yet, a box will now have two neighbors with their own separate exchange:

$$
\begin{array}{c}
\triangle{T}(A,L) = \sigfunc{\kfunc{A}{L}} \cdot (T_L - T_A) \\[1em]
\triangle{T}(A,R) = \sigfunc{\kfunc{A}{R}} \cdot (T_R - T_A)
\end{array}
$$

or, more generally,

$$
\begin{array}{c}
\triangle{T_i} = \sum\limits_{n \in \mathcal{N}}{k(i,n) \cdot(T_n - T_i)} \\[1em]
\triangle{\vec{s}_i} = \sum\limits_{n \in \mathcal{N}}{k(i,n) \cdot(\vec{s}_n - \vec{s}_i)}
\end{array}
$$

where $\mathcal{N}$ is the set of neighboring boxes $\set{i-1, i+1}$ if $i$ is an ordered index.

We can see that the total is conserved by summing the change in all boxes. The example will use $T$, but the same logic applies to $\vec{s}$ as well:

$$
\begin{array}{c}
\sum\limits_{i}{\triangle{T_i}} = \sum\limits_{i}{\sum\limits_{n \in\mathcal{N}_i}{(k(i,n) \cdot (T_n - T_i))}} \\[1em]
= \sum\limits_{i}{(k(i,i-1) \cdot (T_{i-1} - T_i) + k(i,i+1) \cdot (T_{i+1} - T_i))} \\[1em]
= \dots + (k(i-1,i-2) \cdot (T_{i-2} - T_{i-1}) + k(i-1,i) \cdot (T_{i} - T_{i-1})) \\
+ (k(i,i-1) \cdot (T_{i-1} - T_i) + k(i,i+1) \cdot (T_{i+1} - T_i)) \\
+ (k(i+1,i) \cdot (T_{i} - T_{i+1}) + k(i+1,i+2) \cdot (T_{i+2} - T_{i+1})) + \dots \\[1em]
= \dots + k(i-1,i-2) \cdot (T_{i-2} - T_{i-1}) + \\
k(i-1,i) \cdot T_{i} - k(i-1,i) \cdot T_{i-1} + k(i,i-1) \cdot T_{i-1} - k(i,i-1) \cdot T_i \\
+ k(i,i+1) \cdot T_{i+1} - k(i,i+1) \cdot T_i + k(i+1,i) \cdot T_{i} - k(i+1,i) \cdot T_{i+1} \\
+ k(i+1,i+2) \cdot (T_{i+2} - T_{i+1}) + \dots
\end{array}
$$

Recalling that $k(A,B)=k(B,A)$, the interior terms cancel for any given $i$:

$$
= \dots + k(i-1,i-2) \cdot (T_{i-2} - T_{i-1}) \\
+ 0 + 0 \\
+ 0 + 0 \\
+ k(i+1,i+2) \cdot (T_{i+2} - T_{i+1}) + \dots
$$

which means that the total value is conserved if and only if the values at the boundaries are conserved:

$$
= k(0,-1) \cdot (T_{-1} - T_0) + 0 + 0 + \dots + k(N,N+1) \cdot (T_{N+1} - T_N)
$$

Here, we'll just define an exchange coefficient with a nonexistent box to be $0$. That is:

$$
k(x \lt 0 | x \gt N,*) := 0
$$

so that the remaining components of the exchanges with the boundary boxes are now $0$, and the total value is unchanged.

## Knife block
For the last extension, we'll just redefine this in two dimentions, for a grid of $M \times N$ boxes:

$$
\begin{array}{c}
\triangle{T_{i,j}} = \sum\limits_{m,n \in \mathcal{N}_{i,j}}{(k((i,j),(m,n)) \cdot (T_{m,n} - T_{i,j}))} \\[1em]
\triangle{\vec{s}_{i,j}} = \sum\limits_{m,n \in \mathcal{N}_{i,j}}{(k((i,j),(m,n)) \cdot (\vec{s}_{m,n} - \vec{s}_{i,j}))}
\end{array}
$$

where

$$
k((x_1, y_1), (x_2, y_2)) =
\begin{cases}
0 & \text{if } x_1 < 0 \text{ or } x_2 < 0 \\
& \text{or } x_1 > M \text{ or } x_2 > M \\
& \text{or } y_1 < 0 \text{ or } y_2 < 0 \\
& \text{or } y_1 > N \text{ or } y_2 > N \\
\sigfunc{\kfunc{x_1,y_1}{x_2,y_2}} & \text{otherwise}
\end{cases}
$$

and

$$
\mathcal{N}_{i,j} = \set{(i-1, j-1), (i-1, j), (i-1, j+1),
(i, j-1), (i, j+1),
(i+1, j-1), (i+1, j), (i+1, j+1)}
$$

<script src="{{ '/assets/js/mathjax.js' | relative_url }}"></script>
