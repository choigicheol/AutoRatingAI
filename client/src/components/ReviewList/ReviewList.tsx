import React from "react";
import {
  BlankMessage,
  ListContainer,
  ShadowLine,
} from "../../styles/commonStyles";
import DetailInfo from "../DetailInfo/DetailInfo";
import ReviewCard from "../ReviewCard/ReviewCard";
import { StoreData } from "../../interface/interface";
import { FullCenterContainer } from "./ReviewList.style";

interface Props {
  selectStore: StoreData | null;
  handleOpenReview: () => void;
}

function ReviewList({ selectStore, handleOpenReview }: Props) {
  return (
    <>
      {selectStore ? (
        <>
          <DetailInfo
            name={selectStore.name}
            address={selectStore.address}
            subName={selectStore.subName}
            handleOpenReview={handleOpenReview}
          />
          <ShadowLine />
          <ListContainer>
            {selectStore.reviews.length ? (
              selectStore.reviews.map((review) => {
                return <ReviewCard key={review.id} review={review} />;
              })
            ) : (
              <FullCenterContainer>
                <BlankMessage>{"작성 된 리뷰가 없습니다."}</BlankMessage>
              </FullCenterContainer>
            )}
          </ListContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default ReviewList;
