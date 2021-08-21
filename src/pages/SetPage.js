import React, { useEffect } from 'react';
import GatherInfoPage from './GatherInfoPage';
import ExamplePage from './ExamplePage';
import TestPage from './TestPage';
import FinishPage from './FinishPage';
import ResultPage from './ResultPage';
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
                    <GatherInfoPage />
                </Route>
                <Route path="/example">
                    <ExamplePage />
                </Route>
                {Array.from({ length: 6 }, (v, i) => i + 1).map((page, index) => {
                    return (
                        <Route key={index} path={`/test/${page}`}>
                            <TestPage page={String(page)} />
                        </Route>
                    );
                })}
                <Route path="/finish">
                    <FinishPage />
                </Route>
                <Route path="/result">
                    <ResultPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default SetPage;
