import { getRequestt } from './methods/get.js';
import { deleteRequestt } from './methods/delete.js';
import { postRequestt } from './methods/post.js';
import { putRequestt } from './methods/put.js';

class BaseRepository {
    constructor() {
        this.basePath = '/';
        this.hostUrl = null;
        this.url = {};
    }

    // Получение заголовков запроса
    static getRequestHeaders() {
        return {
            'Content-Type': 'application/json'
        };
    }

    static getAllowedMethods() {
        return [ 'GET', 'POST', 'DELETE', 'PUT' ];
    }

    // Добавление маршрутов для репозитория
    appendRoutes(routes) {
        this.url = { ...this.url, ...routes };
    }

    // Стандартный запрос уровня приложения
    baseRequest(url, method, requestData, silent) {

        if (this.hostUrl === null) {
            console.error("Укажите hostUrl для репозитория");
            return;
        }

        if (BaseRepository.getAllowedMethods().indexOf(method.toUpperCase()) === -1) {
            console.error("Тип метода не поддерживается в репозитории");
            return;
        }


        return new Promise(((resolve, reject) => {
            const fullUrl = this.hostUrl + this.basePath + url;
            axios({
                method,
                url: fullUrl,
                data: requestData,
                withCredentials: true,
                headers: BaseRepository.getRequestHeaders()
            }).then((response) => {
                // if (response.data.code === 'OK') {
                if (true) {
                    resolve(response);
                } else if (response.data.code === 'ERR') {
                    if (silent !== true) {

                    }
                    reject(response.data);
                } else {
                    reject(response.data);
                }
            }).catch((response) => {
                if (silent !== true) {
                    // globalEventBus.emit('showMessage', { type: 'error', data: response });
                }
                reject({
                    code: 'ERR',
                    message: response
                });
            });
        }));
    }
}

BaseRepository.prototype.get = getRequest;
BaseRepository.prototype.put = putRequest;
BaseRepository.prototype.post = postRequest;
BaseRepository.prototype.delete = deleteRequest;


export default BaseRepository;

