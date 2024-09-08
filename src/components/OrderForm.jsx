import React, { useState } from 'react';
import { Col, FormGroup, Input, Label } from 'reactstrap';
import Header from './Header';
import PizzaDescription from './PizzaDescription';
import SizeSelector from './SizeSelector';
import HamurDropdown from './HamurDropdown';
import styled from 'styled-components';

const SizeAndCrustContainer = styled.div`
  display: flex;
  justify-content: center;   
  align-items: flex-start;   
  margin-top: 20px;
`;

const HamurDropdownWrapper = styled.div`
  margin-left: 12rem;  
`;


const NoteContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  margin-top: 20px;
  transform: translateX(43%);
`;

const NoteInnerContainer = styled.div`
  width: 80%; 
`;

const StyledTextArea = styled(Input)`
  width: 64%;
  border: 1px solid lightgray; 
  border-radius: 5px;
  margin-bottom: 20px;

  
  &:focus {
    border-color: lightgray; 
    box-shadow: 0 0 5px lightblue; 
    outline: none; 
  }
`;

const BottomLine = styled.div`
  width: 65%; 
  border-bottom: 1px solid lightgray; 
  margin: 0 auto; 
  transform: translateX(-27%);
`;

export default function OrderForm() {
  
  const [note, setNote] = useState('');

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <PizzaDescription />
      </div>

      <SizeAndCrustContainer>
        <SizeSelector />
        <HamurDropdownWrapper>
          <HamurDropdown />
        </HamurDropdownWrapper>
      </SizeAndCrustContainer>

      <NoteContainer>
        <NoteInnerContainer>
          <h3>Sipariş notu</h3>
          <FormGroup row>
            <Label for="exampleText" sm={2} />
            <Col sm={10}>
              <StyledTextArea
                id="exampleText"
                name="text"
                type="textarea"
                placeholder='Siparişine eklemek istediğin bir not var mı?'
                value={note} 
                onChange={handleNoteChange} 
              />
              <BottomLine />
            </Col>
          </FormGroup>
        </NoteInnerContainer>
      </NoteContainer>

      <div>
        <div>counter</div>
        <div>card</div>
      </div>
    </>
  );
}
