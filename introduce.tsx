import React from 'react';
const Introduce = () => {
    return (
        <div className="ind">
            <h1>鑫 UI</h1>
            鑫 UI 是一套PC 端 React 组件库
            <h1>使用 TypeScript</h1>
            TypeScript提供了静态类型检查，让开发人员可以在代码运行之前识别某些类型问题。鑫 UI 完全使用 TypeScript 编写，有效增强了代码的健壮性。
            <h1>没有额外依赖</h1>
            鑫 UI 只依赖 React、ReactDOM 两个核心库以及 PropTypes 进行类型检查，没有其他外部依赖。
        </div>
    );
};

export default Introduce;