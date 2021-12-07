export interface IProps {
  name: string | null;
  onContent: (props: string | null) => void;
  data: [
    {
      color?: string;
      type?: string;
    }
  ];
}

export interface IItemMap {
  color?: string;
  type?: string;
}
