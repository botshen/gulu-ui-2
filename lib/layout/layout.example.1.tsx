import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import './layout.example.scss';



const LayoutExample1: React.FunctionComponent = () => {
    return (
        <div>
            <div>
                <h3>示例 1</h3>
                <Layout style={{height: 500, width: 500}} className="hi">
                    <Header className="x">header</Header>
                    <Content className="y">content</Content>
                    <Footer className="x">footer</Footer>
                </Layout>
            </div>
        </div>
    );
};

export default LayoutExample1;

