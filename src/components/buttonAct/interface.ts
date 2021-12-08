export interface IPropsACT {
  onClean: () => void;
  onAdd: () => void;
  onRandom: (props: string) => void;
  game: number[];
  color: string;
  maxNumber: number;
  range: number;
  numberRef: any;
}
