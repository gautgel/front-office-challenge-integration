import React from 'react';
import { Carousel, Empty } from 'antd';
import CardTrial from './Card';
import moment from 'moment';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

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

  return (
    <div style={{position: "relative", width: "96%", transform: "translateX(-50%)", left: "50%"}}>
      {// ternary operator used here for displaying "no data" div or carousel if empty state from trial comp. is true or false
        empty
        ?
        <Empty description="Aucune épreuve de prévu"/> 
        :
        <Carousel 
          style={{width: "100%"}} 
          infinite={false}
          slidesToShow={3} 
          slidesToScroll={3} 
          dots={false}
          arrows={true} 
          prevArrow={<LeftArrow/>} 
          nextArrow={<RightArrow/>} 
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