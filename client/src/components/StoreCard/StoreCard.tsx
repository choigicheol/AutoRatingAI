import React from "react";
import { Container, StoreImg, StoreInfoContainer } from "./StoreCard.style";

interface Props {
  name: string;
  imagePath: string;
  address: string;
  subType: string;
  getReviews: (e: string) => void;
}

function StoreCard({ name, imagePath, address, subType, getReviews }: Props) {
  return (
    <Container>
      <StoreImg src={imagePath} />
      <StoreInfoContainer
        onClick={() => {
          getReviews(name);
        }}
      >
        <div>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginRight: "5px",
            }}
          >
            {name}
          </span>
          <span>{`(${subType})`}</span>
        </div>
        <div>{address}</div>
      </StoreInfoContainer>
    </Container>
  );
}

export default StoreCard;
