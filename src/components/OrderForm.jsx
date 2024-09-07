import React from 'react';
import { Form, Input } from 'reactstrap';
import Header from './Header';
import PizzaDescription from './PizzaDescription';
import SizeSelector from './SizeSelector';
import HamurDropdown from './HamurDropdown';
import styled from 'styled-components';

// Styled component to position SizeSelector and HamurDropdown side by side
const SizeAndCrustContainer = styled.div`
  display: flex;
  justify-content: center;   /* Center the container */
  align-items: flex-start;   /* Align items at the start */
  margin-top: 20px;
`;

// Style to control the HamurDropdown position
const HamurDropdownWrapper = styled.div`
  margin-left: 12rem;  /* Adjust this value to move HamurDropdown more to the right */
`;

export default function OrderForm() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <PizzaDescription />
      </div>

      {/* SizeSelector and HamurDropdown placed next to each other */}
      <SizeAndCrustContainer>
        <SizeSelector />
        <HamurDropdownWrapper>
          <HamurDropdown />
        </HamurDropdownWrapper>
      </SizeAndCrustContainer>

      <div>
        <h3>Sipariş notu</h3>
        <Input type="text" />
      </div>
      <div>
        <div>counter</div>
        <div>card</div>
      </div>
    </>
  );
}
