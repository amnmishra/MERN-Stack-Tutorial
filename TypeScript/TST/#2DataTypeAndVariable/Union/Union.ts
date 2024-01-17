// Union types are used when a value can be more than a single type.
function stausCode(code:string | number | boolean){
    console.log(code);
}
stausCode("ASDF")
stausCode(2024)
stausCode(true)
