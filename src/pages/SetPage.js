import React from 'react';
import GatherInfoPage from './GatherInfoPage';
import ExamplePage from './ExamplePage';
import FinishPage from './FinishPage';
import ResultPage from './ResultPage';
import TestPath from '../components/TestPath';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const SetPage = () => {
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
