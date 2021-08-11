import React from 'react';
import { Carousel } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined, WarningFilled} from '@ant-design/icons';
import CardTrial from './Card';
import moment from 'moment';

const CarouselTrial = ({trials, empty}) => {
  const responsiveCarousel= [
      {
          breakpoint: 1424,// in pixels
          settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          }
      },
      {
          breakpoint: 1200,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          }
      },
      {
          breakpoint: 850,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          initialSlide: 0,
          }
      },
  ];// breakpoints for responsive of Carousel comp.

  function SampleNextArrow({style, onClick, className}) {
    // call of props is an obligation for its use in select comp. especially onClick, without it, not working 
    return (
        <RightCircleOutlined className={className} style={{...style, fontSize:"35px", color: "grey", width: "auto"}} onClick={onClick}></RightCircleOutlined>
    );
  }// new comp. for right arrow to display in the antd carousel comp. (nextArrow)
  function SamplePrevArrow({style, onClick, className}) {
    return (
        <LeftCircleOutlined className={className} style={{...style, fontSize:"35px", color: "grey", zIndex: "1", width: "auto"}} onClick={onClick}></LeftCircleOutlined>
    );
  }// same new comp. for left arrow to display in the antd carousel comp. (prevArrow)

  return (
    <div style={{position: "relative", width: "96%", height:"300px", transform: "translateX(-50%)", left: "50%"}}>
      {// ternary operator used here for displaying "no data" div or carousel if empty state from trial comp. is true or false
        empty
        ?
        <div style={{height: "100%", display: "flex", flexDirection:"column", justifyContent:"center", alignItems: "center"}}><WarningFilled style={{fontSize: "55px"}}/><p>Aucune épreuve de prévu</p></div> 
        :
        <Carousel 
          style={{width: "100%"}} 
          infinite={false}
          slidesToShow={3} 
          slidesToScroll={3} 
          dots={false}
          arrows={true} 
          prevArrow={<SamplePrevArrow/>} 
          nextArrow={<SampleNextArrow/>} 
          responsive={responsiveCarousel}
        >
          {trials.map((trial)=>{
            return (
              <CardTrial key={trial.id} sport={trial.sportId} name={trial.sportTitle} date={moment(parseInt(trial.date)).format('DD/MM/YYYY - HH:mm')/* use of moment js for date format */} src={trial.pictureUrl}></CardTrial>
            )
          })/*map array called from the trials prop in order to display all the CardTrial comp. with infos transfered in props*/}
        </Carousel>
      }
    </div>
  );
};

export default CarouselTrial;