import React, { useState } from "react";
import { PageContainer } from "../../styles/commonStyles";

import { BackButton, ReviewListContainer } from "./ReviewPage.style";
import ReviewList from "../../components/ReviewList/ReviewList";
import ReviewModal from "../../components/ReviewModal/ReviewModal";
import Loading from "../../components/Loading/Loading";
import { PageProps, ReviewData, StoreData } from "../../interface/interface";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface ReviewPageProps extends PageProps {
  selectStore: StoreData | null;
}

function ReviewPage({ getSelectStore, selectStore }: ReviewPageProps) {
  const [showModal, setShowModal] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleOpenReview = () => {
    setShowModal(true);
  };

  const updateReview = (data: ReviewData) => {
    if (selectStore) {
      const update: StoreData = { ...selectStore };
      update.reviews?.unshift(data);
      getSelectStore(update);
    }
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowModal(false);
  };

  const handleSendReview = (
    e: React.MouseEvent<HTMLButtonElement>,
    text: string,
    writer: string
  ) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    const storeId = selectStore?.uuid;
    const userName = writer;
    const comment = text;

    axios
      .post(`${process.env.REACT_APP_API_URL}/review`, {
        storeId,
        userName,
        comment,
      })
      .then((response) => {
        updateReview(response.data);
        setShowModal(false);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  return (
    <>
      <PageContainer>
        {/* ---------------------------- review List ---------------------------- */}
        <ReviewListContainer>
          <BackButton>
            <div onClick={() => navigate("/")}>
              <img src="./left1.png" />
              {"뒤로"}
            </div>
          </BackButton>

          <ReviewList
            selectStore={selectStore}
            handleOpenReview={handleOpenReview}
          />
        </ReviewListContainer>
      </PageContainer>
      {isLoading && <Loading />}
      {showModal && (
        <ReviewModal
          isError={isError}
          handleCloseModal={handleCloseModal}
          handleSendReview={handleSendReview}
        />
      )}
    </>
  );
}

export default ReviewPage;
