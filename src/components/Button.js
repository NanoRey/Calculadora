import React from "react"

export const Button=(props)=>{
    const buttonInfo=`btn btn-${props.color}`
    return <>
    <button onClick={props.function} type="operation" className={buttonInfo}>{props.element}</button>
    </>
}

export const Button3=(props)=>{
    const buttonInfo=`btn btn-${props.color}`
    
    if(props.color===undefined){
       return <>
        <button onClick={props.function} type="operation" className="btn btn-dark">{props.element}</button>
        </>
    }
    return <>
    <button onClick={props.function} type="operation" className={buttonInfo}>{props.element}</button>
    </>
}


//var max = ( num1 > num2 ) ? num1 : num2 ;

export const Button2=(props)=>{
    let buttonInfo=''
    const trueFalseClassName=(props.color===undefined) ? buttonInfo=`btn btn-dark`: buttonInfo=`btn btn-${props.color}`
    return <button onClick={props.function} type="operation" className={buttonInfo}>{props.element}</button>;
}