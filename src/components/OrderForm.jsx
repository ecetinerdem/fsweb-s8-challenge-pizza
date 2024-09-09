import React, { useState } from 'react';
import { Col, FormGroup, Input, Label } from 'reactstrap';
import Header from './Header';
import PizzaDescription from './PizzaDescription';
import SizeSelector from './SizeSelector';
import HamurDropdown from './HamurDropdown';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


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

const ToppingSection = styled.div`
  width: 50%;
  margin-top: 20px;
  transform: translateX(76%);
`;

const ToppingTitle = styled.h3`
  margin-bottom: 10px;
`;

const ToppingParagraph = styled.p`
  margin-bottom: 10px;
  color: #5F5F5F; 
`;

const ToppingColumns = styled.div`
  display: flex;
  gap: 8px; 
  flex-wrap: wrap;
`;

const ToppingColumn = styled.div`
  flex: 1;
  max-width: calc(33.333% - 8px); 
  display: flex;
  flex-direction: column;
  gap: 12px; 
`;

const ToppingCheckbox = styled(Input)`
  margin-right: 10px;
`;

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 30px;  /* Reduced width */
  height: 30px;  /* Reduced height */
  background-color: #FDC913;  /* Button background color */
  border: none;
  border-radius: 5px 0 0 5px;  /* Rounded left corners */
  color: #000;
  font-size: 1rem;  /* Adjust font size */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &:last-of-type {
    border-radius: 0 5px 5px 0;  /* Rounded right corners */
  }
`;

const AmountDisplay = styled.div`
  width: 30px;  /* Match button size */
  height: 30px;  /* Match button size */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;  /* Adjust font size */
  background-color: #fff;  /* White background */
  border: 1px solid #FDC913;  /* Border same as button color */
  margin: 0 -1px;  /* Remove gap between buttons and display */
`;

const CardContainer = styled.div`
  width: 300px;
  padding: 20px;
  margin: 20px auto;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative; /* Enables positioning of button inside */
  padding-bottom: 60px; /* Space for the button */
`;

const CardTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

const TotalAmountText = styled.p`
  color: red;
  font-weight: bold;
  margin-bottom: 5px;
`;

const OrderButton = styled.button`
  width: 100%;
  padding: 10px 0;
  background-color: #FDC913;
  color: black; /* Black text for the button */
  font-weight: bold;
  border: none;
  border-radius: 0 0 5px 5px; /* Rounded bottom corners */
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute; /* Absolute positioning */
  bottom: 0; /* Positioned at the bottom */
  left: 0; /* Ensure it spans the full width */
  
  &:hover {
    background-color: #e6b000;
  }
`;

const HorizontalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 160px; /* Increased gap between counter and card */
  margin-top: 20px;
  padding-left: 120px; /* Slightly moved it to the right */
  width: 95%;
`;


const toppings = [
  'Peperoni', 'Domates', 'Biber', 'Sosis', 'Mısır',
  'Sucuk', 'Kanada Jambonu', 'Acı Sucuk', 'Ananas',
  'Tavuk Izgara', 'Jalapeno', 'Kabak', 'Soğan', 'Sarımsak'
];

export default function OrderForm() {
  const [note, setNote] = useState('');
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  
  const notify2 = () => {
    toast.success("Siparişini aldık!", {
      position: "top-right"
    });
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleToppingChange = (event) => {
    const topping = event.target.value;
    if (selectedToppings.includes(topping)) {
      setSelectedToppings(selectedToppings.filter(item => item !== topping));
    } else {
      if (selectedToppings.length < 10) {
        setSelectedToppings([...selectedToppings, topping]);
      }
    }
  };

  const isToppingDisabled = (topping) => {
    return selectedToppings.length >= 10 && !selectedToppings.includes(topping);
  };

  const toppingPrice = selectedToppings.length * 5;

  // Base price of a pizza (85.50₺)
  const pizzaBasePrice = 85.50;

  // Calculate total price based on quantity and topping price
  const totalPrice = (pizzaBasePrice + toppingPrice) * quantity;

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
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
      
      <div>
        <ToppingSection>
          <ToppingTitle>Ek Malzemeler</ToppingTitle>
          <ToppingParagraph>En fazla 10 malzeme seçebilirsiniz. 5₺</ToppingParagraph>
          <ToppingColumns>
            <ToppingColumn>
              {toppings.slice(0, 5).map((topping) => (
                <FormGroup check key={topping}>
                  <Label check>
                    <ToppingCheckbox
                      type="checkbox"
                      value={topping}
                      checked={selectedToppings.includes(topping)}
                      onChange={handleToppingChange}
                      disabled={isToppingDisabled(topping)}
                    />
                    {topping}
                  </Label>
                </FormGroup>
              ))}
            </ToppingColumn>
            <ToppingColumn>
              {toppings.slice(5, 10).map((topping) => (
                <FormGroup check key={topping}>
                  <Label check>
                    <ToppingCheckbox
                      type="checkbox"
                      value={topping}
                      checked={selectedToppings.includes(topping)}
                      onChange={handleToppingChange}
                      disabled={isToppingDisabled(topping)}
                    />
                    {topping}
                  </Label>
                </FormGroup>
              ))}
            </ToppingColumn>
            <ToppingColumn>
              {toppings.slice(10).map((topping) => (
                <FormGroup check key={topping}>
                  <Label check>
                    <ToppingCheckbox
                      type="checkbox"
                      value={topping}
                      checked={selectedToppings.includes(topping)}
                      onChange={handleToppingChange}
                      disabled={isToppingDisabled(topping)}
                    />
                    {topping}
                  </Label>
                </FormGroup>
              ))}
            </ToppingColumn>
          </ToppingColumns>
          <p>Toplam Fiyat: {toppingPrice}₺</p>
        </ToppingSection>
      </div>

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

      {/* Quantity Counter Implementation */}
      <HorizontalContainer>
        <div>
          <CounterContainer>
            <Button onClick={decreaseQuantity}>-</Button>
            <AmountDisplay>{quantity}</AmountDisplay>
            <Button onClick={increaseQuantity}>+</Button>
          </CounterContainer>
        </div>
        <div>
          <CardContainer>
            <CardTitle>Sipariş Toplamı</CardTitle>
            <p>Seçimler: {toppingPrice}₺</p>
            <TotalAmountText>Toplam: {totalPrice.toFixed(2)}₺</TotalAmountText>
            <Link to="/ordercomplete">
            <OrderButton onClick={notify2}>SİPARİŞ VER</OrderButton>
            </Link>
          </CardContainer>
        </div>
      </HorizontalContainer>
    </>
  );
}

