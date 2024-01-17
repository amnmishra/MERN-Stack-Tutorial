/**
 * Raect Component 
 *      1st.    Function Base Component
 *      2nd     Class base Component
 * 
 */

// Functional Component
function Function(){
    return(
        <>
            <h1>Heading</h1>
            <p>Paragraph</p>
        </>

    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<Function/>);   // Show Warning Beacause be calling as a component of function

// ReactDOM.createRoot(document.getElementById("root")).render(Function()); 