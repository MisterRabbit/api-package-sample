// Обработка запроса POST
export function postRequest({
    what, to, returning, silent
}) {
    return new Promise(((resolve, reject) => {
        const url = to;
        this.baseRequest(url, 'post', what, silent).then((data) => {
            if (returning === undefined) {
                resolve(data);
            } else {
                resolve(data[returning]);
            }
        }).catch((data) => { reject(data); });
    }));
}