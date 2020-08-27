const axios = require('axios');

const projectConfig = require('../util/projectConfigResolver');

const hostBaseUrl = projectConfig.hostBaseUrl;

exports.doHttpGetRequest = function (ctx, requestUrl, param) {
    return this.doHttpRequest(ctx, requestUrl, param, 'GET');
};

exports.doHttpPutRequest = function (ctx, requestUrl, param) {
    return this.doHttpRequest(ctx, requestUrl, param, 'PUT');
};

exports.doHttpPostRequest = function (ctx, requestUrl, param) {
    return this.doHttpRequest(ctx, requestUrl, param, 'POST');
};

exports.doHttpDeleteRequest = function (ctx, requestUrl, param) {
    return this.doHttpRequest(ctx, requestUrl, param, 'DELETE');
}


module.doHttpRequest = function (ctx, requestUrl, param, method) {
    if (method === 'GET') {
        return axios({
            baseURL: hostBaseUrl,
            url: requestUrl,
            method: 'GET',
            params: param
        })
    } else if (method === 'PUT' || method === 'POST' || method === 'DELETE') {
        return axios({
            baseURL: hostBaseUrl,
            url: requestUrl,
            method: method,
            data: params
        })
    }
}
