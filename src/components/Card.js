import React from 'react';
import {Card} from 'antd';

const { Meta } = Card;

const CardTrial = ({name, date, src, sport}) => {
    return (
        <div id={sport} style={{ display: "flex", justifyContent: "center", margin: "20px 0"}}>
            <Card className="card-media" hoverable cover={<img alt={`épreuve de ${name}`} src={src} style={{width: "100%", height: "200px", objectFit: "cover"}} />}>
                <Meta title={name} description={date}/>
            </Card>
        </div>
    );
};

export default CardTrial;