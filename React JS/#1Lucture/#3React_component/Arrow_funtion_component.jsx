const Function = () =>(
        <>
            <h1>Heading</h1>
            <p>Paragraph</p>
        </>
)
function Functionf2(){
    return(
        <>
            <h1>Heading F2</h1>
            <p>Paragraph F2</p>
            <Functionf2/>
        </>

    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Functionf2/>); 