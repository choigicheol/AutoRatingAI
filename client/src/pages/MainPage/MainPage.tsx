import React, { useEffect, useState, useRef } from "react";
// import Header from "../../components/Header/Header";
import {
  Container,
  StoreListContainer,
  ReviewListContainer,
  BackButton,
} from "./MainPage.style";
// import Footer from "../../components/Footer/Footer";
import ReviewModal from "../../components/ReviewModal/ReviewModal";
import axios from "axios";
import MenuNav from "../../components/MenuNav/MenuNav";
import StoreList from "../../components/StoreList/StoreList";
import ReviewList from "../../components/ReviewList/ReviewList";
import { ReviewData, StoreData } from "../../interface/interface";
import { BlankMessage, CenterContainer } from "../../styles/commonStyles";
import KakaoMap from "../../components/KakaoMap/KakaoMap";
import { convertMapDataToStoreData } from "../../util/util";
import Loading from "../../components/Loading/Loading";

interface MapData {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

function MainPage() {
  const [isSelectStore, setIsSelectStore] = useState(false);
  const [selectStore, setSelectStore] = useState<StoreData | undefined>(
    undefined
  );
  const [showModal, setShowModal] = useState(false);
  const [isShowReview, setIsShowReview] = useState<boolean>(false);
  const [stores, setStores] = useState<StoreData[]>([]);
  const [selectType, setSelectType] = useState("음식점");
  const [isMapResult, setIsMapResult] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPlace = (data: MapData[]) => {
    const storesArr: StoreData[] = [];

    data.forEach((el) => {
      const storeData = convertMapDataToStoreData(el);
      storesArr.push(storeData);
    });
    // console.log(storesArr);
    setStores(storesArr);
  };

  useEffect(() => {}, []);

  const handleMenuButtonClick = (type: string) => {
    setSelectType(type);
  };

  const handleOpenReview = () => {
    setShowModal(true);
  };

  const getStore = (store: StoreData) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/store?uuid=${store.uuid}`, {})
      .then((response) => {
        if (response.status === 204) createStore(store);
        else {
          setSelectStore(response.data);
          setIsSelectStore(true);
        }
      })
      .then(() => setIsShowReview(true))
      .catch((error) => {
        console.error(error);
      });
  };

  const createStore = (store: StoreData) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/store`, { store })
      .then((response) => {
        if (response.status === 201) {
          getStore(store);
        }
      });
  };

  const handleSelectStore = (store: StoreData) => {
    getStore(store);
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

  const scrollToTop = () => {};

  const getIsMapResult = (result: boolean) => {
    setIsMapResult(result);
  };
  return (
    <>
      <Container>
        {/* ---------------------------- store List ---------------------------- */}
        <StoreListContainer isShowReview={isShowReview}>
          <MenuNav handleMenuButtonClick={handleMenuButtonClick} />
          <KakaoMap
            selectType={selectType}
            getPlace={getPlace}
            getIsMapResult={getIsMapResult}
            handleSelectStore={handleSelectStore}
          />
          {isMapResult ? (
            <StoreList stores={stores} handleSelectStore={handleSelectStore} />
          ) : (
            <CenterContainer style={{ height: "100%" }}>
              {"검색결과가 없습니다."}
            </CenterContainer>
          )}
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

export default MainPage;
