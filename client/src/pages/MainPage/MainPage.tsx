import React, { useState } from "react";
import MenuButton from "../../components/MenuButton/MenuButton";
import StoreCard from "../../components/StoreCard/StoreCard";
<<<<<<< HEAD
=======
import { storeDummy } from "../../dummy/dummy";
>>>>>>> develop
import Header from "../../components/Header/Header";
import {
  Container,
  ListContainer,
  MenuNav,
  ContentsList,
} from "./MainPage.style";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import Footer from "../../components/Footer/Footer";
import ReviewModal from "../../components/ReviewModal/ReviewModal";
import DetailInfo from "../../components/DetailInfo/DetailInfo";
<<<<<<< HEAD
import axios from "axios";

interface MenuCategory {
  id: number;
  title: string;
  type: string;
=======

interface MenuCategory {
  title: string;
>>>>>>> develop
  path: string;
}

interface ReviewData {
<<<<<<< HEAD
  id: number;
  comment: string;
  date: string;
  rating: number;
  storeId: number;
  userName: string;
  imagePath: string;
}

interface StoreData {
  id: string;
  name: string;
  imagePath: string;
  address: string;
  type: string;
  subName: string;
  reviews: ReviewData[];
=======
  name: string;
  imagePath: string;
  content: string;
}

interface StoreData {
  name?: string;
  imagePath?: string;
  address?: string;
  type?: string;
  subType?: string;
  reviews?: ReviewData[];
>>>>>>> develop
}

function MainPage() {
  const [isSelectStore, setIsSelectStore] = useState(false);
<<<<<<< HEAD
  const [selectStore, setSelectStore] = useState<StoreData | undefined>(
    undefined
  );
  const [showModal, setShowModal] = useState(false);
  const [stores, setStores] = useState<StoreData[] | undefined>(undefined);

  const menus: MenuCategory[] = [
    { id: 1, title: "한식", type: "korean", path: "./koreanFood.png" },
    { id: 2, title: "양식", type: "western", path: "./pasta.png" },
    { id: 3, title: "일식", type: "japanese", path: "./sushi.png" },
    { id: 4, title: "중식", type: "chinese", path: "./noodle.png" },
    { id: 5, title: "분식", type: "snack", path: "./snack.png" },
  ];

  const handleMenuButtonClick = (type: string) => {
    axios
      .get(`http://localhost:5000/store/menuType?type=${type}`)
      .then((response) => {
        setStores(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleButtonClick = () => {
    setShowModal(true);

    const storeId = 2;
    const userName = "gigigigi";
    const comment = "그냥 한달에 한번정도 방문하기 좋은정도";
    axios
      .post("http://localhost:5000/review", {
        storeId,
        userName,
        comment,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
=======
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [store, setStore] = useState<StoreData>({});
  const [showModal, setShowModal] = useState(false);

  const menus: MenuCategory[] = [
    { title: "한식", path: "./koreanFood.png" },
    { title: "양식", path: "./pasta.png" },
    { title: "일식", path: "./sushi.png" },
    { title: "중식", path: "./noodle.png" },
    { title: "분식", path: "./snack.png" },
  ];

  const handleButtonClick = () => {
    setShowModal(true);
>>>>>>> develop
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowModal(false);
  };

<<<<<<< HEAD
  const getStore = (id: string) => {
    axios
      .get(`http://localhost:5000/store/info?storeId=${id}`, {})
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
=======
  const getReviews = (name: string) => {
    for (let i = 0; i < storeDummy.length; i++) {
      if (storeDummy[i].name === name) {
        setReviews(storeDummy[i].reviews);
        setStore(storeDummy[i]);
      }
    }
    setIsSelectStore(true);
>>>>>>> develop
  };

  return (
    <>
      <Header />
      <Container>
        {/* store List */}
        <ListContainer backgroundColor={"#F5F5F5"}>
          <MenuNav>
            {menus.map((menu) => {
<<<<<<< HEAD
              const { id, type, title, path } = menu;
              return (
                <MenuButton
                  key={id}
                  title={title}
                  type={type}
                  path={path}
                  handleMenuButtonClick={handleMenuButtonClick}
                ></MenuButton>
              );
            })}
          </MenuNav>
          <ContentsList>
            {stores ? (
              stores.map((store) => {
                const { id, name, address, imagePath, subName, type } = store;
                return (
                  <StoreCard
                    key={id}
                    id={id}
                    name={name}
                    imagePath={imagePath}
                    address={address}
                    subName={subName}
                    type={type}
                    handleSelectStore={handleSelectStore}
                  />
                );
              })
            ) : (
              <></>
            )}
=======
              const { title, path } = menu;
              return <MenuButton title={title} path={path}></MenuButton>;
            })}
          </MenuNav>
          <ContentsList>
            {storeDummy.map((store) => {
              const { name, address, imagePath, subType } = store;
              return (
                <StoreCard
                  name={name}
                  imagePath={imagePath}
                  address={address}
                  subType={subType}
                  getReviews={getReviews}
                />
              );
            })}
>>>>>>> develop
          </ContentsList>
        </ListContainer>
        {/* review List */}
        <ListContainer backgroundColor={"#eeeeee"}>
<<<<<<< HEAD
          {isSelectStore && selectStore ? (
            <>
              <DetailInfo
                name={selectStore.name}
                address={selectStore.address}
                handleButtonClick={handleButtonClick}
              />
              <ContentsList>
                {selectStore.reviews.map((review) => {
                  const { userName, imagePath, comment } = review;
                  return (
                    <ReviewCard
                      name={userName}
                      imagePath={imagePath}
                      content={comment}
=======
          {isSelectStore ? (
            <>
              <DetailInfo
                name={store.name}
                address={store.address}
                handleButtonClick={handleButtonClick}
              />
              <ContentsList>
                {reviews.map((review) => {
                  const { name, imagePath, content } = review;
                  return (
                    <ReviewCard
                      name={name}
                      imagePath={imagePath}
                      content={content}
>>>>>>> develop
                    />
                  );
                })}
              </ContentsList>
            </>
          ) : (
            <div style={{ fontSize: "20px" }}>{"매장을 선택 해 주세요"}</div>
          )}
        </ListContainer>
      </Container>
      <Footer />
      {showModal && <ReviewModal handleCloseModal={handleCloseModal} />}
    </>
  );
}

export default MainPage;
