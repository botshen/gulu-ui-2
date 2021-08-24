import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import './layout.example.scss';
import Aside from './aside';



const LayoutExample2: React.FunctionComponent = () => {
    return (
        <div>
            <h3>示例 2</h3>
            <Layout style={{height: 500, width: 500}} >
                <Header className="x">header</Header>
                <Layout className="aside-row">
                    <Aside className="z">aside</Aside>
                    <Content className="y">content</Content>
                </Layout>
                <Footer className="x">footer</Footer>
            </Layout>
        </div>
    );
};

export default LayoutExample2;

