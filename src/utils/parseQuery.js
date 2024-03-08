

const parseSortCriteria = (sortData) => {
    const sortCriteria = [];
    for (const key in sortData) {
        if (sortData.hasOwnProperty(key)) {
            sortCriteria.push([key, parseInt(sortData[key])]);
        }
    }
    return Object.fromEntries(sortCriteria);
}

export {
    parseSortCriteria
}