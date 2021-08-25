import React, { useEffect } from 'react';
import GatherInfoPage from './GatherInfoPage';
import ExamplePage from './ExamplePage';
import FinishPage from './FinishPage';
import ResultPage from './ResultPage';
import TestPath from '../components/TestPath';
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
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <GatherInfoPage />
                </Route>
                <Route path="/example">
                    <ExamplePage />
                </Route>
                <Route exact path="/test/:page" component={TestPath} />
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
