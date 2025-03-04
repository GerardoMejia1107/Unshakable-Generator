export const random = (pool, range) => {
    let result = "";
    for (let i = 0; i < range; i++) {
        result += pool.charAt(Math.floor(Math.random() * pool.length));
    }
    return result;
};
