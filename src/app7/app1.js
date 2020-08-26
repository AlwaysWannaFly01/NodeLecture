const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/mytest';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log('connection successful');

        const parentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            address: String
        });

        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            address: String,
            married: Boolean,
            parents: parentSchema
        });
        mongoose.model('student', studentSchema);

        const Student = mongoose.model('student');

        const student = new Student({
            name: 'zzz',
            age: 19,
            address: 'hunan',
            married: false,
            parents: {
                name: 'z',
                age: 50,
                address: 'jiangxi'
            }
        });

        student.save(error => {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.log('save successful');

                Student.find({}, (error, docs) => {
                    if (error) {
                        console.log(error);
                        throw error;
                    } else {
                        console.log('find successful');
                        console.log(docs);
                        docs.forEach(doc => {
                            doc.remove();/*删除*/
                        })

                        // mongoose.connection.close(); /*关闭连接*/

                    }
                })
            }
        })
    }
})
