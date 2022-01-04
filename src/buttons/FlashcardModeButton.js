import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function FlashcardModeButton({ topic }) {
    return (
        <Link to={'/math/' + topic + '/flashcard_mode'}>
        <Card hoverable className="card" id="mcard">Flashcard Mode</Card>
        </Link>
    );
}

export default FlashcardModeButton;

/*const [topic, setTopic] = useState("");*/