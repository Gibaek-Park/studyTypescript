"use strict";
exports.__esModule = true;
var makePerson = function (name, age) {
    return { name: name, age: age };
};
exports.makePerson = makePerson;
var testMakePerson = function () {
    console.log(makePerson('Jane', 22), makePerson('Jack', 33));
};
exports.testMakePerson = testMakePerson;