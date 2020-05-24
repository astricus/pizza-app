import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background: url('/img/pizza_app_bg.jpg');
  background-position: right;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const HomePageTitle = styled.h1`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
`;

export const HomePageSloganContainer = styled.div`
  width: 750px;
  margin-right: 36px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 800px) {
    width: 600px;
    margin-right: 24px;
  }
  @media screen and (max-width: 640px) {
    width: 240px;
    font-size: 36px;
  }
`;

export const HomePageSlogan = styled.h2`
  width: 450px;
  font-size: 72px;
  font-family: 'Playfair Display', serif;
  font-weight: normal;
  color: #ffffff;
  text-shadow: 0px 1px 24px rgb(0, 0, 0);
  margin: auto;

  @media screen and (max-width: 800px) {
    width: 350px;
    font-size: 56px;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    font-size: 36px;
  }
`;

export const HomePageSloganTemp = styled.span`
  display: block;
  width: 300px;
  font-size: 176px;
  font-weight: bold;
  color: #ffff30;
  margin: auto;
  @media screen and (max-width: 800px) {
    width: 200px;
    font-size: 136px;
    line-height: 170px;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    font-size: 90px;
    line-height: 105px;
  }
`;

export const HomePageCTA = styled.a`
  display: block;
  border: 4px solid #ffffff;
  background-color: transparent;
  padding: 8px 48px;
  color: #ffffff;
  font-size: 36px;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 72px;
  margin-right: auto;
  margin-left: auto;
  transition: all 0.2s ease;

  &:hover {
    color: #ffff30;
    border: 4px solid #ffff30;
  }

  @media screen and (max-width: 640px) {
    margin-top: 36px;
    font-size: 24px;
    padding: 4px 30px;
  }
`;
