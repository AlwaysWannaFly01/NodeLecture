const mysql = require('mysql');
const uuid = require('uuid');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'mytest'
})

connection.connect((error) => {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log('connection successful')

        const userId = uuid.v1();
        const username = 'nihao';
        const real_name = '缩放';
        const age = 12;
        const address = 'sanya';

        connection.query('insert into users set ?', {
            id: userId,
            username: username,
            real_name: real_name,
            age: age,
            address: address
        }, (error, result) => {
            if (error) {
                console.log('insert error occured: ' + error);
                throw error;
            } else {
                console.log(result)

                connection.query('select * from users', (error, result) => {
                    if (error) {
                        console.log('select error occured: ' + error);
                        throw error;
                    } else {
                        console.log(result);
                        connection.end((error) => {
                            if (error) {
                                console.log('end error occured');
                                throw error;
                            }
                        });
                    }
                })
            }
        })

        // connection.end();/*关闭连接*/
    }
})

