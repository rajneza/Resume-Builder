import React, { useEffect, useState } from "react";


const Sql=()=>{
    const[data,setdata]=useState([]);
  
    return(
        <div>
            <table>
                <tr>
                    <th>
                        ID
                    </th>
                    <td>val1</td>
                </tr>
                <tr>
                    <th>
                        Name
                    </th>
                    <td>val2</td>
                </tr>
                <tr>
                    <th>
                        salary
                    </th>
                    <td>val3</td>
                </tr>
                <tr>
                    <th>
                        age
                    </th>
                    <td>val4</td>
                </tr>
            </table>
        </div>
    )
}

export default Sql