import React, {useState} from 'react';
import Dialog from './dialog';


const DialogExample1: React.FC = () => {
    const [x, setX] = useState(false);
    return (
        <div style={{position: 'relative', zIndex: 10}}>
            <h3>示例1</h3>
            <button onClick={() => setX(!x)}>click</button>
            <Dialog visible={x} buttons={
                [
                    <button onClick={() => {setX(false);}}>1</button>,
                    <button onClick={() => {setX(false);}}>2</button>
                ]
            } onClose={() => {setX(false);}}>
                <strong>hi</strong>
            </Dialog>
        </div>
    );
};

export default DialogExample1;