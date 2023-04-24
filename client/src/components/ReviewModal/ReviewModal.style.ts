import styled from "styled-components";
import { CenterContainer } from "../../styles/commonStyles";

interface ButtonProps {
  background?: string;
  color?: string;
}

export const Container = styled(CenterContainer)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 400px;
  background: #ffffff;
  border-radius: 10px;
  padding: 10px;
  border: 4px solid #000000;
  margin: 20px;
`;

export const ButtonArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ContentArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 5px;
  resize: none;
  border: 2px solid #eeeeee;
  border-radius: 8px;
  font-size: 16px;
  font-family: BMJUA;
  margin-bottom: 10px;
  line-height: 1.3;
`;

export const Button = styled.button<ButtonProps>`
  width: 50px;
  height: 28px;
  cursor: pointer;
  margin-left: 8px;
  border-radius: 4px;
  border: none;
  font-family: BMJUA;
  background: ${(props) => props.background || "#000000"};
  color: #ffffff;
  font-size: 14px;
`;

export const WriterInfo = styled(CenterContainer)`
  font-size: 16px;
  margin-right: 5px;
  background: rgba(255, 99, 71, 0.8);
  padding: 3px;
  box-sizing: border-box;
  border-radius: 3px;
  height: 30px;
  color: #ffffff;
`;

export const WriterInput = styled.input`
  font-size: 16px;
  font-family: BMJUA;
  padding-left: 5px;
  width: 100%;
  height: 30px;
  border-radius: 3px;
  border: 2px solid #eeeeee;
  box-sizing: border-box;
`;

export const ErrorMessage = styled(CenterContainer)`
  width: 100%;
  color: red;
  font-size: 12px;
`;
