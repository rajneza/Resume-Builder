import React from "react";



const Log=()=>{
    return(
        <div  className="tab-main">
             <table>
                <thead>
                    <tr className="tab-head">
                        <th className="tab-job">Job</th>
                        <th className="tab-skill">Skills</th>
                        <th className="tab-loc">Location</th>
                        <th className="tab-comp">Company</th>
                        <th className="tab-type">Job Type</th>
                        <th className="tab-exp">Experience</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tab-body">
                        <th className="tab-data">
                            Data Engineer
                        </th>
                        <th>
                            Analytical Skills,C++,Hadoop,Java,Problem Solving,Python,R,SQL
                        </th>
                        <th>
                            Hyderabad,Telangana
                        </th>
                        <th>
                            StaffRex Info Solutions Pvt Ltd
                        </th>
                        <th>
                            Full Time
                        </th>
                        <th>
                            5Y-6Y
                        </th>
                    </tr>
                </tbody>
             </table>
        </div>
    )
}

export default Log