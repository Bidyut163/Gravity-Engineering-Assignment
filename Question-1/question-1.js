function lis(arr) {
    let n = arr.length;
    let lisArr = new Array(n);
    lisArr[0] = 1;

    for (let i = 1; i < n; i++) {
        lisArr[i] = 1;
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                lisArr[i] = Math.max(lisArr[i], lisArr[j] + 1);
            }
        }
    }
    return Math.max(...lisArr);
}

let arr = [10, 9, 2, 5, 3, 7, 101, 18];
let lenLis = lis(arr);

console.log('The length of Lis is:', lenLis);
