import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState(''); 

  
  const handleSizeSelect = (event) => {
    setSelectedSize(event.target.value); 
  };

  return (
    <Form>
      <FormGroup>
        <h2>Boyut Seç*</h2>
        <FormGroup check>
          <Label check for="boyut-kucuk">
            <Input 
              type="radio" 
              name="boyut" 
              value="Küçük" 
              id="boyut-kucuk"
              onChange={handleSizeSelect} 
              checked={selectedSize === 'Küçük'} 
            />
            Küçük
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check for="boyut-orta">
            <Input 
              type="radio" 
              name="boyut" 
              value="Orta" 
              id="boyut-orta"
              onChange={handleSizeSelect} 
              checked={selectedSize === 'Orta'}
            />
            Orta
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check for="boyut-buyuk">
            <Input 
              type="radio" 
              name="boyut" 
              value="Büyük" 
              id="boyut-buyuk"
              onChange={handleSizeSelect} 
              checked={selectedSize === 'Büyük'}
            />
            Büyük
          </Label>
        </FormGroup>
      </FormGroup>

      {/* Display the selected size for testing or use in the form */}
      <p>Seçilen Boyut: {selectedSize}</p>
    </Form>
  );
};

export default SizeSelector;
