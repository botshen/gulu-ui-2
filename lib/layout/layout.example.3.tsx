import Layout from './layout';
import Header from './header';
import Content from './content';
import Aside from './aside';
import Footer from './footer';
import React from 'react';

const LayoutExample3: React.FunctionComponent = () => {
    return (
        <div>
            <h3>示例 3</h3>
            <Layout style={{height: 500, width: 500}} className="hi">
                <Header className="x">header</Header>
                <Layout className="aside-row">
                    <Content className="y">content</Content>
                    <Aside className="z">aside</Aside>
                </Layout>
                <Footer className="x">footer</Footer>
            </Layout>
        </div>

    );
};

export default LayoutExample3;

