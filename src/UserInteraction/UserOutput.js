import React from 'react';
import './UserData.css'

const UserOutput=(props)=>
{
    return(
        <div className="box-output">
            <p>
            Hello I am {props.username}
            </p>
            <p>I work as a(n) {props.job}</p>
            <div>          
            </div>
        </div>
    );
}

export default UserOutput;