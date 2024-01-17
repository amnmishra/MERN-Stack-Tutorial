/** Class : The fundamental entities used to create reusable components. Functionalities are passed down to classes and objects are created from classes.

    Constructor :

*/
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var pt = new Point();
console.log(pt);
pt.x = 5;
pt.y = 9;
console.log(pt);
