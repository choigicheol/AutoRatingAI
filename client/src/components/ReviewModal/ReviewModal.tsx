import React, { useState } from "react";
import {
  Container,
  ReviewForm,
  ButtonArea,
  ContentArea,
  Textarea,
  Button,
  WriterInput,
  WriterInfo,
  ErrorMessage,
} from "./ReviewModal.style";

interface Props {
  isError: boolean;
  handleCloseModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSendReview: (
    e: React.MouseEvent<HTMLButtonElement>,
    text: string,
    writer: string
  ) => void;
}

function ReviewModal({ isError, handleCloseModal, handleSendReview }: Props) {
  const [textValue, setTextValue] = useState<string>("");
  const [writer, setWriter] = useState<string>("");

  const handleTextChange = (text: string) => {
    setTextValue(text);
  };

  const handleInputChange = (name: string) => {
    setWriter(name);
  };

  return (
    <Container>
      <ReviewForm>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <WriterInfo>{"NAME"}</WriterInfo>
          <WriterInput
            value={writer}
            maxLength={14}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange(e.target.value)
            }
          />
        </div>
        <ContentArea
          value={textValue}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleTextChange(e.target.value)
          }
        >
          <Textarea rows="8" cols="50" />
        </ContentArea>
        <ButtonArea>
          <ErrorMessage>
            {isError ? "좀 더 자세히 적어주세요" : ""}
          </ErrorMessage>
          <div style={{ display: "flex" }}>
            <Button
              background={"tomato"}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                handleCloseModal(e)
              }
            >
              {"취소"}
            </Button>
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                handleSendReview(e, textValue, writer)
              }
            >
              {"등록"}
            </Button>
          </div>
        </ButtonArea>
      </ReviewForm>
    </Container>
  );
}

export default ReviewModal;
