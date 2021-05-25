const bubbleSort = (originalArray) => {
    let swapped = false

    // copy array
    const a = [...originalArray]

    for (let i = 1; i < a.length - 1; i++) {
        swapped = false;

        for (let j = 0; j < a.length - i; j++) {
            // right value is less than left value
            if (a[j + 1] < a[j]) {
                // swap values
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swapped = true;
            }
        }

        if (!swapped) {
            return a
        }
    }
    return a
}

const sortedArray = bubbleSort([12, 23, 34, 1, 56, 33]);
console.log(sortedArray);