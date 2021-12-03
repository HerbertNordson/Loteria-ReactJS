import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import GameBet from "../page/gameBet/GameBet";
import Home from "../page/home/Home";
import RecentGame from "../page/recent/RecentGame";

export default function Rota() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<RecentGame />} />
      <Route path="/bet" component={<GameBet />} />
    </Routes>
  );
}
