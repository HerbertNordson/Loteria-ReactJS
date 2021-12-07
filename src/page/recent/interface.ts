export interface IGameItem {
  ID: number;
  Type: string;
  Data: string;
  Price: number;
  Game: number[];
  Color: string;
  quantity: number;
}
export interface ISaveItem {
  save: {
    itemsSave: [];
  };
}
