import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Header from './Header';
import PizzaDescription from './PizzaDescription';
import SizeSelector from './SizeSelector';
import HamurDropdown from './HamurDropdown';




export default function OrderForm() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <PizzaDescription />
      </div>
      <div>
        <SizeSelector />
      </div>
      <div>
        <HamurDropdown />
      </div>
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
