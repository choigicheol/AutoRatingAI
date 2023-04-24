import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 260px; */
  border-radius: 5px;
  /* overflow: hidden; */
  background: #ffffff;
  margin: 10px 0 10px 0;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.35);
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
  /* height: 40px; */
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 0, 0, 0.04);
  }
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
  margin-left: 5px;

  @media screen and (max-width: 37.5rem) {
    font-size: 11px;
  }
`;
