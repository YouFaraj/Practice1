import React, { Component } from 'react';
import {
  Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';
import './ContactCard.css';

export default class ContactCard extends Component{
 render(){ 
   return (
     <React.Fragment>
      <Card className="cardBox text-center m-auto">
        <CardImg top width="100%" src={this.props.src} alt={this.props.alt} />
        <CardBody>
          <CardTitle>{this.props.name}</CardTitle>
          <CardSubtitle>{this.props.title}</CardSubtitle>
          <CardText>{this.props.text}</CardText>
          <CardText>{this.props.email}</CardText>
        </CardBody>
      </Card>
      </React.Fragment>
  );
}};