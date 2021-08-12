import React from 'react';
import {RightCircleOutlined} from '@ant-design/icons';

const RightArrow = ({style, onClick, className}) => {
    return (
        // right arrow sample used to replace antd carousel's right arrow, in order to work, need onClick prop, plus style and className for end or begin classes
        <RightCircleOutlined className={className} style={{...style, fontSize:"35px", color: "grey", width: "auto"}} onClick={onClick}></RightCircleOutlined>
    );
};

export default RightArrow;