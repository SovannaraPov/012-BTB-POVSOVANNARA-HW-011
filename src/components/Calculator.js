import React, { Component } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  ListGroup,
} from "react-bootstrap";
import Result from "./Result";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOne: 0,
      valueTwo: 0,
      selectedOpt: "",
      calculatedResult: [],
    };
  }

  handleInputOne = (event) => {
    this.setState({
      valueOne: event.target.value,
    });
  };

  handleInputTwo = (event) => {
    this.setState({
      valueTwo: event.target.value,
    });
  };

  handleSelect = (event) => {
    this.setState({
      selectedOpt: event.target.value,
    });
  };

  handleCalculate = () => {
    let valueone = parseFloat(this.state.valueOne);
    let valuetwo = parseFloat(this.state.valueTwo);
    let result;
    switch (this.state.selectedOpt) {
      case "+":
        if (valueone == "" || valuetwo == "") {
          alert("Cannot Calculate");
        } else {
          result = valueone + valuetwo;
          if (isNaN(result)) {
            alert("Cannot Calculate");
          } else {
            this.state.calculatedResult.push(result);
            this.setState((prevState) => {
              return {
                calculatedResult: prevState.calculatedResult,
              };
            });
          }
        }
        break;
      case "-":
        if (valueone == "" || valuetwo == "") {
          alert("Cannot Calculate");
        } else {
          result = valueone - valuetwo;
          if (isNaN(result)) {
            alert("Cannot Calculate");
          } else {
            this.state.calculatedResult.push(result);
            this.setState((prevState) => {
              return {
                calculatedResult: prevState.calculatedResult,
              };
            });
          }
        }
        break;
      case "*":
        if (valueone == "" || valuetwo == "") {
          alert("Cannot Calculate");
        } else {
          result = valueone * valuetwo;
          if (isNaN(result)) {
            alert("Cannot Calculate");
          } else {
            this.state.calculatedResult.push(result);
            this.setState((prevState) => {
              return {
                calculatedResult: prevState.calculatedResult,
              };
            });
          }
        }
        break;
      case "/":
        if (valueone == "" || valuetwo == "") {
          alert("Cannot Calculate");
        } else {
          result = valueone / valuetwo;
          if (isNaN(result)) {
            alert("Cannot Calculate");
          } else {
            this.state.calculatedResult.push(result);
            this.setState((prevState) => {
              return {
                calculatedResult: prevState.calculatedResult,
              };
            });
          }
        }
        break;
      case "%":
        if (valueone == "" || valuetwo == "") {
          alert("Cannot Calculate");
        } else {
          result = valueone % valuetwo;
          if (isNaN(result)) {
            alert("Cannot Calculate");
          } else {
            this.state.calculatedResult.push(result);
            this.setState((prevState) => {
              return {
                calculatedResult: prevState.calculatedResult,
              };
            });
          }
        }
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src="calculator.png" />
                <Card.Body>
                  <Form onSubmit={this.handleCalculate}>
                    <Form.Group>
                      <Form.Control
                        type="number"
                        placeholder="Enter Value 1"
                        onChange={this.handleInputOne}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        type="number"
                        placeholder="Enter Value 2"
                        onChange={this.handleInputTwo}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control as="select" onClick={this.handleSelect}>
                        <option value="+">+ Plus</option>
                        <option value="-">- Substract</option>
                        <option value="*">* Multiply</option>
                        <option value="/">/ Divide</option>
                        <option value="%">% Module</option>
                      </Form.Control>
                    </Form.Group>
                    <Button variant="primary" onClick={this.handleCalculate}>
                      Calculate
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Result
                result={this.state.calculatedResult.map(
                  (calculatedResult, id) => (
                    <Card key={id}>
                      <ListGroup variant="flush">
                        <ListGroup.Item>{calculatedResult}</ListGroup.Item>
                      </ListGroup>
                    </Card>
                  )
                )}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
