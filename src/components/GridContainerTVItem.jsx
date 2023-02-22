import LazyImage from "./LazyImage";

const GridContainerTVItem = ({ media }) => {
  return (
    media.backdrop_path && (
      <div className="space-y-2">
        <div>
          {/* <img
            src={`https://image.tmdb.org/t/p/original/${media.backdrop_path}`}
            alt={media.name}
            className="rounded-lg"
          /> */}
          <LazyImage
            image={{
              src: `https://image.tmdb.org/t/p/original/${media.backdrop_path}`,
              alt: media.name,
              style:
                "rounded-lg aspect-auto w-full max-h-full md:max-h-[250px] object-cover",
            }}
          />
        </div>
        <div className="flex items-center text-gray-400 text-[11px] sm:text-sm font-light">
          <span>{new Date(media.first_air_date).getFullYear()}</span>
          <div className="flex items-center px-2 before:content-['•']"></div>
          <span className="uppercase">TV Series</span>
        </div>
        <h3 className="text-base lg:text-lg font-bold text-white text-ellipsis w-full truncate sm:w-[230px] lg:w-[268px]">
          {media.name}
        </h3>
      </div>
    )
  );
};

export default GridContainerTVItem;
