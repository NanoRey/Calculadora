import React from "react"

// export const ResultOperation=(props)=>{
//     return <>
//     <button onClick={props.result} type="button" className="m-4 btn btn-dark text-cente d-flex justify-content-center">ClickToResult</button>
//     <div className="p-3 mb-2 bg-dark text-white">{props.resultArray}</div>
//     </>
// }

class ResultOperation extends React.Component{

    render(){
        return (<>
            <button onClick={this.props.result} type="button" className="m-4 btn btn-dark text-cente d-flex justify-content-center">ClickToResult</button>
            <div className="p-3 mb-2 bg-dark text-white">{this.props.resultArray}</div>
            </>
        );
    }
}

export default ResultOperation;