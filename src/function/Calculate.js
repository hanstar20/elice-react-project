export const findMaxIndex = (array) => {
    const arr = array.map((arr) => arr);
    let checkArr = array.map((arr) => arr);
    let max1 = 0;
    let max2 = 0;
    let temp = [];
    let count = checkArr.filter((e) => Math.max(...checkArr) === e).length;

    if (count === 1) {
        max1 = arr.indexOf(Math.max(...arr));
        arr[max1] = 0;
        checkArr = arr;
        count = checkArr.filter((e) => Math.max(...checkArr) === e).length;
        if (count === 1) {
            max2 = arr.indexOf(Math.max(...arr));
        } else {
            for (let i = 0; i < count; i++) {
                temp[i] = arr.indexOf(Math.max(...arr));
                arr[temp[i]] = 0;
            }
            max2 = temp[Math.floor(Math.random() * count)];
        }
    } else {
        for (let i = 0; i < count; i++) {
            temp[i] = arr.indexOf(Math.max(...arr));
            arr[temp[i]] = 0;
        }
        const ranNum = Math.floor(Math.random() * count);
        max1 = temp[ranNum];
        temp.splice(ranNum, 1);
        max2 = temp[Math.floor(Math.random() * (count - 1))];
    }

    return [max1 + 1, max2 + 1];
};

export const findMinIndex = (array) => {
    const arr = array.map((arr) => arr);
    let checkArr = array.map((arr) => arr);
    let min1 = 0;
    let min2 = 0;
    let temp = [];
    let count = checkArr.filter((e) => Math.min(...checkArr) === e).length;

    if (count === 1) {
        min1 = arr.indexOf(Math.min(...arr));
        arr[min1] = 99999;
        checkArr = arr;
        count = checkArr.filter((e) => Math.min(...checkArr) === e).length;
        if (count === 1) {
            min2 = arr.indexOf(Math.min(...arr));
        } else {
            for (let i = 0; i < count; i++) {
                temp[i] = arr.indexOf(Math.min(...arr));
                arr[temp[i]] = 99999;
            }
            min2 = temp[Math.floor(Math.random() * count)];
        }
    } else {
        for (let i = 0; i < count; i++) {
            temp[i] = arr.indexOf(Math.min(...arr));
            arr[temp[i]] = 99999;
        }
        const ranNum = Math.floor(Math.random() * count);
        min1 = temp[ranNum];
        temp.splice(ranNum, 1);
        min2 = temp[Math.floor(Math.random() * (count - 1))];
    }

    return [min1 + 1, min2 + 1];
};

export const CalProgress = (array) => {
    const arr = array.slice(1);
    return Math.round((arr.filter((e) => e !== 'None').length / arr.length) * 100);
};
