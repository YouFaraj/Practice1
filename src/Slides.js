import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export default function Slides(props){
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">SRD Engineering</h1>
        <p className="lead">Engineering Done Right.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};