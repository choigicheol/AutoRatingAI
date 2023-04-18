import React from "react";
import {
  Container,
  OpenModalButton,
  Title,
  StoreName,
  SubName,
  Address,
} from "./DetailInfo.style";

interface Props {
  name: string | undefined;
  address: string | undefined;
  subName: string | undefined;
  handleOpenReview: () => void;
}

function DetailInfo({ name, address, subName, handleOpenReview }: Props) {
  return (
    <Container>
      <Title>
        <StoreName>{name}</StoreName>
        <SubName>{subName}</SubName>
      </Title>
      <Address>
        <img src="./placeholder.png" alt="" />
        {address}
      </Address>
      <OpenModalButton onClick={() => handleOpenReview()}>
        <span>{"리뷰 작성하기"}</span>
      </OpenModalButton>
    </Container>
  );
}

export default DetailInfo;
