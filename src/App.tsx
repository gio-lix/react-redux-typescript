import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from './state'
import {State} from "./state/reducers";

function App() {

  const {bank} = useSelector((state: State) => state)
  const dispatch = useDispatch()
  const {depositMoney,withdrawMoney,bankruptMoney} = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1>{bank}</h1>
      <button onClick={() => depositMoney(200) }>add</button>
      <button onClick={() => withdrawMoney(200)}>remove</button>
      <button onClick={() => bankruptMoney(0)}>bankrupt</button>
    </div>
  );
}

export default App;
