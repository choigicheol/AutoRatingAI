import React from "react";
import styled from "styled-components";
import { Container } from "./ReviewCard.style";

function ReviewCard({ name, imagePath, content }) {
  return (
    <Container>
      <div style={{ marginBottom: "10px" }}>{name}</div>
      <div>{content}</div>
    </Container>
  );
}

export default ReviewCard;
