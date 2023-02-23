
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Results from "./pages/Results";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search-results/:searchValue" element={<Results />} />
      <Route path="/movie/:movieId" element={<Movie />} />
    </Routes>
  );
};

export default App;
