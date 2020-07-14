import React from 'react'

export const OperationList=(props)=>{
    console.log(props.test);
    return  <div className="alert alert-primary" role="alert">
        {props.test.map((value)=> <li className="list-group-item">{value}</li>)}
    </div> 
}