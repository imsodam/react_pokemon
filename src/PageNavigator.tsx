import { Route, Routes } from "react-router-dom";
import PokeCardList from "./List/PokeCardList.tsx";
import PokemonDetail from "./Detail/PokemonDetail.tsx";

const PageNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<PokeCardList />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
    </Routes>
  );
};

export default PageNavigator;
