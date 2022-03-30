// Обработка запроса GET
export function getRequest({ what, from, by }) {
    return new Promise(((resolve, reject) => {
        let url = from;
        if (by !== undefined) {
            Object.keys(by).forEach((property) => {
                if (Object.prototype.hasOwnProperty.call(by, property)) {
                    url = url.replace(`{${property}}`, by[property]);
                }
            });
        }
        this.baseRequest(url, 'get').then((data) => {
            if (what === undefined) {
                resolve(data);
            } else {
                resolve(data[what]);
            }
        }).catch((data) => { reject(data); });
    }));
}