import { API_BASE_URL } from '../config';
import { API_FETCH_LIMIT } from '../config';

let defaultParams = {
    limit: API_FETCH_LIMIT
};

class FetchService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.cache = {};
    }

    getParamsString(params = {}) {
        let queryParams = {...defaultParams, ...params};
        let paramsArray = [];
        let paramsString = '';

        for (let key in queryParams) {
            paramsArray.push(`${key}=${queryParams[key]}`);
        }
        paramsString = `?${paramsArray.join('&')}`;

        return paramsString;
    }

    getFilterString(filter) {
        if (!filter) {
            return '';
        }

        let result = [];

        for (let key in filter) {
            switch (key) {
                case 'year':
                    let year = filter[key];
                    if (year) {
                        result.push(year);
                    }
                    break;
                default:
                    let value = filter[key];
                    if (value) {
                        result.push(`${key}/${value}`);
                    }
            }
        }

        if (result.length) {
            return `${result.join('/')}/`;
        }

        return '';
    }

    getUrl(collection, params = {}, filter) {
        let paramsString = this.getParamsString(params);
        let filterString = this.getFilterString(filter);

        return `${this.baseUrl}/${filterString}${collection}.json${paramsString}`;
    }

    fetch(collection, params, filter) {
        let url = this.getUrl(collection, params, filter);

        if (this.cache[url]) {
            return Promise.resolve(this.cache[url].data);
        }

        return fetch(url).then(
            response => response.json().then(data => {
                data = data.MRData;
                this.cache[url] = {
                    updated: Date.now(),
                    data
                };
                return data;
            }),
            error => Promise.reject(error)
        );
    }
}

export default new FetchService(API_BASE_URL);
