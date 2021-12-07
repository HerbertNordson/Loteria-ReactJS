export interface IProps {
  data: [
    {
      color?: string;
      type?: string;
      description?: string;
      ["max-number"]?: number;
      price?: number;
      range?: number;
    }
  ];
}

export interface IAuth {
  auth: {
    isAuthenticated: boolean;
  };
}
