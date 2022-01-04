import * as React from 'react';
import "./equations.css";
import { MathJax, MathJaxContext } from 'better-react-mathjax';

function LaTeX() {
    return (
      <MathJaxContext>
        <h2 className="para">This is a basic example with LaTeX</h2>
        <MathJax className="para">{"\\(f(x) = \\frac{\\sqrt[4]{x^2}}{x}*12\\)"}</MathJax>
      </MathJaxContext>
    )
  }

export default LaTeX;