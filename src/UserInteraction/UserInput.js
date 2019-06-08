import React from 'react';

const UserInput=(props)=>
{
    return(
        <div>
            This is the value the user will input
            <div>
            <input type="text" onChange={props.change} value={props.username}></input>
            </div>
        </div>
    );
}

export default UserInput;