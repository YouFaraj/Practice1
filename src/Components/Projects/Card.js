import React, { Component } from 'react';
import './Card.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

export default class Project extends Component{
  render(){
  return (
    <div className="border">
      <Card className="text-center">
        <CardImg className="image" top width="100%" src={this.props.src} alt={this.props.alt} />
        <CardBody>
          <CardTitle>{this.props.title}</CardTitle>
          <CardText>{this.props.text}</CardText>
          <Button>Learn More</Button>
        </CardBody>
      </Card>
    </div>
  );
};
}