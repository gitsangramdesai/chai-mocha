var crypto = require('crypto');

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function returnArray() {
    return [1, 4, 9]
}

function myMd5(password,callback) {
    var hash = crypto.createHash('md5')
        .update(password)
        .digest('hex');

    callback(null, hash);
}

class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

module.exports = {
    add,
    subtract,
    returnArray,
    myMd5,
    Student
}