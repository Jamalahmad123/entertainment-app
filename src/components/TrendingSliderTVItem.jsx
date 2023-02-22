const TrendingSliderTVItem = ({ data }) => {
  return (
    <div className="relative w-full cursor-pointer">
      <div className="relative w-full rounded-lg">
        <div
          className={`relatuve h-[140px] w-[240px] sm:h-[230px] sm:w-[470px] after:absolute after:inset-0 after:content-[""] after:bg-darkBlue after:opacity-50 after:w-full after:h-full`}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
            alt={data.name}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute left-4 bottom-4 w-fit text-ellipsis truncate">
        <div className="flex items-center text-white text-[11px] sm:text-sm font-light">
          <span>{new Date(data.first_air_date).getFullYear()}</span>
          <div className="flex items-center px-2 before:content-['•']"></div>
          <span className="uppercase">{data.media_type} Series</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-white text-ellipsis w-[200px] truncate sm:w-[420px]">
          {data.name}
        </h3>
      </div>
    </div>
  );
};

export default TrendingSliderTVItem;
