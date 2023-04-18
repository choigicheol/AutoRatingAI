import React from "react";
import {
  Container,
  ReviewCardTop,
  ReviewCardBottom,
  ProfileImage,
} from "./ReviewCard.style";
import { ReviewData } from "../../interface/interface";
import { CenterContainer } from "../../styles/commonStyles";

interface Props {
  review: ReviewData;
}

function ReviewCard({ review }: Props) {
  const { userName, rating, comment, date } = review;

  function getStar(rating: number): JSX.Element[] {
    const stars: JSX.Element[] = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <img key={i} style={{ width: "15px" }} src="./star.png" alt="" />
      );
    }
    for (let i = rating; i < 5; i++) {
      stars.push(
        <img key={i} style={{ width: "15px" }} src="./blankStar.png" alt="" />
      );
    }
    return stars;
  }

  return (
    <Container>
      <ReviewCardTop>
        <CenterContainer>
          <ProfileImage src="./profile.png" />
          <span style={{ marginBottom: "4px" }}>{userName}</span>
        </CenterContainer>
        <div>{getStar(rating).map((star) => star)}</div>
      </ReviewCardTop>
      <div style={{ lineHeight: "1.3" }}>{comment}</div>
      <ReviewCardBottom>{date}</ReviewCardBottom>
    </Container>
  );
}

export default ReviewCard;
