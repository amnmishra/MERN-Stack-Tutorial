function App(){
    let cars = [{
        image:'https://imgclothing.com.co/cdn/shop/files/Logo_IMG_invertido-02_add0b852-0015-4144-b238-edf512d52f48_2551x.png?v=1677032556',
        number:'Up43T4085',
        name:'BMW'
    },{
        image:'https://imgclothing.com.co/cdn/shop/files/Logo_IMG_invertido-02_add0b852-0015-4144-b238-edf512d52f48_2551x.png?v=1677032556',
        number:'Up43T4085',
        name:'BMW'
    },{
        image:'https://imgclothing.com.co/cdn/shop/files/Logo_IMG_invertido-02_add0b852-0015-4144-b238-edf512d52f48_2551x.png?v=1677032556',
        number:'Up43T4085',
        name:'BMW'
    },{
        image:'https://imgclothing.com.co/cdn/shop/files/Logo_IMG_invertido-02_add0b852-0015-4144-b238-edf512d52f48_2551x.png?v=1677032556',
        number:'Up43T4085',
        name:'BMW'
    }]
    return (
        <>
            <h1>Car Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>Image</th><th>Number</th><th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map((car,index) => (
                            <tr key={index}>
                                <td><img src={car.image} width={80}/></td> 
                                <td>{car.number}</td>     
                                <td>{car.name}</td>                       
                            </tr>

                    ))}
                </tbody>
                
            </table>
        </>
    )
}

function Carpage(){
    return <App/>
    /**
     * If Return Multiple Components
    return(
        <>
            <Components/>
            <Components/>
            <Components/>
            <Components/>
        </>
    ) 

     */
}



const rootElement = ReactDOM.createRoot(document.getElementById("tablewithimg"));
rootElement.render(<Carpage/>) 