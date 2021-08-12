import React from 'react';
import {LeftCircleOutlined} from '@ant-design/icons';

const LeftArrow = ({style, onClick, className}) => {
    return (
        // left arrow sample used to replace antd carousel's left arrow, in order to work, need onClick prop, plus style and className for end or begin classes
        <LeftCircleOutlined className={className} style={{...style, fontSize:"35px", color: "grey", width: "auto"}} onClick={onClick}></LeftCircleOutlined>
    );
};

export default LeftArrow;