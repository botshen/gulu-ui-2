import React from 'react';
import  {modal} from './dialog';


const DialogExample2: React.FC = () => {
    const openModal = () => {
        const close = modal(<h1>你好
            <button onClick={() => close()}>close</button>
        </h1>);
    };
    return (
        <div>
            <h3>示例 2</h3>
            <button onClick={openModal}>modal</button>
        </div>
    );
};

export default DialogExample2;