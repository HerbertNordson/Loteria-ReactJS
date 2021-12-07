import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { GameBet, Home, RecentGame } from "../page/";

import { IAuth, IProps } from "./interface";

const Rota: React.FC<IProps> = (props) => {
  const auth = useSelector((state: IAuth) => state.auth.isAuthenticated);

  return (
    <Routes>
      {!auth && <Route path="/" element={<Home />} />}
      {auth && (
        <>
          <Route path="/home" element={<RecentGame data={props.data} />} />
          <Route path="/game" element={<GameBet data={props.data} />} />
        </>
      )}
    </Routes>
  );
};

export default Rota;
