import React from "react";
import { Container, StoreImg, StoreInfoContainer } from "./StoreCard.style";

interface Props {
  id: string;
  name: string | undefined;
  imagePath: string | undefined;
  address: string | undefined;
  subName: string | undefined;
  type: string | undefined;
  handleSelectStore: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function StoreCard({
  id,
  name,
  imagePath,
  address,
  subName,
  handleSelectStore,
}: Props) {
  return (
    <Container>
      <StoreImg src={`http://localhost:5000/${imagePath}`} />
      <StoreInfoContainer
        id={id}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          handleSelectStore(e);
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
          <span>{`(${subName})`}</span>
        </div>
        <div>{address}</div>
      </StoreInfoContainer>
    </Container>
  );
}

export default StoreCard;
