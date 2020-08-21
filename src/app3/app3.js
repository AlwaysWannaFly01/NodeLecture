const str = 'abcde是';

const buffer = Buffer.from(str);

console.log(str.length)
console.log(buffer.length)
console.log(buffer)
console.log(buffer.toString('utf8'))