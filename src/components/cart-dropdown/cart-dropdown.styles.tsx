import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const EmptyMessage = styled.p`
  margin: 50px auto;
  font-size: 18px;
`;
export const CartItems = styled.ul`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CheckoutButton = styled(CustomButton)`
  margin-top: auto;
`;
