import IconExample1 from './icon.example.1';
import React, {Fragment} from 'react';
import Demo from '../../demo';
import IconExample2 from './icon.example.2';
import IconExample3 from './icon.example.3';
import './icon.demo.scss'

const IconDemo = () => {
    return (
        <Fragment>
            <h1>Icon图标</h1>
            <Demo code={require('!!raw-loader!./icon.example.1.tsx').default}>
                <h3>
                    方向性图标
                </h3>
                <IconExample1/>
            </Demo>
            <Demo code={require('!!raw-loader!./icon.example.2.tsx').default}>
                <h3>提示建议性图标</h3>
                <IconExample2/>
            </Demo>
            <Demo code={require('!!raw-loader!./icon.example.2.tsx').default}>
                <h3>品牌和标识
                </h3>
                <IconExample3/>
            </Demo>

        </Fragment>
    );
};

export default IconDemo;