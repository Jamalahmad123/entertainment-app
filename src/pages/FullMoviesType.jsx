import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import MovieGridContainerItem from "../components/MovieGridContainerItem";
import Pagination from "../components/Pagination";
import SearchMovie from "../components/SearchMovie";
import Spinner from "../components/Spinner";
import { fetchMovieData } from "../utils/FetchData";

const FullMoviesType = () => {
  // url params
  const { type, page } = useParams();

  const pageNum = +page;

  const { isLoading, error, data, isPreviousData, isFetching } = useQuery(
    [`full-movies-${type}`, type, pageNum],
    () => fetchMovieData(type, pageNum),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <Spinner styles="min-h-[100dvh] min-h-[100vh]" />;
  }

  if (error) {
    return <div>Something went wrong! Please refresh the page</div>;
  }

  if (isFetching) {
    return <Spinner styles="min-h-[100dvh] min-h-[100vh]" />;
  }

  return (
    <Container className="space-y-12">
      <SearchMovie />
      <section className="space-y-4 overflow-hidden">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-white text-xl sm:text-2xl font-light capitalize">
              {type.replace("_", " ")}
            </h2>
            <div className="text-white border-2 border-white rounded-md px-1 uppercase text-sm">
              movie
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {data.results.map((media) => (
            <MovieGridContainerItem key={media.id} media={media} />
          ))}
        </div>
      </section>
      <Pagination
        page={pageNum}
        totalPages={data?.total_pages}
        urlPath={`movie/${type}`}
      />
    </Container>
  );
};

export default FullMoviesType;
