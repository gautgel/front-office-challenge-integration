import React, { useState, useEffect } from 'react';
import { Typography, Table } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const Medals = () => {
    const [data, setData] = useState([]);
    const getData = ()=>{
        axios.get("http://localhost:3004/medals").then((res)=>{
            setData(res.data);
        })
    }
    useEffect(() => {
        getData();
    }, []);
    const columns = [
        {
            title: 'Pays',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'Or',
            dataIndex: 'gold',
            sorter: (a, b)=> a.gold - b.gold
        },
        {
            title: 'Argent',
            dataIndex: 'silver',
            sorter: (a, b)=> a.silver - b.silver

        },
        {
            title: 'Bronze',
            dataIndex: 'bronze',
            sorter: (a, b)=> a.bronze - b.bronze
        },
        {
            title: 'Total',
            dataIndex: 'total',
            defaultSortOrder: 'descend',
            sorter: (a, b)=> a.total - b.total
        },
    ]
    return (
        <div style={{margin: "0 0 25px 0"}}>
            <Title level={3}>Médailles</Title>
            <Table pagination={false} columns={columns} dataSource={data.map((data)=>{
                const country = new Object();
                country.key = data.key;
                country.country = data.country;
                country.gold = data.medals.gold;
                country.silver = data.medals.silver;
                country.bronze = data.medals.bronze;
                country.total = country.gold + country.silver + country.bronze;
                return country
            })}></Table>
        </div>
    );
};

export default Medals;