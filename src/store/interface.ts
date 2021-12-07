export interface ICartItems {
  data: string;
  game: number[];
  type: string;
  price: number;
  color: string;
  itemID: number;
}
export interface ICart {
  items: object[];
  count: number;
  totalQuantity: number;
}

export interface ISave {
  itemsSave: object[];
}

export interface IBetSlice {
  itemCart: boolean;
}

export interface INumber {
  numberArr: number[];
}
