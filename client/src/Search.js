import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="searchBox" hidden>Search</Label>
          <Input type="" name="" id="" placeholder="" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    );
  }
}