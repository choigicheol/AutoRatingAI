import React from "react";
import { Container, OpenModalButton } from "./DetailInfo.style";

interface Props {
  name: string | undefined;
  address: string | undefined;
  handleButtonClick: () => void;
}

function DetailInfo({ name, address, handleButtonClick }: Props) {
  return (
    <Container>
      <div
        style={{
          margin: "10px 0",
          fontSize: "25px",
          color: "tomato",
        }}
      >
        {name}
      </div>
      <div
        style={{
          margin: "10px 0",
          fontSize: "12px",
        }}
      >
        {address}
      </div>
      <OpenModalButton onClick={() => handleButtonClick()}>
        <span>{"리뷰 작성하기"}</span>
      </OpenModalButton>
    </Container>
  );
}

export default DetailInfo;
