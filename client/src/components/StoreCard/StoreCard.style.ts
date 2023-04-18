import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 260px;
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
  height: 40px;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 0, 0, 0.04);
  }
`;