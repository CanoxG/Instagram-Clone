import * as Data from './fixture'

export function fetchWrapper(url, options) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const response = getData(url);
            if (!response) reject(new Error('No data found'));
            resolve(response);
        }, 1000)
    })
}

function getData(key) {
    return Data[key]
}