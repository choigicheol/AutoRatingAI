export interface ReviewData {
  id: number;
  comment: string;
  date: string;
  rating: number;
  storeId: number;
  userName: string;
  imagePath: string;
}

export interface StoreData {
  uuid: string;
  name: string;
  imagePath?: string;
  address: string;
  type: string;
  subName: string;
  x: string;
  y: string;
  phone: string;
  reviews: ReviewData[];
}

export interface PageProps {
  getSelectStore: (store: StoreData) => void;
}

export interface MapData {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}
