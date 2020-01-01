import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.li`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover,
  &:focus {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      visibility: visible;
    }
  }
`;

const getImage = (props: { imageUrl: string }) => {
  return props.imageUrl ? props.imageUrl : 'none';
};

export const CollectionImage = styled.div`
  width: 100%;
  height: 95%;
  background-image: url(${getImage});
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const AddToCartButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 220px;
  visibility: hidden;
`;

export const CollectionFooter = styled.p`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 90%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }
`;
