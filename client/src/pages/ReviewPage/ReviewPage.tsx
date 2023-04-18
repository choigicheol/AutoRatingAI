import React from "react";
import { Container, ListContainer } from "../MainPage/MainPage.style";

function ReviewPage() {
  const click = () => {
    console.log("here ViewPage");
  };
  return (
    <Container>
      <ListContainer backgroundColor={"#eeeeee"}>
        {/* {isSelectStore && selectStore ? (
          <ReviewList
            selectStore={selectStore}
            handleOpenReview={handleOpenReview}
          />
        ) : (
          <div
            style={{
              fontSize: "20px",
              paddingBottom: "5px",
              borderRadius: "3px",
              borderBottom: "3px solid #2e2e2e",
            }}
          >
            {"매장을 선택 해 주세요"}
          </div>
        )} */}
        <div
          onClick={() => click()}
          style={{
            fontSize: "20px",
            paddingBottom: "5px",
            borderRadius: "3px",
            borderBottom: "3px solid #2e2e2e",
          }}
        >
          {"매장을 선택 해 주세요"}
        </div>
      </ListContainer>
    </Container>
  );
}

export default ReviewPage;
