import React from 'react';
import {Card} from 'antd';

const { Meta } = Card;

const CardTrial = ({name, date, src, sport}) => {
    return (
        // card to display in carousel
        <div id={sport} style={{ display: "flex", justifyContent: "center", margin: "20px 0"}}>
            <Card bodyStyle={{margin: "10px 0 0 0"}} className="card-media" cover={<img alt={`épreuve de ${name}`} src={src} style={{width: "100%", height: "150px", objectFit: "cover"}} />}>
                <Meta title={name} description={date}/>
            </Card>
        </div>
    );
};

export default CardTrial;