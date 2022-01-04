import * as React from 'react';
import "./equations.css";
import { MathJax, MathJaxContext } from 'better-react-mathjax';

function MathML() {
    return (
      <MathJaxContext>
        <h2 className="para">This is a basic example with MathML</h2>
        <MathJax className="para">
          <math xmlnsmml="http://www.w3.org/1998/Math/MathML" xmlnsm="http://schemas.openxmlformats.org/officeDocument/2006/math">
            <mi>f</mi>
              <mfenced separators="|">
                <mrow>
                  <mi>x</mi>
                </mrow>
              </mfenced>
            <mo>=</mo>
            <mfrac>
              <mrow>
                <mroot>
                  <mrow>
                    <msup>
                      <mrow>
                        <mi>x</mi>
                      </mrow>
                      <mrow>
                        <mn>2</mn>
                      </mrow>
                    </msup>
                  </mrow>
                  <mrow>
                    <mn>4</mn>
                  </mrow>
                </mroot>
              </mrow>
              <mrow>
                <mi>x</mi>
              </mrow>
            </mfrac>
            <mi>*</mi>
            <mn>12</mn>
          </math>
        </MathJax>
      </MathJaxContext>
    )
  };

export default MathML;