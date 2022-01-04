import * as React from 'react';
import "./equations.css";
import { MathJax, MathJaxContext } from 'better-react-mathjax';

function AsciiMath() {
    const config = {
      loader: { load: ["input/asciimath"] }
    };
    
    return (
      <MathJaxContext config={config}>
        <MathJax className='test'>{"`+ // -`"}</MathJax>
            <MathJax className='test'>{"`xx // -:`"}</MathJax>
            <MathJax className='test'>{"`f'(x) = d/dx`"}</MathJax>
            <MathJax className='test'>{"`int_0^1 f(x)dx`"}</MathJax>
            <MathJax className='test'>{"`sin(x) // cos(x)`"}</MathJax>
            <MathJax className='test'>{"`sum_(i=0)^oo frac{f^((n)) (a)}{n!} (x-a)^n`"}</MathJax>
            <MathJax className='test'>{"`[[0,1],[1,0]] // ((1),(1),(1))`"}</MathJax>
            <MathJax className='test'>{"`e^(ipi) = -1`"}</MathJax>
            <MathJax className='test'>{"`frac{64}{10}x-12 = 7x-63`"} </MathJax>
            <MathJax className='test'>{"`51 = 7x-frac{64}{10}x`"} </MathJax>
            <MathJax className='test'>{"`frac{510}{10} = frac{70}{10}x-frac{64}{10}x`"} </MathJax>
            <MathJax className='test'>{"`frac{510}{10} = frac{6}{10}x`"} </MathJax>
            <MathJax className='test'>{"`510 = 6x`"} </MathJax>
            <MathJax className='test'>{"`85 = x`"} </MathJax>
            <MathJax className='test'>{"`//-frac{64}{10}x; +63`"} </MathJax>
            <MathJax className='test'>{"`//-:6`"} </MathJax>
      </MathJaxContext>
  )
}

export default AsciiMath;