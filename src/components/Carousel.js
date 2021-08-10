import React from 'react';
import { Carousel } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined, WarningFilled} from '@ant-design/icons';
import CardTrial from './Card';

const CarouselTrial = ({trials, empty}) => {
    const responsiveCarousel= [
        {
            breakpoint: 1424,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            }
        },
        {
            breakpoint: 1000,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            fadeIn: true,
            }
        },
    ];

    function SampleNextArrow(props) {
        const { style, onClick, className } = props;
        return (
            <RightCircleOutlined className={className} style={{...style, fontSize:"35px", color: "grey", width: "auto"}} onClick={onClick}></RightCircleOutlined>
        );
    }
    function SamplePrevArrow(props) {
        const { style, onClick, className } = props;
        return (
            <LeftCircleOutlined className={className} style={{...style, fontSize:"35px", color: "grey", zIndex: "1", width: "auto"}} onClick={onClick}></LeftCircleOutlined>
        );
    }

    return (
        <div style={{position: "relative", width: "96%", height:"300px", transform: "translateX(-50%)", left: "50%"}}>
            {empty 
                ? 
                <div style={{height: "100%", display: "flex", flexDirection:"column", justifyContent:"center", alignItems: "center"}}><WarningFilled style={{fontSize: "55px"}}/><p>Aucune épreuve de prévu</p></div> 
                :
                <Carousel 
                    style={{width: "100%"}} 
                    prevArrow={<SamplePrevArrow/>} 
                    nextArrow={<SampleNextArrow/>} 
                    slidesToShow={3} 
                    slidesToScroll={3} 
                    arrows={true} 
                    dots={false}
                    infinite={false} 
                    responsive={responsiveCarousel}>
                    {trials.map((trial)=>{
                        return (
                            <CardTrial key={trial.id} sport={trial.sportId} name={trial.sportTitle} date={trial.date} src={trial.pictureUrl}></CardTrial>
                        )
                    })}
                </Carousel>
            }
        </div>
    );
};

export default CarouselTrial;