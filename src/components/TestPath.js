import React from 'react';
import TestPage from '../pages/TestPage';
import { useParams } from 'react-router-dom';

function TestPath() {
    const { page } = useParams();
    return <TestPage page={String(page)} />;
}

export default TestPath;
