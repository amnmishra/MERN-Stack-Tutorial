function sum(){
    let a = 5+6;
    return a;
}
const header = (<>
        <h1>Hi , How are You</h1>
        <p>Ky HUa</p>
    </>)
function App(){
    var name = "Aman";
    var age = 10;
    let demo = null;
    let undef;
    const bool = true;
    return(
        <>
            {header}
            <h1>Hello {name}</h1>
            <p>Your age is {age}</p>
            <p>Demo Value is {demo}</p>
            <p>Demo Value is {undef}</p>
            <p>Demo Boolie is {bool}</p>
            <p>Sum of Function Value: {sum()}</p>
        </>
    )

}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);