let ranges = [
    { divider: 1e18 , suffix: 'P' },
    { divider: 1e15 , suffix: 'E' },
    { divider: 1e12 , suffix: 'T' },
    { divider: 1e9 , suffix: 'G' },
    { divider: 1e6 , suffix: 'M' },
    { divider: 1e3 , suffix: 'k' }
];
const afterDropNums = 1;

function formatNum(n) {
    let negFlag = n < 0 ? true: false;
    let roundNum = Math.pow(10, afterDropNums);
    let res;
    if (n < 0) {
        n = -n;
        negFlag = true;
    } else {
        negFlag = false;
    }
    for (var i = 0; i < ranges.length; i++) {
        if (n >= ranges[i].divider) {
            res = (Math.round(n*roundNum / ranges[i].divider))/roundNum.toString() + ranges[i].suffix;
            return negFlag ? '-'+res : res;
        }
    }
    res = (Math.round(n*roundNum / 1))/roundNum.toString();
    return negFlag ? -res : res;
}

export default formatNum;