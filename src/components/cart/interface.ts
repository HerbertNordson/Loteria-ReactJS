export interface IPropsItem {
  itemColor: string;
  itemType: string;
  itemData: string;
  itemGame: number[];
  itemID: number;
  itemPrice: number;
  quantity: number;
}
export interface IPropsBet {
  gameBet: {
    itemCart: [];
  };
}
