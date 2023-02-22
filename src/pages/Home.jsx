import React, { useContext } from "react";
import { MediaContext } from "../context/MediaContext";

// Components
import Container from "../components/Container";
import SearchMovie from "../components/SearchMovie";
import TrendingSlider from "../components/TrendingSlider";
import MoviesGridContainer from "../components/MoviesGridContainer";
import TVShowsGridContainer from "../components/TVShowsGridContainer";
import { useQuery } from "react-query";
import { apiKey } from "../utils/FetchData";

const Home = () => {
  const {
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
  } = useContext(MediaContext);

  return (
    <Container className="space-y-12">
      <SearchMovie />
      {/* Trending Movies */}
      <TrendingSlider media={trendingMovies} badge="movie" linkType="movie" />
      {/* Movies */}
      <MoviesGridContainer
        media={popularMovies}
        heading="popular"
        urlType="popular"
      />
      <MoviesGridContainer
        media={nowPlayingMovies}
        heading="Now Playing"
        urlType="now_playing"
      />
      <MoviesGridContainer
        media={upComingMovies}
        heading="Upcoming"
        urlType="upcoming"
      />
      <MoviesGridContainer
        media={topRatedMovies}
        heading="Top Rated"
        urlType="top_rated"
      />
      {/* Trending TV Series */}
      <TrendingSlider media={trendingTVShows} badge="tv Series" linkType="tv" />
      {/* TV Shows */}
      <TVShowsGridContainer
        media={popularTVShows}
        heading="Popular"
        urlType="popular"
      />
      <TVShowsGridContainer
        media={airingTodayTV}
        heading="Airing Today"
        urlType="airing_today"
      />
      <TVShowsGridContainer
        media={onAirTV}
        heading="On Air"
        urlType="on_the_air"
      />
      <TVShowsGridContainer
        media={topRatedTV}
        heading="Top Rated"
        urlType="top_rated"
      />
    </Container>
  );
};

export default Home;
