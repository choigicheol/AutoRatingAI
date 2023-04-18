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
  id: string;
  name: string;
  imagePath: string;
  address: string;
  type: string;
  subName: string;
  reviews: ReviewData[];
}
