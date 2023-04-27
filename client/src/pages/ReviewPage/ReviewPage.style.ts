import styled from "styled-components";
import { StoreListContainer } from "../MainPage/MainPage.style";

export const ReviewListContainer = styled(StoreListContainer)`
  display: flex;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 37.5rem) {
  }
`;

export const BackButton = styled.div`
  width: 100%;

  div {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    padding-top: 10px;
    cursor: pointer;
    img {
      width: 30px;
      margin-right: 5px;
    }
  }

  @media screen and (max-width: 37.5rem) {
    div {
      font-size: 12px;
      img {
        width: 22px;
      }
    }
  }
`;

const BackButtonImg = styled.img``;
