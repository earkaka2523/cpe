import React, {Component} from 'react';
import { FormGroup, FormControl, Button, ControlLabel, HelpBlock } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class SignUp extends Component {

  render(){
    return(
      <div className="container">
        <div className="jumbotron">
          <form>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Name"
              placeholder="Enter Name"
            />
            <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              placeholder="Enter email"
            />
            <FieldGroup
              id="formControlsPassword"
              label="Password"
              type="password"
            />
            <FieldGroup
              id="formControlsPassword"
              label="Confirm Password"
              type="password"
            />
            <FieldGroup
              id="formControlsFile"
              type="file"
              label="Photo"
              help="Example block-level help text here."
            />
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Address</ControlLabel>
              <FormControl componentClass="textarea" placeholder="address" />
            </FormGroup>

            <Button type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp;
