import React, { useEffect, useState, useRef } from "react";
import { StoreListContainer, MapContainer } from "./MainPage.style";
import axios from "axios";
import MenuNav from "../../components/MenuNav/MenuNav";
import StoreList from "../../components/StoreList/StoreList";
import { MapData, PageProps, StoreData } from "../../interface/interface";
import { CenterContainer, PageContainer } from "../../styles/commonStyles";
import KakaoMap from "../../components/KakaoMap/KakaoMap";
import { convertMapDataToStoreData } from "../../util/util";
import { useNavigate } from "react-router-dom";

function MainPage({ getSelectStore }: PageProps) {
  const [isShowReview, setIsShowReview] = useState<boolean>(false);
  const [stores, setStores] = useState<StoreData[]>([]);
  const [selectType, setSelectType] = useState<string | null>(null);
  const [isMapResult, setIsMapResult] = useState<boolean>(true);
  const navigate = useNavigate();

  const getPlace = (data: MapData[]) => {
    const storesArr: StoreData[] = [];

    data.forEach((el) => {
      const storeData = convertMapDataToStoreData(el);
      storesArr.push(storeData);
    });
    setStores(storesArr);
  };

  useEffect(() => {}, []);

  const handleMenuButtonClick = (type: string) => {
    setSelectType(type);
  };

  const getStore = (store: StoreData) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/store?uuid=${store.uuid}`, {})
      .then((response) => {
        if (response.status === 204) createStore(store);
        else {
          getSelectStore(response.data);
          navigate("/review");
        }
      })
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

  const scrollToTop = () => {};

  const getIsMapResult = (result: boolean) => {
    setIsMapResult(result);
  };
  return (
    <>
      <PageContainer>
        {/* ---------------------------- store List ---------------------------- */}
        <StoreListContainer isShowReview={isShowReview}>
          <MenuNav handleMenuButtonClick={handleMenuButtonClick} />
          <MapContainer>
            <KakaoMap
              selectType={selectType}
              getPlace={getPlace}
              getIsMapResult={getIsMapResult}
              handleSelectStore={handleSelectStore}
            />
          </MapContainer>
          {isMapResult ? (
            <StoreList stores={stores} handleSelectStore={handleSelectStore} />
          ) : (
            <CenterContainer style={{ height: "100%" }}>
              {"검색결과가 없습니다."}
            </CenterContainer>
          )}
        </StoreListContainer>
      </PageContainer>
    </>
  );
}

export default MainPage;
