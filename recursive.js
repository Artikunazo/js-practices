function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }

    const [first, ...rest] = arr;
    return first + sumArray(rest);
}

sumArray([100, 200, 345, 1010, 334]);
