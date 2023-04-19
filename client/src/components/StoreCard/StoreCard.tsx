import React from "react";
import {
  Container,
  StoreImg,
  StoreInfoContainer,
  StoreName,
  StoreSubName,
  AddressArea,
} from "./StoreCard.style";
import { StoreData } from "../../interface/interface";

interface Props {
  store: StoreData;
  handleSelectStore: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function StoreCard({ store, handleSelectStore }: Props) {
  const { id, name, subName, address, imagePath } = store;
  return (
    <Container>
      <StoreImg src={`${process.env.REACT_APP_API_URL}/${imagePath}`} />
      <StoreInfoContainer
        id={id}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          handleSelectStore(e);
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <StoreName>{name}</StoreName>
          <StoreSubName>{`${subName}`}</StoreSubName>
        </div>
        <AddressArea>{`주소 : ${address}`}</AddressArea>
      </StoreInfoContainer>
    </Container>
  );
}

export default StoreCard;
