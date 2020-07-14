import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import {Button} from './components/Button'
import {Button2} from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import ResultOperation from './components/ResultOperation';
import {OperationList} from './components/OperationsList'
//import { ReactComponent } from '*.svg';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      resultArray:[],
      clicks:[],
      historicOperation:[]
    }
  }
  
  handleOperation=(event)=>{
    event.preventDefault();
    return this.setState(
      {...this.state,
      clicks:[...this.state.clicks,event.target.innerHTML]
      })
  }

  handleOperationResult=(event)=>{
    console.log(this.state.clicks)
    const result=this.state.clicks.join("");
    console.log(eval(result))
    const resultTotal=`${result}=${eval(result)}`
    this.setState(
      {...this.state,
        resultArray:this.state.resultArray.concat(eval(result)),
        historicOperation:[...this.state.historicOperation,resultTotal]
      });
  }

  handleOperationDelete=(event)=>{
    if(event.target.innerHTML==="C"){
      console.log("estoy aqui");
      const resultDeleteLasOperator=this.state.historicOperation.filter((value,index)=>index!==this.state.historicOperation.length-1);
      
      this.setState(
        {...this.state,
          clicks:[],
          resultArray:[],
          historicOperation:resultDeleteLasOperator
        }
      )
      console.log("Todo Borrado");
    }
  }

  render(){
    return (
    <Container>
      <Row className="m-2 mt-10 no-gutters">
        <Col>
          <Button2 element="7" function={this.handleOperation} />
        </Col>
        <Col>
          <Button2 element="8" function={this.handleOperation} />
        </Col>
        <Col>
          <Button2 element="9" function={this.handleOperation}/>
        </Col>
        <Col>
          <Button2 element="0" function={this.handleOperation} />
        </Col>
        <Col>
          <Button2 element="C" function={this.handleOperationDelete} color="danger" />
        </Col>
        <Col>
          <Button2 element="(" function={this.handleOperation} />
        </Col>
        
      </Row>
      <Row className=" m-2 no-gutters">
        <Col>
          <Button2 element="4" function={this.handleOperation} />
        </Col>
        <Col>
          <Button2 element="5" function={this.handleOperation} />
        </Col>
        <Col>
          <Button2 element="6" function={this.handleOperation} />
        </Col>
        <Col>
          <Button2 element="-" function={this.handleOperation} />
        </Col>
        <Col>
          <Button2 element="*" function={this.handleOperation} />
        </Col>
        <Col>
          <Button2 element=")" function={this.handleOperation} />
        </Col>
      </Row>
      <Row className=" m-2 no-gutters">
        <Col>
          <Button2 element="1" function={this.handleOperation} />
        </Col>
        <Col>
          <Button2 element="2" function={this.handleOperation} />
        </Col>
        <Col>
          <Button2 element="3" function={this.handleOperation} />
        </Col>
        <Col>
          <Button2 element="+" function={this.handleOperation}/>
        </Col>
        <Col>
          <Button2 element="/" function={this.handleOperation}/>
        </Col>
        <Col>
          <Button2 element="." function={this.handleOperation}/>
        </Col>
      </Row>
      <Row>
        <Col xs="10">
          <ResultOperation result={this.handleOperationResult} resultArray={this.state.resultArray}/>
          <OperationList test={this.state.historicOperation}/>
        </Col>
      </Row>
    </Container>
  );
  }
  
}
export default App;
