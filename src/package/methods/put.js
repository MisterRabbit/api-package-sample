// Обработка запроса PUT
export function putRequest({ what, to }) {
  return new Promise(((resolve, reject) => {
      const url = to;
      this.baseRequest(url, 'put', what).then((data) => {
          resolve(data);
      }).catch((err) => {
          reject(err);
      });
  }));
}