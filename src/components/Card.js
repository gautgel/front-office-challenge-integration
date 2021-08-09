import React from 'react';
import {Card} from 'antd';

const { Meta } = Card;

const CardTrial = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0"}}>
            <Card hoverable style={{width: "250px"}} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}>
                <Meta title="Sport" description="28/07/2021 - 11:00"/>
            </Card>
        </div>
    );
};

export default CardTrial;