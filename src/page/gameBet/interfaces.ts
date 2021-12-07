export interface IPropsData {
  data: [
    {
      color?: string;
      type?: string;
    }
  ];
}

export interface IPropsState {
  cart: {
    items: object[];
  };
}

export interface IGame {
  number: {
    numberArr: number[];
  };
}

export interface IContent {
  type: string;
  description: string;
  range: number;
  price: number;
  ["max-number"]: number;
  color: string;
}
