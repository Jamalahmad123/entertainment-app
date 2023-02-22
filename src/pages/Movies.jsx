import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import SearchMovie from "../components/SearchMovie";
import { MediaContext } from "../context/MediaContext";

const Movies = () => {
  const { moviesList } = useContext(MediaContext);

  if (moviesList.isLoading) {
    return <div>Loading...</div>;
  }

  if (moviesList.error) {
    return <div>Error Accured</div>;
  }
  return (
    <Container className="space-y-12">
      <SearchMovie />
      <section className="flex flex-wrap justify-between">
        {moviesList.data.genres.map((item) => (
          <Link
            to={`/movie/${item.name}/${item.id}/1`}
            key={item.id}
            className="p-8 m-2 flex grow h-44 w-44 items-center justify-center rounded-lg text-center text-xl text-white font-semibold even:bg-darkBlue odd:bg-cyan-600 card-animation"
          >
            {item.name}
          </Link>
        ))}
      </section>
    </Container>
  );
};

export default Movies;
