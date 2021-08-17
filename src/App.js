import './App.css';
import React, { useState, useEffect } from 'react';
import GatherInfo from './components/GatherInfo';
import TestExample from './components/TestExample';
import PsyTest from './components/PsyTest';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import axios from 'axios';

const API_KEY = 'c4115cd15ddcb05d8a6533b287705c6f';
const QESTREN_SEQ = '6'


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
      async function fetch() {
          const response = await axios.get(`https://www.career.go.kr/inspct/openapi/test/questions?apikey=${API_KEY}&q=${QESTREN_SEQ}`)
          setData(response.data.RESULT);
          // console.log(response.data.RESULT);
      }
      fetch();
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <GatherInfo />
        </Route>
        <Route path="/example">
          <TestExample data={data}/>
        </Route>
        <Route path="/test/1">
          <PsyTest page="1" data={data.slice(0, 5)} />
        </Route>
        <Route path="/test/2">
          <PsyTest page="2" data={data.slice(5, 10)} />
        </Route>
        <Route path="/test/3">
          <PsyTest page="3" data={data.slice(10, 15)} />
        </Route>
        <Route path="/test/4">
          <PsyTest page="4" data={data.slice(15, 20)} />
        </Route>
        <Route path="/test/5">
          <PsyTest page="5" data={data.slice(20, 25)} />
        </Route>
        <Route path="/test/6">
          <PsyTest page="6" data={data.slice(25)} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
