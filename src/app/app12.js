const util = require('util');

const obj = {
    name: 'zhangsan',
    address: 'wuhan',
    age: 12,
    married: false,
    getAge: function () {
        return this.age
    }
}

const str = util.inspect(obj, {
    'colors': true
});
console.log(str)