import styled from "styled-components";
import { CenterContainer } from "../../styles/commonStyles";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  border-radius: 3px;
  background: #ffffff;
  margin: 10px 0;
  border: 1px solid #e9e9e9;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
`;

export const ReviewCardTop = styled(CenterContainer)`
  width: 100%;
  border-bottom: 2px dashed #e2e2e2;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-bottom: 4px;
  height: 24px;
  /* box-sizing: border-box; */
`;

export const ReviewCardBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-size: 12px;
  margin-top: 8px;
  color: #2e2e2e;
  /* border-top: 2px dashed #e2e2e2; */
  /* padding-top: 4px; */
`;

export const ProfileImage = styled.img`
  width: 20px;
  margin-right: 5px;
`;
