import { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { MediaContext } from "../context/MediaContext";
import { apiKey, fetchMovieData, fetchTrending } from "../utils/FetchData";
import Spinner from "./Spinner";
import TrendingSliderItem from "./TrendingSliderItem";
import TrendingSliderTVItem from "./TrendingSliderTVItem";

const TrendingSlider = ({ media, badge, linkType }) => {
  const { isLoading, error, data } = media;
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Something went wrong! Please refresh</div>;
  }

  const trendingMedia = data.results.slice(0, 10);

  // console.log(data.results);

  return (
    <section className="space-y-4 overflow-hidden">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-white text-xl sm:text-2xl font-light">
            Trending
          </h2>
          <div className="text-white border-2 border-white rounded-md px-1 uppercase text-sm">
            {badge}
          </div>
        </div>
        <Link
          to={`/trending/${linkType}/1`}
          className="text-lightBlue capitalize"
        >
          See More
        </Link>
      </header>
      <div className="flex items-center gap-x-4 relative overflow-x-scroll h-scroll pb-2">
        {trendingMedia.map((media) =>
          media.media_type === "movie" ? (
            <TrendingSliderItem data={media} key={media.id} />
          ) : (
            <TrendingSliderTVItem data={media} key={media.id} />
          )
        )}
      </div>
    </section>
  );
};

export default TrendingSlider;
