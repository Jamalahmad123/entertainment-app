import LazyImage from "./LazyImage";

const MovieGridContainerItem = ({ media }) => {
  return (
    <div className="space-y-2">
      <div>
        {/* <img
          src={`https://image.tmdb.org/t/p/original/${
            media.backdrop_path ? media.backdrop_path : media.poster_path
          }`}
          alt={media.original_title}
          className="rounded-lg w-full"
        /> */}
        <LazyImage
          image={{
            src: `https://image.tmdb.org/t/p/original/${
              media.backdrop_path ? media.backdrop_path : media.poster_path
            }`,
            alt: media.original_title,
            style:
              "rounded-lg aspect-auto w-full max-h-full md:max-h-[250px] object-cover",
          }}
        />
      </div>
      <div className="flex items-center text-gray-400 text-[11px] sm:text-sm font-light">
        <span>{new Date(media.release_date).getFullYear()}</span>
        <div className="flex items-center px-2 before:content-['•']"></div>
        <span>movie</span>
      </div>
      <h3 className="text-base lg:text-lg font-bold text-white text-ellipsis w-full truncate sm:w-[230px] lg:w-[268px]">
        {media.original_title}
      </h3>
    </div>
  );
};

export default MovieGridContainerItem;
