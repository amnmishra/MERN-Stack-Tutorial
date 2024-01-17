/**
                    AND Operator
        true        true        => True
        true        false       => False
        false       true        => False
        false       false       => False
 */
        // condition?true_part:false_part;
function App(){
    let logged = true;
    return (
        <>
            <h1>Hello {logged?"Aman":"User"}</h1>
            <p>{logged && " Hii"}</p>
            {logged && <p>hII</p>}
        </>
    )
}
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);