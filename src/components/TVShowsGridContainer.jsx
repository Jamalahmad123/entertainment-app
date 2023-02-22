import { Link } from "react-router-dom";
import GridContainerTVItem from "./GridContainerTVItem";
import Spinner from "./Spinner";

const TVShowsGridContainer = ({ media, heading, urlType }) => {
  const { isLoading, error, data } = media;
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Something went wrong! please refresh</div>;
  }

  const movies = data.results.slice(0, 7);

  return (
    <section className="space-y-4 overflow-hidden">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-white text-xl sm:text-2xl font-light capitalize">
            {heading}
          </h2>
          <div className="text-VeryDarkBlue border-2 border-white rounded-md px-1 uppercase text-sm bg-white">
            tv Series
          </div>
        </div>
        <Link to={`/tv/${urlType}/1`} className="text-lightBlue capitalize">
          See More
        </Link>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        {movies.map((media) => (
          <GridContainerTVItem key={media.id} media={media} />
        ))}
      </div>
    </section>
  );
};

export default TVShowsGridContainer;
