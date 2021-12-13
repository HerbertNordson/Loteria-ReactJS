import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { GameRecent, Button, Header } from "@components";

import { IGameItem, ISaveItem } from "./interface";
import { IProps } from "../../services/interface";
import { Center, Content, Filters } from "./styles";
import { useEffect, useState } from "react";

const RecentGame: React.FC<IProps> = (props) => {
  const cartSave = useSelector((state: ISaveItem) => state.save.itemsSave);
  const [filter, setFilter] = useState<any[]>(cartSave);
  const [type, setType] = useState<string | null>();

  useEffect(() => {
    if (type === "") {
      let newArr = cartSave.filter((item: IGameItem) => item.Type);
      setFilter(newArr);
      return;
    }
  }, [type]);

  function onFilterItems(props: string | null) {
    let newArr: any[] = [];

    if (type === props) {
      newArr = filter.filter((item: IGameItem) => item.Type !== type);
      setType("");
      setFilter(newArr);
      return;
    }
    if (type !== props) {
      newArr = cartSave.filter((item: IGameItem) => item.Type === props);
      setType(props);
      setFilter(newArr);
      return;
    }
    setType(props);
    setFilter(newArr);
  }

  function onAllGame() {
    let newArr = cartSave.filter((item: IGameItem) => item.Type);
    setType("");
    setFilter(newArr);
  }

  return (
    <>
      <Header />
      <Content>
        <Center>
          <div>
            <h3 onClick={onAllGame}>Recent Games</h3>
            <Filters>
              <span>Filters</span>
              <Button data={props.data} onContent={onFilterItems} name={type} />
            </Filters>
          </div>
          <div className="gamesRecents">
            {filter?.length === 0 && (
              <p>Você não fez nenhum jogo recentemente!</p>
            )}
            {filter?.map((item: IGameItem) => (
              <GameRecent
                key={item.ID}
                item={{
                  id: item.ID,
                  type: item.Type,
                  data: item.Data,
                  price: item.Price,
                  game: item.Game,
                  color: item.Color,
                  quantity: item.quantity,
                }}
                name={"Recent"}
              />
            ))}
          </div>
        </Center>

        <Link to="/game"> {"New bet ->"} </Link>
      </Content>
    </>
  );
};

export default RecentGame;
