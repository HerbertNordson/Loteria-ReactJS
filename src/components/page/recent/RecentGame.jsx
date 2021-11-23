import ButtonFilter from "../../layout/button/buttonFitler";
import CompleteGame from "../../layout/game/CompleteGame";
import Header from "../../layout/header/Header";
import { Center, Content, Filters } from "./styled";

const RecentGame = (props) => {
  return (
    <>
      <Header />
      <Content>
        <Center>
          <div>
            <h3>Recent Games</h3>
            <Filters>
              <span>Filters</span>
              <ButtonFilter name={"Lotofacil"} />
              <button>Mega-sena</button>
              <button>Lotomania</button>
            </Filters>
          </div>
          <div className="gamesRecents">
            <CompleteGame />
            <CompleteGame />
            <CompleteGame />
            <CompleteGame />
          </div>
        </Center>

        <button> {"New bet ->"} </button>
      </Content>
    </>
  );
};

export default RecentGame;
