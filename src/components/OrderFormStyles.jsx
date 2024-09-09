import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeadDiv = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: #CE2829;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  flex-grow: 1 ;
`;

export const H1 = styled.h1`
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: 700;
`;

export const AnchorContainer = styled.div`
  display: flex;
  gap: 1rem; 
  position: absolute; 
  bottom: 10px; 
  left: 38%; 
  margin-top: 2rem; 
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white; 
  font-size: 1rem;
`;

export const PositionDiv = styled.div`
  width: 90vw; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  position: relative;
  padding: 0 5vw; 
  margin-top: 2rem; 
`;

export const Positionh3 = styled.h3`
  font-family: 'Barlow';
  position: absolute;
  top: -3rem; 
  left: 50%;
  transform: translateX(-91%);
  z-index: 1; 
`;

export const FirstParagraph = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  transform: translateX(1065%);
`;

export const RightParagraphContainer = styled.div`
  display: flex;
  gap: 6rem; 
  justify-content: flex-end;
  align-items: center;
  transform: translateX(-260%);
`;

export const RightParagraph = styled.p`
  text-align: right;
`;

export const LastParagraph = styled.p`
  width: 35vw; 
  margin: 0 33%; 
  padding: 1rem 5vw; 
  text-align: justify; 
  font-size: 0.95rem; 
  line-height: 1.5; 
  color: #5F5F5F;
  
`;

export const SizeAndCrustContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
`;

export const StyledHeading = styled.h4`
  display: inline-block;
  margin-bottom: 15px;
  &::after {
    content: '*';
    color: red;
    margin-left: 4px;
  }
`;

export const RadioGroup = styled(FormGroup)`
  margin-bottom: 10px;
`;

export const SizeSelectorContainer = styled(Form)`
  margin-top: 10px;
`;

export const HamurDropdownWrapper = styled.div`
  margin-left: 12rem;
`;

export const NoteContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  margin-top: 20px;
  transform: translateX(43%);
`;

export const NoteInnerContainer = styled.div`
  width: 80%;
`;

export const StyledTextArea = styled(Input)`
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

export const BottomLine = styled.div`
  width: 65%;
  border-bottom: 1px solid lightgray;
  margin: 0 auto;
  transform: translateX(-27%);
`;

export const ToppingSection = styled.div`
  width: 50%;
  margin-top: 20px;
  transform: translateX(76%);
`;

export const ToppingTitle = styled.h3`
  margin-bottom: 10px;
`;

export const ToppingParagraph = styled.p`
  margin-bottom: 10px;
  color: #5f5f5f;
`;

export const ToppingColumns = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ToppingColumn = styled.div`
  flex: 1;
  max-width: calc(33.333% - 8px);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ToppingCheckbox = styled(Input)`
  margin-right: 10px;
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: #fdc913;
  border: none;
  border-radius: 5px 0 0 5px;
  color: #000;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:last-of-type {
    border-radius: 0 5px 5px 0;
  }
`;

export const AmountDisplay = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background-color: #fff;
  border: 1px solid #fdc913;
  margin: 0 -1px;
`;