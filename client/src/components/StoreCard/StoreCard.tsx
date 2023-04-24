import React from "react";
import {
  Container,
  StoreImg,
  StoreInfoContainer,
  StoreName,
  StoreSubName,
  Address,
  Phone,
} from "./StoreCard.style";
import { StoreData } from "../../interface/interface";

interface Props {
  store: StoreData;
  handleSelectStore: (store: StoreData) => void;
}

function StoreCard({ store, handleSelectStore }: Props) {
  const { name, subName, address, imagePath, phone } = store;
  return (
    <Container>
      {/* <StoreImg src={`${process.env.REACT_APP_API_URL}/${imagePath}`} /> */}
      <StoreInfoContainer
        onClick={() => {
          handleSelectStore(store);
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <StoreName>{name}</StoreName>
          <StoreSubName>{`${subName}`}</StoreSubName>
          {!!phone && <Phone>{`( ${phone} )`}</Phone>}
        </div>
        <Address>{`주소 : ${address}`}</Address>
      </StoreInfoContainer>
    </Container>
  );
}

export default StoreCard;
