/** Class : The fundamental entities used to create reusable components. Functionalities are passed down to classes and objects are created from classes.

    Constructor : TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.


        There are three main visibility modifiers in TypeScript.

        public - (default) allows access to the class member from anywhere
        private - only allows access to the class member from within the class
        protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below


        Object : An object of the class can be created using the new keyword.
        

*/
class Point {
    x: number;
    y: number;
}
   
const pt = new Point();
console.log(pt);

pt.x = 5;
pt.y = 9;
console.log(pt);