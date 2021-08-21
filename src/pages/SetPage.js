import React, { useEffect } from 'react';
import GatherInfo from './GatherInfo';
import Example from './Example';
import PsyTest from './PsyTest';
import Finish from './Finish';
import Result from './Result';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getQuestion } from '../redux/action';
import { GetQuestionAPI } from '../api/CareerAPI';

const SetPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetch = async () => {
            const response = await GetQuestionAPI();
            dispatch(getQuestion(response));
        };
        fetch();
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <GatherInfo />
                </Route>
                <Route path="/example">
                    <Example />
                </Route>
                {Array.from({ length: 6 }, (v, i) => i + 1).map((page, index) => {
                    return (
                        <Route key={index} path={`/test/${page}`}>
                            <PsyTest page={String(page)} />
                        </Route>
                    );
                })}
                <Route path="/finish">
                    <Finish />
                </Route>
                <Route path="/result">
                    <Result />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default SetPage;
