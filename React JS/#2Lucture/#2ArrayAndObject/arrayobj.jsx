function App(){
    let arr = [1,2,3,4,5,6];
    let car = ["bmw" , "audi" , "aulto" , "honda" , "city"]
    let obj = {
        name:"Aman",
        age:10
    }
    return(<>
        <h1>Array and Object</h1>
        {arr.map((num,index) => <h2 key={index}>{num}</h2>)}

        <ul>
            {car.map((car,index) => (
                <li key={index}>{car}</li>
                ))}
        </ul>
        
        <p>{obj.name}</p>
    </>)

    // Map Funtion : is return something


    



}


const rootElement=ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>)