import React from 'react';
import Trial from '../components/Trial';
import Medals from '../components/Medals';
import { Typography, Divider, Layout } from 'antd';
const { Header, Content } = Layout;
const { Title } = Typography;


const Home = () => {
    return (
        // use of antd library in all components 
        // displaying content with layout structure (header and content)
        <Layout>
            <Header style={{ backgroundColor: 'lightgrey', display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Title level={3}>JO 2020</Title>
            </Header>
            <Content>
                <Trial></Trial>
                <Divider style={{margin: "50px 0"}}></Divider>
                <Medals></Medals>
            </Content>
        </Layout>
    );
};

export default Home;