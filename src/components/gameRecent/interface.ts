export interface ITotal {
  cart: {
    totalQuantity: number;
  };
}
export interface IPropsGame {
  item: {
    color: string;
    type: string;
    data: string;
    game: number[];
    id: number;
    price: number;
    quantity: number;
  };
  name: string;
}
