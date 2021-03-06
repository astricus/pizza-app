import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &.collection-animation-appear {
    opacity: 0;
  }
  &.collection-animation-appear-active {
    opacity: 1;
    transition: opacity 300ms ease;
  }
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  font-family: 'Playfair Display', serif;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
`;

CollectionItemsContainer.displayName = 'CollectionItemsContainer';
