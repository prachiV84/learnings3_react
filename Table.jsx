import React from 'react'
import { useState } from 'react'

const Table = () => {
    let x=[{name:"abc",company:"tcs",salary:34000},
    {name:"abhi",company:"tcs",salary:44000},
    {name:"qwe",company:"tcs",salary:54000}
    ]

    let [employee]=useState(x)
    console.log(employee);
  
    <div>
        <table border="2">
            <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Salary</th>
            </tr>
            
        
        {
        employee.map((element)=>{
            return(
               <tr>
                <td>{element.name}</td>
                <td>{element.company}</td>
                <td>{element.salary}</td>
               </tr>
            )
            })
        }
        </table>
    </div>
  
}

export default Table