import React, { useEffect } from 'react';
import GatherInfo from './GatherInfo';
import Example from './Example';
import PsyTest from './PsyTest';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getQuestion } from '../redux/action';

const API_KEY = 'c4115cd15ddcb05d8a6533b287705c6f';
const QESTREN_SEQ = '6'

const SetPage = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetch() {
            const response = await axios.get(`https://www.career.go.kr/inspct/openapi/test/questions?apikey=${API_KEY}&q=${QESTREN_SEQ}`)
            dispatch(getQuestion(response.data.RESULT))
            console.log(response.data.RESULT)
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
                    <Example />
                </Route>
                <Route path="/test/1">
                    <PsyTest page="1" />
                </Route>
                <Route path="/test/2">
                    <PsyTest page="2" />
                </Route>
                <Route path="/test/3">
                    <PsyTest page="3" />
                </Route>
                <Route path="/test/4">
                    <PsyTest page="4" />
                </Route>
                <Route path="/test/5">
                    <PsyTest page="5" />
                </Route>
                <Route path="/test/6">
                    <PsyTest page="6" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default SetPage;
