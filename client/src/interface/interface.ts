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
