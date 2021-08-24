import React, {useState} from 'react';
import Dialog from './dialog';


const DialogExample4: React.FC = () => {
    const [y, setY] = useState(false);
    return (
        <div style={{position: 'relative', zIndex: 9}}>
            <h3>示例 4</h3>
            <button onClick={() => setY(!y)}>click</button>
            <Dialog visible={y} closeOnClickMask={true} buttons={
                [
                    <button onClick={() => {setY(false);}}>1</button>,
                    <button onClick={() => {setY(false);}}>2</button>
                ]
            } onClose={() => {setY(false);}}>
                <strong>hi</strong>
            </Dialog>
        </div>
    );
};

export default DialogExample4;