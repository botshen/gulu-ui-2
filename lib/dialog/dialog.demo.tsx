import React, {Fragment} from 'react';
import Demo from '../../demo';
import DialogExample1 from './dialog.example.1';

const DialogDemo = () => {
    return (
        <Fragment>
            <h1>Dialog 对话框</h1>
            <Demo code={require('!!raw-loader!./dialog.example.1.tsx').default}>
                <DialogExample1/>
            </Demo>
            <Demo code={require('!!raw-loader!./dialog.example.1.tsx').default}>
                <DialogExample1/>
            </Demo>
            <Demo code={require('!!raw-loader!./dialog.example.1.tsx').default}>
                <DialogExample1/>
            </Demo>


        </Fragment>
    );
};

export default DialogDemo;