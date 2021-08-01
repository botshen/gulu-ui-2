import ReactDom from 'react-dom';
import React from 'react';
import Icon from './icon';

const fn: React.MouseEventHandler = (e) => {
    console.log(e.target);
};

ReactDom.render(
    <div>
        <Icon name="wechat" onClick={fn}/>
    </div>, document.querySelector('#root'));