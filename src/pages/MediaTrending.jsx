import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import GridContainerTVItem from "../components/GridContainerTVItem";
import MovieGridContainerItem from "../components/MovieGridContainerItem";
import Pagination from "../components/Pagination";
import SearchMovie from "../components/SearchMovie";
import Spinner from "../components/Spinner";
import { apiKey, fetchTrending } from "../utils/FetchData";

const MediaTrending = () => {
  const { media, page } = useParams();

  const pageNum = +page;

  const { isLoading, error, data, isFetching, isPreviousData } = useQuery(
    [`trending-movies-full`, media, pageNum],
    () => fetchTrending(media, pageNum),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <Spinner styles="min-h-[100dvh] min-h-[100vh]" />;
  }

  if (error) {
    <div>Something went wrong! please refresh</div>;
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
              Trending
            </h2>
            <div className="text-white border-2 border-white rounded-md px-1 uppercase text-sm">
              {media}
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {data.results.map((media) =>
            media.media_type === "movie" ? (
              <MovieGridContainerItem key={media.id} media={media} />
            ) : (
              <GridContainerTVItem media={media} key={media.id} />
            )
          )}
        </div>
      </section>
      <Pagination
        page={pageNum}
        totalPages={data?.total_pages}
        urlPath={`trending/${media}`}
      />
    </Container>
  );
};

export default MediaTrending;
