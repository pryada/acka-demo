const GroupBy = (key) => (array) => {
    return array.reduce((acc, obj) => {
        const property = obj[key];
        acc[property] = acc[property] || [];
        acc[property].push(obj);
        return acc;
    }, {});
};

export default GroupBy;