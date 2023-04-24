import React from "react";
import { ContentsContainer } from "./StoreList.style";
import StoreCard from "../StoreCard/StoreCard";
import { ListContainer } from "../../styles/commonStyles";
import { StoreData } from "../../interface/interface";

interface Props {
  stores: StoreData[] | undefined;
  handleSelectStore: (store: StoreData) => void;
}

function StoreList({ stores, handleSelectStore }: Props) {
  return (
    <ListContainer>
      {stores ? (
        stores.map((store) => {
          return (
            <StoreCard
              key={store.uuid}
              store={store}
              handleSelectStore={handleSelectStore}
            />
          );
        })
      ) : (
        <></>
      )}
    </ListContainer>
  );
}

export default StoreList;
