import * as React from 'react';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function XButton({ subject, topic }) {
    return (
        <Link to={'/' + subject + '/' + topic}>
            <Button type="primary" shape="circle" icon={<CloseOutlined />}/>
        </Link>
    )
}

export default XButton;
