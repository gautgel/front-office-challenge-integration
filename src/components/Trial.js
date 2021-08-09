import React from 'react';
import { Typography, Select, Carousel } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined} from '@ant-design/icons';
import CardTrial from './Card';

const { Option } = Select;
const { Title } = Typography;

const Trial = () => {
    const tags = ["Aviron-Double","Aviron-Solo","Cyclisme sur route","Badminton-Simple homme","Badminton-Simple femme"];
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
            breakpoint: 800,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
    ];

    const changingTag = (e)=>{
        console.log(e);
    }
    function onChange(a, b, c) {
        console.log(a, b, c);
    }

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
        <div>
            <Select defaultValue={tags} mode="multiple" style={{width: "100%", margin: "10px 0"}} onChange={changingTag} placeholder="Please select a sport">
                {tags.map((tag)=>{
                    return(
                        <Option key={tag}>{tag}</Option>
                    )
                })}
            </Select>
            <Title level={3}>Prochaines épreuves</Title>
            <Carousel style={{width: "96%", transform: "translateX(-50%)", left: "50%"}} prevArrow={<SamplePrevArrow/>} nextArrow={<SampleNextArrow/>} slidesToShow={3} slidesToScroll={3} arrows={true} dots={false} afterChange={onChange} infinite={false} responsive={responsiveCarousel}>
                <CardTrial></CardTrial>
                <CardTrial></CardTrial>
                <CardTrial></CardTrial>
                <CardTrial></CardTrial>
            </Carousel>
        </div>
    );
};

export default Trial;