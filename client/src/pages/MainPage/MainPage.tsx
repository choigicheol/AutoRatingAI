import React, { useState } from "react";
import MenuButton from "../../components/MenuButton/MenuButton";
import StoreCard from "../../components/StoreCard/StoreCard";
import { storeDummy } from "../../dummy/dummy";
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

interface MenuCategory {
  title: string;
  path: string;
}

interface ReviewData {
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
}

function MainPage() {
  const [isSelectStore, setIsSelectStore] = useState(false);
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
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowModal(false);
  };

  const getReviews = (name: string) => {
    for (let i = 0; i < storeDummy.length; i++) {
      if (storeDummy[i].name === name) {
        setReviews(storeDummy[i].reviews);
        setStore(storeDummy[i]);
      }
    }
    setIsSelectStore(true);
  };

  return (
    <>
      <Header />
      <Container>
        {/* store List */}
        <ListContainer backgroundColor={"#F5F5F5"}>
          <MenuNav>
            {menus.map((menu) => {
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
          </ContentsList>
        </ListContainer>
        {/* review List */}
        <ListContainer backgroundColor={"#eeeeee"}>
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
