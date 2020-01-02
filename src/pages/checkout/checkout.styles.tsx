import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  .StripeCheckout {
    margin: 50px 0 0 auto;
  }
`;

export const CheckoutPageHead = styled.ul`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const CheckoutPageBlock = styled.li`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const CheckoutPageTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  text-align: right;
`;

export const WarningText = styled.p`
  margin-top: 40px;
  font-size: 24px;
  color: red;
  text-align: center;
`;
