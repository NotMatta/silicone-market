const stringToObject = (str) => {
    const pairs = str.split('-');
    const obj = {};

    pairs.forEach(pair => {
        const [key, value] = pair.trim().split(' ');
        obj[key] = value;
    })
    return obj
}

export { stringToObject }
