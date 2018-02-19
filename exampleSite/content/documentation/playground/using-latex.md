+++
title = "Using Latex"
weight = 50
+++

### Using Latex

Implemented using [Setting MathJax with Hugo ](Shttps://divadnojnarg.github.io/blog/mathjax/)

#### Some formula surrounded by text

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 

$$\left [ – \frac{\hbar^2}{2 m} \frac{\partial^2}{\partial x^2} + V \right ] \Psi = i \hbar \frac{\partial}{\partial t} \Psi$$

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 

#### Math indeces is possible to render using escape char for indices.

Use <code>a\\\_{i}</code> instead of <code>a_{i}</code>.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 

$$ a\_{i} = b\_{i} + c\_{i} $$

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 

#### Inline math (don't forget to use escape char)

Lorem $ a\_{i} = b\_{i} + c\_{i} $ ipsum dolor sit $\chi^2$ amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
$\mathbf{y} = \mathbf{X}\boldsymbol\beta + \boldsymbol\varepsilon$
Lorem ipsum dolor sit amet, consectetur $\sqrt{3x-1}+(1+x)^2$  adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 

#### Latex showcase

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 

$$
\mathbf{V}\_1 \times \mathbf{V}\_2 =
   \begin{vmatrix}
    \mathbf{i} & \mathbf{j} & \mathbf{k} \newline
    \frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \newline
    \frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0 \newline
   \end{vmatrix}
$$

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 

$$
\begin{equation}
x(t) = e^{\int\_{t\_0}^tp(s)ds}\Bigg(\int\_{t\_0}^t\Big(q(s)e^{-\int\_{t\_0}^sp(\tau)d\tau}\Big)ds + x\_0\Bigg).
\end{equation}
$$

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 

$$
1 +  \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots =
    \prod\_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},
     \quad\quad \text{for $|q|<1$}.
$$

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 

$$
\frac{1}{(\sqrt{\phi \sqrt{5}}-\phi) e^{\frac25 \pi}} =
     1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
      {1+\frac{e^{-8\pi}} {1+\ldots} } } }
$$

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 


#### More complicated case here. 

Use <code> \left\\{ </code> instead of <code> \left\{ </code>.

$$
\left\\{
\begin{align}
\dot{x} & = \sigma(y-x) \newline
\dot{y} & = \rho x - y - xz \newline
\dot{z} & = -\beta z + xy
\end{align}
\right.
$$

To fix alignment problem of the bracket <code>'{'</code>use <code> \begin{cases} </code> instead of <code> \begin{align} </code>

$$
\begin{cases}
\dot{x} & = \sigma(y-x) \newline
\dot{y} & = \rho x - y - xz \newline
\dot{z} & = -\beta z + xy
\end{cases}
$$

