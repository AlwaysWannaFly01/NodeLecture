const Redis = require('ioredis');
const redisKeyPrefix = 'myRedis:info:user:';

class UserRedisDao {
    getRedisConnection() {
        return new Redis({
            host: 'localhost',
            port: 6379,
            password: '123456',
        });
    }

    async storeUserId(userSessionId, userId) {
        const redis = this.getRedisConnection();
        redis.set(redisKeyPrefix + userSessionId, userId, 'ex', 1800, (error, result) => {
            redis.quit();/*关闭连接*/
        });
    }

    async getUserIdFromUserSessionByUserSessionId(userSessionId) {
        const redis = this.getRedisConnection();
        return redis.get(redisKeyPrefix + userSessionId, (error, userId) => {
            redis.quit();
            console.log('userId: ' + userId)
            return userId;/*先关闭连接,再返回*/
        });
    }

    async resetUserSessionExpirationTime(userSessionId) {
        const redis = this.getRedisConnection();
        redis.expire(redisKeyPrefix + userSessionId, 1800, (err, result) => {
            redis.quit();
        });
    }

    async removeUserSessionByUserSessionId(userSessionId) {
        const redis = this.getRedisConnection();
        redis.del(redisKeyPrefix + userSessionId, (error, result) => {
            redis.quit();
        })
    }
}

module.exports = new UserRedisDao();