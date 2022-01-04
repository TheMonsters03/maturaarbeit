import * as React from 'react';
import "./equations.css";
import { MathJax, MathJaxContext } from 'better-react-mathjax';

function AsciiMath() {
    const config = {
      loader: { load: ["input/asciimath"] }
    };
    
    return (
      <MathJaxContext config={config}>
          <h2 className="para">This is a basic example with AsciiMath</h2>
          <MathJax className="para">{"`f(x) = 12*frac{root(4)(x^2)}{x}`"}</MathJax>
      </MathJaxContext>
  )
}

export default AsciiMath;