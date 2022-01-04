import * as React from 'react';
import { Card } from 'antd';
import { useState, useEffect } from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import './flashcard.css';

function CardPreview({data}) {
    const [index, setIndex] = useState(0);
    const config = {loader: {load: ["input/asciimath"]}}
    
    /*function MathJaxReloader() {
        return ( 
            MathJax.Hub.Queue(["Typeset",MathJax.Hub])
        )
    }*/

    useEffect(() => {
        const tick = () => setIndex(i => i+1);
        const id = setInterval(tick, 5000);
        return () => clearInterval(id);
    }, [])

   /* useEffect(() => {
        const load = () => MathJaxReloader();
        const reload = setInterval(load, 5000);
        return () => clearInterval(reload);
    }, [])*/

        return (
            <Card className="cardpreview" >
                <MathJaxContext config={config}>
                    <MathJax dynamic className='fadeinout'>{data[index % data.length]}</MathJax>
                </MathJaxContext>
            </Card>
        )
}

export default CardPreview;

/*useEffect(() => {
        const emptyConfig = () => setConfig({});
        const nullconfig = setInterval(emptyConfig, 3000);
        return () => clearInterval(nullconfig);
    }, [])

    useEffect(() => {
        const newConfig = () => setConfig({loader: {load: ["input/asciimath", 'output/chtml', 'ui/menu']}});
        const resetconfig = setInterval(newConfig, 4900);
        return () => clearInterval(resetconfig);
    }, [])*/