import React, { useState, useEffect } from 'react';
import { Typography, Table } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const Medals = () => {
  // setting up states
  const [data, setData] = useState([]);// state data for containing data from api
  const getData = ()=>{
    axios
      .get("http://localhost:3004/medals")// call api (use of json-server)
      .then((res)=>{
        setData(res.data);
      })// set data state with api response data
  }// method used for calling api with axios
  useEffect(() => {
    getData();
  }, []/* play it once*/);// use of useEffect method (same as componentDidMount and componentDidUpdate)

  const columns = [
    {
      title: 'Pays',
      dataIndex: 'country',
    },
    {
      title: 'Or',
      dataIndex: 'gold',// dataindex must be the same as the keys of dataSource object (look at map method in Table's dataSource)
      responsive: ['sm'], // media queries setted up by antd library (xs, sm, md, lg etc.)
      sorter: (a, b)=> a.gold - b.gold // method to call in order to sort the column (dataSource is used for sort method)
    },
    {
      title: 'Argent',
      dataIndex: 'silver',
      responsive: ['sm'],
      sorter: (a, b)=> a.silver - b.silver

    },
    {
      title: 'Bronze',
      dataIndex: 'bronze',
      responsive: ['sm'],
      sorter: (a, b)=> a.bronze - b.bronze
    },
    {
      title: 'Total',
      dataIndex: 'total',
      defaultSortOrder: 'descend', // set up of a default sorted column (with descend or ascend)
      sorter: (a, b)=> a.total - b.total
    },
  ]// data for columns in table comp.
  
  return (
      <div style={{margin: "0 0 25px 0"}}>
          <Title level={3}>Médailles</Title>
          <Table pagination={false} columns={columns} dataSource={data.map((data)=>{
            const country = {};
            country.key = data.key;// in order to make them unique, react warns us about it, not an obligation but better to use it
            country.country = data.country;
            country.gold = data.medals.gold;
            country.silver = data.medals.silver;
            country.bronze = data.medals.bronze;
            country.total = country.gold + country.silver + country.bronze;
            return country
          })/* map data state array for creating a new array of objects which fits the columns data and provides the dataSource for the Table comp.*/}/>
      </div>
  );
};

export default Medals;