import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import {Button} from './components/Button'
import {Button2} from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import ResultOperation from './components/ResultOperation';
import {OperationList} from './components/OperationsList'

function App() {
  const [resultArray, setResultArray]=useState([])
  const [clicks, setClicks]=useState([]);
  const [historicOperation, setHistoricOperation]=useState([])

  
  const handleOperation=(event)=>{
    event.preventDefault();
    return setClicks([...clicks,event.target.innerHTML])
    //console.log(event.target.innerHTML)
  }

  const handleOperationResult=(event)=>{
    console.log(clicks)
    const result=clicks.join("");
    console.log(eval(result))
    const resultTotal=`${result}=${eval(result)}`
    setResultArray([...resultArray,eval(result)]);
    setHistoricOperation([...historicOperation, resultTotal])
  }

  const handleOperationDelete=(event)=>{
    if(event.target.innerHTML==="C"){
      console.log("estoy aqui");
      setClicks([]);
      setResultArray([]);
      const deleteLastOperation=()=>{
        const resultDeleteLasOperator=historicOperation.filter((value,index)=>index!==historicOperation.length-1);
        console.log(resultDeleteLasOperator)
        return resultDeleteLasOperator;
      }
      console.log("***************")
      console.log(deleteLastOperation());
      setHistoricOperation(deleteLastOperation());
      console.log(clicks);
      console.log(resultArray)
      console.log("Todo Borrado");
    }
  }

  return (
    <Container>
      <Row className=" m-2 mt-10 no-gutters">
        <Col>
          <Button2 element="7" function={handleOperation} />
        </Col>
        <Col>
          <Button2 element="8" function={handleOperation} />
        </Col>
        <Col>
          <Button2 element="9" function={handleOperation}/>
        </Col>
        <Col>
          <Button2 element="0" function={handleOperation} />
        </Col>
        <Col>
          <Button2 element="C" function={handleOperationDelete} color="danger" />
        </Col>
        <Col>
          <Button2 element="(" function={handleOperation} />
        </Col>
        
      </Row>
      <Row className=" m-2 no-gutters">
        <Col>
          <Button2 element="4" function={handleOperation} />
        </Col>
        <Col>
          <Button2 element="5" function={handleOperation} />
        </Col>
        <Col>
          <Button2 element="6" function={handleOperation} />
        </Col>
        <Col>
          <Button2 element="-" function={handleOperation} />
        </Col>
        <Col>
          <Button2 element="*" function={handleOperation} />
        </Col>
        <Col>
          <Button2 element=")" function={handleOperation} />
        </Col>
      </Row>
      <Row className=" m-2 no-gutters">
        <Col>
          <Button2 element="1" function={handleOperation} />
        </Col>
        <Col>
          <Button2 element="2" function={handleOperation} />
        </Col>
        <Col>
          <Button2 element="3" function={handleOperation} />
        </Col>
        <Col>
          <Button2 element="+" function={handleOperation}/>
        </Col>
        <Col>
          <Button2 element="/" function={handleOperation}/>
        </Col>
        <Col>
          <Button2 element="." function={handleOperation}/>
        </Col>
      </Row>
      <Row>
        <Col xs="10">
          <ResultOperation result={handleOperationResult} resultArray={resultArray}/>
          <OperationList test={historicOperation}/>
        </Col>
      </Row>
    </Container>
  );
}
export default App;
