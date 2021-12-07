import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import GameBet from "../page/gameBet/GameBet";
import Home from "../page/home/Home";
import RecentGame from "../page/recent/RecentGame";

import { IAuth, IProps } from "./interface";

const Rota: React.FC<IProps> = (props) => {
  const auth = useSelector((state: IAuth) => state.auth.isAuthenticated);

  return (
    <Routes>
      {!auth && <Route path="/" element={<Home />} />}
      {auth && (
        <>
          <Route path="/home" element={<RecentGame />} />
          <Route path="/game" element={<GameBet data={props.data} />} />
        </>
      )}
    </Routes>
  );
};

export default Rota;
