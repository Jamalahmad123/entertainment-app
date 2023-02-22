import { createContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  fetchTrending,
  fetchMovieData,
  fetchTvData,
  fetchMediaList,
} from "../utils/FetchData";

export const MediaContext = createContext();

const MediaContextProvider = ({ children }) => {
  // Trending Movies and TV Shows
  const trendingMovies = useQuery(["trending-movies", "movie"], () =>
    fetchTrending("movie")
  );
  const trendingTVShows = useQuery(["trending-tv", "tv"], () =>
    fetchTrending("tv")
  );

  // Popular Media, Now playing and top rated movies
  const popularMovies = useQuery(["popular-movies", "popular"], () =>
    fetchMovieData("popular")
  );

  const nowPlayingMovies = useQuery(["nowPlaying-movies", "now_playing"], () =>
    fetchMovieData("now_playing")
  );

  const upComingMovies = useQuery(["upcoming-movies", "upcoming"], () =>
    fetchMovieData("upcoming")
  );

  const topRatedMovies = useQuery(["top-rated-movie", "top_rated"], () =>
    fetchMovieData("top_rated")
  );

  // Popular Media, Now playing and top rated TV Shows
  const popularTVShows = useQuery(["popular-TVShows", "popular"], () =>
    fetchTvData("popular")
  );

  const airingTodayTV = useQuery(["airing-today", "airing_today"], () =>
    fetchTvData("airing_today")
  );

  const onAirTV = useQuery(["on_air", "on_the_air"], () =>
    fetchTvData("on_the_air")
  );

  const topRatedTV = useQuery(["topRatedTVShow", "top_rated"], () =>
    fetchTvData("top_rated")
  );

  const moviesList = useQuery(["movies-list", "movie"], () =>
    fetchMediaList("movie")
  );

  const TVShowsList = useQuery(["TV-shows-list", "tv"], () =>
    fetchMediaList("tv")
  );

  return (
    <MediaContext.Provider
      value={{
        trendingMovies,
        trendingTVShows,
        popularMovies,
        nowPlayingMovies,
        upComingMovies,
        topRatedMovies,
        popularTVShows,
        airingTodayTV,
        onAirTV,
        topRatedTV,
        moviesList,
        TVShowsList,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export default MediaContextProvider;
