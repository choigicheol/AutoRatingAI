import React from "react";
import {
  Container,
  StoreImg,
  StoreInfoContainer,
  StoreName,
  StoreSubName,
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
      <StoreImg src={`http://localhost:5000/${imagePath}`} />
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
        <div>{`주소 : ${address}`}</div>
      </StoreInfoContainer>
    </Container>
  );
}

export default StoreCard;
