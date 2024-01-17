/** Function in type Script
 *      Define a normal function
 *      Define function type
 *      Add Params in function
 *      Add Params type
 *      Optional params with type
 */
// Define a normal function
function nor_fun() {
    return 20;
}
console.warn(nor_fun());
// Define function type
function def_fun() {
    return "20";
}
console.warn(def_fun());
// Add Params in function
function para_fun(name) {
    return name;
}
console.warn(para_fun("Ravi"));
// Add Params in function
function pt_fun(name) {
    return name;
}
console.warn(pt_fun("Aman"));
// Optional params with type
function opt_fun(a, b) {
    return b ? a + b : a;
}
console.warn(opt_fun(10));
console.warn(opt_fun(10, 50));
