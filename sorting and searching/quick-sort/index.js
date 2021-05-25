const quickSort = (originalList) => {

    // copy input array
    const list = [...originalList];

    if (list.length < 2) {
        return list;
    }

    // define first values of the list as pivot
    const pivot = list[0];

    // filter values smaller than pivot
    const smaller = list.filter((item) => item < pivot);
    // filter values bigger than pivot
    const bigger = list.filter((item) => item > pivot);

    // keep do above filters until list has only one values merging arrays
    let sortedList = [...quickSort(smaller), pivot, ...quickSort(bigger)];
    return sortedList;
}

const sortedList = quickSort([5, 4, 3, 2, 1, 6]);
console.log(sortedList);