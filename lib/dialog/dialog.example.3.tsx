import React from 'react';
import {alert, confirm} from './dialog';


const DialogExample1: React.FC = () => {

    return (
        <div>
            <h3>示例 3</h3>
            <button onClick={() => alert('1')}>alert</button>
            <button onClick={() => confirm('1', () => {
                console.log('你点击了yes');
            }, () => {
                console.log('你点击了no');
            })}>confirm
            </button>
        </div>
    );
};

export default DialogExample1;