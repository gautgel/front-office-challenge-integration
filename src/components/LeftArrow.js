import React from 'react';
import {LeftCircleOutlined} from '@ant-design/icons';

const LeftArrow = ({style, onClick, className}) => {
    return (
        <LeftCircleOutlined className={className} style={{...style, fontSize:"35px", color: "grey", width: "auto"}} onClick={onClick}></LeftCircleOutlined>
    );
};

export default LeftArrow;