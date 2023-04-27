import React from "react";
import {
  Container,
  StoreInfoContainer,
  StoreName,
  StoreSubName,
  Address,
  Phone,
  NavigateReviewButton,
} from "./StoreCard.style";
import { StoreData } from "../../interface/interface";
import { CenterContainer } from "../../styles/commonStyles";

interface Props {
  store: StoreData;
  handleSelectStore: (store: StoreData) => void;
}

function StoreCard({ store, handleSelectStore }: Props) {
  const { name, subName, address, imagePath, phone } = store;
  return (
    <Container>
      {/* <StoreImg src={`${process.env.REACT_APP_API_URL}/${imagePath}`} /> */}
      <StoreInfoContainer>
        <div>
          <StoreName>{name}</StoreName>
          <StoreSubName>{`${subName}`}</StoreSubName>
        </div>
        {<Phone>{`Tel. : ${phone}`}</Phone>}
        <Address>{`주소 : ${address}`}</Address>
      </StoreInfoContainer>
      <NavigateReviewButton
        onClick={() => {
          handleSelectStore(store);
        }}
      >
        {">"}
      </NavigateReviewButton>
    </Container>
  );
}

export default StoreCard;
