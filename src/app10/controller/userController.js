const qs = require('qs');
const baseHttpClient = require('../common/baseHttpCLient');
const userRequestUrlMappingResolver = require('../config/client/userRequestUrlMappingResolver');

class UserController {

    async login(ctx) {
        const requestUrl = userRequestUrlMappingResolver.login;
        // console.log(`requestUrl: ${requestUrl}`);
        console.log(ctx.request.body);

        const response = await baseHttpClient.doHttpPostRequest(ctx, requestUrl, JSON.stringify(ctx.request.body));

        const responseData = qs.parse(response.data);
        // console.log(responseData);

        const responseDataCode = responseData.result.code;
        if (responseDataCode === 0) {
            ctx.body = responseData;
        } else {
            ctx.body = responseData;
        }
    }

}

module.exports = new UserController();