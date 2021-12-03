import { useSelector } from "react-redux";
import ButtonFilter from "../../components/layout/button/buttonFitler";
import CompleteGame from "../../components/layout/game/CompleteGame";
import Header from "../../components/layout/header/Header";
import { Center, Content, Filters } from "./styled";

const RecentGame: React.FC<{}> = (props) => {
  const cartSave = useSelector((state: any) => state.save.itemsSave);
  console.log(cartSave);
  return (
    <>
      <Header />
      <Content>
        <Center>
          <div>
            <h3>Recent Games</h3>
            <Filters>
              <span>Filters</span>
              {/* <ButtonFilter/> */}
              <button>Mega-sena</button>
              <button>Lotomania</button>
            </Filters>
          </div>
          <div className="gamesRecents">
            {cartSave.map((item: any) => (
              <CompleteGame
                key={item.itemID}
                item={{
                  id: item.itemID,
                  type: item.itemType,
                  data: item.itemDate,
                  price: item.itemPrice,
                  game: item.itemGame,
                  color: item.itemColor,
                  quantity: item.quantity,
                }}
              />
            ))}
          </div>
        </Center>

        <button> {"New bet ->"} </button>
      </Content>
    </>
  );
};

export default RecentGame;
