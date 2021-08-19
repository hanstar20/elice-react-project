import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const API_KEY = 'c4115cd15ddcb05d8a6533b287705c6f';
const QESTREN_SEQ = '6';
const MALE = '100323';
const FEMALE = '100324';
const TARGET = '100209';

const Finish = () => {
    const result = useSelector((state) => state);

    const postJSON = {
        apikey: API_KEY,
        qestrnSeq: QESTREN_SEQ,
        trgetSe: TARGET,
        name: result.name,
        gender: result.gender === 'male' ? MALE : FEMALE,
        grade: '1',
        startDtm: Date.now(),
        answers: result.answers
            .splice(1)
            .map((answer, index) => `B${Number(index) + 1}=${answer}`)
            .join(' '),
    };

    const test = {
        apikey: API_KEY,
        qestrnSeq: QESTREN_SEQ,
        trgetSe: TARGET,
        name: '홍나나',
        gender: MALE,
        grade: '1',
        startDtm: '1550466291034',
        answers:
            'B1=2 B2=3 B3=5 B4=7 B5=10 B6=12 B7=13 B8=16 B9=17 B10=20 B11=21 B12=23 B13=26 B14=28 B15=29 B16=32 B17=34 B18=35 B19=37 B20=40 B21=41 B22=43 B23=45 B24=48 B25=50 B26=52 B27=53 B28=56',
    };

    const handleClick = async () => {
        const response = await axios.post(`https:/www.career.go.kr/inspct/openapi/test/report?apikey=${API_KEY}&q=${QESTREN_SEQ}`, test);
        const response2 = await axios.get(`https://inspct.career.go.kr/inspct/api/psycho/report?seq=${response.data.RESULT.url.split('=')[1]}`);
        console.log(response2);
    };

    return (
        <div>
            <h3>검사가 완료되었습니다.</h3>
            <p>검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고, 중요 가치를 충족시킬 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</p>
            <Link to="/result">
                <button>결과보기</button>
            </Link>
            <button onClick={handleClick}>결과 받기</button>
        </div>
    );
};

export default Finish;
