/**
 *      Interface in TypeScript
 *
 *      Syntax :
 *          interface interface_name{
 *              property_type:data_type,
 *              property_type:data_type,
 *          }
 */
// Interface
var user = {
    name: 'Aman',
    age: 30,
    getName: function () {
        return "Aman Mishra";
    }
};
console.warn(user);
console.warn(user + " " + user.getName());
function show() {
    var va1;
    var val2;
    var val3;
}
console.warn(show);
var numArr = [1, 2, 3, 4, 5];
numArr[0];
numArr[1];
console.log(numArr);
var empObj = {
    empCode: 1,
    empName: "Aman"
};
var empObject = {
    empCode: 1,
    empName: "Aman"
    // empDept:"CSE"
};
console.log(empObj);
console.log(empObject);
var personObj = { SSN: 11011, name: "Aman Mishra" };
personObj.name = 'Mishra Aman';
var stdObjEx = {
    stdCode: 1,
    stdName: "Aman",
    gender: "Male"
};
console.log(stdObjEx);
var Bussiness = /** @class */ (function () {
    function Bussiness(code, name) {
        this.pId = code;
        this.name = name;
    }
    Bussiness.prototype.getPrice = function (pId) {
        return 100;
    };
    Bussiness.prototype.std = function (name) {
        name: 'Ravi';
    };
    return Bussiness;
}());
var Bus = new Bussiness(1, "TATA");
console.log(Bus);
console.log(Bus.getPrice);
console.log(Bus.std);
