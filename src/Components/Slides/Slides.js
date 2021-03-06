import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Slides.css';

export default function Slides(props){
  return (
    <div >
      <Jumbotron className="text-center" >
        <div className="container slideContainer background">
        <h1 className="display-3 mt-5">SRD Engineering</h1>
        <p className="lead">Engineering Done Right.</p>
        <hr className="my-2" />
        <p>Our mission is to Provide High Quality Engineering Services to our clients, on an aggressive schedule and within Budget.
</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
        </div>
      </Jumbotron>
    </div>
  );
};