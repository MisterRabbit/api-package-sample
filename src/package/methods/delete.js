// Обработка запроса DELETE
export function deleteRequest({ what, to }) {
    return new Promise(((resolve, reject) => {
        const url = to;
        this.baseRequest(url, 'delete', what).then((data) => {
            resolve(data);
        }).catch((error) => {
            reject(error);
        });
    }));
}