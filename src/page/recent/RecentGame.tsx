import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/button/";
import { GameRecent } from "../../components";
import Header from "../../components/header/";
import { Center, Content, Filters } from "./styles";
import { IGameItem, ISaveItem } from "./interface";

const RecentGame: React.FC<{}> = (props) => {
  const cartSave = useSelector((state: ISaveItem) => state.save.itemsSave);

  return (
    <>
      <Header />
      <Content>
        <Center>
          <div>
            <h3>Recent Games</h3>
            <Filters>
              <span>Filters</span>
              {/* <Button /> */}
              <button>Mega-sena</button>
              <button>Lotomania</button>
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
