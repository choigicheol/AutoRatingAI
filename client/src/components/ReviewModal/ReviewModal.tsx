import React from "react";
import {
  Container,
  ReviewForm,
  ButtonArea,
  ContentArea,
  Textarea,
  Button,
} from "./ReviewModal.style";

interface Props {
  handleCloseModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function ReviewModal({ handleCloseModal }: Props) {
  return (
    <Container>
      <ReviewForm>
        <ContentArea>
          <Textarea rows="6" cols="50" />
        </ContentArea>
        <ButtonArea>
          <Button
            background={"tomato"}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleCloseModal(e)
            }
          >
            {"취소"}
          </Button>
          <Button>{"등록"}</Button>
        </ButtonArea>
      </ReviewForm>
    </Container>
  );
}

export default ReviewModal;
