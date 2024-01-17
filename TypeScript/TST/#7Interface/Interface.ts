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




// If I have a class or object then i have not direct declare data_type when i use Interface 
interface userType{
    name:string,
    age:number,
    getName:()=>string
}

let user:userType={
    name:'Aman',
    age:30,
    getName:function(){
        return "Aman Mishra"
    }
}
console.warn(user);
console.warn(user+" "+user.getName());

// Interface as function type
interface keypair{
    key:number;
    value:string;
}
function show(){
    let va1:{1,"Aman"};
    let val2:{key:1,value:"Mishra"};
    let val3:{key:2,value:"My"}
}
console.warn(show);

// Interface for Array Type
interface NumList{
    [index:number]:number
}
let numArr:NumList=[1,2,3,4,5];
numArr[0];
numArr[1];
console.log(numArr);
// interface IStringList{
//     [index:string]:string
// }
// let strArr:IStringList;
// strArr["TS"]="TypeScript";
// strArr["JS"]="TypeScript";

/**  Optional Property */

interface IEmployee{
    empCode:number;
    empName:string;
    empDept?:string;
}
let empObj:IEmployee = {
    empCode:1,
    empName:"Aman"
}
let empObject:IEmployee = {
    empCode:1,
    empName:"Aman"
    // empDept:"CSE"
}

console.log(empObj);
console.log(empObject);

/**  READ ONLY PROPERTY */
interface Citizen{
    name:string;
    readonly SSN:number;
}
let personObj:Citizen = {SSN:11011,name:"Aman Mishra"}
personObj.name='Mishra Aman';

// personObj.SSN='2002';

/**  Extending interface */
interface IPerson{
    stdName:string;
    gender:string;
}
interface IStudent extends IPerson{
    stdCode:number;
}
let stdObjEx:IStudent={
    stdCode:1,
    stdName:"Aman",
    gender:"Male"
}

console.log(stdObjEx);


// Implementation of Inter Face

interface IProduct{
    pId:number;
    name:string;
    getPrice:(number) => number;
}
class Bussiness implements IProduct{
    pId: number;
    name: string;

    constructor(code:number,name:string){
        this.pId=code;
        this.name=name;
    }
    getPrice(pId: number):number{
        return 100;
    }
    public std(name:string){
        name:'Ravi';
    }

}

let Bus = new Bussiness(1,"TATA");
console.log(Bus);
console.log(Bus.getPrice);