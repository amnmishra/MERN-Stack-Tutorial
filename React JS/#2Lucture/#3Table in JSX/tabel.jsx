function App(){
    let Students = [{
        name:'Arr',
        age:25,
        department:35
    },{
        name:'Arr2',
        age:12,
        department:40

    },{
        name:'arr3',
        age:12,
        department:40
    }];
    return(
        <>
            <h1>Student Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th><th>Age</th><th>Depaertment</th>
                    </tr>
                </thead>
                <tbody>
                    {Students.map((Student,index) =>(
                        <tr key={index}>
                            <td>{Student.name}</td>
                            <td>{Student.age}</td>
                            <td>{Student.department}</td>
                        </tr>
                    ))}
                    
                </tbody>
                <tfoot>
        		<tr>
                	<td >Total Pass Student</td>
                    <td>3</td>
                </tr>
        	</tfoot>
                
            </table>
        </>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>) 