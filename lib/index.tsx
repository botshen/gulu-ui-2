import ReactDom from 'react-dom';
import React from 'react';
import Icon from './icon';


ReactDom.render(
    <div>
        <Icon name="wechat"/>
        <Icon name="alipay"/>
        <Icon name="QQ"/>
    </div>, document.querySelector('#root'));