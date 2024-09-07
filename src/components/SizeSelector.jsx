import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const SizeSelector = () => {
  return (
    <Form>
      <FormGroup>
        <h2>Boyut Seç*</h2>
        <FormGroup check>
          <Label check for="boyut-kucuk">
            <Input type="radio" name='boyut' value='Küçük' id='boyut-kucuk' />
            Küçük
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check for="boyut-orta">
            <Input type="radio" name='boyut' value='Orta' id='boyut-orta' />
            Orta
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check for="boyut-buyuk">
            <Input type="radio" name='boyut' value='Büyük' id='boyut-buyuk' />
            Büyük
          </Label>
        </FormGroup>
      </FormGroup>
    </Form>
  );
};

export default SizeSelector;
