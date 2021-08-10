import React, { useEffect, useState } from 'react';
import { Typography, Select } from 'antd';
import CarouselTrial from './Carousel';
import axios from 'axios';

const { Option } = Select;
const { Title } = Typography;

const Trial = () => {
    const tags = ["Aviron - Double","Aviron - Solo","Cyclisme sur route","Badminton - Simple homme","Badminton - Double femme"];
    const [trialsData, setTrialsData] = useState([]);
    const [tagsData, setTagsData] = useState(tags);
    const [empty, setEmpty] = useState(false);
    // const [medalsData, setMedalData] = useState([]);
    
    const getData = () => {
      axios
        .get("http://localhost:3004/nextEvent")
        .then((res)=>setTrialsData(res.data));
    };

    useEffect(() => {
      getData();
    }, []);

    const changingTag = (e)=>{
      setTagsData(e);
      console.log(e.length);
      if (e.length === 0) {
        setEmpty(true);
      }else{
        setEmpty(false)
      }
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
            <CarouselTrial trials={trialsData.filter((trial)=> tagsData.includes(trial.sportTitle))} empty={empty}></CarouselTrial>
        </div>
    );
};

export default Trial;