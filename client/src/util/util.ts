import { StoreData } from "../interface/interface";

export function convertMapDataToStoreData(el) {
  const subNameAndType = el.category_name.split(" ");
  const storeObj: StoreData = {
    uuid: el.id,
    name: el.place_name,
    address: el.address_name,
    imagePath: "",
    type: subNameAndType[2] || "",
    subName: subNameAndType[4] || "",
    x: el.x,
    y: el.y,
    phone: el.phone,
    reviews: [],
  };
  return storeObj;
}
