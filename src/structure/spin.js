import * as React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './structure.css';

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />

function Loader() {
    return (
        <Spin indicator={antIcon} />
    )
}

export default Loader;