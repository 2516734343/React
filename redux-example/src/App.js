import React, { useCallback, useContext, useDebugValue, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import useModal from 'antd/lib/modal/useModal';
import Index from './customHooks/useScroll';
import { FormInfo } from './customHooks/useFormChange';
import { Drag } from './customHooks/useDragDrop';


function App() {

  return (
    <div className="App">

      {/* <Index /> */}
      {/* <FormInfo /> */}
      <Drag />
    </div>
  );
}

export default App;
