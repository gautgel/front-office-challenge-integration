import React from 'react';
import {RightCircleOutlined} from '@ant-design/icons';

const RightArrow = ({style, onClick, className}) => {
    return (
        <RightCircleOutlined className={className} style={{...style, fontSize:"35px", color: "grey", width: "auto"}} onClick={onClick}></RightCircleOutlined>
    );
};

export default RightArrow;