/**
 *      Rest Parameters : When I have no ideia how many parameter pass in a function where i use rest parameter.
 *      Rest Parameter Always initilize last parameter
 */

function fun(greet:string,label:string, ...student:string[]){
    console.log(greet+" "+label+" "+student.join(", "));
}
fun("Hello ","Student","Aman","Mishra","24");

// Using Arrow Function
let std = (greet:string,label:string, ...student:string[]) => {
    console.log(greet+" "+label+" "+student.join(", "));
}
std("Hello ","Student","Aman","Aman","Aman");

