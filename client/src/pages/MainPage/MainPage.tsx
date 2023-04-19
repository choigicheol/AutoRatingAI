import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import {
  Container,
  StoreListContainer,
  ReviewListContainer,
  BackButton,
} from "./MainPage.style";
import Footer from "../../components/Footer/Footer";
import ReviewModal from "../../components/ReviewModal/ReviewModal";
import axios from "axios";
import MenuNav from "../../components/MenuNav/MenuNav";
import StoreList from "../../components/StoreList/StoreList";
import ReviewList from "../../components/ReviewList/ReviewList";
import { ReviewData, StoreData } from "../../interface/interface";
import { BlankMessage } from "../../styles/commonStyles";

function MainPage() {
  const [isSelectStore, setIsSelectStore] = useState(false);
  const [selectStore, setSelectStore] = useState<StoreData | undefined>(
    undefined
  );
  const [showModal, setShowModal] = useState(false);
  const [stores, setStores] = useState<StoreData[] | undefined>(undefined);
  const [isShowReview, setIsShowReview] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/store/menuType?type=korean`)
      .then((response) => {
        setStores(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleMenuButtonClick = (type: string) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/store/menuType?type=${type}`)
      .then((response) => {
        setStores(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOpenReview = () => {
    setShowModal(true);
  };

  const getStore = (id: string) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/store/info?storeId=${id}`, {})
      .then((response) => {
        setSelectStore(response.data);
        setIsSelectStore(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSelectStore = (e: React.MouseEvent<HTMLDivElement>) => {
    getStore(e.currentTarget.id);
    setIsShowReview(true);
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowModal(false);
  };

  const updateReview = (data: ReviewData) => {
    if (selectStore) {
      const update: StoreData = { ...selectStore };
      update.reviews?.unshift(data);
      setSelectStore(update);
    }
  };

  const handleSendReview = (
    e: React.MouseEvent<HTMLButtonElement>,
    text: string,
    writer: string
  ) => {
    e.preventDefault();

    const storeId = selectStore?.id;
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
      })
      .catch((error) => {
        console.log("여기");
        console.error(error);
      });
  };

  return (
    <>
      <Header />
      <Container>
        {/* ---------------------------- store List ---------------------------- */}
        <StoreListContainer isShowReview={isShowReview}>
          <MenuNav handleMenuButtonClick={handleMenuButtonClick} />
          <StoreList stores={stores} handleSelectStore={handleSelectStore} />
        </StoreListContainer>
        {/* ---------------------------- review List ---------------------------- */}
        <ReviewListContainer isShowReview={isShowReview}>
          <BackButton>
            <div onClick={() => setIsShowReview(false)}>
              <img
                style={{ width: "30px", marginRight: "5px" }}
                src="./left1.png"
              />
              {"뒤로"}
            </div>
          </BackButton>
          {isSelectStore || isShowReview ? (
            <ReviewList
              selectStore={selectStore}
              handleOpenReview={handleOpenReview}
            />
          ) : (
            <BlankMessage>
              <span>{"매장을 선택 해 주세요"}</span>
            </BlankMessage>
          )}
        </ReviewListContainer>
      </Container>
      <Footer />
      {showModal && (
        <ReviewModal
          handleCloseModal={handleCloseModal}
          handleSendReview={handleSendReview}
        />
      )}
    </>
  );
}

export default MainPage;
