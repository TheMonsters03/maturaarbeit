import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

function Linker({topic, subject, loading}) {
    return (
    <Link to={"/" + subject + "/" + topic}>
        <Button type="primary" loading={loading}>Close Exam</Button>
    </Link>
    )
}

export default Linker;