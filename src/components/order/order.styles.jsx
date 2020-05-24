import styled from 'styled-components';

export const OrderPageContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const OrderHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 25%;

  &:last-child,
  &:nth-child(3) {
    text-align: right;
  }
`;

export const TotalContainer = styled.div`
  margin-left: auto;
  font-size: 24px;
`;
