// condition?true_part:false_part;


function App(){
    let logged = true;
    return (
        <>
            <h1>Hello {logged?"Aman":"User"}</h1>
        </>
    )
}


const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);