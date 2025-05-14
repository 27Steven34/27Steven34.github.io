---
layout: doodle
title: A bit of geometry
date: 2025-05-13
---

Simple cartesian, $x, y, z$ space.

Rotate once about the $x$ axis by angle $\phi$:

$$
R_\phi =
\begin{bmatrix}
  1 & 0         & 0          \\
  0 & \cos\phi  & -\sin\phi  \\
  0 & \sin\phi  & \cos\phi
\end{bmatrix}
$$

And another rotation about the $y$ axis of angle $\psi$

$$
R_\psi =
\begin{bmatrix}
  \cos\psi  & 0 & \sin\psi  \\
  0         & 1 & 0         \\
  -\sin\psi & 0 & \cos\psi
\end{bmatrix}
$$

Then squish boi onto the OG $x, y$ plane by dropping the third component of the resulting transform.


$$
\begin{align}

\begin{bmatrix}
  x' \\
  y' \\
  \_
\end{bmatrix}
 & = R_\psi \cdot R_\phi \cdot
\begin{bmatrix}
  x   \\
  y   \\
  z
\end{bmatrix} \\

 & =
\begin{bmatrix}
  \cos\psi  & 0 & \sin\psi  \\
  0         & 1 & 0         \\
  -\sin\psi & 0 & \cos\psi
\end{bmatrix}
\cdot
\begin{bmatrix}
  1 & 0 & 0 \\
  0 & \cos\phi & -\sin\phi \\
  0 & \sin\phi & \cos\phi
\end{bmatrix}
\cdot
\begin{bmatrix}
  x   \\
  y   \\
  z
\end{bmatrix} \\

& =
\begin{bmatrix}
  \cos\psi  & \sin\psi\sin\phi & \sin\psi\cos\phi \\
  0         & \cos\phi & -\sin\phi                \\
  -\sin\psi & \cos\psi\sin\phi & \cos\psi\cos\phi
\end{bmatrix}
\cdot
\begin{bmatrix}
  x   \\
  y   \\
  z
\end{bmatrix} \\

& =
\begin{bmatrix}
  x\cos\psi + y\sin\psi\sin\phi + z\sin\psi\cos\phi \\
  y\cos\phi - z\sin\phi                             \\
  -x\sin\psi + y\cos\psi\sin\phi + z\cos\psi\cos\phi
\end{bmatrix} \\

\Longrightarrow 
\begin{bmatrix}
  x' \\
  y'
\end{bmatrix} & =
\begin{bmatrix}
  x\cos\psi + y\sin\psi\sin\phi + z\sin\psi\cos\phi \\
  y\cos\phi - z\sin\phi
\end{bmatrix}

\end{align}
$$

In our uses going forward, $\psi$ and $\phi$ will be fixed angles $0 < \psi, \phi < \pi/2$. Since they are fixed, this becomes a very simple ${\rm I\\!R}^{3} \rightarrow {\rm I\\!R}^{2}$ mapping.

<script src="{{ '/assets/js/mathjax.js' | relative_url }}"></script>
