/**
 *      Rest Parameters : When I have no ideia how many parameter pass in a function where i use rest parameter.
 *      Rest Parameter Always initilize last parameter
 */
function fun(greet, label) {
    var student = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        student[_i - 2] = arguments[_i];
    }
    console.log(greet + " " + label + " " + student.join(", "));
}
fun("Hello ", "Student", "Aman", "Mishra", "24");
// Using Arrow Function
var std = function (greet, label) {
    var student = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        student[_i - 2] = arguments[_i];
    }
    console.log(greet + " " + label + " " + student.join(", "));
};
std("Hello ", "Student", "Aman", "Aman", "Aman");
