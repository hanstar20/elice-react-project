import axios from 'axios';

export const API_KEY = 'c4115cd15ddcb05d8a6533b287705c6f';
export const QESTREN_SEQ = '6';
export const MALE = '100323';
export const FEMALE = '100324';
export const TARGET = '100209';
export const URL_1 = 'https://www.career.go.kr/inspct/openapi/test';
export const URL_2 = 'https://inspct.career.go.kr/inspct/api/psycho';

export const GetQuestionAPI = async () => {
    const response = await axios.get(`${URL_1}/questions?apikey=${API_KEY}&q=${QESTREN_SEQ}`);
    return response.data.RESULT;
};

export const GetResultAPI = async (answer) => {
    const postResponse = await axios.post(`${URL_1}/report?apikey=${API_KEY}&q=${QESTREN_SEQ}`, answer);
    const getResponse = await axios.get(`${URL_2}/report?seq=${postResponse.data.RESULT.url.split('=')[1]}`);
    return getResponse;
};

export const GetJobsAPI = async (result) => {
    const response = await axios.get(`${URL_2}/value/jobs?no1=${result[0]}&no2=${result[1]}`);
    const jobs = [[], [], [], [], []];
    response.data.forEach(function (job) {
        jobs[job[2] - 1].push(job[1]);
    });
    return jobs;
};

export const GetMajorsAPI = async (result) => {
    const response = await axios.get(`${URL_2}/value/majors?no1=${result[0]}&no2=${result[1]}`);
    const majors = [[], [], [], [], [], [], [], []];
    response.data.forEach(function (major) {
        majors[major[2]].push(major[1]);
        if (major[2] !== 0) {
            majors[0].push(major[1]);
        }
    });
    return majors;
};
