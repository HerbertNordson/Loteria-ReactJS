import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { GameRecent, Button, Header } from "../../components";

import { IGameItem, ISaveItem } from "./interface";
import { IProps } from "../../services/interface";
import { Center, Content, Filters } from "./styles";

const RecentGame: React.FC<IProps> = (props) => {
  const cartSave = useSelector((state: ISaveItem) => state.save.itemsSave);

  function onFilterItems() {}

  return (
    <>
      <Header />
      <Content>
        <Center>
          <div>
            <h3>Recent Games</h3>
            <Filters>
              <span>Filters</span>
              <Button data={props.data} onContent={onFilterItems} />
            </Filters>
          </div>
          <div className="gamesRecents">
            {cartSave?.map((item: IGameItem) => (
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
