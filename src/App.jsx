import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import MediaContextProvider from "./context/MediaContext";
import Footer from "./components/Footer";
import MediaTrending from "./pages/MediaTrending";
import FullMoviesType from "./pages/FullMoviesType";
import FullTVShowsType from "./pages/FullTVShowsType";
import MoviesByGenres from "./pages/MoviesByGenres";
import TVShowsByGenres from "./pages/TVShowsByGenres";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MediaContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-shows" element={<TVShows />} />
            <Route
              path="/movie/:genresType/:genresId/:page"
              element={<MoviesByGenres />}
            />
            <Route
              path="/tv/:genresType/:genresId/:page"
              element={<TVShowsByGenres />}
            />
            <Route path="/trending/:media/:page" element={<MediaTrending />} />
            <Route path="/movie/:type/:page" element={<FullMoviesType />} />
            <Route path="/tv/:type/:page" element={<FullTVShowsType />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </MediaContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
