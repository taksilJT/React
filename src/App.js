import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col,Button,Alert } from 'reactstrap';


class App extends Component {
state = { vote:false }

onVote = () => {
  console.log("true");
  this.setState({ vote:true })
}

  render() {
    const { vote } = this.state
    // if(vote) {
    //   return(
    //     <Container>
    //     <Alert color="primary">
    //       Vote
    //     </Alert>
    //     </Container>
    //   );

    // }
    return (
      <Container className="padding-top App">
      <Row>
      <Col>
        <img className="App img-size" src="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/02/08/Pictures/_33b2ca74-0cc1-11e8-ba67-a8387f729390.jpeg" />
        {vote ? null : <Button className="margin-top" color="success" onClick={this.onVote} >Vote</Button>}
        
      </Col>
      <Col>
        <img className="App img-size" src="https://brightcove04pmdo-a.akamaihd.net/3653334524001/3653334524001_5588386177001_5588359983001-vs.jpg?pubId=3653334524001&videoId=5588359983001" />
        {vote ? null : <Button className="margin-top" color="warning" >Vote</Button>}
      </Col>
      </Row>
      {
        vote ? (
          <Alert className="margin-top" color="primary">
            Vote eiei
          </Alert>
        ) : null
      }

      <Row>
      <Col>

      </Col>
      </Row>
      </Container>
    );
  }
}

export default App;
