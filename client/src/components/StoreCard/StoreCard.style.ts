import styled from "styled-components";
import { CenterContainer } from "../../styles/commonStyles";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 5px;
  background: #ffffff;
  margin: 10px 0;
  border: 1px solid #e9e9e9;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
`;

export const StoreImg = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 200px;
`;

export const StoreInfoContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StoreName = styled.span`
  font-size: 16px;
  margin-right: 5px;
  @media screen and (max-width: 37.5rem) {
    font-size: 16px;
  }
`;
export const StoreSubName = styled.span`
  color: #929292;
  font-size: 13px;
  @media screen and (max-width: 37.5rem) {
    font-size: 12px;
  }
`;

export const Address = styled.div`
  font-size: 13px;
  color: #2e2e2e;
`;

export const Phone = styled.span`
  font-size: 12px;
  color: #929292;
  margin: 8px 0;
  @media screen and (max-width: 37.5rem) {
    font-size: 11px;
  }
`;

export const NavigateReviewButton = styled(CenterContainer)`
  width: 50px;
  height: 100%;
  color: #4e4e4e;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 0, 0, 0.04);
  }
`;
