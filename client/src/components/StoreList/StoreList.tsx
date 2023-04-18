import React from "react";
import { ContentsContainer } from "./StoreList.style";
import StoreCard from "../StoreCard/StoreCard";
import { ListContainer } from "../../styles/commonStyles";
import { StoreData } from "../../interface/interface";

interface Props {
  stores: StoreData[] | undefined;
  handleSelectStore: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function StoreList({ stores, handleSelectStore }: Props) {
  return (
    <ListContainer>
      {stores ? (
        stores.map((store) => {
          const { id, name, address, imagePath, subName, type } = store;
          return (
            <StoreCard
              key={id}
              id={id}
              name={name}
              imagePath={imagePath}
              address={address}
              subName={subName}
              type={type}
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
