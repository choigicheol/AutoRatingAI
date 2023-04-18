import React from "react";
import { ListContainer, ShadowLine } from "../../styles/commonStyles";
import DetailInfo from "../DetailInfo/DetailInfo";
import ReviewCard from "../ReviewCard/ReviewCard";
import { StoreData } from "../../interface/interface";

interface Props {
  selectStore: StoreData | undefined;
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
            {selectStore.reviews.map((review) => {
              return <ReviewCard key={review.id} review={review} />;
            })}
          </ListContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default ReviewList;
