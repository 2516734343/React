import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ref from "./components/ref/Ref";
import AutoFocusTextInput from './components/ref/AutoFocusTextInput'
import OldContext from "./components/context/OldContext";
import Example from './components/hook/UseContext';
import ReduceDemo from './components/hook/UseReducer';
import Example2 from './components/hook/useReducerDemo/Example2';
import UseMemo from './components/hook/UseMemo';
import UseRef from './components/hook/UseRef';
import Example9 from './components/hook/自定义hook';
import Test from './components/common/CheckBoxGroup/test';
import TestRadio from './components/common/RadioBoxGroup/testRadio';
import TestSelect from './components/common/Select/testSelect';
import ThreeLayOut from "./components/common/ThreeLayout";
// import TestModal from './components/common/Modal/TestModal';
import PaginationTest from './components/common/Pagination/Test';
import TestInput from './components/common/Input/testInput';

function App() {
    return (
        <div className="App">
            {/*<Ref/>*/}
            {/*<AutoFocusTextInput/>*/}
            {/*<OldContext/>*/}
            {/*<Example/>*/}
            {/*<ReduceDemo/>*/}
            {/*<Example2/>*/}
            {/*<UseMemo/>*/}
            {/*<UseRef/>*/}
            {/*<Example9/>*/}
            {/*<Test/>*/}
            {/*<TestRadio/>*/}
            {/*<TestSelect/>*/}
            {/*<ThreeLayOut leftWidth={300}*/}
            {/*             left={<div style={{height: '100%', backgroundColor: '#ddd'}}>left</div>}*/}
            {/*             right={<div style={{height: '100%', backgroundColor: '#ccc'}}>right</div>}*/}
            {/*             rightWidth={400}*/}
            {/*             gap={20}>*/}
            {/*    <div style={{backgroundColor: 'green'}}>*/}
            {/*        main*/}
            {/*        <p>111</p>*/}
            {/*    </div>*/}
            {/*</ThreeLayOut>*/}
            {/*<TestModal/>*/}
            <PaginationTest/>
            {/*<TestInput/>*/}
        </div>
    );
}

export default App;
