var ranges = [
    { divider: 1e18 , suffix: 'P' },
    { divider: 1e15 , suffix: 'E' },
    { divider: 1e12 , suffix: 'T' },
    { divider: 1e9 , suffix: 'G' },
    { divider: 1e6 , suffix: 'M' },
    { divider: 1e3 , suffix: 'k' }
  ];
  
function formatNum(n) {
    let negFlag = n < 0 ? true: false;
    let res;
    if (n < 0) {
        n = -n;
        negFlag = true;
    } else {
        negFlag = false;
    }
    for (var i = 0; i < ranges.length; i++) {
        if (n >= ranges[i].divider) {
        res = ((Math.round(n*10 / ranges[i].divider))/10).toString() + ranges[i].suffix
        return negFlag ? '-'+res : res;
        }
    }
    res = ((Math.round(n*100))/100).toString();
    return negFlag ? -res : res;
}

export default formatNum;