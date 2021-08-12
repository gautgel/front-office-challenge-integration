import React, { useEffect, useState } from 'react';
import { Typography, Select } from 'antd';
import CarouselTrial from './Carousel';
import axios from 'axios';

const { Option } = Select;
const { Title } = Typography;

const Trial = () => {
  const tags = ["Aviron - Double","Aviron - Solo","Cyclisme sur route","Badminton - Simple homme","Badminton - Double femme"];// array for displaying tags in select comp.

  // setting up states
  const [trialsData, setTrialsData] = useState([]);// state for events data
  const [tagsData, setTagsData] = useState(tags);// state which will be used to filter the data when tags change
  const [empty, setEmpty] = useState(false);// state for displaying div with "no data" mess.
  
  const getData = () => {
    axios
      .get("http://localhost:3004/nextEvent")// call api (use of json-server which provides a local back environment based on data.json)
      .then((res)=>setTrialsData(res.data));// set the trials data state with api response data
  };// method which call api with axios

  useEffect(() => {
    getData();
  }, []/* play it once */);// call getData method with useEffect method (same as componentDidmount and componentDidUpdate methods)

  const changingTag = (tags)=>{
    setTagsData(tags);// set tagsData state with the new array from updated select data
    if (tags.length === 0) {
      setEmpty(true);
    }else{
      setEmpty(false)
    }// change empty state for displaying "no data" mess. when no events are available
  };// method called after select is changed

  return (
      <div>
          <Select defaultValue={tags} mode="multiple" style={{width: "100%", margin: "10px 0"}} onChange={changingTag} placeholder="Please select a sport">
              {tags.map((tag)=>{
                  return(
                      <Option key={tag}>{tag}</Option>
                  )
              })/* map tags array for displaying option comp. in the select comp.*/}
          </Select>
          <Title level={3}>Prochaines épreuves</Title>
          <CarouselTrial trials={trialsData.filter((trial)=> tagsData.includes(trial.sportTitle))/* filter data with tagsData state array (display events in relation to tags selected)*/} empty={empty /*state true or false (displaying empty comp. or carousel comp.)*/}/>
      </div>
  );
};

export default Trial;