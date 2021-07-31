import ReactDom from 'react-dom';
import React from 'react';
import Icon from './icon';

const fn = () => {
    console.log('fn');
};

ReactDom.render(
    <div>
        <Icon name="wechat" onClick={fn}/>
    </div>, document.querySelector('#root'));