import React, { useState } from 'react';
import {
  Col,
  FormGroup,
  Input,
  Form,
  Label,
} from 'reactstrap';

import {
  HeadDiv,
  H1,
  AnchorContainer,
  StyledLink,
  PositionDiv,
  Positionh3,
  FirstParagraph,
  RightParagraphContainer,
  RightParagraph,
  LastParagraph,
  SizeAndCrustContainer,
  StyledHeading,
  RadioGroup,
  SizeSelectorContainer,
  HamurDropdownWrapper,
  NoteContainer,
  NoteInnerContainer,
  StyledTextArea,
  BottomLine,
  ToppingSection,
  ToppingTitle,
  ToppingParagraph,
  ToppingColumns,
  ToppingColumn,
  ToppingCheckbox,
  CounterContainer,
  Button,
  AmountDisplay,
} from './OrderFormStyles';


const toppings = [
  'Peperoni', 'Domates', 'Biber', 'Sosis', 'Mısır',
  'Sucuk', 'Kanada Jambonu', 'Acı Sucuk', 'Ananas',
  'Tavuk Izgara', 'Jalapeno', 'Kabak', 'Soğan', 'Sarımsak'
];

export default function OrderForm() {
  const [selectedSize, setSelectedSize] = useState('');
  const [note, setNote] = useState('');
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);


  const handleSizeSelect = (event) => {
    setSelectedSize(event.target.value);
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

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <>
      <div>
        <HeadDiv>
          <H1>Teknolojik Yemekler</H1>
          <AnchorContainer>
            <StyledLink to="/">Anasayfa</StyledLink>-
            <StyledLink to="/orderform">Sipariş oluştur</StyledLink>
          </AnchorContainer>
        </HeadDiv>
      </div>
      <div>
        <PositionDiv>
          <Positionh3>Pozistion Absolute Acı Pizza</Positionh3>
          <FirstParagraph>85.50₺</FirstParagraph>
          <RightParagraphContainer>
            <RightParagraph>4.9</RightParagraph>
            <RightParagraph>(200)</RightParagraph>
          </RightParagraphContainer>
        </PositionDiv>
        <LastParagraph>
          FrontEnd Dev olarak hala position:absolute kullanıyorsan. Bu çok acı pizza tam sana göre.
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
          daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
          genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan Italyan kökenli lezzetli bir yemektir.
          Küçük bir pizzaya bazen pizzetta denir.
        </LastParagraph>
      </div>
      <div>
        <SizeSelectorContainer>
          <FormGroup>
            
            <StyledHeading>Boyut Seç</StyledHeading>

            
            <RadioGroup check>
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
            </RadioGroup>
            
            <RadioGroup check>
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
            </RadioGroup>

            <RadioGroup check>
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
            </RadioGroup>
          </FormGroup>

        </SizeSelectorContainer>
      </div>

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
      <div>
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
      </div>


      {/* Quantity Counter Implementation */}
      <div>
        <CounterContainer>
          <Button onClick={decreaseQuantity}>-</Button>
          <AmountDisplay>{quantity}</AmountDisplay>
          <Button onClick={increaseQuantity}>+</Button>
        </CounterContainer>
        <div>Card Container here</div>
      </div>

    </>
  );
}
