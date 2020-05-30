import React from 'react';
import './Card.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function Project(props){
  return (
    <div className="border m-auto">
      <Card className="text-center">
        <CardImg top width="100%" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.constructionspecifier.com%2Fwp-content%2Fuploads%2F2015%2F07%2Fbigstock-Big-Construction-Site-Cranes-a-52763107-2.jpg&f=1&nofb=1" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};
