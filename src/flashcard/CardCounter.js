import { Progress } from 'antd';
import * as React from 'react';
import './flashcard.css';


function CardCounter({ percentage }) {
    /*const [percent, setPercent] = useState(0);

    const increase = useCallback(() => {
        setPercent(state => mod(state + 100/percentage.length, (100/percentage.length) * percentage.length));
    }, [setPercent, percentage]);

    const decrease = useCallback(() => {
        setPercent(state => mod(state - 100/percentage.length, (100/percentage.length) * percentage.length))
    }, [setPercent, percentage]);*/

        return (
            <Progress percent={Math.round(percentage)}/>
        )
};


export default CardCounter;

