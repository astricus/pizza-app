import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0);
  transition: all 0.2s ease;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: all 0.2s ease;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0);
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  border: none;
  color: white;
  transition: all 0.2s ease;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  margin-bottom: 15px;
  min-width: 165px;
  width: auto;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bolder;
  cursor: pointer;

  ${getButtonStyles}
`;
