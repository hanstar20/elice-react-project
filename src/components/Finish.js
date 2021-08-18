import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const API_KEY = 'c4115cd15ddcb05d8a6533b287705c6f';
const QESTREN_SEQ = '6'
const MALE = '100323'
const FEMALE = '100324'
const TARGET = '100209'



const Finish = () => {

    const result = useSelector((state) => state)

    const [sendAnswer, setSendAnswer] = useState({
        "apikey": API_KEY,
        "qestrnSeq": QESTREN_SEQ,
        "trgetSe": TARGET,
        "name": result.name,
        "gender": result.gender === "male" ? MALE : FEMALE,
        "grade": "1",
        "startDtm": 1550466291034,
        "answers": ""
    })

    const [test, setTest] = useState({
        "apikey": API_KEY,
        "qestrnSeq": QESTREN_SEQ,
        "trgetSe": TARGET,
        "name": "홍나나",
        "gender": MALE ,
        "grade": "1",
        "startDtm": '1550466291034',
        "answers": "B1=2 B2=3 B3=5 B4=7 B5=10 B6=12 B7=13 B8=16 B9=17 B10=20 B11=21 B12=23 B13=26 B14=28 B15=29 B16=32 B17=34 B18=35 B19=37 B20=40 B21=41 B22=43 B23=45 B24=48 B25=50 B26=52 B27=53 B28=56"
        // "A1=2 A2=2 A3=2 A4=2 A5=2 A6=1 A7=1 A8=2 A9=1 A10=å1 A11=2 A12=1 A13=2 A14=2 A15=1 A16=2 A17=2 A18=2 A19=1 A20=1 A21=1 A22=1 A23=1 A24=2 A25=1 A26=2 A27=2 A28=2"
        // "B1=2 B2=2 B3=2 B4=2 B5=2 B6=1 B7=1 B8=2 B9=1 B10=1 B11=2 B12=1 B13=2 B14=2 B15=1 B16=2 B17=2 B18=2 B19=1 B20=1 B21=1 B22=1 B23=1 B24=2 B25=1 B26=2 B27=2 B28=2"
    })

    const handleClick = async () => {
        const response = await axios.post(`https:/www.career.go.kr/inspct/openapi/test/report`, test)
        console.log(response)
    }


    return (
        <div>
            <h3>검사가 완료되었습니다.</h3>
            <p>검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고, 
                중요 가치를 충족시킬 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</p>
                <Link to="/result"><button>결과보기</button></Link>
                <button onClick={handleClick}>결과 받기</button>
        </div>
    )
}

export default Finish;

