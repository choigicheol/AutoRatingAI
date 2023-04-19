import styled, { keyframes } from "styled-components";
import { CenterContainer, ColumnContainer } from "../../styles/commonStyles";

interface Props {
  isShowReview: boolean;
}
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 88vh;
  @media screen and (max-width: 37.5rem) {
  }
`;

export const StoreListContainer = styled(ColumnContainer)<Props>`
  display: flex;
  height: 100%;
  width: 400px;
  background: #f5f5f5;

  @media screen and (max-width: 37.5rem) {
    display: ${(props: Props) => (props.isShowReview ? "none" : "auto")};
    animation: ${fadeIn} 0.4s ease-in-out;
  }
`;

export const ReviewListContainer = styled(StoreListContainer)<Props>`
  display: flex;
  height: 100%;
  width: 400px;
  background: #eeeeee;

  @media screen and (max-width: 37.5rem) {
    display: ${(props: Props) => (props.isShowReview ? "auto" : "none")};
    animation: ${fadeIn} 0.4s ease-in-out;
  }
`;

export const BackButton = styled.div`
  width: 100%;
  display: none;
  @media screen and (max-width: 37.5rem) {
    display: block;
  }
  div {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    padding-top: 10px;
    cursor: pointer;
  }
`;
